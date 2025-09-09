import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Package, Plus, Search, AlertTriangle, TrendingDown, TrendingUp } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function InventoryIndex() {
    return (
        <>
            <Head title="Inventory" />
            <AppLayout>
                <div className="container mx-auto p-6 space-y-6">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold">📦 Inventory Management</h1>
                            <p className="text-gray-600">Track stock levels across all warehouses</p>
                        </div>
                        <Button className="bg-green-600 hover:bg-green-700">
                            <Plus className="w-4 h-4 mr-2" />
                            Stock Transaction
                        </Button>
                    </div>

                    {/* Summary Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <Card>
                            <CardContent className="p-4">
                                <div className="flex items-center gap-2">
                                    <Package className="w-8 h-8 text-blue-600" />
                                    <div>
                                        <p className="text-sm text-gray-600">Total Products</p>
                                        <p className="text-2xl font-bold">245</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        
                        <Card>
                            <CardContent className="p-4">
                                <div className="flex items-center gap-2">
                                    <TrendingUp className="w-8 h-8 text-green-600" />
                                    <div>
                                        <p className="text-sm text-gray-600">Total Value</p>
                                        <p className="text-2xl font-bold">$125,750</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        
                        <Card>
                            <CardContent className="p-4">
                                <div className="flex items-center gap-2">
                                    <AlertTriangle className="w-8 h-8 text-orange-600" />
                                    <div>
                                        <p className="text-sm text-gray-600">Low Stock</p>
                                        <p className="text-2xl font-bold">12</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        
                        <Card>
                            <CardContent className="p-4">
                                <div className="flex items-center gap-2">
                                    <TrendingDown className="w-8 h-8 text-red-600" />
                                    <div>
                                        <p className="text-sm text-gray-600">Out of Stock</p>
                                        <p className="text-2xl font-bold">3</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="flex gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input 
                                placeholder="Search inventory items..." 
                                className="pl-10"
                            />
                        </div>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Inventory Items</CardTitle>
                            <CardDescription>Current stock levels by product and location</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b">
                                            <th className="text-left p-2">Product</th>
                                            <th className="text-left p-2">Warehouse</th>
                                            <th className="text-right p-2">Quantity</th>
                                            <th className="text-right p-2">Unit Cost</th>
                                            <th className="text-right p-2">Total Value</th>
                                            <th className="text-center p-2">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b hover:bg-gray-50">
                                            <td className="p-2 font-medium">Feed - Starter</td>
                                            <td className="p-2">Main Warehouse</td>
                                            <td className="p-2 text-right">1,250.00 kg</td>
                                            <td className="p-2 text-right">$1.25</td>
                                            <td className="p-2 text-right">$1,562.50</td>
                                            <td className="p-2 text-center">
                                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                                                    In Stock
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="border-b hover:bg-gray-50">
                                            <td className="p-2 font-medium">Feed - Finisher</td>
                                            <td className="p-2">Main Warehouse</td>
                                            <td className="p-2 text-right">850.00 kg</td>
                                            <td className="p-2 text-right">$1.35</td>
                                            <td className="p-2 text-right">$1,147.50</td>
                                            <td className="p-2 text-center">
                                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                                                    In Stock
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="border-b hover:bg-gray-50">
                                            <td className="p-2 font-medium">Vaccine - Newcastle</td>
                                            <td className="p-2">Cold Storage</td>
                                            <td className="p-2 text-right">25.00 doses</td>
                                            <td className="p-2 text-right">$0.50</td>
                                            <td className="p-2 text-right">$12.50</td>
                                            <td className="p-2 text-center">
                                                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
                                                    Low Stock
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </AppLayout>
        </>
    );
}