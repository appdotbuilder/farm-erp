import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';



export default function LayerIndex() {
    return (
        <AppLayout>
            <Head title="🐓 Layer Management" />
            
            <div className="py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                    🐓 Layer Production Management
                                </h1>
                                <p className="text-gray-600">
                                    Manage layer cycles, egg production, and culling operations
                                </p>
                            </div>
                            <Button>
                                ➕ New Layer Cycle
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
                                <div className="text-2xl font-bold">8</div>
                                <p className="text-xs text-muted-foreground">In production</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Active Layers</CardTitle>
                                <div className="text-2xl">🐓</div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">125,850</div>
                                <p className="text-xs text-muted-foreground">Producing birds</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Daily Eggs</CardTitle>
                                <div className="text-2xl">🥚</div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">108,250</div>
                                <p className="text-xs text-muted-foreground text-green-600">86% production rate</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Feed Efficiency</CardTitle>
                                <div className="text-2xl">🌾</div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">2.1</div>
                                <p className="text-xs text-muted-foreground">kg feed per dozen eggs</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Main Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Active Layer Cycles */}
                        <div className="lg:col-span-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <span>🐓</span>
                                        <span>Active Layer Cycles</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {/* Sample layer cycles */}
                                        <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center space-x-3">
                                                    <h3 className="font-semibold">LY-2024-012</h3>
                                                    <Badge className="bg-yellow-100 text-yellow-800">Peak Production</Badge>
                                                    <span className="text-sm text-gray-600">Week 35</span>
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    Daily Report
                                                </Button>
                                            </div>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                                <div>
                                                    <p className="text-gray-600">Current Count</p>
                                                    <p className="font-medium">18,500</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Daily Eggs</p>
                                                    <p className="font-medium">16,280</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Production %</p>
                                                    <p className="font-medium">88%</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Age (weeks)</p>
                                                    <p className="font-medium">35</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center space-x-3">
                                                    <h3 className="font-semibold">LY-2024-013</h3>
                                                    <Badge className="bg-green-100 text-green-800">Good Production</Badge>
                                                    <span className="text-sm text-gray-600">Week 28</span>
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    View Performance
                                                </Button>
                                            </div>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                                <div>
                                                    <p className="text-gray-600">Current Count</p>
                                                    <p className="font-medium">19,850</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Daily Eggs</p>
                                                    <p className="font-medium">16,950</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Production %</p>
                                                    <p className="font-medium">85.4%</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Age (weeks)</p>
                                                    <p className="font-medium">28</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center space-x-3">
                                                    <h3 className="font-semibold">LY-2024-014</h3>
                                                    <Badge className="bg-blue-100 text-blue-800">Rearing</Badge>
                                                    <span className="text-sm text-gray-600">Week 16</span>
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    Monitor Growth
                                                </Button>
                                            </div>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                                <div>
                                                    <p className="text-gray-600">Current Count</p>
                                                    <p className="font-medium">20,000</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">First Egg Expected</p>
                                                    <p className="font-medium">2 weeks</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Avg Weight</p>
                                                    <p className="font-medium">1.45 kg</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Uniformity</p>
                                                    <p className="font-medium">92%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Production Analytics & Quick Actions */}
                        <div className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <span>📊</span>
                                        <span>Production Analytics</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium">Weekly Production</span>
                                            <span className="text-green-600 font-bold">758,250 eggs</span>
                                        </div>
                                        <div className="text-xs text-gray-600">
                                            Average: 108,321 eggs/day
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium">Egg Weight Avg</span>
                                            <span className="text-blue-600 font-bold">62.5g</span>
                                        </div>
                                        <div className="text-xs text-gray-600">
                                            Target range: 60-65g
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium">Feed Conversion</span>
                                            <span className="text-purple-600 font-bold">2.1 kg/dozen</span>
                                        </div>
                                        <div className="text-xs text-gray-600">
                                            Efficient performance
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium">Mortality Rate</span>
                                            <span className="text-orange-600 font-bold">0.8%</span>
                                        </div>
                                        <div className="text-xs text-gray-600">
                                            Weekly average
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
                                        🥚 Record Egg Production
                                    </Button>
                                    <Button className="w-full justify-start" variant="outline">
                                        ⚠️ Mortality Report
                                    </Button>
                                    <Button className="w-full justify-start" variant="outline">
                                        ✂️ Schedule Culling
                                    </Button>
                                    <Button className="w-full justify-start" variant="outline">
                                        🌾 Feed Consumption
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <span>📈</span>
                                        <span>Egg Grades</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <div className="text-sm">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-medium">Grade A (Large)</span>
                                            <span className="text-green-600">75%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                                        </div>
                                    </div>
                                    
                                    <div className="text-sm">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-medium">Grade B (Medium)</span>
                                            <span className="text-blue-600">18%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '18%' }}></div>
                                        </div>
                                    </div>
                                    
                                    <div className="text-sm">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-medium">Grade C (Small)</span>
                                            <span className="text-yellow-600">5%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '5%' }}></div>
                                        </div>
                                    </div>
                                    
                                    <div className="text-sm">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-medium">Cracked/Dirty</span>
                                            <span className="text-red-600">2%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-red-600 h-2 rounded-full" style={{ width: '2%' }}></div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Layer Management Tools */}
                    <div className="mt-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <span>🛠️</span>
                                    <span>Layer Management Tools</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    <div className="p-4 border border-yellow-200 rounded-lg bg-yellow-50 hover:bg-yellow-100 transition-colors cursor-pointer">
                                        <div className="text-center">
                                            <div className="text-3xl mb-2">🔄</div>
                                            <h3 className="font-semibold text-yellow-800">Cycle Management</h3>
                                            <p className="text-sm text-yellow-600">Track layer cycles</p>
                                        </div>
                                    </div>

                                    <div className="p-4 border border-green-200 rounded-lg bg-green-50 hover:bg-green-100 transition-colors cursor-pointer">
                                        <div className="text-center">
                                            <div className="text-3xl mb-2">🥚</div>
                                            <h3 className="font-semibold text-green-800">Egg Production</h3>
                                            <p className="text-sm text-green-600">Track daily production</p>
                                        </div>
                                    </div>

                                    <div className="p-4 border border-blue-200 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer">
                                        <div className="text-center">
                                            <div className="text-3xl mb-2">📊</div>
                                            <h3 className="font-semibold text-blue-800">Performance Analysis</h3>
                                            <p className="text-sm text-blue-600">Production insights</p>
                                        </div>
                                    </div>

                                    <div className="p-4 border border-red-200 rounded-lg bg-red-50 hover:bg-red-100 transition-colors cursor-pointer">
                                        <div className="text-center">
                                            <div className="text-3xl mb-2">✂️</div>
                                            <h3 className="font-semibold text-red-800">Culling Management</h3>
                                            <p className="text-sm text-red-600">Health & performance</p>
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