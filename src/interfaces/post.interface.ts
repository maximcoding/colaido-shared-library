import {MainCategory} from "../enums/main-category.enum";
import {ChildCategory} from "./category.interface";


export interface PostStats {
    views: number;
    favorites: number;
    shares: number;
}

export interface Multimedia {
    images?: string[]; // URLs to photos
    videos?: string[]; // URLs to videos
    urls?: string[];
}

export interface Post {
    id: string;
    title: string;
    description: string;
    mainCategory: MainCategory;
    childCategory: ChildCategory;
    userVisible?: boolean;
    createdAt: Date;
    updatedAt?: Date;
}
