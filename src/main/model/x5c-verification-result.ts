import { pki } from "node-forge";

export class X5CVerificationResult {
  domainName: string;
  certificate: pki.Certificate;
  rootCertificate: pki.Certificate;
}
