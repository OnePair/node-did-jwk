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
var node_jose_1 = require("node-jose");
var __1 = require("../");
var chai_1 = require("chai");
var did_resolver_1 = require("did-resolver");
var __2 = require("../");
var fs_1 = __importDefault(require("fs"));
var KEY = {
    kty: "EC",
    kid: "Cqpr4lYVskxbTVS-jqCp5V7F7vVTqwb7pCZRrBM1WE0",
    alg: "ES256",
    crv: "P-256",
    x: "gh4ystFcllQ0aKoTK8HRq8HEkS36uT5iF7WS_QxMhEI",
    y: "4jXXUoahSkOsJgmrpqa8z_2CsBFpEvYKyDOxsOsn6TE",
};
var KEY_2 = {
    kty: "EC",
    kid: "tvPaPwKFzzJWdQpcozuz31qA7r_etQT3XD-17mokom8",
    alg: "ES256",
    crv: "P-256",
    x: "4mXAhzfpq9OKey5RgBtXArxvU4ZrjyRO6rsygCfIzRc",
    y: "TgwdkJsDcW8Xsv8VzBS0n07QUWDeVxRH5Emob0E_8vk",
};
var DID = "did:jwk:ZUp3bGpyc09nakFBQVArbHN5YUt2T0pvYllNU2d0SUs2a0lBRXg1RmFhbGkwZmp2MXJq" +
    "ZERaZmNHN0Q3Q0pZQVFUQUJyTDVvaElMM1pudUtKVk01amNtMEVaQmJzWU9kSWFiaW1Uc2NucU4rR" +
    "mN3VE5OTk4xcGEvbkJpV3JhM29CMjI3NmQrVTVySXlSM25IUmR2dVo1bmZVZC8xSXVGNmlKR0YvY" +
    "UJXaloyRXBIc1ZWR2lqaTkrSzJSeVBoeTZyQ0F2bHRyejJYR1R1S3pXZ1hHR09ocE0vcmtNbFEzbX" +
    "pLUUtmTDkxWU80UT0";
