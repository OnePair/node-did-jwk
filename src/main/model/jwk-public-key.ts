import { JWK } from "node-jose";
import { PublicKey } from "did-resolver";

const TYPE: string = "JsonWebKey";

export const KEY_ID_FORMAT: string = "%s#keys-1";


export class JwkPublicKey implements PublicKey {
  id: string;
  type: string;
  owner: string;
  ethereumAddress?: string;
  publicKeyBase64?: string;
  publicKeyBase58?: string;
  publicKeyHex?: string;
  publicKeyPem?: string;
  publicKeyJwk: object;

  constructor(id: string, jwk: object) {
    //this.id = util.format(KEY_ID_FORMAT, didUri);
    this.id = id;
    this.type = TYPE;
    this.owner = this.owner;
    this.publicKeyJwk = jwk;
  }
}
