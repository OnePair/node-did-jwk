"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("./model");
var util_1 = __importDefault(require("util"));
var base64url_1 = __importDefault(require("base64url"));
var jsonpack_1 = __importDefault(require("jsonpack"));
exports.JWK_DID_REGEX = new RegExp("^did:jwk:([-A-Za-z0-9+=]{1,3000})$");
var DID_FORMAT = "did:jwk:%s";
var DidJwk = /** @class */ (function () {
    function DidJwk(jwk, didUri) {
        this.jwk = jwk;
        this.didUri = didUri || null;
    }
    DidJwk.prototype.getDidUri = function () {
        if (this.didUri != null)
            return this.didUri;
        var publicKey = DidJwk.jwkToPublicBase64(this.jwk);
        return util_1.default.format(DID_FORMAT, publicKey);
    };
    DidJwk.prototype.getDidDocument = function () {
        var didUri = this.getDidUri();
        var publicJwk;
        if (this.jwk.private)
            publicJwk = DidJwk.fromUri(didUri).getJwk();
        else
            publicJwk = this.jwk;
        var publicKey = new model_1.JwkPublicKey(this.getDidUri(), publicJwk);
        var publicKeys = [publicKey];
        var keyId = this.getDidUri() + "#keys-1";
        return {
            "@context": "https://w3id.org/did/v1",
            id: this.getDidUri(),
            publicKey: publicKeys,
        };
    };
    DidJwk.prototype.getJwk = function () {
        return this.jwk;
    };
    DidJwk.fromUri = function (didUri) {
        if (!exports.JWK_DID_REGEX.test(didUri))
            throw new URIError("URI does not match the did:jwk pattern!");
        var groups = didUri.match(exports.JWK_DID_REGEX);
        var base64Key = groups[1];
        var compressedPublicKey = Buffer.from(base64Key, "base64")
            .toString();
        var jwk = jsonpack_1.default.unpack(compressedPublicKey);
        return new DidJwk(jwk, didUri);
    };
    DidJwk.jwkToPublicBase64 = function (jwk) {
        // 1) Get the public key
        var publicKey = jwk.toJWK(false);
        // 2) Compress
        var compressedPublicKey = jsonpack_1.default.pack(publicKey);
        // 3) Encode
        return base64url_1.default(compressedPublicKey);
    };
    return DidJwk;
}());
exports.DidJwk = DidJwk;
