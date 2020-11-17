import { CertificateVerificationException } from "./exceptions";
import { X5CVerificationResult } from "./model";

import { pki, util } from "node-forge";

export class Certs {
  public static certPemsToX5c(certPems: Array<string>): Array<string> {
    const x5c: Array<string> = [];

    for (const i in certPems) {
      const certBase64 = util.encode64(pki.pemToDer(certPems[i]).data);
      x5c.push(certBase64);
    }

    return x5c;
  }

  public static x5cToCerts(x5c: Array<string>): Array<pki.Certificate> {
    const certs: Array<pki.Certificate> = [];

    for (const i in x5c) {
      const certBase64: string = x5c[i];
      const certPem: string = `-----BEGIN CERTIFICATE-----\n
      ${certBase64}
      \n-----END CERTIFICATE-----`;

      certs.push(pki.certificateFromPem(certPem));
    }

    return certs;
  }

  public static verifyX5c(x5c: Array<string>): X5CVerificationResult {
    const certificates: Array<pki.Certificate> = Certs.x5cToCerts(x5c);

    const rootCert: pki.Certificate = certificates[certificates.length - 1];
    const domainName: string = rootCert.issuer.getField("CN").value;

    const caStore: pki.CAStore = pki.createCaStore([rootCert]);

    // Verify the domain
    for (const i in certificates) {
      const certificate: pki.Certificate = certificates[i];

      if (
        domainName != certificate.issuer.getField("CN").value ||
        domainName != certificate.subject.getField("CN").value
      )
        throw new CertificateVerificationException(`Invalid domain name!`);
    }

    const verified: boolean = pki.verifyCertificateChain(caStore, certificates);

    if (!verified)
      throw new CertificateVerificationException(
        "Certificate verification failed!"
      );

    return {
      domainName,
      certificate: certificates[0],
      rootCertificate: rootCert
    };
  }
}
