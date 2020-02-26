import { JWK } from "node-jose";
import { DIDDocument } from "did-resolver";
export declare const JWK_DID_REGEX: RegExp;
export declare class DidJwk {
    private didUri;
    private jwk;
    constructor(jwk: JWK.Key, didUri?: string);
    getDidUri(): string;
    getDidDocument(): DIDDocument;
    getJwk(): JWK.Key;
    static fromUri(didUri: string): Promise<DidJwk>;
    private static jwkToPublicBase64;
}
