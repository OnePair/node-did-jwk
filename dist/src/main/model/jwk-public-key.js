"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TYPE = "JsonWebKey";
exports.KEY_ID_FORMAT = "%s#keys-1";
var JwkPublicKey = /** @class */ (function () {
    function JwkPublicKey(id, jwk) {
        //this.id = util.format(KEY_ID_FORMAT, didUri);
        this.id = id;
        this.type = TYPE;
        this.owner = this.owner;
        this.publicKeyJwk = jwk;
    }
    return JwkPublicKey;
}());
exports.JwkPublicKey = JwkPublicKey;
