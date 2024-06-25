import { MainCategory } from "../enums/main-category.enum";
import { ChildCategory } from "./category.interface";
export interface PostStats {
    views: number;
    favorites: number;
    shares: number;
}
export interface Multimedia {
    images?: string[];
    videos?: string[];
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
