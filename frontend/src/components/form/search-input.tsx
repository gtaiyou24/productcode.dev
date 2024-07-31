"use client";


import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {ChangeEvent} from "react";
import {Search} from "lucide-react";
import {Input} from "@/components/ui/input";

export default function SearchInput() {
    const router = useRouter();
    const readonlyURLSearchParams = useSearchParams();
    const pathname = usePathname();
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const searchParams = new URLSearchParams(readonlyURLSearchParams);
        searchParams.set('q', e.target.value);
        router.push(`${pathname}?${searchParams.toString()}`);
    };
    return (
        <div className="relative text-sm mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <Input
                type="search"
                placeholder="キーワードを入力..."
                defaultValue={readonlyURLSearchParams.get('q') ?? undefined}
                onChange={onChange}
                className="bg-gray-50 text-black dark:bg-gray-800 dark:text-white pl-9 pr-4 py-2 rounded-md"
            />
        </div>
    );
}