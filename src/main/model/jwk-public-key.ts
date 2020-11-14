import { JWK } from "node-jose";
import { PublicKey } from "did-resolver";

const TYPE: string = "JsonWebKey2020";

export const KEY_ID_FORMAT: string = "%s#keys-1";

export class JwkPublicKey implements PublicKey {
  id: string;
  type: string;
  controller: string;
  ethereumAddress?: string;
  publicKeyBase64?: string;
  publicKeyBase58?: string;
  publicKeyHex?: string;
  publicKeyPem?: string;
  publicKeyJwk?: object;
  domainName?: string;

  constructor(
    id: string,
    jwk: object,
    publicKeyPem: string,
    controller: string
  ) {
    this.id = id;
    this.publicKeyJwk = jwk;
    this.publicKeyPem = publicKeyPem;
    this.controller = controller;
    this.type = TYPE;
  }
}
