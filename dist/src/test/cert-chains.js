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
var chai_1 = require("chai");
var __1 = require("../");
var fs_1 = __importDefault(require("fs"));
describe("Testing cert chains", function () {
    it("Should convert cert to x5c", function () { return __awaiter(void 0, void 0, void 0, function () {
        var rootCertPem, certPem, x5c;
        return __generator(this, function (_a) {
            rootCertPem = fs_1.default.readFileSync("./src/test/certs/root/root.crt", "utf-8");
            certPem = fs_1.default.readFileSync("./src/test/certs/cert1/cert1.crt", "utf-8");
            x5c = __1.Certs.certPemsToX5c([certPem, rootCertPem]);
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
        var verificationResult = __1.Certs.verifyX5c(x5c);
        chai_1.expect(verificationResult.domainName).to.eql("example.org");
    });
    it("x5c verification should fail", function () {
        var x5c = [
            "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",
        ];
        try {
            __1.Certs.verifyX5c(x5c);
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
            __1.Certs.verifyX5c(x5c);
        }
        catch (err) {
            chai_1.expect(err.message).equal("Invalid domain name!");
        }
    });
});
