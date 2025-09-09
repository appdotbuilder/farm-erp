import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Warehouse, Plus, Search, MapPin, Package } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function WarehousesIndex() {
    return (
        <>
            <Head title="Warehouses" />
            <AppLayout>
                <div className="container mx-auto p-6 space-y-6">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold">🏭 Warehouses</h1>
                            <p className="text-gray-600">Manage storage facilities and locations</p>
                        </div>
                        <Button className="bg-green-600 hover:bg-green-700">
                            <Plus className="w-4 h-4 mr-2" />
                            Add Warehouse
                        </Button>
                    </div>

                    <div className="flex gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input 
                                placeholder="Search warehouses..." 
                                className="pl-10"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex items-center gap-2">
                                    <Warehouse className="w-6 h-6 text-blue-600" />
                                    <CardTitle className="text-lg">Main Warehouse</CardTitle>
                                </div>
                                <CardDescription>Primary storage facility</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-sm">
                                        <MapPin className="w-4 h-4 text-gray-400" />
                                        <span>Building A, Industrial Zone</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <Package className="w-4 h-4 text-gray-400" />
                                        <span>156 Products</span>
                                    </div>
                                    <div className="text-sm">
                                        <span className="font-medium">Manager:</span> John Smith
                                    </div>
                                    <div className="text-sm">
                                        <span className="font-medium">Status:</span>{' '}
                                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                                            Active
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex items-center gap-2">
                                    <Warehouse className="w-6 h-6 text-purple-600" />
                                    <CardTitle className="text-lg">Cold Storage</CardTitle>
                                </div>
                                <CardDescription>Temperature controlled storage</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-sm">
                                        <MapPin className="w-4 h-4 text-gray-400" />
                                        <span>Building B, Cold Zone</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <Package className="w-4 h-4 text-gray-400" />
                                        <span>23 Products</span>
                                    </div>
                                    <div className="text-sm">
                                        <span className="font-medium">Manager:</span> Sarah Johnson
                                    </div>
                                    <div className="text-sm">
                                        <span className="font-medium">Temperature:</span> 2-8°C
                                    </div>
                                    <div className="text-sm">
                                        <span className="font-medium">Status:</span>{' '}
                                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                                            Active
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex items-center gap-2">
                                    <Warehouse className="w-6 h-6 text-orange-600" />
                                    <CardTitle className="text-lg">Feed Storage</CardTitle>
                                </div>
                                <CardDescription>Bulk feed storage facility</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-sm">
                                        <MapPin className="w-4 h-4 text-gray-400" />
                                        <span>Silo Complex, Zone C</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <Package className="w-4 h-4 text-gray-400" />
                                        <span>45 Products</span>
                                    </div>
                                    <div className="text-sm">
                                        <span className="font-medium">Manager:</span> Mike Wilson
                                    </div>
                                    <div className="text-sm">
                                        <span className="font-medium">Capacity:</span> 5000 MT
                                    </div>
                                    <div className="text-sm">
                                        <span className="font-medium">Status:</span>{' '}
                                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                                            Active
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow border-orange-200">
                            <CardHeader>
                                <div className="flex items-center gap-2">
                                    <Warehouse className="w-6 h-6 text-gray-400" />
                                    <CardTitle className="text-lg text-gray-600">Quarantine Area</CardTitle>
                                </div>
                                <CardDescription>Temporary holding facility</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-sm">
                                        <MapPin className="w-4 h-4 text-gray-400" />
                                        <span>Isolation Building</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <Package className="w-4 h-4 text-gray-400" />
                                        <span>8 Products</span>
                                    </div>
                                    <div className="text-sm">
                                        <span className="font-medium">Manager:</span> Dr. Lisa Chen
                                    </div>
                                    <div className="text-sm">
                                        <span className="font-medium">Status:</span>{' '}
                                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
                                            Maintenance
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </AppLayout>
        </>
    );
}