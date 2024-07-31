"use client";

import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

export default function FilterCheckbox({ id, handle, name }: { id: string; handle: string; name: string; }) {
    const router = useRouter();
    const readonlyURLSearchParams = useSearchParams();
    const pathname = usePathname();
    const value = name.trim().replace(/\s+/g, '').toLowerCase();
    return (
        <Button asChild variant="secondary" size="sm" className="justify-start w-full rounded-lg">
            <Label htmlFor={id} className="flex gap-2 items-center w-full">
                <Checkbox
                    id={id}
                    checked={readonlyURLSearchParams.has(handle, value)}
                    onCheckedChange={(checked) => {
                        const searchParams = new URLSearchParams(readonlyURLSearchParams);
                        if (checked == false) {
                            searchParams.delete(handle, value);
                        } else {
                            searchParams.append(handle, value);
                        }
                        router.push(`${pathname}?${searchParams.toString()}`);
                    }} />
                <span>{name}</span>
            </Label>
        </Button>
    );
}