import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';



export default function BroilerIndex() {
    return (
        <AppLayout>
            <Head title="🍗 Broiler Production" />
            
            <div className="py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                    🍗 Broiler Production Management
                                </h1>
                                <p className="text-gray-600">
                                    Manage broiler batches, feed consumption, and harvest operations
                                </p>
                            </div>
                            <Button>
                                ➕ New Broiler Batch
                            </Button>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Active Batches</CardTitle>
                                <div className="text-2xl">🐔</div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">15</div>
                                <p className="text-xs text-muted-foreground">In production</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Birds</CardTitle>
                                <div className="text-2xl">🐣</div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">285,450</div>
                                <p className="text-xs text-muted-foreground">Across all batches</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Average Weight</CardTitle>
                                <div className="text-2xl">⚖️</div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">2.1 kg</div>
                                <p className="text-xs text-muted-foreground text-green-600">Target: 2.0kg</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">FCR Average</CardTitle>
                                <div className="text-2xl">📊</div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">1.75</div>
                                <p className="text-xs text-muted-foreground text-green-600">Excellent performance</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Main Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Active Broiler Batches */}
                        <div className="lg:col-span-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <span>🐔</span>
                                        <span>Active Broiler Batches</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {/* Sample broiler batches */}
                                        <div className="border border-orange-200 bg-orange-50 rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center space-x-3">
                                                    <h3 className="font-semibold">BL-2024-045</h3>
                                                    <Badge className="bg-orange-100 text-orange-800">Week 5</Badge>
                                                    <span className="text-sm text-gray-600">Ready in 2 weeks</span>
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    Daily Report
                                                </Button>
                                            </div>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                                <div>
                                                    <p className="text-gray-600">Current Count</p>
                                                    <p className="font-medium">18,850</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Avg Weight</p>
                                                    <p className="font-medium">1.2 kg</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">FCR</p>
                                                    <p className="font-medium">1.68</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Mortality</p>
                                                    <p className="font-medium">2.5%</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center space-x-3">
                                                    <h3 className="font-semibold">BL-2024-046</h3>
                                                    <Badge className="bg-green-100 text-green-800">Week 6</Badge>
                                                    <span className="text-sm text-gray-600">Harvest ready</span>
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    Schedule Harvest
                                                </Button>
                                            </div>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                                <div>
                                                    <p className="text-gray-600">Current Count</p>
                                                    <p className="font-medium">19,250</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Avg Weight</p>
                                                    <p className="font-medium">2.3 kg</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">FCR</p>
                                                    <p className="font-medium">1.72</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Expected Yield</p>
                                                    <p className="font-medium">44,275 kg</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center space-x-3">
                                                    <h3 className="font-semibold">BL-2024-047</h3>
                                                    <Badge className="bg-blue-100 text-blue-800">Week 3</Badge>
                                                    <span className="text-sm text-gray-600">Growing phase</span>
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    View Performance
                                                </Button>
                                            </div>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                                <div>
                                                    <p className="text-gray-600">Current Count</p>
                                                    <p className="font-medium">20,000</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Avg Weight</p>
                                                    <p className="font-medium">0.65 kg</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">FCR</p>
                                                    <p className="font-medium">1.45</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Daily Gain</p>
                                                    <p className="font-medium">65g</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Performance Metrics & Quick Actions */}
                        <div className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <span>📈</span>
                                        <span>Performance Metrics</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium">Feed Efficiency</span>
                                            <Badge variant="outline" className="bg-green-50 text-green-700">Excellent</Badge>
                                        </div>
                                        <div className="text-xs text-gray-600">
                                            Average FCR: 1.75 (Target: 1.80)
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium">Growth Rate</span>
                                            <Badge variant="outline" className="bg-blue-50 text-blue-700">Good</Badge>
                                        </div>
                                        <div className="text-xs text-gray-600">
                                            Daily gain: 58g avg (Target: 55g)
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium">Mortality Rate</span>
                                            <Badge variant="outline" className="bg-yellow-50 text-yellow-700">Watch</Badge>
                                        </div>
                                        <div className="text-xs text-gray-600">
                                            Weekly: 2.8% (Target: less than 2.5%)
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium">Uniformity</span>
                                            <Badge variant="outline" className="bg-green-50 text-green-700">Good</Badge>
                                        </div>
                                        <div className="text-xs text-gray-600">
                                            Weight CV: 8.2% (Target: less than 10%)
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <span>⚡</span>
                                        <span>Quick Actions</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <Button className="w-full justify-start" variant="outline">
                                        📝 Daily Weight Report
                                    </Button>
                                    <Button className="w-full justify-start" variant="outline">
                                        🌾 Feed Consumption
                                    </Button>
                                    <Button className="w-full justify-start" variant="outline">
                                        ⚠️ Mortality Report
                                    </Button>
                                    <Button className="w-full justify-start" variant="outline">
                                        📊 Performance Analysis
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <span>📅</span>
                                        <span>Upcoming Harvests</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <div className="text-sm">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-medium">BL-2024-046</span>
                                            <span className="text-green-600">Mar 22</span>
                                        </div>
                                        <p className="text-gray-500">19,250 birds • 44,275 kg expected</p>
                                    </div>
                                    
                                    <div className="text-sm">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-medium">BL-2024-043</span>
                                            <span className="text-blue-600">Mar 25</span>
                                        </div>
                                        <p className="text-gray-500">18,500 birds • 40,150 kg expected</p>
                                    </div>
                                    
                                    <div className="text-sm">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-medium">BL-2024-044</span>
                                            <span className="text-purple-600">Mar 28</span>
                                        </div>
                                        <p className="text-gray-500">17,800 birds • 38,760 kg expected</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Production Tools */}
                    <div className="mt-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <span>🛠️</span>
                                    <span>Broiler Production Tools</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    <div className="p-4 border border-orange-200 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors cursor-pointer">
                                        <div className="text-center">
                                            <div className="text-3xl mb-2">🍗</div>
                                            <h3 className="font-semibold text-orange-800">Batch Management</h3>
                                            <p className="text-sm text-orange-600">Create & track batches</p>
                                        </div>
                                    </div>

                                    <div className="p-4 border border-green-200 rounded-lg bg-green-50 hover:bg-green-100 transition-colors cursor-pointer">
                                        <div className="text-center">
                                            <div className="text-3xl mb-2">📊</div>
                                            <h3 className="font-semibold text-green-800">Performance Analytics</h3>
                                            <p className="text-sm text-green-600">FCR & growth analysis</p>
                                        </div>
                                    </div>

                                    <div className="p-4 border border-blue-200 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer">
                                        <div className="text-center">
                                            <div className="text-3xl mb-2">🌾</div>
                                            <h3 className="font-semibold text-blue-800">Feed Management</h3>
                                            <p className="text-sm text-blue-600">Consumption tracking</p>
                                        </div>
                                    </div>

                                    <div className="p-4 border border-purple-200 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors cursor-pointer">
                                        <div className="text-center">
                                            <div className="text-3xl mb-2">💰</div>
                                            <h3 className="font-semibold text-purple-800">Cost Analysis</h3>
                                            <p className="text-sm text-purple-600">Cost per kg calculation</p>
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