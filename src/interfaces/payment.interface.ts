
export interface PaymentMethods {
    creditCards: string[];
    paypalService: boolean;
    bankTransfer: boolean;
}

export enum PaymentType {
    Cash = "Cash",
    Credit = "Credit",
    PayPal = "Paypal",
    BankTransfer = "Bank Transfer",
}

export enum PaymentStatus {
    Pending = "Pending",
    Completed = "Completed",
    Cancelled = "Cancelled",
    Failed = "Failed",
}

export interface Payment {
    id: string;
    userId: string;
    paymentName: string;
    providerName: string;
    paymentDetails: string; // This could be a JSON string or specific fields depending on requirements
    type: PaymentType;
    status: PaymentStatus;
    isDefault: boolean;
    lastUsedDate: Date;
}