var DID_2 = "did:jwk:ZUp6VmxFZXY2OGdSaGYvTDNkTFhZaFk1d0N5YU9TZFJUSVloTUlsSnBKaVQ0Zjl1dmZlQWdUMGJiKzFkOTRjcWROZXBnL09QcjJZK3ZuNzdjbTdnNnk5ZlRaVjl6dmtldC8wci8rdDdMRDVzSitZUFN4QlNoRFBEczFLTFZBWkJ5c0N5c1A1WmhRLzdVOU45S3BCNHRtL1NDc1NINGZuZkdjT1BMNEd6R3puRGczUEFXL0Nvd0RkMWxnSi92ZVZZUmdHMVkvR2kwNlVIcGlxQllpUWpXemRuZmMzNmEwZWY1aEowWlVBKzR5Ulp4cmZ3TFV6RVJyWEhhY096NEJuYndoREpVYTVYSWNWOXVWNnRNMXU4dC9EQVJqSVBMUGt0dTdFUDFKeExLWnlZbnFxbUNhK0pIYWR4TXZ6c1VUOVRvSWFxMUNvNEo2Q2JHV09LRzdyZnVMRU9aSFNtL1BlUlJ4WmlUbzNtTjQ0cHFDVmdZdmYwUmQ1a3FHYWN2ZlVCaTZKT0kzZ2F2MUNkRFZWT0YyV04zTjlTZkhPeDUwQmF1VFBNVEg4M2sydVppNCtFYWxrdnlyejJlb2M1Mkgxb0NvclZwUG5ZTEhsSDhPL3daaTZXeUlnYWs2YXU4Y2I0N3lWb2hneG5hbE4rYU50SDNQd2pMckFCODNNWDZkZHZmL3ZTWlpsVE9KWUZ4Y1lDbTk4NE8xVFVkeVNYYTJwODdocGpnODNuZUUwSGpRaVFPOCtVT212RC9NNXp3R1FLdzJOQW9UTXd2V1NpY01RK3RYTW5NSDd4VkdjYUd2NXdMSFI1V3dmNHozNjIyS1FvS01za1lLYkk1ZTg2SS8va1lOdTBQL2lOV05NMjNhUXlOZlFhN0xyTDd6ckh3NFlyWS81UHh2OG5xNWxRdDZlTnRVUE9zMjJSM3hUTy92YzN3U2E1S0FHSGdkSW5KMi9wQVA0MXk3YUpMdVo4ZUZicUR0aTQ0bWUveW9Ic2xZdkNuSXI3UzNmc2pmL0ZPUTdNZjNDdHBZL28vT2gyay8rc0dmUFJqQ3NLM2dJL2RMWGY3T2ZNQU1NZjczeDUzWmoxOUx5MXN4MlZjR3hZWWFWY29NaEZLU3k4c0ZZZGR4d1Q3bWJzQ2RoK1cyVGxaQzcwVVhtSDY1UGJtOUJ4Q0l0ejRwS2U0NHZBUGFoRFcvUTZrTXl6VE16VVVxWUpOalRIYzFPdHlIM3FuVUI3WUFxVmZEMHBMSG5GekpNbW9lNTFIaXJMbzYrQzdRck1NczFFT3Fwamp4SXdYTlVyNTNWUEhNTUEyN0lsVWVWZ3p5YXVuWTg3eWw4V0xpR1hOc1VZYStwYWwzWkhoVVY2M2kxdmJ4djREWVdVSlZjOEZmWHFKUmVhS1dzcnl5V3h6MnJRc3NYSlZDdzB4UXphTkRSR0xqWFd4S01kZTF3TDRVRzVvaGVsZVBtQkZ5MklBV2orY2h6WmpFUDFTbkdIbnVWV3k5ZGp2UmRPdFFVU2Y4YkdibjFHVjdzY2hHZGxIZFJudFR3QTdnL1BOVVBaVkNLOXdReXdKd0VBODRlZkFhTVJycGhkaG5sV0svOCs0bk9jbTFrekVzTmxDRlZvdnhTN1RaOE5rcWVDRStvYXp4TlZ3QmI5ZWJsSFRrd3pYWms0YU55dlhFaUhrdk91Rk82cG8zciticU5yVXU2M3JZN09DWXFhRm5tdW80T3VBRWlIN3R5TkRJc0xJYTdXVUp1OVRORXRpemVlakxUUXVkeG5YVSt1aG9GV1lUbXlXeWkrNHR0RW5BWXpXeDMzcEFjcnd1djh3Z1d0WFJ5UWF3YXk1eklpV3BQOE5iakxZT2dSeFk3bGRuMmhiMU9tTzhpUERsSW1PM1ZXNExBTkxhL1g3MVl5MDBTbXAvS3FpMXBQMkM3WmlFMncyUlZhNHlwTG9UZWJMUzI2UEcrZDZzZmVGUXVLbXBsNWlOSXBoS3g1Y001ams2b0xCNzBCdG1rV01ZYUNWVkdWTERCeUgrbGRqd2YxWmJKLy8vMlRJRCtpdzZnL0ZpOXhsb2ZaTEhvbWhMUFRKVkZlWHRlQjFwYWh1ZlRTOXI4Y0thZkJ5Y1NmSXVVWCszK0lGRE41UTUyS01uUTAzb1V1Q01OTXNXRzczMjlKRFZ2ZGs5d2xqRzVIUEVnWkx4ZGdkNjRJRnlNNC9hajhONFlJZk5HNEVQWTJEb25Ia2JUSjk2RGxxQ0xMY2FydnZJWWx2REplMVlyTU54MGNabnFXWThuem9leWE1cFVQMENIeXBJa284cmdZakZSdHNEUzhEVVZ3WEFQZUlsUmRkNTlNRnhNbjZwNmR0SnhobUxaUm9zTTN4b1lrQXBiRHdMaTg3S3NiRHdoeGRzanFDWHlxa2V2OUtiNGpURExrRjVxVzhTZzNGK1lGamNJQlJkMUs4TlFkdWdsVzR2RHAyMTJXTkc0Mk92Qk1wTGJjVk5jNHRuS2hDM0tEcFpnMEZWc1ErcWwzY2pQRXlTditRaEtJd1BUZE5hNk5sMGtDR0FZOTQ2YThLNW5nRXlLUjZRWTNjVWlTb2NhZ2dhT20veG9wWjdhek9KWVl3TnFncDF2SDdLaGNvSEVlU0R2OGVLQW5TWWJQSmdna1dHSXl4MlFGVDJycTN1bHlVZ1hDKzhtQmVCc0d2d1kwNllBY0xyNElyWXFzc3hYMkxPNHZWQkxNYTEzSDBxMHA2SGFHUzJsVlJ5cEQ2YVlIR1ZQT29ZN0hrRmR5M3V6YzNIYTh1cEk2bm9qVFF4cXhOdXVsMDJTUldza29pZllxOFc4L2ZxVEpRNWlxYlk2S0tlOEVKcXZ0aHp3ZkdYUHZxNUswYkNYV2FBOUFmQ3dKZURNVlptUm93dVZkbFNHZURXRnhWeXVvWGZGbGpZeVNaeDNZUUcrbUQyKzBXL3ZzTUdxZGFMQnp1Y3dVamcxZGYreWJRY0prVG9vbWErZURjRGxDUjI1dm9YU3hhTWlZemlDQ09VZS9ZekNyVm9vTFBISHQvYWFQU2h1cktJVW9QcEh5OTMvK0N5aldXWDQ9";
var X5C = [
    "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",
];
describe("Testing did-jwk methods", function () {
    it("Should create a did from jwk", function () { return __awaiter(void 0, void 0, void 0, function () {
        var jwk, did;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, node_jose_1.JWK.asKey(KEY)];
                case 1:
                    jwk = _a.sent();
                    did = new __1.DidJwk(jwk);
                    chai_1.assert.isTrue(__1.JWK_DID_REGEX.test(did.getDidUri()));
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should parse JWK DID", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            __1.DidJwk.fromUri(DID);
            return [2 /*return*/];
        });
    }); });
    it("Should generate the valid DID document", function () {
        chai_1.assert.doesNotThrow(function () { return __awaiter(void 0, void 0, void 0, function () {
            var didDocument;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __1.DidJwk.fromUri(DID)];
                    case 1: return [4 /*yield*/, (_a.sent()).getDidDocument()];
                    case 2:
                        didDocument = _a.sent();
                        chai_1.assert.notEqual(didDocument, null);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    it("Should create did from x5c", function () { return __awaiter(void 0, void 0, void 0, function () {
        var didJwk;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, __1.DidJwk.fromX5c(X5C)];
                case 1:
                    didJwk = _a.sent();
                    return [4 /*yield*/, didJwk.verify()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    // X5C public key error
    it("Should throw invalid public key error", function () { return __awaiter(void 0, void 0, void 0, function () {
        var jwk, didJwk, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, node_jose_1.JWK.asKey(KEY_2)];
                case 1:
                    jwk = _a.sent();
                    jwk["x5c"] = X5C;
                    didJwk = new __1.DidJwk(jwk);
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, didJwk.verify()];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    chai_1.assert.equal(err_1.message, "JWK does not match the key in the certificate!");
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); });
    // x5c chain error
});
describe("Resolver Tests", function () {
    it("Should resolve the proper jwk did document", function () { return __awaiter(void 0, void 0, void 0, function () {
        var jwkResolver, resolver, didDoc;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    jwkResolver = __1.getResolver();
                    resolver = new did_resolver_1.Resolver({
                        jwk: jwkResolver,
                    });
                    return [4 /*yield*/, resolver.resolve(DID)];
                case 1:
                    didDoc = _a.sent();
                    chai_1.expect(didDoc).eql({
                        "@context": "https://w3id.org/did/v1",
                        id: "did:jwk:ZUp3bGpyc09nakFBQVArbHN5YUt2T0pvYllNU2d0SUs2a0lBRXg1RmFhbGkwZmp2MXJqZERaZmNHN0Q3Q0pZQVFUQUJyTDVvaElMM1pudUtKVk01amNtMEVaQmJzWU9kSWFiaW1Uc2NucU4rRmN3VE5OTk4xcGEvbkJpV3JhM29CMjI3NmQrVTVySXlSM25IUmR2dVo1bmZVZC8xSXVGNmlKR0YvYUJXaloyRXBIc1ZWR2lqaTkrSzJSeVBoeTZyQ0F2bHRyejJYR1R1S3pXZ1hHR09ocE0vcmtNbFEzbXpLUUtmTDkxWU80UT0",
                        publicKey: [
                            {
                                id: "did:jwk:ZUp3bGpyc09nakFBQVArbHN5YUt2T0pvYllNU2d0SUs2a0lBRXg1RmFhbGkwZmp2MXJqZERaZmNHN0Q3Q0pZQVFUQUJyTDVvaElMM1pudUtKVk01amNtMEVaQmJzWU9kSWFiaW1Uc2NucU4rRmN3VE5OTk4xcGEvbkJpV3JhM29CMjI3NmQrVTVySXlSM25IUmR2dVo1bmZVZC8xSXVGNmlKR0YvYUJXaloyRXBIc1ZWR2lqaTkrSzJSeVBoeTZyQ0F2bHRyejJYR1R1S3pXZ1hHR09ocE0vcmtNbFEzbXpLUUtmTDkxWU80UT0#keys-1",
                                type: "JsonWebKey2020",
                                controller: "did:jwk:ZUp3bGpyc09nakFBQVArbHN5YUt2T0pvYllNU2d0SUs2a0lBRXg1RmFhbGkwZmp2MXJqZERaZmNHN0Q3Q0pZQVFUQUJyTDVvaElMM1pudUtKVk01amNtMEVaQmJzWU9kSWFiaW1Uc2NucU4rRmN3VE5OTk4xcGEvbkJpV3JhM29CMjI3NmQrVTVySXlSM25IUmR2dVo1bmZVZC8xSXVGNmlKR0YvYUJXaloyRXBIc1ZWR2lqaTkrSzJSeVBoeTZyQ0F2bHRyejJYR1R1S3pXZ1hHR09ocE0vcmtNbFEzbXpLUUtmTDkxWU80UT0",
                                publicKeyPem: "-----BEGIN PUBLIC KEY-----\r\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEgh4ystFcllQ0aKoTK8HRq8HEkS36\r\nuT5iF7WS/QxMhELiNddShqFKQ6wmCaumprzP/YKwEWkS9grIM7Gw6yfpMQ==\r\n-----END PUBLIC KEY-----\r\n",
                            },
                        ],
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should resolve the proper jwk did document with x5c", function () { return __awaiter(void 0, void 0, void 0, function () {
        var jwkResolver, resolver, didDoc;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    jwkResolver = __1.getResolver();
                    resolver = new did_resolver_1.Resolver({
                        jwk: jwkResolver,
                    });
                    return [4 /*yield*/, resolver.resolve(DID_2)];
                case 1:
                    didDoc = _a.sent();
                    chai_1.expect(didDoc).eql({
                        "@context": "https://w3id.org/did/v1",
                        id: "did:jwk:ZUp6VmxFZXY2OGdSaGYvTDNkTFhZaFk1d0N5YU9TZFJUSVloTUlsSnBKaVQ0Zjl1dmZlQWdUMGJiKzFkOTRjcWROZXBnL09QcjJZK3ZuNzdjbTdnNnk5ZlRaVjl6dmtldC8wci8rdDdMRDVzSitZUFN4QlNoRFBEczFLTFZBWkJ5c0N5c1A1WmhRLzdVOU45S3BCNHRtL1NDc1NINGZuZkdjT1BMNEd6R3puRGczUEFXL0Nvd0RkMWxnSi92ZVZZUmdHMVkvR2kwNlVIcGlxQllpUWpXemRuZmMzNmEwZWY1aEowWlVBKzR5Ulp4cmZ3TFV6RVJyWEhhY096NEJuYndoREpVYTVYSWNWOXVWNnRNMXU4dC9EQVJqSVBMUGt0dTdFUDFKeExLWnlZbnFxbUNhK0pIYWR4TXZ6c1VUOVRvSWFxMUNvNEo2Q2JHV09LRzdyZnVMRU9aSFNtL1BlUlJ4WmlUbzNtTjQ0cHFDVmdZdmYwUmQ1a3FHYWN2ZlVCaTZKT0kzZ2F2MUNkRFZWT0YyV04zTjlTZkhPeDUwQmF1VFBNVEg4M2sydVppNCtFYWxrdnlyejJlb2M1Mkgxb0NvclZwUG5ZTEhsSDhPL3daaTZXeUlnYWs2YXU4Y2I0N3lWb2hneG5hbE4rYU50SDNQd2pMckFCODNNWDZkZHZmL3ZTWlpsVE9KWUZ4Y1lDbTk4NE8xVFVkeVNYYTJwODdocGpnODNuZUUwSGpRaVFPOCtVT212RC9NNXp3R1FLdzJOQW9UTXd2V1NpY01RK3RYTW5NSDd4VkdjYUd2NXdMSFI1V3dmNHozNjIyS1FvS01za1lLYkk1ZTg2SS8va1lOdTBQL2lOV05NMjNhUXlOZlFhN0xyTDd6ckh3NFlyWS81UHh2OG5xNWxRdDZlTnRVUE9zMjJSM3hUTy92YzN3U2E1S0FHSGdkSW5KMi9wQVA0MXk3YUpMdVo4ZUZicUR0aTQ0bWUveW9Ic2xZdkNuSXI3UzNmc2pmL0ZPUTdNZjNDdHBZL28vT2gyay8rc0dmUFJqQ3NLM2dJL2RMWGY3T2ZNQU1NZjczeDUzWmoxOUx5MXN4MlZjR3hZWWFWY29NaEZLU3k4c0ZZZGR4d1Q3bWJzQ2RoK1cyVGxaQzcwVVhtSDY1UGJtOUJ4Q0l0ejRwS2U0NHZBUGFoRFcvUTZrTXl6VE16VVVxWUpOalRIYzFPdHlIM3FuVUI3WUFxVmZEMHBMSG5GekpNbW9lNTFIaXJMbzYrQzdRck1NczFFT3Fwamp4SXdYTlVyNTNWUEhNTUEyN0lsVWVWZ3p5YXVuWTg3eWw4V0xpR1hOc1VZYStwYWwzWkhoVVY2M2kxdmJ4djREWVdVSlZjOEZmWHFKUmVhS1dzcnl5V3h6MnJRc3NYSlZDdzB4UXphTkRSR0xqWFd4S01kZTF3TDRVRzVvaGVsZVBtQkZ5MklBV2orY2h6WmpFUDFTbkdIbnVWV3k5ZGp2UmRPdFFVU2Y4YkdibjFHVjdzY2hHZGxIZFJudFR3QTdnL1BOVVBaVkNLOXdReXdKd0VBODRlZkFhTVJycGhkaG5sV0svOCs0bk9jbTFrekVzTmxDRlZvdnhTN1RaOE5rcWVDRStvYXp4TlZ3QmI5ZWJsSFRrd3pYWms0YU55dlhFaUhrdk91Rk82cG8zciticU5yVXU2M3JZN09DWXFhRm5tdW80T3VBRWlIN3R5TkRJc0xJYTdXVUp1OVRORXRpemVlakxUUXVkeG5YVSt1aG9GV1lUbXlXeWkrNHR0RW5BWXpXeDMzcEFjcnd1djh3Z1d0WFJ5UWF3YXk1eklpV3BQOE5iakxZT2dSeFk3bGRuMmhiMU9tTzhpUERsSW1PM1ZXNExBTkxhL1g3MVl5MDBTbXAvS3FpMXBQMkM3WmlFMncyUlZhNHlwTG9UZWJMUzI2UEcrZDZzZmVGUXVLbXBsNWlOSXBoS3g1Y001ams2b0xCNzBCdG1rV01ZYUNWVkdWTERCeUgrbGRqd2YxWmJKLy8vMlRJRCtpdzZnL0ZpOXhsb2ZaTEhvbWhMUFRKVkZlWHRlQjFwYWh1ZlRTOXI4Y0thZkJ5Y1NmSXVVWCszK0lGRE41UTUyS01uUTAzb1V1Q01OTXNXRzczMjlKRFZ2ZGs5d2xqRzVIUEVnWkx4ZGdkNjRJRnlNNC9hajhONFlJZk5HNEVQWTJEb25Ia2JUSjk2RGxxQ0xMY2FydnZJWWx2REplMVlyTU54MGNabnFXWThuem9leWE1cFVQMENIeXBJa284cmdZakZSdHNEUzhEVVZ3WEFQZUlsUmRkNTlNRnhNbjZwNmR0SnhobUxaUm9zTTN4b1lrQXBiRHdMaTg3S3NiRHdoeGRzanFDWHlxa2V2OUtiNGpURExrRjVxVzhTZzNGK1lGamNJQlJkMUs4TlFkdWdsVzR2RHAyMTJXTkc0Mk92Qk1wTGJjVk5jNHRuS2hDM0tEcFpnMEZWc1ErcWwzY2pQRXlTditRaEtJd1BUZE5hNk5sMGtDR0FZOTQ2YThLNW5nRXlLUjZRWTNjVWlTb2NhZ2dhT20veG9wWjdhek9KWVl3TnFncDF2SDdLaGNvSEVlU0R2OGVLQW5TWWJQSmdna1dHSXl4MlFGVDJycTN1bHlVZ1hDKzhtQmVCc0d2d1kwNllBY0xyNElyWXFzc3hYMkxPNHZWQkxNYTEzSDBxMHA2SGFHUzJsVlJ5cEQ2YVlIR1ZQT29ZN0hrRmR5M3V6YzNIYTh1cEk2bm9qVFF4cXhOdXVsMDJTUldza29pZllxOFc4L2ZxVEpRNWlxYlk2S0tlOEVKcXZ0aHp3ZkdYUHZxNUswYkNYV2FBOUFmQ3dKZURNVlptUm93dVZkbFNHZURXRnhWeXVvWGZGbGpZeVNaeDNZUUcrbUQyKzBXL3ZzTUdxZGFMQnp1Y3dVamcxZGYreWJRY0prVG9vbWErZURjRGxDUjI1dm9YU3hhTWlZemlDQ09VZS9ZekNyVm9vTFBISHQvYWFQU2h1cktJVW9QcEh5OTMvK0N5aldXWDQ9",
                        publicKey: [
                            {
                                id: "did:jwk:ZUp6VmxFZXY2OGdSaGYvTDNkTFhZaFk1d0N5YU9TZFJUSVloTUlsSnBKaVQ0Zjl1dmZlQWdUMGJiKzFkOTRjcWROZXBnL09QcjJZK3ZuNzdjbTdnNnk5ZlRaVjl6dmtldC8wci8rdDdMRDVzSitZUFN4QlNoRFBEczFLTFZBWkJ5c0N5c1A1WmhRLzdVOU45S3BCNHRtL1NDc1NINGZuZkdjT1BMNEd6R3puRGczUEFXL0Nvd0RkMWxnSi92ZVZZUmdHMVkvR2kwNlVIcGlxQllpUWpXemRuZmMzNmEwZWY1aEowWlVBKzR5Ulp4cmZ3TFV6RVJyWEhhY096NEJuYndoREpVYTVYSWNWOXVWNnRNMXU4dC9EQVJqSVBMUGt0dTdFUDFKeExLWnlZbnFxbUNhK0pIYWR4TXZ6c1VUOVRvSWFxMUNvNEo2Q2JHV09LRzdyZnVMRU9aSFNtL1BlUlJ4WmlUbzNtTjQ0cHFDVmdZdmYwUmQ1a3FHYWN2ZlVCaTZKT0kzZ2F2MUNkRFZWT0YyV04zTjlTZkhPeDUwQmF1VFBNVEg4M2sydVppNCtFYWxrdnlyejJlb2M1Mkgxb0NvclZwUG5ZTEhsSDhPL3daaTZXeUlnYWs2YXU4Y2I0N3lWb2hneG5hbE4rYU50SDNQd2pMckFCODNNWDZkZHZmL3ZTWlpsVE9KWUZ4Y1lDbTk4NE8xVFVkeVNYYTJwODdocGpnODNuZUUwSGpRaVFPOCtVT212RC9NNXp3R1FLdzJOQW9UTXd2V1NpY01RK3RYTW5NSDd4VkdjYUd2NXdMSFI1V3dmNHozNjIyS1FvS01za1lLYkk1ZTg2SS8va1lOdTBQL2lOV05NMjNhUXlOZlFhN0xyTDd6ckh3NFlyWS81UHh2OG5xNWxRdDZlTnRVUE9zMjJSM3hUTy92YzN3U2E1S0FHSGdkSW5KMi9wQVA0MXk3YUpMdVo4ZUZicUR0aTQ0bWUveW9Ic2xZdkNuSXI3UzNmc2pmL0ZPUTdNZjNDdHBZL28vT2gyay8rc0dmUFJqQ3NLM2dJL2RMWGY3T2ZNQU1NZjczeDUzWmoxOUx5MXN4MlZjR3hZWWFWY29NaEZLU3k4c0ZZZGR4d1Q3bWJzQ2RoK1cyVGxaQzcwVVhtSDY1UGJtOUJ4Q0l0ejRwS2U0NHZBUGFoRFcvUTZrTXl6VE16VVVxWUpOalRIYzFPdHlIM3FuVUI3WUFxVmZEMHBMSG5GekpNbW9lNTFIaXJMbzYrQzdRck1NczFFT3Fwamp4SXdYTlVyNTNWUEhNTUEyN0lsVWVWZ3p5YXVuWTg3eWw4V0xpR1hOc1VZYStwYWwzWkhoVVY2M2kxdmJ4djREWVdVSlZjOEZmWHFKUmVhS1dzcnl5V3h6MnJRc3NYSlZDdzB4UXphTkRSR0xqWFd4S01kZTF3TDRVRzVvaGVsZVBtQkZ5MklBV2orY2h6WmpFUDFTbkdIbnVWV3k5ZGp2UmRPdFFVU2Y4YkdibjFHVjdzY2hHZGxIZFJudFR3QTdnL1BOVVBaVkNLOXdReXdKd0VBODRlZkFhTVJycGhkaG5sV0svOCs0bk9jbTFrekVzTmxDRlZvdnhTN1RaOE5rcWVDRStvYXp4TlZ3QmI5ZWJsSFRrd3pYWms0YU55dlhFaUhrdk91Rk82cG8zciticU5yVXU2M3JZN09DWXFhRm5tdW80T3VBRWlIN3R5TkRJc0xJYTdXVUp1OVRORXRpemVlakxUUXVkeG5YVSt1aG9GV1lUbXlXeWkrNHR0RW5BWXpXeDMzcEFjcnd1djh3Z1d0WFJ5UWF3YXk1eklpV3BQOE5iakxZT2dSeFk3bGRuMmhiMU9tTzhpUERsSW1PM1ZXNExBTkxhL1g3MVl5MDBTbXAvS3FpMXBQMkM3WmlFMncyUlZhNHlwTG9UZWJMUzI2UEcrZDZzZmVGUXVLbXBsNWlOSXBoS3g1Y001ams2b0xCNzBCdG1rV01ZYUNWVkdWTERCeUgrbGRqd2YxWmJKLy8vMlRJRCtpdzZnL0ZpOXhsb2ZaTEhvbWhMUFRKVkZlWHRlQjFwYWh1ZlRTOXI4Y0thZkJ5Y1NmSXVVWCszK0lGRE41UTUyS01uUTAzb1V1Q01OTXNXRzczMjlKRFZ2ZGs5d2xqRzVIUEVnWkx4ZGdkNjRJRnlNNC9hajhONFlJZk5HNEVQWTJEb25Ia2JUSjk2RGxxQ0xMY2FydnZJWWx2REplMVlyTU54MGNabnFXWThuem9leWE1cFVQMENIeXBJa284cmdZakZSdHNEUzhEVVZ3WEFQZUlsUmRkNTlNRnhNbjZwNmR0SnhobUxaUm9zTTN4b1lrQXBiRHdMaTg3S3NiRHdoeGRzanFDWHlxa2V2OUtiNGpURExrRjVxVzhTZzNGK1lGamNJQlJkMUs4TlFkdWdsVzR2RHAyMTJXTkc0Mk92Qk1wTGJjVk5jNHRuS2hDM0tEcFpnMEZWc1ErcWwzY2pQRXlTditRaEtJd1BUZE5hNk5sMGtDR0FZOTQ2YThLNW5nRXlLUjZRWTNjVWlTb2NhZ2dhT20veG9wWjdhek9KWVl3TnFncDF2SDdLaGNvSEVlU0R2OGVLQW5TWWJQSmdna1dHSXl4MlFGVDJycTN1bHlVZ1hDKzhtQmVCc0d2d1kwNllBY0xyNElyWXFzc3hYMkxPNHZWQkxNYTEzSDBxMHA2SGFHUzJsVlJ5cEQ2YVlIR1ZQT29ZN0hrRmR5M3V6YzNIYTh1cEk2bm9qVFF4cXhOdXVsMDJTUldza29pZllxOFc4L2ZxVEpRNWlxYlk2S0tlOEVKcXZ0aHp3ZkdYUHZxNUswYkNYV2FBOUFmQ3dKZURNVlptUm93dVZkbFNHZURXRnhWeXVvWGZGbGpZeVNaeDNZUUcrbUQyKzBXL3ZzTUdxZGFMQnp1Y3dVamcxZGYreWJRY0prVG9vbWErZURjRGxDUjI1dm9YU3hhTWlZemlDQ09VZS9ZekNyVm9vTFBISHQvYWFQU2h1cktJVW9QcEh5OTMvK0N5aldXWDQ9#keys-1",
                                type: "JsonWebKey2020",
                                controller: "did:jwk:ZUp6VmxFZXY2OGdSaGYvTDNkTFhZaFk1d0N5YU9TZFJUSVloTUlsSnBKaVQ0Zjl1dmZlQWdUMGJiKzFkOTRjcWROZXBnL09QcjJZK3ZuNzdjbTdnNnk5ZlRaVjl6dmtldC8wci8rdDdMRDVzSitZUFN4QlNoRFBEczFLTFZBWkJ5c0N5c1A1WmhRLzdVOU45S3BCNHRtL1NDc1NINGZuZkdjT1BMNEd6R3puRGczUEFXL0Nvd0RkMWxnSi92ZVZZUmdHMVkvR2kwNlVIcGlxQllpUWpXemRuZmMzNmEwZWY1aEowWlVBKzR5Ulp4cmZ3TFV6RVJyWEhhY096NEJuYndoREpVYTVYSWNWOXVWNnRNMXU4dC9EQVJqSVBMUGt0dTdFUDFKeExLWnlZbnFxbUNhK0pIYWR4TXZ6c1VUOVRvSWFxMUNvNEo2Q2JHV09LRzdyZnVMRU9aSFNtL1BlUlJ4WmlUbzNtTjQ0cHFDVmdZdmYwUmQ1a3FHYWN2ZlVCaTZKT0kzZ2F2MUNkRFZWT0YyV04zTjlTZkhPeDUwQmF1VFBNVEg4M2sydVppNCtFYWxrdnlyejJlb2M1Mkgxb0NvclZwUG5ZTEhsSDhPL3daaTZXeUlnYWs2YXU4Y2I0N3lWb2hneG5hbE4rYU50SDNQd2pMckFCODNNWDZkZHZmL3ZTWlpsVE9KWUZ4Y1lDbTk4NE8xVFVkeVNYYTJwODdocGpnODNuZUUwSGpRaVFPOCtVT212RC9NNXp3R1FLdzJOQW9UTXd2V1NpY01RK3RYTW5NSDd4VkdjYUd2NXdMSFI1V3dmNHozNjIyS1FvS01za1lLYkk1ZTg2SS8va1lOdTBQL2lOV05NMjNhUXlOZlFhN0xyTDd6ckh3NFlyWS81UHh2OG5xNWxRdDZlTnRVUE9zMjJSM3hUTy92YzN3U2E1S0FHSGdkSW5KMi9wQVA0MXk3YUpMdVo4ZUZicUR0aTQ0bWUveW9Ic2xZdkNuSXI3UzNmc2pmL0ZPUTdNZjNDdHBZL28vT2gyay8rc0dmUFJqQ3NLM2dJL2RMWGY3T2ZNQU1NZjczeDUzWmoxOUx5MXN4MlZjR3hZWWFWY29NaEZLU3k4c0ZZZGR4d1Q3bWJzQ2RoK1cyVGxaQzcwVVhtSDY1UGJtOUJ4Q0l0ejRwS2U0NHZBUGFoRFcvUTZrTXl6VE16VVVxWUpOalRIYzFPdHlIM3FuVUI3WUFxVmZEMHBMSG5GekpNbW9lNTFIaXJMbzYrQzdRck1NczFFT3Fwamp4SXdYTlVyNTNWUEhNTUEyN0lsVWVWZ3p5YXVuWTg3eWw4V0xpR1hOc1VZYStwYWwzWkhoVVY2M2kxdmJ4djREWVdVSlZjOEZmWHFKUmVhS1dzcnl5V3h6MnJRc3NYSlZDdzB4UXphTkRSR0xqWFd4S01kZTF3TDRVRzVvaGVsZVBtQkZ5MklBV2orY2h6WmpFUDFTbkdIbnVWV3k5ZGp2UmRPdFFVU2Y4YkdibjFHVjdzY2hHZGxIZFJudFR3QTdnL1BOVVBaVkNLOXdReXdKd0VBODRlZkFhTVJycGhkaG5sV0svOCs0bk9jbTFrekVzTmxDRlZvdnhTN1RaOE5rcWVDRStvYXp4TlZ3QmI5ZWJsSFRrd3pYWms0YU55dlhFaUhrdk91Rk82cG8zciticU5yVXU2M3JZN09DWXFhRm5tdW80T3VBRWlIN3R5TkRJc0xJYTdXVUp1OVRORXRpemVlakxUUXVkeG5YVSt1aG9GV1lUbXlXeWkrNHR0RW5BWXpXeDMzcEFjcnd1djh3Z1d0WFJ5UWF3YXk1eklpV3BQOE5iakxZT2dSeFk3bGRuMmhiMU9tTzhpUERsSW1PM1ZXNExBTkxhL1g3MVl5MDBTbXAvS3FpMXBQMkM3WmlFMncyUlZhNHlwTG9UZWJMUzI2UEcrZDZzZmVGUXVLbXBsNWlOSXBoS3g1Y001ams2b0xCNzBCdG1rV01ZYUNWVkdWTERCeUgrbGRqd2YxWmJKLy8vMlRJRCtpdzZnL0ZpOXhsb2ZaTEhvbWhMUFRKVkZlWHRlQjFwYWh1ZlRTOXI4Y0thZkJ5Y1NmSXVVWCszK0lGRE41UTUyS01uUTAzb1V1Q01OTXNXRzczMjlKRFZ2ZGs5d2xqRzVIUEVnWkx4ZGdkNjRJRnlNNC9hajhONFlJZk5HNEVQWTJEb25Ia2JUSjk2RGxxQ0xMY2FydnZJWWx2REplMVlyTU54MGNabnFXWThuem9leWE1cFVQMENIeXBJa284cmdZakZSdHNEUzhEVVZ3WEFQZUlsUmRkNTlNRnhNbjZwNmR0SnhobUxaUm9zTTN4b1lrQXBiRHdMaTg3S3NiRHdoeGRzanFDWHlxa2V2OUtiNGpURExrRjVxVzhTZzNGK1lGamNJQlJkMUs4TlFkdWdsVzR2RHAyMTJXTkc0Mk92Qk1wTGJjVk5jNHRuS2hDM0tEcFpnMEZWc1ErcWwzY2pQRXlTditRaEtJd1BUZE5hNk5sMGtDR0FZOTQ2YThLNW5nRXlLUjZRWTNjVWlTb2NhZ2dhT20veG9wWjdhek9KWVl3TnFncDF2SDdLaGNvSEVlU0R2OGVLQW5TWWJQSmdna1dHSXl4MlFGVDJycTN1bHlVZ1hDKzhtQmVCc0d2d1kwNllBY0xyNElyWXFzc3hYMkxPNHZWQkxNYTEzSDBxMHA2SGFHUzJsVlJ5cEQ2YVlIR1ZQT29ZN0hrRmR5M3V6YzNIYTh1cEk2bm9qVFF4cXhOdXVsMDJTUldza29pZllxOFc4L2ZxVEpRNWlxYlk2S0tlOEVKcXZ0aHp3ZkdYUHZxNUswYkNYV2FBOUFmQ3dKZURNVlptUm93dVZkbFNHZURXRnhWeXVvWGZGbGpZeVNaeDNZUUcrbUQyKzBXL3ZzTUdxZGFMQnp1Y3dVamcxZGYreWJRY0prVG9vbWErZURjRGxDUjI1dm9YU3hhTWlZemlDQ09VZS9ZekNyVm9vTFBISHQvYWFQU2h1cktJVW9QcEh5OTMvK0N5aldXWDQ9",
                                publicKeyPem: "-----BEGIN PUBLIC KEY-----\r\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA1atQSHvAG/NVW+dBErlF\r\nDQkId4Xzq4mA/iA+8zhFE7Se3d8AKnC4gnMH/3KJXJNbrCjkzj7dp7n9zOuXnhX6\r\nfabburoF+Fs5w8myzQ0tFVNwuB5byhv7Fc4WIjvPzduVoF/3r6eXPIoITaWAKeDc\r\n845sfKLLFlsCrsrsNWd/jfcAKYKHmJ4DF2wOa3JTYT+4Nvq6ZzcE+yeZP1OskLWk\r\nROFKhABaTzWGEOB8krtVv/0GGM914cal2MCYKDMGIL6xoHaST3fq6PeRqtBpUOb7\r\nheG/b8mCVZdVm7U0D0T/LJ23j6O/wPIx14+YSOuPGBGLBccTNo3E+uXkqd4BjOI/\r\nLwIDAQAB\r\n-----END PUBLIC KEY-----\r\n",
                                domainName: "example.org",
                            },
                        ],
                    });
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("Testing cert chains", function () {
    it("Should convert cert to x5c", function () { return __awaiter(void 0, void 0, void 0, function () {
        var rootCertPem, certPem, x5c;
        return __generator(this, function (_a) {
            rootCertPem = fs_1.default.readFileSync("./src/test/certs/root/root.crt", "utf-8");
            certPem = fs_1.default.readFileSync("./src/test/certs/cert1/cert1.crt", "utf-8");
            x5c = __2.Certs.certPemsToX5c([certPem, rootCertPem]);
            chai_1.expect(x5c).to.eql([
                "MIIDJDCCAgwCAQEwDQYJKoZIhvcNAQELBQAwWDELMAkGA1UEBhMCQ0ExEDAOBgNVBAgMB09udGFyaW8xDzANBgNVBAcMBk90dGF3YTEQMA4GA1UECgwHZXhhbXBsZTEUMBIGA1UEAwwLZXhhbXBsZS5vcmcwHhcNMjAxMTExMDE0NTI3WhcNMjExMTExMDE0NTI3WjBYMQswCQYDVQQGEwJDQTEQMA4GA1UECAwHT250YXJpbzEPMA0GA1UEBwwGT3R0YXdhMRAwDgYDVQQKDAdleGFtcGxlMRQwEgYDVQQDDAtleGFtcGxlLm9yZzCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBANWrUEh7wBvzVVvnQRK5RQ0JCHeF86uJgP4gPvM4RRO0nt3fACpwuIJzB/9yiVyTW6wo5M4+3ae5/czrl54V+n2m27q6BfhbOcPJss0NLRVTcLgeW8ob+xXOFiI7z83blaBf96+nlzyKCE2lgCng3POObHyiyxZbAq7K7DVnf433ACmCh5ieAxdsDmtyU2E/uDb6umc3BPsnmT9TrJC1pEThSoQAWk81hhDgfJK7Vb/9BhjPdeHGpdjAmCgzBiC+saB2kk936uj3karQaVDm+4Xhv2/JglWXVZu1NA9E/yydt4+jv8DyMdePmEjrjxgRiwXHEzaNxPrl5KneAYziPy8CAwEAATANBgkqhkiG9w0BAQsFAAOCAQEABL5TGd/qttKiWUr4taeOdkr5q/qYK+x/gxQ9zk1ecFRYMLEE5iXCgpz/UZRa9BnhbR2apvDY9YHRoiJDfM2MeomZ7bhxSwjZzs+Zkm1fvrR2vAAHyMRUNd3agFaivYLtVdJMPPENfBHu9eIpdnp6vNN2iYhrCwYGlaSs5zNBtPnDf9qPZ4je/DXmQgy+TOXIVTBG2j6E7XUIAqp1JQaImvl2oOI9n+WZy6I6nKtJ0YmYPVpMUPbt95dMcIvMGLp5QT6kGkXwQi2j4KC82SQChP9hzSnKWaV73XgjBtE+8M816jEAztrkcKuD+oA3wLP5rYFPi8iIFBIpZMnp4Xj/sQ==",
                "MIIDNjCCAh4CE0CdZfb5Rx9h5h/l7q9Luqk/pHwwDQYJKoZIhvcNAQELBQAwWDELMAkGA1UEBhMCQ0ExEDAOBgNVBAgMB09udGFyaW8xDzANBgNVBAcMBk90dGF3YTEQMA4GA1UECgwHZXhhbXBsZTEUMBIGA1UEAwwLZXhhbXBsZS5vcmcwHhcNMjAxMTExMDEzNDI5WhcNMjExMTExMDEzNDI5WjBYMQswCQYDVQQGEwJDQTEQMA4GA1UECAwHT250YXJpbzEPMA0GA1UEBwwGT3R0YXdhMRAwDgYDVQQKDAdleGFtcGxlMRQwEgYDVQQDDAtleGFtcGxlLm9yZzCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAObo+nK2B9ZrUFnXYYdJQ0QpxSbj0Pnf6xH39mr4XcBVeF0Tti5T35DMyiWo31FEgkT+3oNyHE41ckexXmD8gde48pnVkC5VhavKi6ewMAyOczhrhEEYITOO7EX2qZVHs5geagqNcKk3cYSqgXy7XEP5KMMTfBna5z2TznHuzYYcmZbM0SBQ+H50IYXN/lQ7Taq15zn1vVFEcL6vUfGoZ3HNIl2charIk/Bl+rFy+Znv5E8U+SFPbREcoTuucakw9XVO1jPTcMLDCiT+/1S0Ha6OJQFFpspReOY4674l1b+53MxTN7kVdHFAqqMdDsenhBXYziZOTXSGqbbqj3+qD8sCAwEAATANBgkqhkiG9w0BAQsFAAOCAQEAzdxC43bNAPw+fTjaCrJ/+rtq6QYGA1p66BEds+Ab3bOBysPXf8snocuz8g1EWby1Vw30lq2bnAIYuWG+vJIMCi3fgUl2HFO7jjaHSkg9mt0hHvKr8d29kpAdBhtYM4a+VhDVtRSTmr7THKrz1Rp+L5vkv/nLIG8v6ZbZxibWSq6QYLIqYcKme2GcERXOCLxyItydBUpih6PQJaL9VA+EaHF4ksgOZNLF/oihY4dqYgUKi+mv4uvZNhECR0N2SOW0w9TjWCqrLnGNCthut843qnpyxwN606e6GOCQeqF/yYRImSYH/P9+NszXZ0DRMU30CKiJTAVGvpWkpZhQ3i8J5g==",
            ]);
            return [2 /*return*/];
        });
    }); });
    it("x5c verification should pass", function () {
        var x5c = [
            "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",
        ];
        var verificationResult = __2.Certs.verifyX5c(x5c);
        chai_1.expect(verificationResult.domainName).to.eql("example.org");
    });
    it("x5c verification should fail", function () {
        var x5c = [
            "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",
        ];
        try {
            __2.Certs.verifyX5c(x5c);
        }
        catch (err) {
            chai_1.expect(err.error).to.equal("forge.pki.BadCertificate");
            chai_1.expect(err.message).to.equal("Certificate signature is invalid.");
        }
    });
    it("Should throw invalid domain error", function () {
        var x5c = [
            "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",
        ];
        try {
            __2.Certs.verifyX5c(x5c);
        }
        catch (err) {
            chai_1.expect(err.message).equal("Invalid domain name!");
        }
    });
});
