import { Toaster } from '@/components/ui/sonner';
import React, { ReactNode } from 'react';

export default function DefaultLayout({ children }: { children: ReactNode }) {
    return (
        <React.Fragment>
            <Toaster position='top-center' />
            {children}
        </React.Fragment>
    );
}
