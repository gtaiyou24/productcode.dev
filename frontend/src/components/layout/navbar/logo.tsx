import {APP_NAME} from "@/constants";
import Image from "next/image";


export default function Logo({ width, height }: { width: number; height: number; }) {
    return (
        <>
            <Image src='/logo-dark.png' className={"hidden light:block"} alt={APP_NAME} width={width} height={height} />
            <Image src='/logo-light.png' className={"block dark:hidden"} alt={APP_NAME} width={width} height={height} />
        </>
    );
}