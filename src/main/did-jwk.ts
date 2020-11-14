//import { JWK } from "jose";
import { JWK } from "node-jose";
import { DIDDocument, PublicKey } from "did-resolver";
import { JwkPublicKey, KEY_ID_FORMAT, X5CVerificationResult } from "./model";
import { Certs } from "./certs";
import { DidJwkVerificationException } from "./exceptions";

import { pki } from "node-forge";

import zlib from "zlib";
import util from "util";
import base64url from "base64url";

export const JWK_DID_REGEX = new RegExp("^did:jwk:([-A-Za-z0-9+=]+)$");
const DID_FORMAT = "did:jwk:%s";

/*
 * TODO: Verify
 * TODO: Use const
 */
export class DidJwk {
  private didUri: string;
  //private jwk: JWK.RSAKey | JWK.ECKey | JWK.OKPKey | JWK.OctKey;
  private jwk: JWK.Key;

  constructor(jwk: JWK.Key, didUri?: string) {
    JWK.createKey;
    this.jwk = jwk;
    this.didUri = didUri || null;
  }

  public getDidUri(): string {
    if (this.didUri != null) return this.didUri;

    const publicKey: string = DidJwk.jwkToPublicBase64(this.jwk);

    return util.format(DID_FORMAT, publicKey);
  }

  public async getDidDocument(): Promise<DIDDocument> {
    const verificationResult: object = await this.verify();
    const publicJwk: object = this.jwk.toJSON(false);

    if ("x5c" in this.jwk) publicJwk["x5c"] = this.jwk["x5c"];

    const didUri: string = this.getDidUri();

    const publicKey: JwkPublicKey = new JwkPublicKey(
      util.format(KEY_ID_FORMAT, didUri),
      publicJwk,
      this.jwk.toPEM(false),
      didUri
    );

    if (verificationResult["hasDomainName"])
      publicKey.domainName = verificationResult["domainName"];

    const publicKeys: PublicKey[] = [publicKey];

    return {
      "@context": "https://w3id.org/did/v1",
      id: this.getDidUri(),
      publicKey: publicKeys,
    };
  }

  public getJwk(): JWK.Key {
    return this.jwk;
  }

  // Verifies
  public async verify(): Promise<object> {
    // Calculate the expected jwk thumbprint
    const jwkThumprint: string = Buffer.from(
      await this.jwk.thumbprint()
    ).toString("base64");

    if (!("x5c" in this.jwk)) return { hasDomainName: false };

    // Verify the certificate chain
    const verificationResult: X5CVerificationResult = Certs.verifyX5c(
      this.jwk["x5c"]
    );

    // Get the publicKey
    const certPem: string = pki.certificateToPem(
      verificationResult.certificate
    );

    const keyStore: JWK.KeyStore = JWK.createKeyStore();

    const certJwk: JWK.Key = await keyStore.add(certPem, "pem");

    // Calculate the certificate's key thumbprint
    const certJwkThumbPrint: string = Buffer.from(
      await certJwk.thumbprint()
    ).toString("base64");

    // Compare the thumbprints
    if (jwkThumprint != certJwkThumbPrint)
      throw new DidJwkVerificationException("JWK does not match the key in the certificate!");

    return { hasDomainName: true, domainName: verificationResult.domainName };
  }

  public static async fromX5c(x5c: Array<string>): Promise<DidJwk> {
    // Verify x5c
    Certs.verifyX5c(x5c);

    // Get the first public key
    const certPem: string = `-----BEGIN CERTIFICATE-----\n
    ${x5c[0]}
    \n-----END CERTIFICATE-----`;

    const keyStore: JWK.KeyStore = JWK.createKeyStore();

    const jwk: JWK.Key = await keyStore.add(certPem, "pem");

    // Set the x5c
    jwk["x5c"] = x5c;

    return new DidJwk(jwk);
  }

  public static async fromUri(didUri: string): Promise<DidJwk> {
    if (!JWK_DID_REGEX.test(didUri))
      throw new URIError("URI does not match the did:jwk pattern!");

    const groups: RegExpMatchArray = didUri.match(JWK_DID_REGEX);

    const base64Key: string = groups[1];
    const compressedPublicKey: string = Buffer.from(
      base64Key,
      "base64"
    ).toString();

    const jwkJson: object = DidJwk.decompressBase64ToJson(compressedPublicKey);
    const jwk: JWK.Key = await JWK.asKey(jwkJson);

    if ("x5c" in jwkJson) jwk["x5c"] = jwkJson["x5c"];

    return new DidJwk(jwk, didUri);
  }

  private static jwkToPublicBase64(jwk: JWK.Key): string {
    // 1) Get the public key
    let publicKey: object = jwk.toJSON(false);

    if ("x5c" in jwk) publicKey["x5c"] = jwk["x5c"];

    // 2) Compress
    const compressedPublicKey: string = DidJwk.compressJsonToBase64(publicKey);

    // 3) Encode
    return base64url(compressedPublicKey);
  }

  private static compressJsonToBase64(json: object): string {
    const jwkJson: string = JSON.stringify(json);

    const compressedJwkJson: Buffer = zlib.deflateSync(
      Buffer.from(jwkJson, "utf-8")
    );

    return compressedJwkJson.toString("base64");
  }

  private static decompressBase64ToJson(compressedBase64: string): object {
    return JSON.parse(
      zlib.inflateSync(Buffer.from(compressedBase64, "base64")).toString()
    );
  }
}
