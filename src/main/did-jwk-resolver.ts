import { ParsedDID, Resolver, DIDResolver, DIDDocument } from "did-resolver";
import { DidJwk } from "./";

export function getResolver(): any {
  async function resolve(did: string, parsed: ParsedDID,
    didResolver: DIDResolver): Promise<DIDDocument | null> {
    const didJwk: DidJwk = await DidJwk.fromUri(did);
    return didJwk.getDidDocument();
  }

  return resolve;
}
