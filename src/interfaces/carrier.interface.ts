export interface Carrier {
    name: string; // Carrier's name
    trackingURL: string; // URL for tracking shipments
    contactInfo?: string; // Optional contact information for the carrier
    carrierServiceType: CarrierServiceType[]; // Types of services offered (e.g., standard, express, etc.)
}

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
export enum CarrierServiceType {
    Standard = "Standard",
    Express = "Express",
    Overnight = "Overnight",
    SameDay = "SameDay",
    TwoDay = "TwoDay",
    International = "International",
    Economy = "Economy",
    Freight = "Freight",
    Priority = "Priority"
}

