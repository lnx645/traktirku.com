import { createInertiaApp } from '@inertiajs/react';
import DefaultLayout from '@/layouts/default-layout';
import CreatorLayout from '@/layouts/creator-layout/layout';
import '@fontsource-variable/nunito/wght.css';


const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    layout(name, page) {
        console.log(name);

        if (name.startsWith('creator/manage')) {
            return CreatorLayout;
        } else {
            return DefaultLayout;
        }
    },
    title: (title) => (title ? `${title} - ${appName}` : appName),
    progress: {
        color: '#4B5563',
    },
});
