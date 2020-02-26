import { PublicKey } from "did-resolver";
export declare const KEY_ID_FORMAT: string;
export declare class JwkPublicKey implements PublicKey {
    id: string;
    type: string;
    owner: string;
    ethereumAddress?: string;
    publicKeyBase64?: string;
    publicKeyBase58?: string;
    publicKeyHex?: string;
    publicKeyPem?: string;
    publicKeyJwk: object;
    constructor(id: string, jwk: object);
}
