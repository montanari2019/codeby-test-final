export interface IProductCart {
    value:      number;
    items:      Item[];
    totalizers: TotalizerProduct[];
}

export interface Item {
    name:         string;
    price:        number;
    sellingPrice: number;
    imageUrl:     string;
}

export interface TotalizerProduct {
    id:    string;
    name:  string;
    value: number;
}
