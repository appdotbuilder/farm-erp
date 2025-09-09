import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface BusinessUnit {
    id: number;
    code: string;
    name: string;
    type: string;
    active: boolean;
    head_office: {
        name: string;
    };
}

interface Stats {
    head_offices: number;
    business_units: number;
    employees: number;
    products: number;
    warehouses: number;
}

interface Props {
    stats: Stats;
    recentBusinessUnits: BusinessUnit[];
    [key: string]: unknown;
}

const moduleIcons = {
    breeding: '🐣',
    hatchery: '🥚',
    broiler: '🍗',
    layer: '🐓',
    rpa: '🤖',
    ho: '🏢'
};

const moduleColors = {
    breeding: 'bg-green-50 text-green-700 border-green-200',
    hatchery: 'bg-blue-50 text-blue-700 border-blue-200',
    broiler: 'bg-orange-50 text-orange-700 border-orange-200',
    layer: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    rpa: 'bg-purple-50 text-purple-700 border-purple-200',
    ho: 'bg-gray-50 text-gray-700 border-gray-200'
};

export default function ErpDashboard({ stats, recentBusinessUnits }: Props) {
    return (
        <AppLayout>
            <Head title="ERP Dashboard" />
            
            <div className="py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            🏭 Poultry Farm ERP Dashboard
                        </h1>
                        <p className="text-gray-600">
                            Overview of your farm operations and key metrics
                        </p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Head Offices</CardTitle>
                                <div className="text-2xl">🏢</div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{stats.head_offices}</div>
                                <p className="text-xs text-muted-foreground">Active offices</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Business Units</CardTitle>
                                <div className="text-2xl">🏭</div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{stats.business_units}</div>
                                <p className="text-xs text-muted-foreground">Active units</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Employees</CardTitle>
                                <div className="text-2xl">👥</div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{stats.employees}</div>
                                <p className="text-xs text-muted-foreground">Active staff</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Products</CardTitle>
                                <div className="text-2xl">📦</div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{stats.products}</div>
                                <p className="text-xs text-muted-foreground">Active products</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Warehouses</CardTitle>
                                <div className="text-2xl">🏪</div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{stats.warehouses}</div>
                                <p className="text-xs text-muted-foreground">Storage locations</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Quick Actions */}
                        <div className="lg:col-span-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <span>⚡</span>
                                        <span>Production Modules</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="p-4 border border-green-200 rounded-lg bg-green-50 hover:bg-green-100 transition-colors cursor-pointer">
                                            <div className="flex items-center space-x-3">
                                                <div className="text-3xl">🐣</div>
                                                <div>
                                                    <h3 className="font-semibold text-green-800">Breeding Module</h3>
                                                    <p className="text-sm text-green-600">Manage breeding cycles & daily reports</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-4 border border-blue-200 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer">
                                            <div className="flex items-center space-x-3">
                                                <div className="text-3xl">🥚</div>
                                                <div>
                                                    <h3 className="font-semibold text-blue-800">Hatchery Module</h3>
                                                    <p className="text-sm text-blue-600">DOC production & batch tracking</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-4 border border-orange-200 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors cursor-pointer">
                                            <div className="flex items-center space-x-3">
                                                <div className="text-3xl">🍗</div>
                                                <div>
                                                    <h3 className="font-semibold text-orange-800">Broiler Module</h3>
                                                    <p className="text-sm text-orange-600">Weight tracking & harvest management</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-4 border border-yellow-200 rounded-lg bg-yellow-50 hover:bg-yellow-100 transition-colors cursor-pointer">
                                            <div className="flex items-center space-x-3">
                                                <div className="text-3xl">🐓</div>
                                                <div>
                                                    <h3 className="font-semibold text-yellow-800">Layer Module</h3>
                                                    <p className="text-sm text-yellow-600">Egg production & cycle management</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-4 border border-purple-200 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors cursor-pointer">
                                            <div className="flex items-center space-x-3">
                                                <div className="text-3xl">📦</div>
                                                <div>
                                                    <h3 className="font-semibold text-purple-800">Inventory</h3>
                                                    <p className="text-sm text-purple-600">Stock management & procurement</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-4 border border-indigo-200 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition-colors cursor-pointer">
                                            <div className="flex items-center space-x-3">
                                                <div className="text-3xl">💰</div>
                                                <div>
                                                    <h3 className="font-semibold text-indigo-800">Accounting</h3>
                                                    <p className="text-sm text-indigo-600">Financial management & reporting</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Recent Business Units */}
                        <div>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <span>🏭</span>
                                        <span>Recent Business Units</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    {recentBusinessUnits.length === 0 ? (
                                        <p className="text-sm text-gray-500 text-center py-4">
                                            No business units found
                                        </p>
                                    ) : (
                                        recentBusinessUnits.map((unit) => (
                                            <div key={unit.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                                <div className="flex items-center space-x-3">
                                                    <div className="text-xl">
                                                        {moduleIcons[unit.type as keyof typeof moduleIcons] || '🏢'}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-medium text-sm">{unit.name}</h4>
                                                        <p className="text-xs text-gray-500">{unit.head_office.name}</p>
                                                    </div>
                                                </div>
                                                <Badge 
                                                    variant="outline" 
                                                    className={moduleColors[unit.type as keyof typeof moduleColors]}
                                                >
                                                    {unit.type}
                                                </Badge>
                                            </div>
                                        ))
                                    )}
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Management Modules */}
                    <div className="mt-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <span>🛠️</span>
                                    <span>Management & Support Modules</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    <div className="p-4 border border-teal-200 rounded-lg bg-teal-50 hover:bg-teal-100 transition-colors cursor-pointer">
                                        <div className="text-center">
                                            <div className="text-3xl mb-2">👥</div>
                                            <h3 className="font-semibold text-teal-800">HR & Payroll</h3>
                                            <p className="text-sm text-teal-600">Employee management</p>
                                        </div>
                                    </div>

                                    <div className="p-4 border border-red-200 rounded-lg bg-red-50 hover:bg-red-100 transition-colors cursor-pointer">
                                        <div className="text-center">
                                            <div className="text-3xl mb-2">💸</div>
                                            <h3 className="font-semibold text-red-800">Expenses</h3>
                                            <p className="text-sm text-red-600">Operational costs</p>
                                        </div>
                                    </div>

                                    <div className="p-4 border border-emerald-200 rounded-lg bg-emerald-50 hover:bg-emerald-100 transition-colors cursor-pointer">
                                        <div className="text-center">
                                            <div className="text-3xl mb-2">🛒</div>
                                            <h3 className="font-semibold text-emerald-800">Sales</h3>
                                            <p className="text-sm text-emerald-600">Orders & invoicing</p>
                                        </div>
                                    </div>

                                    <div className="p-4 border border-pink-200 rounded-lg bg-pink-50 hover:bg-pink-100 transition-colors cursor-pointer">
                                        <div className="text-center">
                                            <div className="text-3xl mb-2">📊</div>
                                            <h3 className="font-semibold text-pink-800">Reports</h3>
                                            <p className="text-sm text-pink-600">Analytics & insights</p>
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