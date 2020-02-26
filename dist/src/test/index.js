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
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var did_resolver_1 = require("did-resolver");
//import { JWK } from "jose";
var node_jose_1 = require("node-jose");
var __1 = require("../");
var did1;
describe("DID JWK Tests", function () {
    var jwk1;
    before(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, node_jose_1.JWK.createKey("EC", "P-256", { alg: "ES256" })];
                case 1:
                    //jwk1 = JWK.generateSync("EC", "secp256k1");
                    jwk1 = _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should create a did from the JWK", function () {
        did1 = new __1.DidJwk(jwk1);
        chai_1.assert.isTrue(__1.JWK_DID_REGEX.test(did1.getDidUri()));
    });
    it("Should parse DID from uri", function () {
        chai_1.assert.doesNotThrow(function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __1.DidJwk.fromUri(did1.getDidUri())];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    it("Should generate the valid DID document", function () {
        chai_1.assert.doesNotThrow(function () {
            chai_1.assert.notEqual(did1.getDidDocument(), null);
        });
    });
});
describe("Resolver Tests", function () {
    it("Should resolve the proper jwk did document", function () { return __awaiter(void 0, void 0, void 0, function () {
        var jwkResolver, resolver, didDoc;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    jwkResolver = __1.getResolver();
                    resolver = new did_resolver_1.Resolver({
                        jwk: jwkResolver
                    });
                    return [4 /*yield*/, resolver.resolve(did1.getDidUri())];
                case 1:
                    didDoc = _a.sent();
                    chai_1.assert.isNotNull(didDoc);
                    return [2 /*return*/];
            }
        });
    }); });
});
