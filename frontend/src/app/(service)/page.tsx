import {filterList, PRODUCTS} from "@/lib/constants";
import Grid from "@/components/grid";
import ProductGridItems from "@/components/layout/product-grid-items";
import FilterList from "@/components/layout/search/filter";

export default function Home() {
  const products = PRODUCTS;
  return (
    <div className="p-6 mx-auto flex max-w-screen-xl flex-col gap-8 px-4 pb-4 text-black md:flex-row dark:text-white">
      <div className="order-first w-full flex-none md:max-w-[250px]">
          <FilterList list={filterList} />
      </div>
      <div className="order-last min-h-screen w-full md:order-none">
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} />
        </Grid>
      </div>
    </div>
  );
}
