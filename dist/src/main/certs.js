"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exceptions_1 = require("./exceptions");
var node_forge_1 = require("node-forge");
var Certs = /** @class */ (function () {
    function Certs() {
    }
    Certs.certPemsToX5c = function (certPems) {
        var x5c = [];
        for (var i in certPems) {
            var certBase64 = node_forge_1.util.encode64(node_forge_1.pki.pemToDer(certPems[i]).data);
            x5c.push(certBase64);
        }
        return x5c;
    };
    Certs.x5cToCerts = function (x5c) {
        var certs = [];
        for (var i in x5c) {
            var certBase64 = x5c[i];
            var certPem = "-----BEGIN CERTIFICATE-----\n\n      " + certBase64 + "\n      \n-----END CERTIFICATE-----";
            certs.push(node_forge_1.pki.certificateFromPem(certPem));
        }
        return certs;
    };
    Certs.verifyX5c = function (x5c) {
        var certificates = Certs.x5cToCerts(x5c);
        var rootCert = certificates[certificates.length - 1];
        var domainName = rootCert.issuer.getField("CN").value;
        var caStore = node_forge_1.pki.createCaStore([rootCert]);
        // Verify the domain
        for (var i in certificates) {
            var certificate = certificates[i];
            if (domainName != certificate.issuer.getField("CN").value ||
                domainName != certificate.subject.getField("CN").value)
                throw new exceptions_1.CertificateVerificationException("Invalid domain name!");
        }
        var verified = node_forge_1.pki.verifyCertificateChain(caStore, certificates);
        if (!verified)
            throw new exceptions_1.CertificateVerificationException("Certificate verification failed!");
        return {
            domainName: domainName,
            certificate: certificates[0],
        };
    };
    return Certs;
}());
exports.Certs = Certs;
