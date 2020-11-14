

export class DidJwkVerificationException extends Error {
  constructor(message: string) {
    super(message);
    this.message = message;
  }
}
