import { Product } from "./Product";

export type TabbedProducts = {
  page: number;
  perPage: number;
  products: Product[][];
  totalPages: number;
};
