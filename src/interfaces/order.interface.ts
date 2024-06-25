// Exporting enum for OrderStatus to ensure consistency across the application
export enum OrderStatus {
    Pending = "Pending",
    Processing = "Processing",
    Shipped = "Shipped",
    Delivered = "Delivered",
    Cancelled = "Cancelled",
}

// Interface for Shipping Address to encapsulate related information
export interface ShippingAddress {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
}

// Exporting the main Orders interface
export interface Order {
    id: string;
    customerId: string;
    sellerId: string;
    orderDate: Date;
    shippingAddress: ShippingAddress;
    totalAmount: number;
    paymentId: string;
    status: OrderStatus;
    trackingNumber?: string; // Optional as not all orders may have a tracking number
    estimatedDeliveryDate?: Date; // Optional as it might not be known at the time of orders
    notes?: string; // Optional field for any additional notes about the orders
    createdDate: Date;
}
