// Example usage of the MarketplaceItem interface
import {MarketplaceItem, MarketplaceItemStatus} from "../src/interfaces/market-tem.interface";
import {CarrierServiceType} from "../src/interfaces/carrier.interface";
import {Condition} from "../src/enums/condition.enum";
import {MainCategory} from "../src/enums/main-category.enum";

const marketplaceItem: MarketplaceItem = {
    id: "1",
    title: "Vintage Chair",
    description: "A beautiful salon in excellent condition.",
    mainCategory: MainCategory.Marketplace,
    childCategory: {
        parentId: "123", // Office Furniture
        name: "Computer Chair"
    },
    price: 150,
    quantity: 1,
    multimedia: {
        images: ["image1.jpg", "image2.jpg"],
    },
    statistics: {
        views: 100,
        favorites: 10,
        shares: 5,
        baskets: 0
    },
    location: {
        latitude: 34.0522,
        longitude: -118.2437,
        address: "456 Example Blvd",
        city: "Los Angeles",
        state: "CA",
        country: "USA",
        postalCode: "90001",
        neighborhood: "Downtown",
        timezone: "PST",
    },
    status: MarketplaceItemStatus.AVAILABLE,
    auction: {
        startDate: new Date(),
        endDate: new Date(),
        startingBid: {
            price : 40,
            userId: 1,
        },
        currentBid: {
            price : 44,
            userId: 5,
        },
    },
    deliveryOptions: {
        pickup: {
            enabled: true,
            location: "456 Example Blvd, Los Angeles, CA 90001"
        },
        localDelivery: {
            enabled: true,
            cost: 10,
            estimatedTime: "1-2 days",
            radius: 10 // 10 km or miles
        },
        shipping: {
            enabled: true,
            cost: 20,
            estimatedTime: "3-5 days",
            international: false,
            carriers: [{
                name: "UPS",
                carrierServiceType:
                    [CarrierServiceType.Overnight,
                        CarrierServiceType.Standard,
                        CarrierServiceType.Express],
                trackingURL: "https://www.ups.com/track",
                contactInfo: "1-800-742-5877"
            }, {
                name: "FedEx",
                carrierServiceType: [
                    CarrierServiceType.Overnight,
                    CarrierServiceType.SameDay,
                    CarrierServiceType.Standard],
                trackingURL: "https://www.fedex.com/track",
                contactInfo: "1-800-463-3339"
            }]
        }
    },
    seller: {
        id: "seller123",
        name: "John Doe",
        rating: 4.5,
        email: "john.doe@example.com"
    },
    condition: Condition.Used,
    tags: [{
        name: "vintage",
        description: "Items from a previous era",
        category: "Style"
    }, {
        name: "chair",
        description: "Seating furniture",
        category: "Furniture"
    }],
    reviews: [{
        userId: "user1",
        rating: 5,
        comment: "Great chair, exactly as described!",
        date: new Date()
    }],
    dimensions: {
        length: 50,
        width: 50,
        height: 100,
        unit: "cm"
    },
    weight: {
        value: 10,
        unit: "kg"
    },
    returnPolicy: "Returns accepted within 30 days.",
    warranty: "1-year warranty included.",
    discounts: {
        percentage: 10,
        validUntil: new Date('2024-12-31')
    },
    additionalAttributes: {
        brand: "VintageBrand",
        model: "V1234"
    },
    createdAt: new Date(),
};

