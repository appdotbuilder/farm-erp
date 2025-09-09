import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Building2, Folder, LayoutGrid, Package, Users, Warehouse, TrendingUp, Settings, Egg, Bird, TreePine, DollarSign, ShoppingCart, Calculator } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: '🏭 ERP Dashboard',
        href: '/erp-dashboard',
        icon: LayoutGrid,
    },
    {
        title: '🐣 Breeding',
        href: '/breeding',
        icon: Egg,
    },
    {
        title: '🥚 Hatchery',
        href: '/hatchery',
        icon: TreePine,
    },
    {
        title: '🍗 Broiler',
        href: '/broiler',
        icon: Bird,
    },
    {
        title: '🐓 Layer',
        href: '/layer',
        icon: Egg,
    },
    {
        title: '🤖 RPA',
        href: '/rpa',
        icon: Settings,
    },
    {
        title: '🏢 Organizations',
        href: '/organizations',
        icon: Building2,
    },
    {
        title: '📦 Inventory',
        href: '/inventory',
        icon: Package,
    },
    {
        title: '🏪 Warehouses',
        href: '/warehouses',
        icon: Warehouse,
    },
    {
        title: '👥 Employees',
        href: '/employees',
        icon: Users,
    },
    {
        title: '💰 Accounting',
        href: '/accounting',
        icon: Calculator,
    },
    {
        title: '🛒 Sales',
        href: '/sales',
        icon: ShoppingCart,
    },
    {
        title: '💸 Expenses',
        href: '/expenses',
        icon: DollarSign,
    },
    {
        title: '📊 Reports',
        href: '/reports',
        icon: TrendingUp,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/erp-dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
