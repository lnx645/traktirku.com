import React from 'react';
import DefaultLayout from '../default-layout';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import AppSidebar from './app-sidebar';

export default function CreatorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <DefaultLayout>
                <SidebarProvider>
                    <AppSidebar/>
                    <main>
                        <SidebarTrigger/>
                        {children}
                    </main>
                </SidebarProvider>
            </DefaultLayout>
        </>
    );
}
