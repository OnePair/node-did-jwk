import { JWK } from "jose";
import { PublicKey } from "did-resolver";
export declare class JwkPublicKey implements PublicKey {
    id: string;
    type: string;
    owner: string;
    ethereumAddress?: string;
    publicKeyBase64?: string;
    publicKeyBase58?: string;
    publicKeyHex?: string;
    publicKeyPem?: string;
    publicKeyJwk: JWK.Key;
    constructor(didUri: string, jwk: JWK.Key);
}
