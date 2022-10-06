import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "src/languageService/LanguageContextProvider";
import { getTranslation } from "src/languageService/translationService";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { getAllTabbedProducts } from "src/pages/api/requests";

export default function ProductsList() {
  const [state, dispatch] = useContext(LanguageContext);
  const language = state.language.code;
  const productsText = getTranslation(language, "productPage");
  const { data: allProducts } = useQuery(["products"], getAllTabbedProducts);
  const heading = productsText.checkoutProducts;
  const categories = allProducts ? Object.keys(allProducts) : [];

  return (
    <div>
      <div>
        {categories.map((category) => (
          <div> {category}</div>
        ))}
      </div>
      {allProducts &&
        Object.keys(allProducts).map((property) =>
          allProducts[property].products.map((productPage) =>
            productPage.map((product) => (
              <div key={product.handle}>{product.handle}</div>
            ))
          )
        )}
    </div>
  );
}
