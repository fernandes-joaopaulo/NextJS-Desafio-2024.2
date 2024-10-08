export type products = {
    id?: number;
    title: string;
    price: string;
};

export type IndividualProducts = {
    id?: number;
    title?: string;
    price?: string;
    image?: string;
} | null;

export type Card = {
    id:number;
    title: string;
    content: string;
};