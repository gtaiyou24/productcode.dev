"use client";

import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {FilterListItem} from "@/lib/types";
import {ChevronRight, Filter, Search} from "lucide-react";
import {FilterItem} from "@/components/layout/search/filter/item";

export default function FilterItemDrawer({ list }: { list: FilterListItem[]; }) {
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
            <Drawer>
                <DrawerTrigger asChild>
                    <button className="flex text-base font-semibold items-center justify-between w-full text-left py-2 border-b focus:outline-none focus:ring-1 focus:ring-current">
                        <span className="flex gap-1 items-center">
                            <Filter className="h-5 w-5 text-gray-500" />
                            フィルター
                        </span>
                        <ChevronRight size={18} className={`transform transition duration-300 ease-in-out`} />
                    </button>
                </DrawerTrigger>
                <DrawerContent className="p-4">
                    <DrawerHeader>
                        <DrawerTitle>フィルター</DrawerTitle>
                    </DrawerHeader>
                    <ul>
                        {list.map((item, index) => (
                            <li key={index} className="py-2 border-b">
                                <FilterItem item={item} />
                            </li>
                        ))}
                    </ul>
                </DrawerContent>
            </Drawer>
        </>
    );
}