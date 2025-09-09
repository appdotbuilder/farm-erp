import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Farm ERP System">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-gradient-to-br from-green-50 to-blue-50 p-6 text-gray-900 lg:justify-center lg:p-8">
                <header className="mb-6 w-full max-w-[335px] text-sm lg:max-w-6xl">
                    <nav className="flex items-center justify-end gap-4">
                        {auth.user ? (
                            <Link
                                href={route('home')}
                                className="inline-block rounded-lg bg-green-600 px-6 py-3 text-sm font-medium text-white hover:bg-green-700 transition-colors"
                            >
                                Go to ERP Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="inline-block rounded-lg border border-green-600 px-6 py-3 text-sm font-medium text-green-600 hover:bg-green-50 transition-colors"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="inline-block rounded-lg bg-green-600 px-6 py-3 text-sm font-medium text-white hover:bg-green-700 transition-colors"
                                >
                                    Get Started
                                </Link>
                            </>
                        )}
                    </nav>
                </header>

                <div className="flex w-full items-center justify-center lg:grow">
                    <main className="flex w-full max-w-6xl flex-col lg:flex-row items-center gap-12">
                        {/* Left Content */}
                        <div className="flex-1 text-center lg:text-left">
                            <div className="mb-6">
                                <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                                    🐔 <span className="text-green-600">Farm ERP</span>
                                </h1>
                                <p className="text-xl lg:text-2xl text-gray-600 mb-8">
                                    Complete farm management system for modern poultry operations
                                </p>
                            </div>

                            {/* Key Features */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                    <div className="text-2xl mb-2">🥚</div>
                                    <h3 className="font-semibold mb-2">Breeding & Hatchery</h3>
                                    <p className="text-gray-600 text-sm">Complete cycle management from breeding to DOC production</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                    <div className="text-2xl mb-2">🏭</div>
                                    <h3 className="font-semibold mb-2">Production Management</h3>
                                    <p className="text-gray-600 text-sm">Track broiler & layer operations with real-time monitoring</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                    <div className="text-2xl mb-2">📊</div>
                                    <h3 className="font-semibold mb-2">Financial Control</h3>
                                    <p className="text-gray-600 text-sm">Integrated accounting with cost tracking & budgeting</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                    <div className="text-2xl mb-2">📦</div>
                                    <h3 className="font-semibold mb-2">Inventory & Procurement</h3>
                                    <p className="text-gray-600 text-sm">Multi-warehouse inventory with automated stock management</p>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                {auth.user ? (
                                    <Link
                                        href={route('home')}
                                        className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                                    >
                                        <span className="mr-2">🚀</span>
                                        Open ERP Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('register')}
                                            className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                                        >
                                            <span className="mr-2">🚀</span>
                                            Start Free Trial
                                        </Link>
                                        <Link
                                            href={route('login')}
                                            className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
                                        >
                                            Sign In
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Right Visual/Screenshot */}
                        <div className="flex-1 max-w-lg">
                            <div className="bg-white rounded-xl shadow-2xl p-8 border border-gray-100">
                                <div className="space-y-4">
                                    <div className="h-4 bg-green-200 rounded w-3/4"></div>
                                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                                    <div className="h-4 bg-blue-200 rounded w-2/3"></div>
                                    
                                    <div className="grid grid-cols-2 gap-4 my-6">
                                        <div className="bg-green-50 p-4 rounded-lg">
                                            <div className="h-6 bg-green-300 rounded w-1/2 mb-2"></div>
                                            <div className="h-3 bg-green-200 rounded w-3/4"></div>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <div className="h-6 bg-blue-300 rounded w-1/2 mb-2"></div>
                                            <div className="h-3 bg-blue-200 rounded w-3/4"></div>
                                        </div>
                                    </div>
                                    
                                    <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                                    <div className="h-4 bg-gray-200 rounded w-3/5"></div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>

                <footer className="mt-12 text-sm text-gray-500">
                    <p>Comprehensive ERP solution for modern poultry farming operations</p>
                </footer>
            </div>
        </>
    );
}