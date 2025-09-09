import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Plus, Search, Mail, Phone, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export default function EmployeesIndex() {
    return (
        <>
            <Head title="Employees" />
            <AppLayout>
                <div className="container mx-auto p-6 space-y-6">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold">👥 Employees</h1>
                            <p className="text-gray-600">Manage staff and personnel information</p>
                        </div>
                        <Button className="bg-green-600 hover:bg-green-700">
                            <Plus className="w-4 h-4 mr-2" />
                            Add Employee
                        </Button>
                    </div>

                    {/* Summary Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <Card>
                            <CardContent className="p-4">
                                <div className="flex items-center gap-2">
                                    <Users className="w-8 h-8 text-blue-600" />
                                    <div>
                                        <p className="text-sm text-gray-600">Total Employees</p>
                                        <p className="text-2xl font-bold">48</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        
                        <Card>
                            <CardContent className="p-4">
                                <div className="flex items-center gap-2">
                                    <Users className="w-8 h-8 text-green-600" />
                                    <div>
                                        <p className="text-sm text-gray-600">Active</p>
                                        <p className="text-2xl font-bold">45</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        
                        <Card>
                            <CardContent className="p-4">
                                <div className="flex items-center gap-2">
                                    <Users className="w-8 h-8 text-purple-600" />
                                    <div>
                                        <p className="text-sm text-gray-600">Managers</p>
                                        <p className="text-2xl font-bold">8</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        
                        <Card>
                            <CardContent className="p-4">
                                <div className="flex items-center gap-2">
                                    <Users className="w-8 h-8 text-orange-600" />
                                    <div>
                                        <p className="text-sm text-gray-600">New This Month</p>
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
                                placeholder="Search employees..." 
                                className="pl-10"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <Avatar className="w-12 h-12">
                                        <AvatarFallback className="bg-blue-100 text-blue-600">
                                            JS
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-lg">John Smith</h3>
                                        <p className="text-sm text-gray-600 mb-3">Farm Manager</p>
                                        
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-sm">
                                                <Mail className="w-4 h-4 text-gray-400" />
                                                <span>john.smith@farm.com</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <Phone className="w-4 h-4 text-gray-400" />
                                                <span>+1 234 567 8900</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <MapPin className="w-4 h-4 text-gray-400" />
                                                <span>Main Warehouse</span>
                                            </div>
                                        </div>
                                        
                                        <div className="mt-3">
                                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                                                Active
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <Avatar className="w-12 h-12">
                                        <AvatarFallback className="bg-purple-100 text-purple-600">
                                            SJ
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-lg">Sarah Johnson</h3>
                                        <p className="text-sm text-gray-600 mb-3">Veterinarian</p>
                                        
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-sm">
                                                <Mail className="w-4 h-4 text-gray-400" />
                                                <span>s.johnson@farm.com</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <Phone className="w-4 h-4 text-gray-400" />
                                                <span>+1 234 567 8901</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <MapPin className="w-4 h-4 text-gray-400" />
                                                <span>Broiler Farm A</span>
                                            </div>
                                        </div>
                                        
                                        <div className="mt-3">
                                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                                                Active
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <Avatar className="w-12 h-12">
                                        <AvatarFallback className="bg-green-100 text-green-600">
                                            MW
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-lg">Mike Wilson</h3>
                                        <p className="text-sm text-gray-600 mb-3">Feed Specialist</p>
                                        
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-sm">
                                                <Mail className="w-4 h-4 text-gray-400" />
                                                <span>m.wilson@farm.com</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <Phone className="w-4 h-4 text-gray-400" />
                                                <span>+1 234 567 8902</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <MapPin className="w-4 h-4 text-gray-400" />
                                                <span>Feed Storage</span>
                                            </div>
                                        </div>
                                        
                                        <div className="mt-3">
                                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                                                Active
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <Avatar className="w-12 h-12">
                                        <AvatarFallback className="bg-pink-100 text-pink-600">
                                            LC
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-lg">Dr. Lisa Chen</h3>
                                        <p className="text-sm text-gray-600 mb-3">Quality Control Manager</p>
                                        
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-sm">
                                                <Mail className="w-4 h-4 text-gray-400" />
                                                <span>l.chen@farm.com</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <Phone className="w-4 h-4 text-gray-400" />
                                                <span>+1 234 567 8903</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <MapPin className="w-4 h-4 text-gray-400" />
                                                <span>Laboratory</span>
                                            </div>
                                        </div>
                                        
                                        <div className="mt-3">
                                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                                                Active
                                            </span>
                                        </div>
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