import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';



export default function ExpensesIndex() {
    return (
        <AppLayout>
            <Head title="💸 Expense Management" />
            
            <div className="py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                    💸 Operational Expense Management
                                </h1>
                                <p className="text-gray-600">
                                    Manage expense requests, disbursements, and budget tracking
                                </p>
                            </div>
                            <Button>
                                ➕ New Expense Request
                            </Button>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Monthly Expenses</CardTitle>
                                <div className="text-2xl">💰</div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">$325K</div>
                                <p className="text-xs text-muted-foreground text-orange-600">March 2024</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Pending Requests</CardTitle>
                                <div className="text-2xl">⏳</div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">23</div>
                                <p className="text-xs text-muted-foreground">Awaiting approval</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Budget Utilization</CardTitle>
                                <div className="text-2xl">📊</div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">72%</div>
                                <p className="text-xs text-muted-foreground text-yellow-600">Q1 2024 budget</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Cost Savings</CardTitle>
                                <div className="text-2xl">💡</div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">$18K</div>
                                <p className="text-xs text-muted-foreground text-green-600">vs. last month</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Main Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Recent Expense Requests */}
                        <div className="lg:col-span-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <span>📋</span>
                                        <span>Recent Expense Requests</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {/* Sample expense requests */}
                                        <div className="border border-orange-200 bg-orange-50 rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center space-x-3">
                                                    <h3 className="font-semibold">EXP-2024-0156</h3>
                                                    <Badge className="bg-orange-100 text-orange-800">Pending</Badge>
                                                    <span className="text-sm text-gray-600">Feed Purchase</span>
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    Review
                                                </Button>
                                            </div>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                                <div>
                                                    <p className="text-gray-600">Requestor</p>
                                                    <p className="font-medium">John Smith</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Amount</p>
                                                    <p className="font-medium">$28,500</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Category</p>
                                                    <p className="font-medium">Feed & Nutrition</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Date</p>
                                                    <p className="font-medium">Mar 20, 2024</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center space-x-3">
                                                    <h3 className="font-semibold">EXP-2024-0157</h3>
                                                    <Badge className="bg-green-100 text-green-800">Approved</Badge>
                                                    <span className="text-sm text-gray-600">Equipment Maintenance</span>
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    Process Payment
                                                </Button>
                                            </div>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                                <div>
                                                    <p className="text-gray-600">Requestor</p>
                                                    <p className="font-medium">Mike Johnson</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Amount</p>
                                                    <p className="font-medium">$5,200</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Category</p>
                                                    <p className="font-medium">Maintenance</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Approved</p>
                                                    <p className="font-medium">Mar 19, 2024</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center space-x-3">
                                                    <h3 className="font-semibold">EXP-2024-0158</h3>
                                                    <Badge className="bg-blue-100 text-blue-800">Processing</Badge>
                                                    <span className="text-sm text-gray-600">Veterinary Services</span>
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    Track Payment
                                                </Button>
                                            </div>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                                <div>
                                                    <p className="text-gray-600">Requestor</p>
                                                    <p className="font-medium">Dr. Sarah Wilson</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Amount</p>
                                                    <p className="font-medium">$3,450</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Category</p>
                                                    <p className="font-medium">Healthcare</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Processing</p>
                                                    <p className="font-medium">In Progress</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border border-purple-200 bg-purple-50 rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center space-x-3">
                                                    <h3 className="font-semibold">EXP-2024-0159</h3>
                                                    <Badge className="bg-purple-100 text-purple-800">Paid</Badge>
                                                    <span className="text-sm text-gray-600">Utilities</span>
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    View Receipt
                                                </Button>
                                            </div>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                                <div>
                                                    <p className="text-gray-600">Supplier</p>
                                                    <p className="font-medium">City Power Co</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Amount</p>
                                                    <p className="font-medium">$12,850</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Category</p>
                                                    <p className="font-medium">Utilities</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Paid</p>
                                                    <p className="font-medium">Mar 18, 2024</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Budget Overview & Quick Actions */}
                        <div className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <span>📊</span>
                                        <span>Budget Overview</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium">Feed & Nutrition</span>
                                            <span className="text-sm text-gray-600">$185K / $250K</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-green-600 h-2 rounded-full" style={{ width: '74%' }}></div>
                                        </div>
                                        <div className="text-xs text-gray-500">74% utilized</div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium">Labor</span>
                                            <span className="text-sm text-gray-600">$95K / $120K</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '79%' }}></div>
                                        </div>
                                        <div className="text-xs text-gray-500">79% utilized</div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium">Utilities</span>
                                            <span className="text-sm text-gray-600">$38K / $50K</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '76%' }}></div>
                                        </div>
                                        <div className="text-xs text-gray-500">76% utilized</div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium">Healthcare</span>
                                            <span className="text-sm text-gray-600">$18K / $35K</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-purple-600 h-2 rounded-full" style={{ width: '51%' }}></div>
                                        </div>
                                        <div className="text-xs text-gray-500">51% utilized</div>
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
                                        📝 Create Expense Request
                                    </Button>
                                    <Button className="w-full justify-start" variant="outline">
                                        ✅ Approve Requests
                                    </Button>
                                    <Button className="w-full justify-start" variant="outline">
                                        💳 Process Payments
                                    </Button>
                                    <Button className="w-full justify-start" variant="outline">
                                        📊 Budget Reports
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <span>📈</span>
                                        <span>Expense Analytics</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <div className="text-sm">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-medium">Top Category</span>
                                            <span className="text-green-600">Feed (57%)</span>
                                        </div>
                                        <p className="text-gray-500">$185,250 this month</p>
                                    </div>
                                    
                                    <div className="text-sm">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-medium">Avg Request Value</span>
                                            <span className="text-blue-600">$8,450</span>
                                        </div>
                                        <p className="text-gray-500">Based on last 30 days</p>
                                    </div>
                                    
                                    <div className="text-sm">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-medium">Approval Rate</span>
                                            <span className="text-purple-600">94%</span>
                                        </div>
                                        <p className="text-gray-500">Requests approved</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Expense Management Tools */}
                    <div className="mt-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <span>🛠️</span>
                                    <span>Expense Management Tools</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    <div className="p-4 border border-orange-200 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors cursor-pointer">
                                        <div className="text-center">
                                            <div className="text-3xl mb-2">📝</div>
                                            <h3 className="font-semibold text-orange-800">Request Management</h3>
                                            <p className="text-sm text-orange-600">Create & track requests</p>
                                        </div>
                                    </div>

                                    <div className="p-4 border border-green-200 rounded-lg bg-green-50 hover:bg-green-100 transition-colors cursor-pointer">
                                        <div className="text-center">
                                            <div className="text-3xl mb-2">✅</div>
                                            <h3 className="font-semibold text-green-800">Approval Workflow</h3>
                                            <p className="text-sm text-green-600">Multi-level approvals</p>
                                        </div>
                                    </div>

                                    <div className="p-4 border border-blue-200 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer">
                                        <div className="text-center">
                                            <div className="text-3xl mb-2">💳</div>
                                            <h3 className="font-semibold text-blue-800">Payment Processing</h3>
                                            <p className="text-sm text-blue-600">Disbursement management</p>
                                        </div>
                                    </div>

                                    <div className="p-4 border border-purple-200 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors cursor-pointer">
                                        <div className="text-center">
                                            <div className="text-3xl mb-2">📊</div>
                                            <h3 className="font-semibold text-purple-800">Budget Control</h3>
                                            <p className="text-sm text-purple-600">Planning & monitoring</p>
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