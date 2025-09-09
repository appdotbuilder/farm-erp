import React from 'react';
import { AppShell } from '@/components/app-shell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Building2, 
    Factory, 
    Package, 
    Users, 
    Warehouse,
    Egg,
    ChefHat,
    Truck,
    Calculator,
    TrendingUp
} from 'lucide-react';

interface BusinessUnit {
    id: number;
    code: string;
    name: string;
    type: string;
    head_office: {
        name: string;
    };
}

interface Props {
    stats: {
        head_offices: number;
        business_units: number;
        products: number;
        employees: number;
        warehouses: number;
    };
    businessUnitsByType: Record<string, number>;
    productsByCategory: Record<string, number>;
    recentBusinessUnits: BusinessUnit[];
    [key: string]: unknown;
}

const moduleIcons = {
    breeding: <Egg className="h-8 w-8" />,
    hatchery: <ChefHat className="h-8 w-8" />,
    broiler: <Factory className="h-8 w-8" />,
    layer: <Egg className="h-8 w-8" />,
    rpa: <Truck className="h-8 w-8" />,
    ho: <Building2 className="h-8 w-8" />
};

const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
        breeding: 'bg-green-100 text-green-800',
        hatchery: 'bg-yellow-100 text-yellow-800',
        broiler: 'bg-blue-100 text-blue-800',
        layer: 'bg-purple-100 text-purple-800',
        rpa: 'bg-orange-100 text-orange-800',
        ho: 'bg-gray-100 text-gray-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
};

export default function ErpDashboard({ stats, businessUnitsByType, productsByCategory, recentBusinessUnits }: Props) {
    return (
        <AppShell>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">🐔 Farm ERP System</h1>
                        <p className="text-gray-600">Comprehensive farm management and operations</p>
                    </div>
                    <Button>
                        <Calculator className="h-4 w-4 mr-2" />
                        Generate Reports
                    </Button>
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Head Offices</CardTitle>
                            <Building2 className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.head_offices}</div>
                            <p className="text-xs text-muted-foreground">Active offices</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Business Units</CardTitle>
                            <Factory className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.business_units}</div>
                            <p className="text-xs text-muted-foreground">Operating units</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Products</CardTitle>
                            <Package className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.products}</div>
                            <p className="text-xs text-muted-foreground">Active products</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Employees</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.employees}</div>
                            <p className="text-xs text-muted-foreground">Active staff</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Warehouses</CardTitle>
                            <Warehouse className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.warehouses}</div>
                            <p className="text-xs text-muted-foreground">Storage facilities</p>
                        </CardContent>
                    </Card>
                </div>

                {/* ERP Modules Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Business Units by Type */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <Factory className="h-5 w-5 mr-2" />
                                Business Units by Type
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {Object.entries(businessUnitsByType).map(([type, count]) => (
                                    <div key={type} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <div className="flex items-center space-x-3">
                                            {moduleIcons[type as keyof typeof moduleIcons]}
                                            <div>
                                                <p className="font-medium capitalize">{type}</p>
                                                <p className="text-sm text-gray-600">{count} units</p>
                                            </div>
                                        </div>
                                        <Badge className={getTypeColor(type)}>
                                            {count}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Products by Category */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <Package className="h-5 w-5 mr-2" />
                                Products by Category
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {Object.entries(productsByCategory).map(([category, count]) => (
                                    <div key={category} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <div>
                                            <p className="font-medium capitalize">{category.replace('_', ' ')}</p>
                                            <p className="text-sm text-gray-600">{count} products</p>
                                        </div>
                                        <Badge variant="outline">
                                            {count}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* ERP Modules Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle className="flex items-center text-lg">
                                <Egg className="h-6 w-6 mr-2 text-green-600" />
                                Breeding & Hatchery
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>• Breeding cycle management</li>
                                <li>• Daily mortality tracking</li>
                                <li>• Egg collection & sorting</li>
                                <li>• DOC production tracking</li>
                                <li>• Cost allocation & costing</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle className="flex items-center text-lg">
                                <Factory className="h-6 w-6 mr-2 text-blue-600" />
                                Production (Broiler/Layer)
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>• Batch management</li>
                                <li>• Daily weight & mortality</li>
                                <li>• Feed & OVK consumption</li>
                                <li>• Harvest & processing</li>
                                <li>• Cost per kg calculation</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle className="flex items-center text-lg">
                                <Warehouse className="h-6 w-6 mr-2 text-orange-600" />
                                Inventory & Procurement
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>• Multi-warehouse management</li>
                                <li>• Purchase order processing</li>
                                <li>• Stock movement tracking</li>
                                <li>• Inventory valuation</li>
                                <li>• Asset management</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle className="flex items-center text-lg">
                                <Users className="h-6 w-6 mr-2 text-purple-600" />
                                HR & Payroll
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>• Employee management</li>
                                <li>• Attendance tracking</li>
                                <li>• Payroll processing</li>
                                <li>• Labor cost allocation</li>
                                <li>• Department management</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle className="flex items-center text-lg">
                                <Calculator className="h-6 w-6 mr-2 text-red-600" />
                                Accounting & Finance
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>• Chart of accounts</li>
                                <li>• Journal entry processing</li>
                                <li>• COGS calculation</li>
                                <li>• Expense management</li>
                                <li>• Financial reporting</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle className="flex items-center text-lg">
                                <TrendingUp className="h-6 w-6 mr-2 text-indigo-600" />
                                Sales & Budgeting
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>• Sales order management</li>
                                <li>• Customer management</li>
                                <li>• Budget planning</li>
                                <li>• Actual vs budget analysis</li>
                                <li>• Performance reporting</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                {/* Recent Business Units */}
                {recentBusinessUnits.length > 0 && (
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <Building2 className="h-5 w-5 mr-2" />
                                Recent Business Units
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {recentBusinessUnits.map((unit) => (
                                    <div key={unit.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <div className="flex items-center space-x-3">
                                            {moduleIcons[unit.type as keyof typeof moduleIcons]}
                                            <div>
                                                <p className="font-medium">{unit.name}</p>
                                                <p className="text-sm text-gray-600">
                                                    {unit.code} • {unit.head_office.name}
                                                </p>
                                            </div>
                                        </div>
                                        <Badge className={getTypeColor(unit.type)}>
                                            {unit.type}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
        </AppShell>
    );
}