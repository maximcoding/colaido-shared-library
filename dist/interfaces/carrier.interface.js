"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarrierServiceType = void 0;
// name: "UPS",
//     serviceTypes: [CarrierServiceType.Standard, CarrierServiceType.Express, CarrierServiceType.Overnight],
//     trackingURL: "https://www.ups.com/track",
//     contactInfo: "1-800-742-5877"
/*
   Standard: Regular delivery service with a typical delivery timeframe.
    Express: Faster delivery service, often next-day or two-day delivery.
    Overnight: Delivery service that ensures the package arrives by the next business day.
    SameDay: Delivery service that ensures the package arrives on the same day it is sent.
    TwoDay: Guaranteed delivery within two days.
    International: Delivery service for sending packages to other countries.
    Economy: More affordable delivery option with a longer delivery timeframe.
    Freight: Service for large and heavy shipments that may require special handling.
    Priority: Higher priority service with faster delivery and additional handling options.
*/
var CarrierServiceType;
(function (CarrierServiceType) {
    CarrierServiceType["Standard"] = "Standard";
    CarrierServiceType["Express"] = "Express";
    CarrierServiceType["Overnight"] = "Overnight";
    CarrierServiceType["SameDay"] = "SameDay";
    CarrierServiceType["TwoDay"] = "TwoDay";
    CarrierServiceType["International"] = "International";
    CarrierServiceType["Economy"] = "Economy";
    CarrierServiceType["Freight"] = "Freight";
    CarrierServiceType["Priority"] = "Priority";
})(CarrierServiceType || (exports.CarrierServiceType = CarrierServiceType = {}));
