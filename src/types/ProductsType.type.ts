type ProductsType = {
  products: product[];
};

export type product = {
  id: number;
  price: number;
  thumbnail: string;
  title: string;
};

export default ProductsType;
