import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';



export default function AccountingIndex() {
    return (
        <AppLayout>
            <Head title="💰 Accounting & Finance" />
            
            <div className="py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                    💰 Accounting & Financial Management
                                </h1>
                                <p className="text-gray-600">
                                    Manage chart of accounts, journal entries, and financial reporting
                                </p>
                            </div>
                            <Button>
                                ➕ New Journal Entry
                            </Button>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Assets</CardTitle>
                                <div className="text-2xl">🏦</div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">$2.5M</div>
                                <p className="text-xs text-muted-foreground text-green-600">+12% vs last month</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
                                <div className="text-2xl">📈</div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">$485K</div>
                                <p className="text-xs text-muted-foreground">March 2024</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Operating Expenses</CardTitle>
                                <div className="text-2xl">💸</div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">$325K</div>
                                <p className="text-xs text-muted-foreground text-orange-600">March 2024</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Net Profit</CardTitle>
                                <div className="text-2xl">💎</div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">$160K</div>
                                <p className="text-xs text-muted-foreground text-green-600">33% margin</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Main Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Recent Journal Entries */}
                        <div className="lg:col-span-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <span>📝</span>
                                        <span>Recent Journal Entries</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {/* Sample journal entries */}
                                        <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center space-x-3">
                                                    <h3 className="font-semibold">JE-2024-0156</h3>
                                                    <Badge className="bg-green-100 text-green-800">Posted</Badge>
                                                    <span className="text-sm text-gray-600">Feed Purchase</span>
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    View Details
                                                </Button>
                                            </div>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                                <div>
                                                    <p className="text-gray-600">Date</p>
                                                    <p className="font-medium">Mar 20, 2024</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Amount</p>
                                                    <p className="font-medium">$28,500</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Reference</p>
                                                    <p className="font-medium">PO-2024-089</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Status</p>
                                                    <p className="font-medium">Balanced</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center space-x-3">
                                                    <h3 className="font-semibold">JE-2024-0157</h3>
                                                    <Badge className="bg-blue-100 text-blue-800">Posted</Badge>
                                                    <span className="text-sm text-gray-600">Egg Sales</span>
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    View Details
                                                </Button>
                                            </div>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                                <div>
                                                    <p className="text-gray-600">Date</p>
                                                    <p className="font-medium">Mar 19, 2024</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Amount</p>
                                                    <p className="font-medium">$45,200</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Reference</p>
                                                    <p className="font-medium">SO-2024-125</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Customer</p>
                                                    <p className="font-medium">ABC Foods Ltd</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border border-orange-200 bg-orange-50 rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center space-x-3">
                                                    <h3 className="font-semibold">JE-2024-0158</h3>
                                                    <Badge className="bg-orange-100 text-orange-800">Draft</Badge>
                                                    <span className="text-sm text-gray-600">Salary Accrual</span>
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    Review & Post
                                                </Button>
                                            </div>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                                <div>
                                                    <p className="text-gray-600">Date</p>
                                                    <p className="font-medium">Mar 31, 2024</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Amount</p>
                                                    <p className="font-medium">$32,800</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Period</p>
                                                    <p className="font-medium">March 2024</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">Employees</p>
                                                    <p className="font-medium">85</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Account Balances & Quick Actions */}
                        <div className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <span>💳</span>
                                        <span>Account Balances</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium">Cash & Bank</span>
                                            <span className="font-bold text-green-600">$485,250</span>
                                        </div>
                                        <div className="text-xs text-gray-600">
                                            1001 • Primary operating account
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium">Accounts Receivable</span>
                                            <span className="font-bold text-blue-600">$125,450</span>
                                        </div>
                                        <div className="text-xs text-gray-600">
                                            1200 • Outstanding invoices
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium">Inventory</span>
                                            <span className="font-bold text-purple-600">$350,800</span>
                                        </div>
                                        <div className="text-xs text-gray-600">
                                            1300 • Feed, medicine, supplies
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium">Accounts Payable</span>
                                            <span className="font-bold text-red-600">($85,200)</span>
                                        </div>
                                        <div className="text-xs text-gray-600">
                                            2001 • Supplier invoices due
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
                                        📝 Create Journal Entry
                                    </Button>
                                    <Button className="w-full justify-start" variant="outline">
                                        📊 Trial Balance
                                    </Button>
                                    <Button className="w-full justify-start" variant="outline">
                                        💹 Income Statement
                                    </Button>
                                    <Button className="w-full justify-start" variant="outline">
                                        🏦 Balance Sheet
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <span>📊</span>
                                        <span>Financial Ratios</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <div className="text-sm">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-medium">Current Ratio</span>
                                            <span className="text-green-600">2.4:1</span>
                                        </div>
                                        <p className="text-gray-500">Good liquidity position</p>
                                    </div>
                                    
                                    <div className="text-sm">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-medium">Debt to Equity</span>
                                            <span className="text-blue-600">0.35:1</span>
                                        </div>
                                        <p className="text-gray-500">Conservative leverage</p>
                                    </div>
                                    
                                    <div className="text-sm">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-medium">ROI</span>
                                            <span className="text-purple-600">18.5%</span>
                                        </div>
                                        <p className="text-gray-500">Strong returns</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Financial Management Tools */}
                    <div className="mt-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <span>🛠️</span>
                                    <span>Financial Management Tools</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    <div className="p-4 border border-green-200 rounded-lg bg-green-50 hover:bg-green-100 transition-colors cursor-pointer">
                                        <div className="text-center">
                                            <div className="text-3xl mb-2">📋</div>
                                            <h3 className="font-semibold text-green-800">Chart of Accounts</h3>
                                            <p className="text-sm text-green-600">Manage account structure</p>
                                        </div>
                                    </div>

                                    <div className="p-4 border border-blue-200 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer">
                                        <div className="text-center">
                                            <div className="text-3xl mb-2">📝</div>
                                            <h3 className="font-semibold text-blue-800">Journal Entries</h3>
                                            <p className="text-sm text-blue-600">Record transactions</p>
                                        </div>
                                    </div>

                                    <div className="p-4 border border-purple-200 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors cursor-pointer">
                                        <div className="text-center">
                                            <div className="text-3xl mb-2">📊</div>
                                            <h3 className="font-semibold text-purple-800">Financial Reports</h3>
                                            <p className="text-sm text-purple-600">P&L, Balance Sheet, etc.</p>
                                        </div>
                                    </div>

                                    <div className="p-4 border border-orange-200 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors cursor-pointer">
                                        <div className="text-center">
                                            <div className="text-3xl mb-2">📈</div>
                                            <h3 className="font-semibold text-orange-800">Budget Management</h3>
                                            <p className="text-sm text-orange-600">Planning & analysis</p>
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