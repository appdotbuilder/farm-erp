import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';



export default function SalesIndex() {
    return (
        <AppLayout>
            <Head title="🛒 Sales Management" />
            
            <div className="py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                    🛒 Sales & Order Management
                                </h1>
                                <p className="text-gray-600">
                                    Manage sales orders, customer relationships, and revenue tracking
                                </p>
                            </div>
                            <Button>
                                ➕ New Sales Order
                            </Button>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Monthly Sales</CardTitle>
                                <div className="text-2xl">💰</div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">$485K</div>
                                <p className="text-xs text-muted-foreground text-green-600">+18% vs last month</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
                                <div className="text-2xl">📋</div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">42</div>
                                <p className="text-xs text-muted-foreground">Pending delivery</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
                                <div className="text-2xl">👥</div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">128</div>
                                <p className="text-xs text-muted-foreground">Regular buyers</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Avg Order Value</CardTitle>
                                <div className="text-2xl">📊</div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">$8,450</div>
                                <p className="text-xs text-muted-foreground text-blue-600">+5% growth</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Main Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Recent Sales Orders */}
                        <div className="lg:col-span-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <span>📋</span>
                                        <span>Recent Sales Orders</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {/* Sample sales orders */}
                                        <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center space-x-3">
                                                    <h3 className="font-semibold">SO-2024-158</h3>
                                                    <Badge className="bg-green-100 text-green-800">Confirmed</Badge>
                                                    <span className="text-sm text-gray-600">ABC Foods Ltd</span>
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    Process Order
                                                </Button>
                                            </div>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                                <div>
                                                    <p className="text-gray-600">Product</p>
                                                    <p className="font-medium">Grade A Eggs</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Quantity</p>
                                                    <p className="font-medium">15,000 dozen</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Amount</p>
                                                    <p className="font-medium">$45,000</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Delivery</p>
                                                    <p className="font-medium">Mar 25, 2024</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center space-x-3">
                                                    <h3 className="font-semibold">SO-2024-159</h3>
                                                    <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>
                                                    <span className="text-sm text-gray-600">Fresh Market Co</span>
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    Track Delivery
                                                </Button>
                                            </div>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                                <div>
                                                    <p className="text-gray-600">Product</p>
                                                    <p className="font-medium">Broiler Meat</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Quantity</p>
                                                    <p className="font-medium">2,500 kg</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Amount</p>
                                                    <p className="font-medium">$18,750</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Delivery</p>
                                                    <p className="font-medium">Mar 22, 2024</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border border-orange-200 bg-orange-50 rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center space-x-3">
                                                    <h3 className="font-semibold">SO-2024-160</h3>
                                                    <Badge className="bg-orange-100 text-orange-800">Quote</Badge>
                                                    <span className="text-sm text-gray-600">Premium Foods Inc</span>
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    Convert to Order
                                                </Button>
                                            </div>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                                <div>
                                                    <p className="text-gray-600">Product</p>
                                                    <p className="font-medium">Mixed Products</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Quantity</p>
                                                    <p className="font-medium">Various</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Amount</p>
                                                    <p className="font-medium">$52,500</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Valid Until</p>
                                                    <p className="font-medium">Mar 30, 2024</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border border-purple-200 bg-purple-50 rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center space-x-3">
                                                    <h3 className="font-semibold">SO-2024-161</h3>
                                                    <Badge className="bg-purple-100 text-purple-800">Completed</Badge>
                                                    <span className="text-sm text-gray-600">Local Restaurant Group</span>
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    View Invoice
                                                </Button>
                                            </div>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                                <div>
                                                    <p className="text-gray-600">Product</p>
                                                    <p className="font-medium">Fresh Eggs</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Quantity</p>
                                                    <p className="font-medium">5,000 dozen</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Amount</p>
                                                    <p className="font-medium">$15,000</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Delivered</p>
                                                    <p className="font-medium">Mar 20, 2024</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Sales Analytics & Quick Actions */}
                        <div className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <span>📈</span>
                                        <span>Sales Performance</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium">This Month</span>
                                            <span className="font-bold text-green-600">$485,250</span>
                                        </div>
                                        <div className="text-xs text-gray-600">
                                            Target: $450,000 (108% achieved)
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-green-600 h-2 rounded-full" style={{ width: '108%' }}></div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium">This Quarter</span>
                                            <span className="font-bold text-blue-600">$1,285,750</span>
                                        </div>
                                        <div className="text-xs text-gray-600">
                                            Target: $1,200,000 (107% achieved)
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '107%' }}></div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium">Customer Retention</span>
                                            <span className="font-bold text-purple-600">94%</span>
                                        </div>
                                        <div className="text-xs text-gray-600">
                                            Repeat customers rate
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
                                        🛒 Create Sales Order
                                    </Button>
                                    <Button className="w-full justify-start" variant="outline">
                                        💰 Generate Quote
                                    </Button>
                                    <Button className="w-full justify-start" variant="outline">
                                        📋 Customer Management
                                    </Button>
                                    <Button className="w-full justify-start" variant="outline">
                                        📊 Sales Reports
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <span>🏆</span>
                                        <span>Top Products</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <div className="text-sm">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-medium">Grade A Eggs</span>
                                            <span className="text-green-600">$145K</span>
                                        </div>
                                        <div className="flex justify-between text-gray-500">
                                            <span>48,300 dozen sold</span>
                                            <span>35% of sales</span>
                                        </div>
                                    </div>
                                    
                                    <div className="text-sm">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-medium">Broiler Meat</span>
                                            <span className="text-blue-600">$125K</span>
                                        </div>
                                        <div className="flex justify-between text-gray-500">
                                            <span>16,650 kg sold</span>
                                            <span>28% of sales</span>
                                        </div>
                                    </div>
                                    
                                    <div className="text-sm">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-medium">DOC Sales</span>
                                            <span className="text-purple-600">$85K</span>
                                        </div>
                                        <div className="flex justify-between text-gray-500">
                                            <span>170,000 chicks</span>
                                            <span>18% of sales</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Sales Management Tools */}
                    <div className="mt-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <span>🛠️</span>
                                    <span>Sales Management Tools</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    <div className="p-4 border border-green-200 rounded-lg bg-green-50 hover:bg-green-100 transition-colors cursor-pointer">
                                        <div className="text-center">
                                            <div className="text-3xl mb-2">📋</div>
                                            <h3 className="font-semibold text-green-800">Order Management</h3>
                                            <p className="text-sm text-green-600">Process & track orders</p>
                                        </div>
                                    </div>

                                    <div className="p-4 border border-blue-200 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer">
                                        <div className="text-center">
                                            <div className="text-3xl mb-2">👥</div>
                                            <h3 className="font-semibold text-blue-800">Customer CRM</h3>
                                            <p className="text-sm text-blue-600">Manage relationships</p>
                                        </div>
                                    </div>

                                    <div className="p-4 border border-purple-200 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors cursor-pointer">
                                        <div className="text-center">
                                            <div className="text-3xl mb-2">💰</div>
                                            <h3 className="font-semibold text-purple-800">Pricing Engine</h3>
                                            <p className="text-sm text-purple-600">Dynamic pricing tools</p>
                                        </div>
                                    </div>

                                    <div className="p-4 border border-orange-200 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors cursor-pointer">
                                        <div className="text-center">
                                            <div className="text-3xl mb-2">📊</div>
                                            <h3 className="font-semibold text-orange-800">Sales Analytics</h3>
                                            <p className="text-sm text-orange-600">Performance insights</p>
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