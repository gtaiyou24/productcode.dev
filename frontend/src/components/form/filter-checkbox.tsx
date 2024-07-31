import {Button} from "@/components/ui/button";

export default function Checkbox() {
    return (
        <Button asChild variant="secondary" size="sm" className="justify-start rounded-lg">
            <div className="flex gap-2">
                <Checkbox id={`${item.handle}-${optionIndex}`} />
                <label htmlFor={`${item.handle}-${optionIndex}`} className="text-sm w-full">{option}</label>
            </div>
        </Button>
    );
}