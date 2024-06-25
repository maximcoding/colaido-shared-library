import {Carrier} from "./carrier.interface";

export interface DeliveryMethod {
    enabled: boolean;
    cost?: number; // Optional cost of delivery
    estimatedTime?: string; // Optional estimated delivery time
}
export interface Pickup extends DeliveryMethod {
    location: string; // Specific pickup location
}

export interface LocalDelivery extends DeliveryMethod {
    radius: number; // Delivery radius in kilometers or miles
}

export interface Shipping extends DeliveryMethod {
    international: boolean; // Whether international shipping is available
    carriers: Carrier[]; // List of supported carriers
}

export interface DeliveryOptions {
    pickup: Pickup;
    localDelivery: LocalDelivery;
    shipping: Shipping;
}
