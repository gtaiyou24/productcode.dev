import {Suspense} from "react";
import Image from "next/image";
import ProductDescription from "@/components/product/product-description";
import {PRODUCTS} from "@/lib/constants";
import {notFound} from "next/navigation";
import {ArrowLeft} from "lucide-react";
import Link from "next/link";


export default function ProductDetailPage({ params }: { params: { id: string; } }) {
    const product = PRODUCTS.filter((product) => product.id == params.id).pop();
    if (!product) return notFound();
    return (
        <div className="p-6 mx-auto max-w-screen-xl px-4 pb-4 text-black dark:text-white">
            <Link href="/" className="flex gap-2 items-center text-sm tracking-tighter text-muted-foreground">
                <ArrowLeft className="h-4 w-4" />
                一覧ページに戻る
            </Link>
            <div className="lg:mt-6 flex flex-col lg:flex-row lg:gap-8">
                <div className="h-full w-full max-w-[550px] lg:w-1/2">
                    <Suspense fallback={null}>
                        <ProductDescription product={product} />
                    </Suspense>
                </div>
                <div className="order-first lg:order-last w-full lg:w-1/2">
                    <Suspense
                        fallback={
                            <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden" />
                        }
                    >
                        <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden">
                            <Image
                                className="h-auto w-full object-contain"
                                fill
                                sizes="(min-width: 1024px) 66vw, 100vw"
                                alt={product.name}
                                src={product.featuredImage.url}
                                priority={true}
                            />
                        </div>
                    </Suspense>
                </div>
            </div>
        </div>
    );
}