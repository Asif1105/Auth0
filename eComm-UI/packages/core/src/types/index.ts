export interface Product {
  id: number;
  name: string;
  price: number;
  imageSrc?: string;
  description: string;
  author?: string;
  pages?: string;
  purchaseDate?: string;
};

export interface GenericObject {
  [key: string]: unknown;
};
