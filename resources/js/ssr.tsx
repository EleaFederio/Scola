import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { renderToString } from 'react-dom/server';
import createEmotionCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const theme = createTheme();

createServer((page) =>
    createInertiaApp({
        page,
        render: renderToString,
        title: (title) => (title ? `${title} - ${appName}` : appName),
        resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
        setup: ({ App, props }) => {
            const cache = createEmotionCache({ key: 'css' });
            return (
                <CacheProvider value={cache}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <App {...props} />
                    </ThemeProvider>
                </CacheProvider>
            );
        },
    }),
);
