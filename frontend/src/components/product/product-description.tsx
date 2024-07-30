import {Product} from "@/lib/types";
import Link from "next/link";
import {Button} from "@/components/ui/button";


export default function ProductDescription({ product }: { product: Product; }) {
    return (
        <div className="grid gap-4">
            <h1 className="text-xl lg:text-4xl font-bold">{product.name}</h1>
            <p className="text-base leading-tight tracking-tighter lg:text-lg">{product.description}</p>
            <div className="grid grid-cols-2 gap-4">
                <Button size="lg" variant="secondary" asChild>
                    <Link href={product.sourceUrl} target="_blank">ソースコード</Link>
                </Button>
                <Button size="lg" asChild>
                    <Link href={product.demoUrl} target="_blank">デモ</Link>
                </Button>
            </div>
            <h2 className="text-lg font-semibold">使用技術</h2>
            {product.tags.map((tag, i) => (
                <div key={i} className="w-full flex justify-between text-muted-foreground py-2 border-b">
                    <div>{tag.name}</div>
                    <div>{tag.values.join(', ')}</div>
                </div>
            ))}
        </div>
    );
}