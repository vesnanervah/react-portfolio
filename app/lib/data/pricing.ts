export interface PricingItem {
    title: string;
    properties: Array<string>,
    price: number,
    description: string
}

export const pricing: Array<PricingItem> = [
    {
        title: "Mini",
        properties: [
            "Up to 1 hour of shooting",
            "1 outfit / 1 location",
            "20 edited photos",
            "Online gallery",
            "Delivery within 7 days"
        ],
        price: 150,
        description: "For short sessions and quick results"
    },
    {
        title: "Classic",
        properties: [
            "Up to 2 hour of shooting",
            "2 outfit / 2 location",
            "40+ edited photos",
            "Online gallery",
            "Pre-shoot consultation",
            "Posing guidance",
            "Delivery within 10 days"
        ],
        price: 280,
        description: "Perfect for couples, portraits, or lifestyle"
    },
    {
        title: "Story",
        properties: [
            "Up to 4 hour of shooting",
            "3–4 outfits and locations",
            "80+ edited photos",
            "Online gallery + backup link",
            "Custom route planning",
            "Moodboard and styling help",
            "Includes breaks and travel time",
            "Delivery within 14 days"
        ],
        price: 450,
        description: "For when you want to capture everything"
    },
    {
        title: "Wedding",
        properties: [
            "Up to 8 hours of shooting",
            "All key moments covered",
            "250+ artistically edited photos",
            "Custom timeline planning",
            "Online gallery + USB drive",
            "Delivery within 21 days",
            "Extras: photo album, prints",
            "Optional second-day shoot",

        ],
        price: 900,
        description: "Full-day or partial wedding coverage"
    },


]