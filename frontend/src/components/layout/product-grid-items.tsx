import {Product} from "@/lib/types";
import Grid from "@/components/grid";
import {GridTileItem} from "@/components/grid/tile";
import Link from "next/link";


export default function ProductGridItems({ products }: { products: Product[]; }) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.id} className="animate-fadeIn">
          <Link
              className="relative inline-block h-full w-full"
              href={`/products/${product.id}`}
              prefetch={true}>
            <GridTileItem
                alt={product.name}
                src={product.featuredImage?.url}
                fill
                sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}