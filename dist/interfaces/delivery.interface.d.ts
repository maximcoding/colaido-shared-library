import { Carrier } from "./carrier.interface";
export interface DeliveryMethod {
    enabled: boolean;
    cost?: number;
    estimatedTime?: string;
}
export interface Pickup extends DeliveryMethod {
    location: string;
}
export interface LocalDelivery extends DeliveryMethod {
    radius: number;
}
export interface Shipping extends DeliveryMethod {
    international: boolean;
    carriers: Carrier[];
}
export interface DeliveryOptions {
    pickup: Pickup;
    localDelivery: LocalDelivery;
    shipping: Shipping;
}
