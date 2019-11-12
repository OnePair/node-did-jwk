import { JWK } from "jose";
import { DIDDocument, PublicKey } from "did-resolver";
import { JwkPublicKey } from "./model";

import * as util from "util";

export const JWK_DID_REGEX = new RegExp("^did:jwk:([-A-Za-z0-9+=]{1,3000})$");
const DID_FORMAT = "did:jwk:%s";

export class DidJwk {
  private didUri: string;
  private jwk: JWK.Key;

  constructor(jwk: JWK.Key, didUri?: string) {
    this.jwk = jwk;
    this.didUri = didUri || null;
  }

  public getDidUri(): string {
    if (this.didUri != null)
      return this.didUri;

    let publicKey: string = DidJwk.jwkToPublicBase64(this.jwk);
    return util.format(DID_FORMAT, publicKey);
  }

  public getDidDocument(): DIDDocument {
    let didUri: string = this.getDidUri();
    let publicJwk: JWK.Key;

    if (this.jwk.private)
      publicJwk = DidJwk.fromUri(didUri).getJwk();
    else
      publicJwk = this.jwk;

    let publicKey: PublicKey = new JwkPublicKey(this.getDidUri(), publicJwk);
    let publicKeys: PublicKey[] = [publicKey];
    let keyId: string = this.getDidUri() + "#keys-1";

    return {
      "@context": "https://w3id.org/did/v1",
      id: this.getDidUri(),
      publicKey: publicKeys,
    }
  }

  public getJwk(): JWK.Key {
    return this.jwk;
  }

  public static fromUri(didUri: string): DidJwk {
    if (!JWK_DID_REGEX.test(didUri))
      throw new URIError("URI does not match the did:jwk pattern!");

    let groups: RegExpMatchArray = didUri.match(JWK_DID_REGEX);

    let base64Key: string = groups[1];
    let keyPem: string = Buffer.from(base64Key, "base64").toString();

    let jwk: JWK.Key = JWK.asKey(keyPem);

    return new DidJwk(jwk, didUri);
  }

  private static jwkToPublicBase64(jwk: JWK.Key): string {
    let publicKey: string;
    if (jwk.public)
      publicKey = jwk.toPEM(false);
    else
      // Convert to the public key
      publicKey = jwk.toPEM(false);

    return Buffer.from(publicKey).toString("base64");
  }
}
