import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";

export default function FilterCheckbox({ id, name }: { id: string; name: string; }) {
    return (
        <Button asChild variant="secondary" size="sm" className="justify-start w-full rounded-lg">
            <Label htmlFor={id} className="flex gap-2 items-center w-full">
                <Checkbox id={id} onCheckedChange={(checked) => console.log(checked)} />
                <span>{name}</span>
            </Label>
        </Button>
    );
}