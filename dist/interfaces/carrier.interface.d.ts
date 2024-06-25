export interface Carrier {
    name: string;
    trackingURL: string;
    contactInfo?: string;
    carrierServiceType: CarrierServiceType[];
}
export declare enum CarrierServiceType {
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
