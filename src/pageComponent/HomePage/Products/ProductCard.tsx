import { ReactElement } from "react";
import { Product } from "src/pages/api/types/Product";

type Props = {
  product: Product;
};
export default function ProductCard({ product }: Props): ReactElement {
  return (
    <div>
      <img src="product.imagesrc"></img>
    </div>
  );
}
