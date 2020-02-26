"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import { JWK } from "jose";
var node_jose_1 = require("node-jose");
var model_1 = require("./model");
var util_1 = __importDefault(require("util"));
var base64url_1 = __importDefault(require("base64url"));
var jsonpack_1 = __importDefault(require("jsonpack"));
exports.JWK_DID_REGEX = new RegExp("^did:jwk:([-A-Za-z0-9+=]{1,3000})$");
var DID_FORMAT = "did:jwk:%s";
var DidJwk = /** @class */ (function () {
    function DidJwk(jwk, didUri) {
        node_jose_1.JWK.createKey;
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
        var publicJwk = this.jwk.toJSON(false);
        /*
        if (this.jwk.private)
          publicJwk = DidJwk.fromUri(didUri).getJwk();
        else
          publicJwk = this.jwk;*/
        var publicKey = new model_1.JwkPublicKey(util_1.default.format(model_1.KEY_ID_FORMAT, this.getDidUri()), publicJwk);
        var publicKeys = [publicKey];
        //let keyId: string = this.getDidUri() + "#keys-1";
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
        var _this = this;
        return new Promise(function (onSuccess, onError) { return __awaiter(_this, void 0, void 0, function () {
            var groups, base64Key, compressedPublicKey, jwk;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!exports.JWK_DID_REGEX.test(didUri))
                            throw new URIError("URI does not match the did:jwk pattern!");
                        groups = didUri.match(exports.JWK_DID_REGEX);
                        base64Key = groups[1];
                        compressedPublicKey = Buffer.from(base64Key, "base64")
                            .toString();
                        return [4 /*yield*/, node_jose_1.JWK.asKey(jsonpack_1.default.unpack(compressedPublicKey))];
                    case 1:
                        jwk = _a.sent();
                        onSuccess(new DidJwk(jwk, didUri));
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DidJwk.jwkToPublicBase64 = function (jwk) {
        // 1) Get the public key
        var publicKey = jwk.toJSON(false);
        // 2) Compress
        var compressedPublicKey = jsonpack_1.default.pack(publicKey);
        // 3) Encode
        return base64url_1.default(compressedPublicKey);
    };
    return DidJwk;
}());
exports.DidJwk = DidJwk;
