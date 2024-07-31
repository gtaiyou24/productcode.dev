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
import {ScrollArea} from "@/components/ui/scroll-area";
import SearchInput from "@/components/form/search-input";

export default function FilterItemDrawer({ list }: { list: FilterListItem[]; }) {
    return (
        <>
            <SearchInput />
            <Drawer>
                <DrawerTrigger asChild>
                    <button className="flex text-sm items-center justify-between w-full text-left py-2 border-b">
                        <span className="flex gap-1 items-center">
                            <Filter className="h-4 w-4 text-gray-500" />
                            フィルター
                        </span>
                        <ChevronRight size={18} className={`transform transition duration-300 ease-in-out`} />
                    </button>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>フィルター</DrawerTitle>
                    </DrawerHeader>
                    <ScrollArea className="h-96">
                        <ul>
                            {list.map((item, index) => (
                                <li key={index} className="p-4 border-b">
                                    <FilterItem item={item} />
                                </li>
                            ))}
                        </ul>
                    </ScrollArea>
                </DrawerContent>
            </Drawer>
        </>
    );
}