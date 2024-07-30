import Image from 'next/image';
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import clsx from "clsx";

export function GridTileProduct({
  isInteractive = true,
  active,
  name,
  description,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
  name: string;
  description?: string;
} & React.ComponentProps<typeof Image>) {
  return (
      <Card className="group w-full h-full overflow-hidden rounded-lg border border-secondary text-primary bg-white dark:bg-black hover:border-primary shadow-lg hover:shadow-2xl">
          <div className="aspect-[4/3] relative overflow-hidden">
              <Image className={clsx("w-full h-full object-contain", {
                  'transition duration-300 ease-in-out group-hover:scale-105': isInteractive
              })} {...props} />
          </div>
          <CardContent className="px-5 gap-2 mb-4">
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          </CardContent>
          <CardFooter className="flex justify-between items-center px-5 border-zinc-800">
              <div className="flex items-center">
                  <span className="text-zinc-500 text-xs mr-1">by</span>
                  <Button variant="link" className="text-zinc-300 hover:text-white text-xs p-0">
                      Vercel
                  </Button>
              </div>
              <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
              </Button>
          </CardFooter>
      </Card>
  );
}