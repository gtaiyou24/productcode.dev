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
import {ScrollArea} from "@/components/ui/scroll-area";
import SearchInput from "@/components/form/search-input";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import FilterCheckbox from "@/components/form/filter-checkbox";

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
                        <Accordion className="px-2" type="single" collapsible>
                            {list.map((item, index) => (
                                <AccordionItem key={index} value={`${index}`}>
                                    <AccordionTrigger>{item.name}</AccordionTrigger>
                                    <AccordionContent className="grid gap-2">
                                        {item.options.map((option, optionIndex) => (
                                            <FilterCheckbox key={`${item.handle}-${option}`} id={`${item.handle}-${option}`} name={option} />
                                        ))}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </ScrollArea>
                </DrawerContent>
            </Drawer>
        </>
    );
}