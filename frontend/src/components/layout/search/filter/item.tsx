"use client";

import {FilterListItem} from "@/lib/types";
import {ChevronRight} from "lucide-react";
import {useState} from "react";
import clsx from "clsx";
import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";

export function FilterItem({ item }: { item: FilterListItem }) {
    const [open, setOpen] = useState<boolean>(false);
    const toggleItem = () => setOpen(!open);

    return (
        <>
            <button className="group flex items-center justify-between w-full text-left" onClick={toggleItem}>
                <span className="text-sm font-extralight duration-300 ease-in-out lg:group-hover:text-base">{item.name}</span>
                <ChevronRight
                    size={18}
                    className={`transform transition duration-300 ease-in-out ${open ? 'rotate-90' : 'rotate-0'}`}
                />
            </button>
            <div
                className={clsx("grid gap-2 ml-4 mt-2 max-h-0 overflow-hidden", { hidden: !open })}
                style={{ maxHeight: item.options ? '1000px' : '0' }}
            >
                {item.options.map((option, optionIndex) => (
                    <Button key={optionIndex} asChild variant="secondary" size="sm" className="justify-start rounded-lg">
                      <div className="flex gap-2">
                        <Checkbox id={`${item.handle}-${optionIndex}`} />
                        <label htmlFor={`${item.handle}-${optionIndex}`} className="text-sm w-full">{option}</label>
                      </div>
                    </Button>
                ))}
            </div>
        </>
    );
}