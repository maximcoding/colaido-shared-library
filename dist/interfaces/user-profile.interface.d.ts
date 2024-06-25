import { PaymentMethods } from "./payment.interface";
export declare enum UserType {
    Private = "Private",
    Business = "Business",
    Admin = "Admin",
    ContentManager = "ContentManager",
    CustomerSupport = "CustomerSupport"
}
export declare enum UserStatus {
    Unconfirmed = "Unconfirmed",
    Confirmed = "Confirmed",
    Banned = "Banned",
    Deactivated = "Deactivated",
    Deleted = "Deleted"
}
export interface AppSettings {
    language: string;
    currency: string;
    measurementUnit: "Meters" | "Feets";
    subscriptions: any[];
    notifications: any[];
    themeSettings: "Light" | "Dark" | "Custom";
}
export interface UserProfile {
    id: any;
    type: UserType;
    email: string;
    phone: string;
    birthDate: Date;
    status: UserStatus;
    name: string;
    avatarURL?: string;
    rating: number;
    walletBalance: number;
    orders: any[];
    payments: PaymentMethods;
    feedbacks: any[];
    chats: any[];
    settings: AppSettings;
    createdDate: Date;
    updatedDate: Date;
}
export type Seller = Partial<UserProfile>;
export type Buyer = Partial<UserProfile>;
export type Performer = Partial<UserProfile>;
