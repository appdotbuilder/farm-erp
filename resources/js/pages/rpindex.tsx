import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';



export default function RpaIndex() {
    return (
        <AppLayout>
            <Head title="🤖 RPA - Automated Production" />
            
            <div className="py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                    🤖 RPA - Automated Production Processes
                                </h1>
                                <p className="text-gray-600">
                                    Manage automated production processes, batch processing, and system integration
                                </p>
                            </div>
                            <Button>
                                ➕ Create New Process
                            </Button>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Active Processes</CardTitle>
                                <div className="text-2xl">⚙️</div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">24</div>
                                <p className="text-xs text-muted-foreground">Running automation</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Processing Batches</CardTitle>
                                <div className="text-2xl">📦</div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">156</div>
                                <p className="text-xs text-muted-foreground">In queue & processing</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
                                <div className="text-2xl">✅</div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">99.2%</div>
                                <p className="text-xs text-muted-foreground text-green-600">Excellent performance</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Cost Savings</CardTitle>
                                <div className="text-2xl">💰</div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">$12,450</div>
                                <p className="text-xs text-muted-foreground">This month</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Main Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Active RPA Processes */}
                        <div className="lg:col-span-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <span>🤖</span>
                                        <span>Active Automation Processes</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {/* Sample RPA processes */}
                                        <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center space-x-3">
                                                    <h3 className="font-semibold">Feed Distribution System</h3>
                                                    <Badge className="bg-green-100 text-green-800">Running</Badge>
                                                    <span className="text-sm text-gray-600">Auto-feeding active</span>
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    Monitor
                                                </Button>
                                            </div>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                                <div>
                                                    <p className="text-gray-600">Houses Covered</p>
                                                    <p className="font-medium">12</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Feed Dispensed</p>
                                                    <p className="font-medium">2,450 kg</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Efficiency</p>
                                                    <p className="font-medium">98.5%</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Next Schedule</p>
                                                    <p className="font-medium">14:30</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center space-x-3">
                                                    <h3 className="font-semibold">Environmental Control</h3>
                                                    <Badge className="bg-blue-100 text-blue-800">Optimizing</Badge>
                                                    <span className="text-sm text-gray-600">Climate management</span>
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    Adjust Settings
                                                </Button>
                                            </div>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                                <div>
                                                    <p className="text-gray-600">Temperature</p>
                                                    <p className="font-medium">24.5°C</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Humidity</p>
                                                    <p className="font-medium">65%</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Ventilation</p>
                                                    <p className="font-medium">Auto</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Energy Saved</p>
                                                    <p className="font-medium">15%</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border border-purple-200 bg-purple-50 rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center space-x-3">
                                                    <h3 className="font-semibold">Egg Collection System</h3>
                                                    <Badge className="bg-purple-100 text-purple-800">Processing</Badge>
                                                    <span className="text-sm text-gray-600">Automated collection</span>
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    View Results
                                                </Button>
                                            </div>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                                <div>
                                                    <p className="text-gray-600">Eggs Collected</p>
                                                    <p className="font-medium">28,450</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Grade A</p>
                                                    <p className="font-medium">85%</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Damage Rate</p>
                                                    <p className="font-medium">0.8%</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Collection Time</p>
                                                    <p className="font-medium">45 min</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border border-orange-200 bg-orange-50 rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center space-x-3">
                                                    <h3 className="font-semibold">Data Integration Pipeline</h3>
                                                    <Badge className="bg-orange-100 text-orange-800">Syncing</Badge>
                                                    <span className="text-sm text-gray-600">Real-time processing</span>
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    View Logs
                                                </Button>
                                            </div>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                                <div>
                                                    <p className="text-gray-600">Records Processed</p>
                                                    <p className="font-medium">156,890</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">API Calls</p>
                                                    <p className="font-medium">2,450</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Success Rate</p>
                                                    <p className="font-medium">99.8%</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Avg Response</p>
                                                    <p className="font-medium">120ms</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* System Status & Controls */}
                        <div className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <span>🖥️</span>
                                        <span>System Status</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium">Core Systems</span>
                                            <Badge variant="outline" className="bg-green-50 text-green-700">Online</Badge>
                                        </div>
                                        <div className="text-xs text-gray-600">
                                            All automation systems operational
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium">Database Sync</span>
                                            <Badge variant="outline" className="bg-green-50 text-green-700">Active</Badge>
                                        </div>
                                        <div className="text-xs text-gray-600">
                                            Real-time synchronization running
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium">Alert System</span>
                                            <Badge variant="outline" className="bg-blue-50 text-blue-700">Monitoring</Badge>
                                        </div>
                                        <div className="text-xs text-gray-600">
                                            24/7 automated monitoring active
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium">Backup Systems</span>
                                            <Badge variant="outline" className="bg-green-50 text-green-700">Ready</Badge>
                                        </div>
                                        <div className="text-xs text-gray-600">
                                            Last backup: 2 hours ago
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <span>⚡</span>
                                        <span>Quick Controls</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <Button className="w-full justify-start" variant="outline">
                                        🎮 Process Control Panel
                                    </Button>
                                    <Button className="w-full justify-start" variant="outline">
                                        📊 Real-time Dashboard
                                    </Button>
                                    <Button className="w-full justify-start" variant="outline">
                                        🔧 System Configuration
                                    </Button>
                                    <Button className="w-full justify-start" variant="outline">
                                        📝 Process Logs
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <span>📈</span>
                                        <span>Automation ROI</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <div className="text-sm">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-medium">Labor Cost Reduction</span>
                                            <span className="text-green-600">35%</span>
                                        </div>
                                        <p className="text-gray-500">$8,500 monthly savings</p>
                                    </div>
                                    
                                    <div className="text-sm">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-medium">Efficiency Gain</span>
                                            <span className="text-blue-600">28%</span>
                                        </div>
                                        <p className="text-gray-500">Process automation impact</p>
                                    </div>
                                    
                                    <div className="text-sm">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-medium">Error Reduction</span>
                                            <span className="text-purple-600">92%</span>
                                        </div>
                                        <p className="text-gray-500">Fewer manual mistakes</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* RPA Management Tools */}
                    <div className="mt-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <span>🛠️</span>
                                    <span>RPA Management & Integration Tools</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    <div className="p-4 border border-purple-200 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors cursor-pointer">
                                        <div className="text-center">
                                            <div className="text-3xl mb-2">🎮</div>
                                            <h3 className="font-semibold text-purple-800">Process Builder</h3>
                                            <p className="text-sm text-purple-600">Design automation flows</p>
                                        </div>
                                    </div>

                                    <div className="p-4 border border-blue-200 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer">
                                        <div className="text-center">
                                            <div className="text-3xl mb-2">🔗</div>
                                            <h3 className="font-semibold text-blue-800">API Integration</h3>
                                            <p className="text-sm text-blue-600">Connect external systems</p>
                                        </div>
                                    </div>

                                    <div className="p-4 border border-green-200 rounded-lg bg-green-50 hover:bg-green-100 transition-colors cursor-pointer">
                                        <div className="text-center">
                                            <div className="text-3xl mb-2">📊</div>
                                            <h3 className="font-semibold text-green-800">Analytics Engine</h3>
                                            <p className="text-sm text-green-600">Process optimization</p>
                                        </div>
                                    </div>

                                    <div className="p-4 border border-orange-200 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors cursor-pointer">
                                        <div className="text-center">
                                            <div className="text-3xl mb-2">🚨</div>
                                            <h3 className="font-semibold text-orange-800">Alert Management</h3>
                                            <p className="text-sm text-orange-600">Monitoring & notifications</p>
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