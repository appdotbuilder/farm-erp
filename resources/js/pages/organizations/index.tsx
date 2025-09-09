import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, Plus, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function OrganizationsIndex() {
    return (
        <>
            <Head title="Organizations" />
            <AppLayout>
                <div className="container mx-auto p-6 space-y-6">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold">🏢 Organizations</h1>
                            <p className="text-gray-600">Manage head offices and business units</p>
                        </div>
                        <Button className="bg-green-600 hover:bg-green-700">
                            <Plus className="w-4 h-4 mr-2" />
                            Add Organization
                        </Button>
                    </div>

                    <div className="flex gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input 
                                placeholder="Search organizations..." 
                                className="pl-10"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex items-center gap-2">
                                    <Building2 className="w-6 h-6 text-blue-600" />
                                    <CardTitle className="text-lg">Head Office - Main</CardTitle>
                                </div>
                                <CardDescription>Primary headquarters</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <div className="text-sm">
                                        <span className="font-medium">Code:</span> HO001
                                    </div>
                                    <div className="text-sm">
                                        <span className="font-medium">Active Units:</span> 5
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
                                    <Building2 className="w-6 h-6 text-green-600" />
                                    <CardTitle className="text-lg">Broiler Farm A</CardTitle>
                                </div>
                                <CardDescription>Commercial broiler operation</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <div className="text-sm">
                                        <span className="font-medium">Code:</span> BU001
                                    </div>
                                    <div className="text-sm">
                                        <span className="font-medium">Type:</span> Broiler
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
                                    <Building2 className="w-6 h-6 text-orange-600" />
                                    <CardTitle className="text-lg">Layer Farm B</CardTitle>
                                </div>
                                <CardDescription>Egg production facility</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <div className="text-sm">
                                        <span className="font-medium">Code:</span> BU002
                                    </div>
                                    <div className="text-sm">
                                        <span className="font-medium">Type:</span> Layer
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
                    </div>
                </div>
            </AppLayout>
        </>
    );
}