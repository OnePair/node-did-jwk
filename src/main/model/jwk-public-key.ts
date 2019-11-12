import { JWK, JSONWebKey } from "jose";
import { PublicKey } from "did-resolver";

import * as util from "util";

const TYPE: string = "JsonWebKey";

const KEY_ID_FORMAT: string = "%s#keys-1";


export class JwkPublicKey implements PublicKey {
  id: string;
  type: string;
  owner: string;
  ethereumAddress?: string;
  publicKeyBase64?: string;
  publicKeyBase58?: string;
  publicKeyHex?: string;
  publicKeyPem?: string;
  publicKeyJwk: JWK.Key;

  constructor(didUri: string, jwk: JWK.Key) {
    this.id = util.format(KEY_ID_FORMAT, didUri);
    this.type = TYPE;
    this.owner = this.owner;
    this.publicKeyJwk = jwk;
  }
}
