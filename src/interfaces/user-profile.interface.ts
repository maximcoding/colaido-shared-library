import {PaymentMethods} from "./payment.interface";

export enum UserType {
    Private = "Private",
    Business = "Business",
    Admin = "Admin",
    ContentManager = "ContentManager",
    CustomerSupport = "CustomerSupport",
}

export enum UserStatus {
    Unconfirmed = "Unconfirmed",
    Confirmed = "Confirmed",
    Banned = "Banned",
    Deactivated = "Deactivated",
    Deleted = "Deleted",
}

export interface AppSettings {
    language: string;
    currency: string;
    measurementUnit: "Meters" | "Feets";
    subscriptions: any[]; // To be detailed when available
    notifications: any[]; // To be detailed when available
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
    orders: any[]; // This could be more specific with an Order interface
    payments: PaymentMethods;
    feedbacks: any[]; // This could be more specific with a Feedback interface
    chats: any[];
    settings: AppSettings;
    createdDate: Date;
    updatedDate: Date;
}

export type Seller = Partial<UserProfile>;
export type Buyer = Partial<UserProfile>;
export type Performer = Partial<UserProfile>;

