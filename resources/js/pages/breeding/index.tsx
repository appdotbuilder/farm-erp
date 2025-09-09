import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';



export default function BreedingIndex() {
    return (
        <AppLayout>
            <Head title="🐣 Breeding Management" />
            
            <div className="py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                    🐣 Breeding Management
                                </h1>
                                <p className="text-gray-600">
                                    Manage breeding cycles, daily reports, and egg collection
                                </p>
                            </div>
                            <Button>
                                ➕ New Breeding Cycle
                            </Button>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Active Cycles</CardTitle>
                                <div className="text-2xl">🔄</div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">12</div>
                                <p className="text-xs text-muted-foreground">Currently running</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Birds</CardTitle>
                                <div className="text-2xl">🐔</div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">45,280</div>
                                <p className="text-xs text-muted-foreground">Across all cycles</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Daily Eggs</CardTitle>
                                <div className="text-2xl">🥚</div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">28,450</div>
                                <p className="text-xs text-muted-foreground text-green-600">+5.2% vs yesterday</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Mortality Rate</CardTitle>
                                <div className="text-2xl">⚠️</div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">0.8%</div>
                                <p className="text-xs text-muted-foreground text-green-600">Within normal range</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Main Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Active Breeding Cycles */}
                        <div className="lg:col-span-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <span>🔄</span>
                                        <span>Active Breeding Cycles</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {/* Sample breeding cycles */}
                                        <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center space-x-3">
                                                    <h3 className="font-semibold">BR-2024-001</h3>
                                                    <Badge className="bg-green-100 text-green-800">Active</Badge>
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    View Details
                                                </Button>
                                            </div>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                                <div>
                                                    <p className="text-gray-600">Strain</p>
                                                    <p className="font-medium">Ross 308</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Start Date</p>
                                                    <p className="font-medium">Jan 15, 2024</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Current Birds</p>
                                                    <p className="font-medium">15,420</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Daily Eggs</p>
                                                    <p className="font-medium">12,850</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center space-x-3">
                                                    <h3 className="font-semibold">BR-2024-002</h3>
                                                    <Badge className="bg-blue-100 text-blue-800">Active</Badge>
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    View Details
                                                </Button>
                                            </div>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                                <div>
                                                    <p className="text-gray-600">Strain</p>
                                                    <p className="font-medium">Cobb 500</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Start Date</p>
                                                    <p className="font-medium">Feb 1, 2024</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Current Birds</p>
                                                    <p className="font-medium">18,250</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Daily Eggs</p>
                                                    <p className="font-medium">15,600</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border border-orange-200 bg-orange-50 rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center space-x-3">
                                                    <h3 className="font-semibold">BR-2024-003</h3>
                                                    <Badge className="bg-orange-100 text-orange-800">Starting</Badge>
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    View Details
                                                </Button>
                                            </div>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                                <div>
                                                    <p className="text-gray-600">Strain</p>
                                                    <p className="font-medium">Arbor Acres</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Start Date</p>
                                                    <p className="font-medium">Mar 15, 2024</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Initial DOC PS</p>
                                                    <p className="font-medium">12,000</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Status</p>
                                                    <p className="font-medium">Preparing</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Quick Actions & Recent Reports */}
                        <div className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <span>⚡</span>
                                        <span>Quick Actions</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <Button className="w-full justify-start" variant="outline">
                                        📝 Daily Mortality Report
                                    </Button>
                                    <Button className="w-full justify-start" variant="outline">
                                        🥚 Record Egg Collection
                                    </Button>
                                    <Button className="w-full justify-start" variant="outline">
                                        🏠 Manage Breeding Cages
                                    </Button>
                                    <Button className="w-full justify-start" variant="outline">
                                        📊 Production Analytics
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <span>📋</span>
                                        <span>Recent Reports</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <div className="text-sm">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-medium">Today's Mortality</span>
                                            <span className="text-red-600">32 birds</span>
                                        </div>
                                        <p className="text-gray-500">Across 15 cages</p>
                                    </div>
                                    
                                    <div className="text-sm">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-medium">Egg Collection</span>
                                            <span className="text-green-600">28,450 eggs</span>
                                        </div>
                                        <p className="text-gray-500">This morning's collection</p>
                                    </div>
                                    
                                    <div className="text-sm">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-medium">Feed Consumption</span>
                                            <span className="text-blue-600">2,850 kg</span>
                                        </div>
                                        <p className="text-gray-500">Yesterday's total</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Management Tools */}
                    <div className="mt-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <span>🛠️</span>
                                    <span>Breeding Management Tools</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    <div className="p-4 border border-green-200 rounded-lg bg-green-50 hover:bg-green-100 transition-colors cursor-pointer">
                                        <div className="text-center">
                                            <div className="text-3xl mb-2">🔄</div>
                                            <h3 className="font-semibold text-green-800">Cycle Management</h3>
                                            <p className="text-sm text-green-600">Create & manage cycles</p>
                                        </div>
                                    </div>

                                    <div className="p-4 border border-blue-200 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer">
                                        <div className="text-center">
                                            <div className="text-3xl mb-2">🏠</div>
                                            <h3 className="font-semibold text-blue-800">Cage Management</h3>
                                            <p className="text-sm text-blue-600">Monitor cage capacity</p>
                                        </div>
                                    </div>

                                    <div className="p-4 border border-orange-200 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors cursor-pointer">
                                        <div className="text-center">
                                            <div className="text-3xl mb-2">📊</div>
                                            <h3 className="font-semibold text-orange-800">Performance Analytics</h3>
                                            <p className="text-sm text-orange-600">Production insights</p>
                                        </div>
                                    </div>

                                    <div className="p-4 border border-purple-200 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors cursor-pointer">
                                        <div className="text-center">
                                            <div className="text-3xl mb-2">♻️</div>
                                            <h3 className="font-semibold text-purple-800">By-products</h3>
                                            <p className="text-sm text-purple-600">Manage waste & byproducts</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}