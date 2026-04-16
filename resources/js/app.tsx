import { createInertiaApp } from '@inertiajs/react';
import DefaultLayout from '@/layouts/default-layout';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    layout(name, page) {
        return DefaultLayout;
    },
    title: (title) => (title ? `${title} - ${appName}` : appName),
    progress: {
        color: '#4B5563',
    },
});
