import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, TrendingUp, FileText, Download, Calendar, PieChart } from 'lucide-react';

export default function ReportsIndex() {
    return (
        <>
            <Head title="Reports" />
            <AppLayout>
                <div className="container mx-auto p-6 space-y-6">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold">📊 Reports & Analytics</h1>
                            <p className="text-gray-600">Business intelligence and performance insights</p>
                        </div>
                        <Button className="bg-green-600 hover:bg-green-700">
                            <Download className="w-4 h-4 mr-2" />
                            Export Data
                        </Button>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <Card>
                            <CardContent className="p-4">
                                <div className="flex items-center gap-2">
                                    <TrendingUp className="w-8 h-8 text-green-600" />
                                    <div>
                                        <p className="text-sm text-gray-600">Revenue (MTD)</p>
                                        <p className="text-2xl font-bold">$245,890</p>
                                        <p className="text-sm text-green-600">+12.5% ↗</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        
                        <Card>
                            <CardContent className="p-4">
                                <div className="flex items-center gap-2">
                                    <BarChart3 className="w-8 h-8 text-blue-600" />
                                    <div>
                                        <p className="text-sm text-gray-600">Production (MTD)</p>
                                        <p className="text-2xl font-bold">8,450</p>
                                        <p className="text-sm text-blue-600">Birds</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        
                        <Card>
                            <CardContent className="p-4">
                                <div className="flex items-center gap-2">
                                    <PieChart className="w-8 h-8 text-purple-600" />
                                    <div>
                                        <p className="text-sm text-gray-600">Feed Conversion</p>
                                        <p className="text-2xl font-bold">1.85</p>
                                        <p className="text-sm text-green-600">FCR</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        
                        <Card>
                            <CardContent className="p-4">
                                <div className="flex items-center gap-2">
                                    <TrendingUp className="w-8 h-8 text-orange-600" />
                                    <div>
                                        <p className="text-sm text-gray-600">Mortality Rate</p>
                                        <p className="text-2xl font-bold">2.1%</p>
                                        <p className="text-sm text-green-600">-0.3% ↘</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Report Categories */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                            <CardHeader>
                                <div className="flex items-center gap-2">
                                    <BarChart3 className="w-6 h-6 text-blue-600" />
                                    <CardTitle className="text-lg">Production Reports</CardTitle>
                                </div>
                                <CardDescription>Performance metrics and production analytics</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center py-2 border-b">
                                        <span className="text-sm">Daily Production</span>
                                        <Button variant="ghost" size="sm">
                                            <FileText className="w-4 h-4" />
                                        </Button>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b">
                                        <span className="text-sm">Weekly Summary</span>
                                        <Button variant="ghost" size="sm">
                                            <FileText className="w-4 h-4" />
                                        </Button>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b">
                                        <span className="text-sm">Monthly Trends</span>
                                        <Button variant="ghost" size="sm">
                                            <FileText className="w-4 h-4" />
                                        </Button>
                                    </div>
                                    <div className="flex justify-between items-center py-2">
                                        <span className="text-sm">Feed Conversion</span>
                                        <Button variant="ghost" size="sm">
                                            <FileText className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                            <CardHeader>
                                <div className="flex items-center gap-2">
                                    <TrendingUp className="w-6 h-6 text-green-600" />
                                    <CardTitle className="text-lg">Financial Reports</CardTitle>
                                </div>
                                <CardDescription>Revenue, costs, and profitability analysis</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center py-2 border-b">
                                        <span className="text-sm">P&L Statement</span>
                                        <Button variant="ghost" size="sm">
                                            <FileText className="w-4 h-4" />
                                        </Button>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b">
                                        <span className="text-sm">Cash Flow</span>
                                        <Button variant="ghost" size="sm">
                                            <FileText className="w-4 h-4" />
                                        </Button>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b">
                                        <span className="text-sm">Cost Analysis</span>
                                        <Button variant="ghost" size="sm">
                                            <FileText className="w-4 h-4" />
                                        </Button>
                                    </div>
                                    <div className="flex justify-between items-center py-2">
                                        <span className="text-sm">Budget vs Actual</span>
                                        <Button variant="ghost" size="sm">
                                            <FileText className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                            <CardHeader>
                                <div className="flex items-center gap-2">
                                    <PieChart className="w-6 h-6 text-purple-600" />
                                    <CardTitle className="text-lg">Inventory Reports</CardTitle>
                                </div>
                                <CardDescription>Stock levels, valuation, and movement</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center py-2 border-b">
                                        <span className="text-sm">Stock Summary</span>
                                        <Button variant="ghost" size="sm">
                                            <FileText className="w-4 h-4" />
                                        </Button>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b">
                                        <span className="text-sm">Aging Report</span>
                                        <Button variant="ghost" size="sm">
                                            <FileText className="w-4 h-4" />
                                        </Button>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b">
                                        <span className="text-sm">Reorder Points</span>
                                        <Button variant="ghost" size="sm">
                                            <FileText className="w-4 h-4" />
                                        </Button>
                                    </div>
                                    <div className="flex justify-between items-center py-2">
                                        <span className="text-sm">Movement History</span>
                                        <Button variant="ghost" size="sm">
                                            <FileText className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                            <CardHeader>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-6 h-6 text-orange-600" />
                                    <CardTitle className="text-lg">Breeding Reports</CardTitle>
                                </div>
                                <CardDescription>Hatchery performance and breeding cycles</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center py-2 border-b">
                                        <span className="text-sm">Hatchability Rate</span>
                                        <Button variant="ghost" size="sm">
                                            <FileText className="w-4 h-4" />
                                        </Button>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b">
                                        <span className="text-sm">Fertility Analysis</span>
                                        <Button variant="ghost" size="sm">
                                            <FileText className="w-4 h-4" />
                                        </Button>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b">
                                        <span className="text-sm">Breeding Performance</span>
                                        <Button variant="ghost" size="sm">
                                            <FileText className="w-4 h-4" />
                                        </Button>
                                    </div>
                                    <div className="flex justify-between items-center py-2">
                                        <span className="text-sm">DOC Production</span>
                                        <Button variant="ghost" size="sm">
                                            <FileText className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                            <CardHeader>
                                <div className="flex items-center gap-2">
                                    <BarChart3 className="w-6 h-6 text-red-600" />
                                    <CardTitle className="text-lg">Health Reports</CardTitle>
                                </div>
                                <CardDescription>Mortality, disease tracking, and health metrics</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center py-2 border-b">
                                        <span className="text-sm">Mortality Trends</span>
                                        <Button variant="ghost" size="sm">
                                            <FileText className="w-4 h-4" />
                                        </Button>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b">
                                        <span className="text-sm">Vaccination Records</span>
                                        <Button variant="ghost" size="sm">
                                            <FileText className="w-4 h-4" />
                                        </Button>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b">
                                        <span className="text-sm">Disease Incidents</span>
                                        <Button variant="ghost" size="sm">
                                            <FileText className="w-4 h-4" />
                                        </Button>
                                    </div>
                                    <div className="flex justify-between items-center py-2">
                                        <span className="text-sm">Treatment Costs</span>
                                        <Button variant="ghost" size="sm">
                                            <FileText className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                            <CardHeader>
                                <div className="flex items-center gap-2">
                                    <TrendingUp className="w-6 h-6 text-teal-600" />
                                    <CardTitle className="text-lg">Custom Reports</CardTitle>
                                </div>
                                <CardDescription>Build your own reports and dashboards</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center py-2 border-b">
                                        <span className="text-sm">Report Builder</span>
                                        <Button variant="ghost" size="sm">
                                            <FileText className="w-4 h-4" />
                                        </Button>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b">
                                        <span className="text-sm">Saved Reports</span>
                                        <Button variant="ghost" size="sm">
                                            <FileText className="w-4 h-4" />
                                        </Button>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b">
                                        <span className="text-sm">Scheduled Reports</span>
                                        <Button variant="ghost" size="sm">
                                            <FileText className="w-4 h-4" />
                                        </Button>
                                    </div>
                                    <div className="flex justify-between items-center py-2">
                                        <span className="text-sm">Export Templates</span>
                                        <Button variant="ghost" size="sm">
                                            <FileText className="w-4 h-4" />
                                        </Button>
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