import Link from "next/link";
import {clsx} from "clsx";
import Logo from "@/components/layout/navbar/logo";
import {APP_NAME} from "@/lib/constants";


export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 dark:bg-background/5 backdrop-blur z-20">
            <nav className="h-16 flex items-center justify-between px-4 lg:px-12">
                <div className="hidden lg:flex lg:gap-10 lg:items-center">
                    <Link href="/" className="flex gap-1 items-center">
                        <Logo width={40} height={40} />
                        <span className="font-medium text-lg md:text-2xl">{APP_NAME}</span>
                    </Link>
                </div>

                <div className={clsx("flex items-center gap-2 lg:hidden")}>
                    {/*<MobileSidebar />*/}
                    <Link href="/" className="flex items-center">
                        <Logo width={35} height={35} />
                        <span className="font-medium text-lg md:text-2xl">{APP_NAME}</span>
                    </Link>
                </div>

                <div className="hidden justify-center lg:flex lg:w-1/2 lg:gap-2">
                    {/*<Suspense fallback={<SearchSkeleton />}>*/}
                    {/*    <Supermarket />*/}
                    {/*    <Search />*/}
                    {/*</Suspense>*/}
                </div>

                <div className="flex justify-end lg:gap-4 items-center">
                    {/*<UserNav className={"hidden lg:flex"} />*/}
                    {/*<HouseholdNav />*/}
                    {/*<div className="lg:w-1/3">*/}
                    {/*    <Suspense fallback={<OpenCart />}>*/}
                    {/*        <Cart />*/}
                    {/*    </Suspense>*/}
                    {/*</div>*/}
                </div>
            </nav>
        </div>
    );
}