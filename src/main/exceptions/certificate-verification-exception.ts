
export class CertificateVerificationException extends Error {
    constructor(message: string) {
      super(message);

      this.message = message;
    }
}
