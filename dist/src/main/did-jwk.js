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
var certs_1 = require("./certs");
var exceptions_1 = require("./exceptions");
var node_forge_1 = require("node-forge");
var zlib_1 = __importDefault(require("zlib"));
var util_1 = __importDefault(require("util"));
var base64url_1 = __importDefault(require("base64url"));
exports.JWK_DID_REGEX = new RegExp("^did:jwk:([-A-Za-z0-9+=]+)$");
var DID_FORMAT = "did:jwk:%s";
var KEY_ID_FORMAT = "%s#keys-1";
/*
 * TODO: Verify
 * TODO: Use const
 */
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
        return __awaiter(this, void 0, void 0, function () {
            var verificationResult, publicJwk, didUri, publicKey, publicKeys;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.verify()];
                    case 1:
                        verificationResult = _a.sent();
                        publicJwk = this.jwk.toJSON(false);
                        if ("x5c" in this.jwk)
                            publicJwk["x5c"] = this.jwk["x5c"];
                        didUri = this.getDidUri();
                        publicKey = {
                            id: util_1.default.format(KEY_ID_FORMAT, didUri),
                            type: "JsonWebKey2020",
                            controller: didUri,
                            publicKeyPem: this.jwk.toPEM(false),
                        };
                        if (verificationResult["hasDomainName"])
                            publicKey["domainName"] = verificationResult["domainName"];
                        publicKeys = [publicKey];
                        return [2 /*return*/, {
                                "@context": "https://w3id.org/did/v1",
                                id: this.getDidUri(),
                                publicKey: publicKeys,
                            }];
                }
            });
        });
    };
    DidJwk.prototype.getJwk = function () {
        return this.jwk;
    };
    // Verifies
    DidJwk.prototype.verify = function () {
        return __awaiter(this, void 0, void 0, function () {
            var jwkThumprint, _a, _b, verificationResult, certPem, keyStore, certJwk, certJwkThumbPrint, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _b = (_a = Buffer).from;
                        return [4 /*yield*/, this.jwk.thumbprint()];
                    case 1:
                        jwkThumprint = _b.apply(_a, [_e.sent()]).toString("base64");
                        if (!("x5c" in this.jwk))
                            return [2 /*return*/, { hasDomainName: false }];
                        verificationResult = certs_1.Certs.verifyX5c(this.jwk["x5c"]);
                        certPem = node_forge_1.pki.certificateToPem(verificationResult.certificate);
                        keyStore = node_jose_1.JWK.createKeyStore();
                        return [4 /*yield*/, keyStore.add(certPem, "pem")];
                    case 2:
                        certJwk = _e.sent();
                        _d = (_c = Buffer).from;
                        return [4 /*yield*/, certJwk.thumbprint()];
                    case 3:
                        certJwkThumbPrint = _d.apply(_c, [_e.sent()]).toString("base64");
                        // Compare the thumbprints
                        if (jwkThumprint != certJwkThumbPrint)
                            throw new exceptions_1.DidJwkVerificationException("JWK does not match the key in the certificate!");
                        return [2 /*return*/, { hasDomainName: true, domainName: verificationResult.domainName }];
                }
            });
        });
    };
    DidJwk.fromX5c = function (x5c) {
        return __awaiter(this, void 0, void 0, function () {
            var certPem, keyStore, jwk;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Verify x5c
                        certs_1.Certs.verifyX5c(x5c);
                        certPem = "-----BEGIN CERTIFICATE-----\n\n    " + x5c[0] + "\n    \n-----END CERTIFICATE-----";
                        keyStore = node_jose_1.JWK.createKeyStore();
                        return [4 /*yield*/, keyStore.add(certPem, "pem")];
                    case 1:
                        jwk = _a.sent();
                        // Set the x5c
                        jwk["x5c"] = x5c;
                        return [2 /*return*/, new DidJwk(jwk)];
                }
            });
        });
    };
    DidJwk.fromUri = function (didUri) {
        return __awaiter(this, void 0, void 0, function () {
            var groups, base64Key, compressedPublicKey, jwkJson, jwk;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!exports.JWK_DID_REGEX.test(didUri))
                            throw new URIError("URI does not match the did:jwk pattern!");
                        groups = didUri.match(exports.JWK_DID_REGEX);
                        base64Key = groups[1];
                        compressedPublicKey = Buffer.from(base64Key, "base64").toString();
                        jwkJson = DidJwk.decompressBase64ToJson(compressedPublicKey);
                        return [4 /*yield*/, node_jose_1.JWK.asKey(jwkJson)];
                    case 1:
                        jwk = _a.sent();
                        if ("x5c" in jwkJson)
                            jwk["x5c"] = jwkJson["x5c"];
                        return [2 /*return*/, new DidJwk(jwk, didUri)];
                }
            });
        });
    };
    DidJwk.jwkToPublicBase64 = function (jwk) {
        // 1) Get the public key
        var publicKey = jwk.toJSON(false);
        if ("x5c" in jwk)
            publicKey["x5c"] = jwk["x5c"];
        // 2) Compress
        var compressedPublicKey = DidJwk.compressJsonToBase64(publicKey);
        // 3) Encode
        return base64url_1.default(compressedPublicKey);
    };
    DidJwk.compressJsonToBase64 = function (json) {
        var jwkJson = JSON.stringify(json);
        var compressedJwkJson = zlib_1.default.deflateSync(Buffer.from(jwkJson, "utf-8"));
        return compressedJwkJson.toString("base64");
    };
    DidJwk.decompressBase64ToJson = function (compressedBase64) {
        return JSON.parse(zlib_1.default.inflateSync(Buffer.from(compressedBase64, "base64")).toString());
    };
    return DidJwk;
}());
exports.DidJwk = DidJwk;
