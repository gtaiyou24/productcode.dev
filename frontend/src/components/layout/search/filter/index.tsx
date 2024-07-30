import {Suspense} from "react";
import {Search} from "lucide-react";
import {FilterListItem} from "@/lib/types";
import {FilterItem} from "@/components/layout/search/filter/item";
import FilterItemDrawer from "@/components/layout/search/filter/drawer";
import {Input} from "@/components/ui/input";

const FilterItemList = ({ list }: { list: FilterListItem[]; }) => {
    return (
        <>
            <div className="relative text-sm mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                    type="text"
                    placeholder="Search..."
                    className="bg-gray-50 text-black dark:bg-gray-800 dark:text-white pl-10 pr-4 py-2 rounded-md"
                />
            </div>
            <ul>
                {list.map((item, index) => (
                    <li key={index} className="py-2 border-b">
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