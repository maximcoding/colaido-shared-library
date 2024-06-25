"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
// ENUMS
__exportStar(require("./enums/condition.enum"), exports);
__exportStar(require("./enums/address-type.enum"), exports);
__exportStar(require("./enums/languages.enum"), exports);
__exportStar(require("./enums/main-category.enum"), exports);
__exportStar(require("./enums/platform-type.enum"), exports);
// INTERFACES
__exportStar(require("./interfaces/category.interface"), exports);
__exportStar(require("./interfaces/delivery.interface"), exports);
__exportStar(require("./interfaces/carrier.interface"), exports);
__exportStar(require("./interfaces/favorite.interface"), exports);
__exportStar(require("./interfaces/location.interface"), exports);
__exportStar(require("./interfaces/market-tem.interface"), exports);
__exportStar(require("./interfaces/order.interface"), exports);
__exportStar(require("./interfaces/payment.interface"), exports);
__exportStar(require("./interfaces/post.interface"), exports);
__exportStar(require("./interfaces/review.interface"), exports);
__exportStar(require("./interfaces/support-ticket.interface"), exports);
__exportStar(require("./interfaces/tag.interface"), exports);
__exportStar(require("./interfaces/user-profile.interface"), exports);
