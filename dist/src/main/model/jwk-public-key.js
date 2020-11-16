"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TYPE = "JsonWebKey2020";
exports.KEY_ID_FORMAT = "%s#keys-1";
var JwkPublicKey = /** @class */ (function () {
    function JwkPublicKey(id, jwk, publicKeyPem, controller) {
        this.id = id;
        this.publicKeyJwk = jwk;
        this.publicKeyPem = publicKeyPem;
        this.controller = controller;
        this.type = TYPE;
    }
    return JwkPublicKey;
}());
exports.JwkPublicKey = JwkPublicKey;
