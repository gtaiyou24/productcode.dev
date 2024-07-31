import {Suspense} from "react";
import {FilterListItem} from "@/lib/types";
import {FilterItem} from "@/components/layout/search/filter/item";
import FilterItemDrawer from "@/components/layout/search/filter/drawer";
import SearchInput from "@/components/form/search-input";

const FilterItemList = ({ list }: { list: FilterListItem[]; }) => {
    return (
        <>
            <SearchInput />
            <ul>
                {list.map((item, index) => (
                    <li key={index} className="py-4 border-b">
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