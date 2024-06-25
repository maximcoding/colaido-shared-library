export declare enum OrderStatus {
    Pending = "Pending",
    Processing = "Processing",
    Shipped = "Shipped",
    Delivered = "Delivered",
    Cancelled = "Cancelled"
}
export interface ShippingAddress {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
}
export interface Order {
    id: string;
    customerId: string;
    sellerId: string;
    orderDate: Date;
    shippingAddress: ShippingAddress;
    totalAmount: number;
    paymentId: string;
    status: OrderStatus;
    trackingNumber?: string;
    estimatedDeliveryDate?: Date;
    notes?: string;
    createdDate: Date;
}
