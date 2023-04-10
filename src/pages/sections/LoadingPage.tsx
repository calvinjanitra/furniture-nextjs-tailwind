import { FC } from 'react';

interface LoadingPageProps {
    message?: string;
}

const LoadingPage: FC<LoadingPageProps> = ({ message = 'Loading' }) => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <div className='w-20 h-20 rounded-full bg-gray-800 animate-pulse' />
            <div className='mt-4 text-lg font-medium text-gray-700'>{message}</div>
        </div>
    );
};

export default LoadingPage;
