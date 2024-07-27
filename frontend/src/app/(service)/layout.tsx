import Navbar from "@/components/layout/navbar";

export default function Layout({ children }: { children: React.ReactNode; }) {
    return (
        <>
            <Navbar />
            <div className="pt-16">
                <div className="w-full">
                    {children}
                </div>
            </div>
        </>
    );
}