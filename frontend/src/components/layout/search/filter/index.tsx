"use client";

import {Suspense} from "react";
import {Search} from "lucide-react";
import {FilterListItem} from "@/lib/types";
import {FilterItem} from "@/components/layout/search/filter/item";

const FilterItemList = ({ list }: { list: FilterListItem[]; }) => {
    return (
        <>
            <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-gray-50 text-black dark:bg-gray-800 dark:text-white pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-current"
                />
            </div>
            <ul>
                {list.map((item, index) => (
                    <li key={index} className="py-2">
                        <FilterItem item={item} />
                    </li>
                ))}
            </ul>
        </>
    );
};

export default function FilterList({ list }: { list: FilterListItem[] }) {
    return (
        <nav>
            <h3 className="hidden text-base font-bold text-black md:block dark:text-white mb-4">
                絞り込み
            </h3>
            <ul className="hidden md:block">
                <Suspense fallback={null}>
                    <FilterItemList list={list} />
                </Suspense>
            </ul>
            <ul className="md:hidden">
                <Suspense fallback={null}>
                    SP画面のフィルタリング
                    {/*<FilterItemDropdown list={list} />*/}
                </Suspense>
            </ul>
        </nav>
    );
}