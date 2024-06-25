import { Multimedia, Post, PostStats } from "./post.interface";
import { Location } from "./location.interface";
import { DeliveryOptions } from "./delivery.interface";
import { Review } from "./review.interface";
import { Seller } from "./user-profile.interface";
import { Tag } from "./tag.interface";
import { Condition } from "../enums/condition.enum";
export interface MarketplaceStats extends PostStats {
    baskets: number;
}
export declare enum MarketplaceItemStatus {
    AVAILABLE = "AVAILABLE",
    SOLD = "SOLD",
    PENDING = "PENDING",
    EXPIRED = "EXPIRED"
}
export interface AuctionBid {
    price: number;
    userId: any;
}
export interface Auction {
    startDate: Date;
    endDate: Date;
    startingBid: AuctionBid;
    currentBid?: AuctionBid;
}
export interface Dimensions {
    length: number;
    width: number;
    height: number;
    unit: 'cm' | 'inch';
}
export interface Weight {
    value: number;
    unit: 'kg' | 'lb';
}
export interface MarketplaceItem extends Post {
    price?: number;
    quantity?: number;
    multimedia: Multimedia;
    statistics: MarketplaceStats;
    location: Location;
    status: MarketplaceItemStatus;
    auction: Auction;
    seller: Seller;
    deliveryOptions: DeliveryOptions;
    tags?: Tag[];
    reviews?: Review[];
    dimensions?: Dimensions;
    weight?: Weight;
    condition: Condition;
    returnPolicy?: string;
    warranty?: string;
    discounts?: {
        percentage?: number;
        amount?: number;
        validUntil?: Date;
    };
    additionalAttributes?: Record<string, string>;
}
