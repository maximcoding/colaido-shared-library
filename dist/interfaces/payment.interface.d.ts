export interface PaymentMethods {
    creditCards: string[];
    paypalService: boolean;
    bankTransfer: boolean;
}
export declare enum PaymentType {
    Cash = "Cash",
    Credit = "Credit",
    PayPal = "Paypal",
    BankTransfer = "Bank Transfer"
}
export declare enum PaymentStatus {
    Pending = "Pending",
    Completed = "Completed",
    Cancelled = "Cancelled",
    Failed = "Failed"
}
export interface Payment {
    id: string;
    userId: string;
    paymentName: string;
    providerName: string;
    paymentDetails: string;
    type: PaymentType;
    status: PaymentStatus;
    isDefault: boolean;
    lastUsedDate: Date;
}
