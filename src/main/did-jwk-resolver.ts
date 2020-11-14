import { DIDDocument } from "did-resolver";
import { DidJwk } from "./";

export function getResolver(): any {
  async function resolve(did: string): Promise<DIDDocument | null> {
    const didJwk: DidJwk = await DidJwk.fromUri(did);
    return await didJwk.getDidDocument();
  }

  return resolve;
}
