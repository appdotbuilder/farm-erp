import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';



export default function HatcheryIndex() {
    return (
        <AppLayout>
            <Head title="🥚 Hatchery Operations" />
            
            <div className="py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                    🥚 Hatchery Operations
                                </h1>
                                <p className="text-gray-600">
                                    Manage egg batches, incubation, and DOC production
                                </p>
                            </div>
                            <Button>
                                ➕ New Hatchery Batch
                            </Button>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Active Batches</CardTitle>
                                <div className="text-2xl">🔥</div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">8</div>
                                <p className="text-xs text-muted-foreground">In incubation</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Eggs Incubating</CardTitle>
                                <div className="text-2xl">🥚</div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">125,480</div>
                                <p className="text-xs text-muted-foreground">Total capacity: 150k</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Hatch Rate</CardTitle>
                                <div className="text-2xl">📈</div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">87.5%</div>
                                <p className="text-xs text-muted-foreground text-green-600">Above target (85%)</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">DOC Produced Today</CardTitle>
                                <div className="text-2xl">🐣</div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">18,250</div>
                                <p className="text-xs text-muted-foreground">From 3 batches</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Main Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Active Hatchery Batches */}
                        <div className="lg:col-span-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <span>🔥</span>
                                        <span>Active Incubation Batches</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {/* Sample hatchery batches */}
                                        <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center space-x-3">
                                                    <h3 className="font-semibold">HB-2024-015</h3>
                                                    <Badge className="bg-blue-100 text-blue-800">Incubating</Badge>
                                                    <span className="text-sm text-gray-600">Day 18/21</span>
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    Monitor
                                                </Button>
                                            </div>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                                <div>
                                                    <p className="text-gray-600">Eggs Set</p>
                                                    <p className="font-medium">18,500</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Expected Hatch</p>
                                                    <p className="font-medium">Mar 22, 2024</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Temperature</p>
                                                    <p className="font-medium">99.5°F</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Humidity</p>
                                                    <p className="font-medium">65%</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center space-x-3">
                                                    <h3 className="font-semibold">HB-2024-016</h3>
                                                    <Badge className="bg-green-100 text-green-800">Hatching</Badge>
                                                    <span className="text-sm text-gray-600">Day 21/21</span>
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    Collect DOCs
                                                </Button>
                                            </div>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                                <div>
                                                    <p className="text-gray-600">Eggs Set</p>
                                                    <p className="font-medium">20,000</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Hatched So Far</p>
                                                    <p className="font-medium text-green-600">17,450</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Hatch Rate</p>
                                                    <p className="font-medium">87.3%</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Status</p>
                                                    <p className="font-medium">In Progress</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border border-orange-200 bg-orange-50 rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center space-x-3">
                                                    <h3 className="font-semibold">HB-2024-017</h3>
                                                    <Badge className="bg-orange-100 text-orange-800">Setting</Badge>
                                                    <span className="text-sm text-gray-600">Day 1/21</span>
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    View Details
                                                </Button>
                                            </div>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                                <div>
                                                    <p className="text-gray-600">Eggs Set</p>
                                                    <p className="font-medium">22,000</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Set Date</p>
                                                    <p className="font-medium">Mar 15, 2024</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Expected Yield</p>
                                                    <p className="font-medium">19,250 DOCs</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Source Farm</p>
                                                    <p className="font-medium">BR-2024-001</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Incubator Status & Quick Actions */}
                        <div className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <span>🌡️</span>
                                        <span>Incubator Status</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium">Incubator 1</span>
                                            <Badge variant="outline" className="bg-green-50 text-green-700">Optimal</Badge>
                                        </div>
                                        <div className="text-xs space-y-1">
                                            <div className="flex justify-between">
                                                <span>Temperature:</span>
                                                <span>99.5°F</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Humidity:</span>
                                                <span>58%</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Capacity:</span>
                                                <span>18,500/20,000</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium">Incubator 2</span>
                                            <Badge variant="outline" className="bg-green-50 text-green-700">Optimal</Badge>
                                        </div>
                                        <div className="text-xs space-y-1">
                                            <div className="flex justify-between">
                                                <span>Temperature:</span>
                                                <span>99.6°F</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Humidity:</span>
                                                <span>65%</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Capacity:</span>
                                                <span>20,000/20,000</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium">Hatcher 1</span>
                                            <Badge variant="outline" className="bg-blue-50 text-blue-700">Active</Badge>
                                        </div>
                                        <div className="text-xs space-y-1">
                                            <div className="flex justify-between">
                                                <span>Temperature:</span>
                                                <span>98.8°F</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Humidity:</span>
                                                <span>75%</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Progress:</span>
                                                <span>87% hatched</span>
                                            </div>
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
                                        🥚 Set New Batch
                                    </Button>
                                    <Button className="w-full justify-start" variant="outline">
                                        🐣 Collect DOCs
                                    </Button>
                                    <Button className="w-full justify-start" variant="outline">
                                        📊 Record Hatch Data
                                    </Button>
                                    <Button className="w-full justify-start" variant="outline">
                                        🌡️ Monitor Conditions
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <span>📈</span>
                                        <span>Weekly Summary</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <div className="text-sm">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-medium">Eggs Set</span>
                                            <span className="text-blue-600">145,500</span>
                                        </div>
                                        <p className="text-gray-500">This week</p>
                                    </div>
                                    
                                    <div className="text-sm">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-medium">DOCs Produced</span>
                                            <span className="text-green-600">126,850</span>
                                        </div>
                                        <p className="text-gray-500">87.2% hatch rate</p>
                                    </div>
                                    
                                    <div className="text-sm">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-medium">Revenue</span>
                                            <span className="text-purple-600">$63,425</span>
                                        </div>
                                        <p className="text-gray-500">$0.50 per DOC</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Production Analytics */}
                    <div className="mt-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <span>📊</span>
                                    <span>Production Analytics & Tools</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    <div className="p-4 border border-blue-200 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer">
                                        <div className="text-center">
                                            <div className="text-3xl mb-2">📈</div>
                                            <h3 className="font-semibold text-blue-800">Hatch Rate Analysis</h3>
                                            <p className="text-sm text-blue-600">Track performance trends</p>
                                        </div>
                                    </div>

                                    <div className="p-4 border border-green-200 rounded-lg bg-green-50 hover:bg-green-100 transition-colors cursor-pointer">
                                        <div className="text-center">
                                            <div className="text-3xl mb-2">💰</div>
                                            <h3 className="font-semibold text-green-800">Cost Analysis</h3>
                                            <p className="text-sm text-green-600">Per DOC costing</p>
                                        </div>
                                    </div>

                                    <div className="p-4 border border-orange-200 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors cursor-pointer">
                                        <div className="text-center">
                                            <div className="text-3xl mb-2">🌡️</div>
                                            <h3 className="font-semibold text-orange-800">Environment Control</h3>
                                            <p className="text-sm text-orange-600">Temperature & humidity</p>
                                        </div>
                                    </div>

                                    <div className="p-4 border border-purple-200 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors cursor-pointer">
                                        <div className="text-center">
                                            <div className="text-3xl mb-2">📋</div>
                                            <h3 className="font-semibold text-purple-800">Quality Control</h3>
                                            <p className="text-sm text-purple-600">DOC grading & sorting</p>
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