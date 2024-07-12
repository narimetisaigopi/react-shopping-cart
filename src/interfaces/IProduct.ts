export interface ProductModel {
    image: {
        id: number;
        name: string;
        hash: string;
        sha256: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        provider: string;
        provider_metadata: any; // Adjust type as needed
    }[];
    _id: string;
    id: number;
    name: string;
    price: number;
    quantity: number;
    category: {
        id: number;
        name: string;
    };
    quantity_type: {
        id: number;
        name: string;
    };
    search_name: string;
    availability: string;
    catelog_image: string;
    description: string;
    discount_label: string;
    fullname_item: string;
    num_of_ratings: number;
    offer_image: string;
    rating: number;
    related_products: number[];
    reviews: string;
    short_description: string;
    tax: number;
    videos: string;
    size_color: {
        color: string;
        size: string;
        availeble: string;
        price: number;
        mrp: number;
        discountPer: number;
    }[];
    detailed_Imgs: {
        color: string;
        imgs: string;
    }[];
    thumbnail_Imgs: {
        color: string;
        imgs: string;
    }[];
    selectedSize?: string;
    selectedColor?: string;

}

export interface ProductComponentProps {
    product: ProductModel;
}

