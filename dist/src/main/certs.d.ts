import { X5CVerificationResult } from "./model";
import { pki } from "node-forge";
export declare class Certs {
    static certPemsToX5c(certPems: Array<string>): Array<string>;
    static x5cToCerts(x5c: Array<string>): Array<pki.Certificate>;
    static verifyX5c(x5c: Array<string>): X5CVerificationResult;
}
