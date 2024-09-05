type ProductsType = {
  products: product[];
};

export type product = {
  id: number;
  price: number;
  thumbnail: string;
  title: string;
  description?: string;
  brand?: string;
  rating?: number;
  category?: string;
};

export default ProductsType;
