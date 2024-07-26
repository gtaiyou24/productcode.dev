'use client'

import { ReactNode } from 'react'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import ThemeProvider from "@/components/provider/theme/theme-provider";

export default function Providers({ children }: { children: ReactNode }) {
    const queryClient = new QueryClient();
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </ThemeProvider>
    );
}