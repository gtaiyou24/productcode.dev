"use client";

import {FilterListItem} from "@/lib/types";
import {ChevronRight} from "lucide-react";
import {Checkbox} from "@headlessui/react";
import {useState} from "react";
import clsx from "clsx";

export function FilterItem({ item }: { item: FilterListItem }) {
    const [open, setOpen] = useState<boolean>(false);
    const toggleItem = () => setOpen(!open);

    return (
        <>
            <button className="flex items-center justify-between w-full text-left" onClick={toggleItem}>
                <span>{item.name}</span>
                <ChevronRight
                    size={18}
                    className={`transform transition duration-300 ease-in-out ${open ? 'rotate-90' : 'rotate-0'}`}
                />
            </button>
            <ul className={clsx(
                "ml-4 mt-2 transition-all duration-500 ease-in-out max-h-0 overflow-hidden",
                {
                    hidden: !open
                }
            )}
                style={{ maxHeight: item.options ? '1000px' : '0' }}>
                {item.options.map((option, optionIndex) => (
                    <li key={optionIndex} className="flex items-center space-x-2 py-1">
                        <Checkbox id={`option-${optionIndex}`} />
                        <label htmlFor={`option-${optionIndex}`} className="text-sm">{option}</label>
                    </li>
                ))}
            </ul>
        </>
    );
}