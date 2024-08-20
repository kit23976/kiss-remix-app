import React from 'react';

export default function AppMenu() {
    return (
        <header>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <a href="tel:5541251234" className="text-sm text-gray-500 dark:text-white hover:underline">(555) 412-1234</a>
                        <a href="#" className="text-sm text-blue-600 dark:text-blue-500 hover:underline" aria-label="Login">Login</a>
                    </div>
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <a href="gay" className="text-gray-900 dark:text-white hover:underline" aria-current="page">gay</a>
                            </li>
                            <li>
                                <a href="/CreateCard" className="text-gray-900 dark:text-white hover:underline">CreateCard</a>
                            </li>
                            <li>
                                <a href="cards/MyCards" className="text-gray-900 dark:text-white hover:underline">cards.MyCards</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Features</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
