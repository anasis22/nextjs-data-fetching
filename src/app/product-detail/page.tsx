import { Suspense } from "react";
import { Product } from "../components/product";
import { Review } from "../components/review";

export default function ProductDetail() {
  return (
    <div>
      <h2>Product Detail</h2>
      <Suspense fallback={<p>Loading product details...</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Loading reviews...</p>}>
        <Review />
      </Suspense>
    </div>
  );
}
