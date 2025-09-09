import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Props {
    auth: {
        user: {
            name: string;
        } | null;
    };
    [key: string]: unknown;
}

export default function Welcome({ auth }: Props) {
    return (
        <>
            <Head title="🐔 Poultry Farm ERP" />
            
            <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
                {/* Header */}
                <header className="bg-white/80 backdrop-blur-sm border-b border-green-200">
                    <div className="max-w-7xl mx-auto px-6 py-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-3">
                                <div className="text-3xl">🐔</div>
                                <div>
                                    <h1 className="text-2xl font-bold text-green-800">PoultryFarm ERP</h1>
                                    <p className="text-sm text-green-600">Complete Farm Management System</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-4">
                                {auth.user ? (
                                    <div className="flex items-center space-x-4">
                                        <span className="text-gray-700">Welcome back, {auth.user.name}!</span>
                                        <Button asChild>
                                            <Link href="/dashboard">Go to Dashboard</Link>
                                        </Button>
                                    </div>
                                ) : (
                                    <div className="flex items-center space-x-3">
                                        <Button variant="outline" asChild>
                                            <Link href="/login">Login</Link>
                                        </Button>
                                        <Button asChild>
                                            <Link href="/register">Get Started</Link>
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h2 className="text-5xl font-bold text-gray-900 mb-6">
                            🎯 Complete Poultry Farm Management
                        </h2>
                        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                            Streamline your poultry operations with our comprehensive ERP system. 
                            Manage breeding, hatchery, broiler, layer operations, inventory, accounting, and more in one integrated platform.
                        </p>
                        
                        {!auth.user && (
                            <div className="flex justify-center space-x-4">
                                <Button size="lg" asChild>
                                    <Link href="/register">Start Free Trial 🚀</Link>
                                </Button>
                                <Button size="lg" variant="outline" asChild>
                                    <Link href="/login">Login to Dashboard</Link>
                                </Button>
                            </div>
                        )}
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-16 bg-white/50">
                    <div className="max-w-7xl mx-auto px-6">
                        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
                            🏭 Complete Farm Operations Suite
                        </h3>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <Card className="border-green-200 hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="text-3xl mb-2">🐣</div>
                                    <CardTitle className="text-green-800">Breeding Management</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-gray-600">
                                        <li>• Cycle tracking & management</li>
                                        <li>• Daily mortality reports</li>
                                        <li>• Egg collection & sorting</li>
                                        <li>• By-product management</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="text-3xl mb-2">🥚</div>
                                    <CardTitle className="text-blue-800">Hatchery Operations</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-gray-600">
                                        <li>• Batch management</li>
                                        <li>• DOC production tracking</li>
                                        <li>• Hatch rate analysis</li>
                                        <li>• Cost calculations</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="text-3xl mb-2">🍗</div>
                                    <CardTitle className="text-orange-800">Broiler Production</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-gray-600">
                                        <li>• Batch management</li>
                                        <li>• Weight & feed tracking</li>
                                        <li>• FCR calculations</li>
                                        <li>• Harvest management</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="border-yellow-200 hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="text-3xl mb-2">🥚</div>
                                    <CardTitle className="text-yellow-800">Layer Management</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-gray-600">
                                        <li>• Production cycles</li>
                                        <li>• Daily egg production</li>
                                        <li>• Production rate analysis</li>
                                        <li>• Culling management</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="text-3xl mb-2">📦</div>
                                    <CardTitle className="text-purple-800">Inventory & Procurement</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-gray-600">
                                        <li>• Multi-warehouse management</li>
                                        <li>• Purchase requests</li>
                                        <li>• Stock transactions</li>
                                        <li>• Asset management</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="border-indigo-200 hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="text-3xl mb-2">💰</div>
                                    <CardTitle className="text-indigo-800">Accounting & Finance</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-gray-600">
                                        <li>• Chart of accounts</li>
                                        <li>• Journal entries</li>
                                        <li>• Budget planning</li>
                                        <li>• Financial reporting</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="text-3xl mb-2">👥</div>
                                    <CardTitle className="text-teal-800">HR & Payroll</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-gray-600">
                                        <li>• Employee management</li>
                                        <li>• Attendance tracking</li>
                                        <li>• Payroll processing</li>
                                        <li>• Labor cost allocation</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="border-red-200 hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="text-3xl mb-2">📊</div>
                                    <CardTitle className="text-red-800">Reports & Analytics</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-gray-600">
                                        <li>• Production reports</li>
                                        <li>• Financial statements</li>
                                        <li>• Performance metrics</li>
                                        <li>• Custom dashboards</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="text-3xl mb-2">🏢</div>
                                    <CardTitle className="text-gray-800">Organization Management</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-gray-600">
                                        <li>• Head office setup</li>
                                        <li>• Business unit management</li>
                                        <li>• Multi-location support</li>
                                        <li>• Role-based access</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
                            ✨ Why Choose Our Poultry ERP?
                        </h3>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="text-4xl mb-4">⚡</div>
                                <h4 className="text-lg font-semibold mb-2">Real-time Data</h4>
                                <p className="text-gray-600">Live production metrics and instant reporting</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="text-4xl mb-4">🔒</div>
                                <h4 className="text-lg font-semibold mb-2">Secure & Reliable</h4>
                                <p className="text-gray-600">Enterprise-grade security and data protection</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="text-4xl mb-4">📱</div>
                                <h4 className="text-lg font-semibold mb-2">Mobile Ready</h4>
                                <p className="text-gray-600">Access your farm data from anywhere, anytime</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="text-4xl mb-4">🤝</div>
                                <h4 className="text-lg font-semibold mb-2">Expert Support</h4>
                                <p className="text-gray-600">Dedicated support team with poultry expertise</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-green-600">
                    <div className="max-w-4xl mx-auto text-center px-6">
                        <h3 className="text-3xl font-bold text-white mb-4">
                            🚀 Ready to Transform Your Poultry Farm?
                        </h3>
                        <p className="text-xl text-green-100 mb-8">
                            Join thousands of poultry farmers who trust our ERP system to manage their operations efficiently.
                        </p>
                        
                        {!auth.user && (
                            <div className="flex justify-center space-x-4">
                                <Button size="lg" variant="secondary" asChild>
                                    <Link href="/register">Start Your Free Trial</Link>
                                </Button>
                                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-600" asChild>
                                    <Link href="/login">Login Now</Link>
                                </Button>
                            </div>
                        )}
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-12">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="flex items-center space-x-3 mb-4 md:mb-0">
                                <div className="text-2xl">🐔</div>
                                <div>
                                    <h4 className="text-lg font-semibold">PoultryFarm ERP</h4>
                                    <p className="text-gray-400 text-sm">Comprehensive Farm Management</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-6 text-sm text-gray-400">
                                <span>© 2024 PoultryFarm ERP</span>
                                <span>•</span>
                                <span>All Rights Reserved</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}