import {filterList, PRODUCTS} from "@/lib/constants";
import Grid from "@/components/grid";
import ProductGridItems from "@/components/layout/product-grid-items";
import FilterList from "@/components/layout/search/filter";

export default function Home() {
  const products = PRODUCTS;
  return (
    <div className="p-6 mx-auto max-w-screen-xl">
      <div className="text-center py-4 lg:py-12 space-y-2 animate-in fade-in slide-in-from-bottom-3 duration-1000 ease-in-out">
          <h1 className="text-xl lg:text-4xl font-bold">
              オープンソースのアプリを探す
          </h1>
          <p className="text-base lg:text-lg text-muted-foreground tracking-tighter leading-tight">
              オープンソースのアプリ、API のコードで、アプリ開発をスタートさせましょう。
          </p>
      </div>
      <div className="flex md:flex-row flex-col gap-8">
          <div className="order-first w-full flex-none md:max-w-[250px]">
              <FilterList list={filterList} />
          </div>
          <div className="order-last min-h-screen w-full md:order-none">
              <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  <ProductGridItems products={products} />
              </Grid>
          </div>
      </div>
    </div>
  );
}
