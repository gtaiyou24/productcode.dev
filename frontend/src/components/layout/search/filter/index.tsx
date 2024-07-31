import {Suspense} from "react";
import {FilterListItem} from "@/lib/types";
import FilterItemDrawer from "@/components/layout/search/filter/drawer";
import SearchInput from "@/components/form/search-input";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import FilterCheckbox from "@/components/form/filter-checkbox";

const FilterItemList = ({ list }: { list: FilterListItem[]; }) => {
    return (
        <>
            <SearchInput />
            <Accordion type="single" collapsible>
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
        </>
    );
};

export default function FilterList({ list }: { list: FilterListItem[] }) {
    return (
        <nav>
            <ul className="hidden md:block">
                <Suspense fallback={null}>
                    <FilterItemList list={list} />
                </Suspense>
            </ul>
            <ul className="md:hidden">
                <Suspense fallback={null}>
                    <FilterItemDrawer list={list} />
                </Suspense>
            </ul>
        </nav>
    );
}