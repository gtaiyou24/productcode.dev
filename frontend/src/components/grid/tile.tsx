import Image from 'next/image';
import {Card, CardContent} from "@/components/ui/card";
import clsx from "clsx";
import {Product} from "@/lib/types";

export function GridTileProduct({
  isInteractive = true,
  active,
  product,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
  product: Product;
} & React.ComponentProps<typeof Image>) {
  return (
      <Card className="group w-full h-full overflow-hidden rounded-lg border border-secondary text-primary bg-white dark:bg-black hover:border-primary shadow-lg hover:shadow-2xl">
          <div className="aspect-[4/3] relative overflow-hidden">
              <Image className={clsx("w-full h-full object-contain", {
                  'transition duration-300 ease-in-out group-hover:scale-105': isInteractive
              })} {...props} />
          </div>
          <CardContent className="mt-2 px-4 grid gap-2">
              <h3 className="text-lg font-semibold line-clamp-2 tracking-tighter leading-tight">{product.name}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2 leading-tight">{product.description}</p>
          </CardContent>
      </Card>
  );
}