import { expect, assert } from "chai";

import { Resolver, DIDDocument } from "did-resolver";
import { JWK } from "jose";
import { DidJwk, getResolver, JWK_DID_REGEX } from "../";

let did1: DidJwk;

describe("DID JWK Tests", () => {
  let jwk1: JWK.ECKey;

  before(() => {
    jwk1 = JWK.generateSync("EC", "secp256k1");
  });

  it("Should create a did from the JWK", () => {
    did1 = new DidJwk(jwk1);
    assert.isTrue(JWK_DID_REGEX.test(did1.getDidUri()));
  });

  it("Should parse DID from uri", () => {
    assert.doesNotThrow(() => {
      DidJwk.fromUri(did1.getDidUri());
    });
  });

  it("Should generate the valid DID document", () => {
    assert.doesNotThrow(() => {
      assert.notEqual(did1.getDidDocument(), null);
    });
  });
});

describe("Resolver Tests", () => {
  it("Should resolve the proper jwk did document", async () => {
    const jwkResolver = getResolver();
    const resolver = new Resolver({
      jwk: jwkResolver
    });

    let didDoc: DIDDocument = await resolver.resolve(did1.getDidUri());
    assert.isNotNull(didDoc);
  });
});
