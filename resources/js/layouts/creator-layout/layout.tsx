import React from 'react';
import DefaultLayout from '../default-layout';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import AppSidebar from './app-sidebar';
import NavHeader from './nav-header';

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
                    <main className='w-full'>
                        <NavHeader/>
                        {children}
                    </main>
                </SidebarProvider>
            </DefaultLayout>
        </>
    );
}
