export default interface Attraction {
    id: number;
    name: string;
    city: string;
    country: string;
    entry_price: string;
    address: string;
    opening_time: string;
    closing_time: string;
    categories: string[];
    images: string[];
    coordinates: {
        lat: number;
        lon: number;
    };
}