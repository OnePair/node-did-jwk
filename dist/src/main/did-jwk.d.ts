import { JWK } from "node-jose";
import { DIDDocument } from "did-resolver";
export declare const JWK_DID_REGEX: RegExp;
export declare class DidJwk {
    private didUri;
    private jwk;
    constructor(jwk: JWK.Key, didUri?: string);
    getDidUri(): string;
    getDidDocument(): Promise<DIDDocument>;
    getJwk(): JWK.Key;
    verify(): Promise<object>;
    static fromX5c(x5c: Array<string>): Promise<DidJwk>;
    static fromUri(didUri: string): Promise<DidJwk>;
    private static jwkToPublicBase64;
    private static compressJsonToBase64;
    private static decompressBase64ToJson;
}
