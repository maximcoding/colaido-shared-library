"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentStatus = exports.PaymentType = void 0;
var PaymentType;
(function (PaymentType) {
    PaymentType["Cash"] = "Cash";
    PaymentType["Credit"] = "Credit";
    PaymentType["PayPal"] = "Paypal";
    PaymentType["BankTransfer"] = "Bank Transfer";
})(PaymentType || (exports.PaymentType = PaymentType = {}));
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Pending"] = "Pending";
    PaymentStatus["Completed"] = "Completed";
    PaymentStatus["Cancelled"] = "Cancelled";
    PaymentStatus["Failed"] = "Failed";
})(PaymentStatus || (exports.PaymentStatus = PaymentStatus = {}));
