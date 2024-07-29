import {PRODUCTS} from "@/lib/constants";
import Grid from "@/components/grid";
import ProductGridItems from "@/components/layout/product-grid-items";

export default function Home() {
  const products = PRODUCTS;
  return (
    <div className="p-6 mx-auto max-w-screen-xl">
      <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <ProductGridItems products={products} />
      </Grid>
    </div>
  );
}
