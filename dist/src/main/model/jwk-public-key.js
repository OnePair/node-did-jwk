"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var util = __importStar(require("util"));
var TYPE = "JsonWebKey";
var KEY_ID_FORMAT = "%s#keys-1";
var JwkPublicKey = /** @class */ (function () {
    function JwkPublicKey(didUri, jwk) {
        this.id = util.format(KEY_ID_FORMAT, didUri);
        this.type = TYPE;
        this.owner = this.owner;
        this.publicKeyJwk = jwk;
    }
    return JwkPublicKey;
}());
exports.JwkPublicKey = JwkPublicKey;
