# node-did-jwk

> A node module for the JWK DID method

## Build

1.  `npm run install`
2.  `npm run build`

#### Dev

`npm install --only=dev`

## Run Tests

`npm run test`

## Usage

#### Create a new JWK DID

```javascript
// 1) Generate a JWK with the jose module
let jwk = JWK.generateSync("EC", "secp256k1");

// 2) Create the DID
let did = new DidJwk(jwk);
```

#### The resolver

```javascript
import { getResolver } from "did-jwk";

const jwkResolver = getResolver();
const resolver = new Resolver({
  jwk: jwkResolver
});

let didDoc: DIDDocument = resolver.resolve("<did-url>");
```
