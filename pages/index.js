// pages/index.js

import Link from 'next/link';

const SplashPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="p-8 bg-white shadow-lg rounded-lg">
            <h1 className="text-blue-500 font-semibold mb-6">Monopoly Game</h1>
            <Link className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600" href="/login">
                Login
            </Link>
        </div>
        </div>
    );
};

export default SplashPage;
