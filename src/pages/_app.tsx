import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import LoadingPage from './sections/LoadingPage';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }: AppProps) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    useEffect(() => {
        const handleStart = () => {
            setLoading(true);
            setTimeout(() => setLoading(false), 500);
        };
        const handleComplete = () => setLoading(false);

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
    }, [router]);

    return (
        <div>
            {loading && (
                <div>
                    <LoadingPage />
                </div>
            )}
            <Component {...pageProps} />
        </div>
    );
}
