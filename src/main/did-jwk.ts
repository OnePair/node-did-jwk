//import { JWK } from "jose";
import { JWK } from "node-jose";
import { DIDDocument, PublicKey } from "did-resolver";
import { JwkPublicKey, KEY_ID_FORMAT } from "./model";

import util from "util";
import base64url from "base64url";
import jsonpack from "jsonpack";

export const JWK_DID_REGEX = new RegExp("^did:jwk:([-A-Za-z0-9+=]{1,3000})$");
const DID_FORMAT = "did:jwk:%s";

export class DidJwk {
  private didUri: string;
  //private jwk: JWK.RSAKey | JWK.ECKey | JWK.OKPKey | JWK.OctKey;
  private jwk: JWK.Key;

  constructor(jwk: JWK.Key, didUri?: string) {
    JWK.createKey
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
    let publicJwk: object = this.jwk.toJSON(false);
    /*
    if (this.jwk.private)
      publicJwk = DidJwk.fromUri(didUri).getJwk();
    else
      publicJwk = this.jwk;*/

    let publicKey: PublicKey =
      new JwkPublicKey(util.format(KEY_ID_FORMAT, this.getDidUri()),
        publicJwk);
    let publicKeys: PublicKey[] = [publicKey];
    //let keyId: string = this.getDidUri() + "#keys-1";

    return {
      "@context": "https://w3id.org/did/v1",
      id: this.getDidUri(),
      publicKey: publicKeys,
    }
  }

  public getJwk(): JWK.Key {
    return this.jwk;
  }

  public static fromUri(didUri: string): Promise<DidJwk> {
    return new Promise<DidJwk>(async (onSuccess: Function, onError: Function) => {
      if (!JWK_DID_REGEX.test(didUri))
        throw new URIError("URI does not match the did:jwk pattern!");

      let groups: RegExpMatchArray = didUri.match(JWK_DID_REGEX);


      let base64Key: string = groups[1];
      let compressedPublicKey: string = Buffer.from(base64Key, "base64")
        .toString();

      let jwk: JWK.Key = await JWK.asKey(jsonpack.unpack(compressedPublicKey));

      onSuccess(new DidJwk(jwk, didUri));
    });

  }

  private static jwkToPublicBase64(jwk: JWK.Key): string {
    // 1) Get the public key
    let publicKey: object = jwk.toJSON(false);

    // 2) Compress
    let compressedPublicKey: string = jsonpack.pack(publicKey);

    // 3) Encode
    return base64url(compressedPublicKey);
  }
}
