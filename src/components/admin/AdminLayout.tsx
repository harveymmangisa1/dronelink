import { Outlet, Link, useLocation } from "react-router-dom";
import {
    LayoutDashboard,
    FileText,
    Users,
    BarChart,
    Settings,
    LogOut,
    Home
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const AdminLayout = () => {
    const location = useLocation();

    const navItems = [
        { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
        { name: 'Blog Management', href: '/admin/blog', icon: FileText },
        { name: 'Team', href: '/admin/team', icon: Users },
        { name: 'Analytics', href: '/admin/analytics', icon: BarChart },
        { name: 'Settings', href: '/admin/settings', icon: Settings },
    ];

    const isActive = (path: string) => {
        return location.pathname === path || (path !== '/admin' && location.pathname.startsWith(path));
    };

    return (
        <div className="flex min-h-screen bg-background text-foreground">
            {/* Sidebar */}
            <aside className="fixed inset-y-0 left-0 z-50 w-64 border-r border-border/50 bg-card/50 backdrop-blur-xl transition-transform">
                <div className="flex h-16 items-center border-b border-border/50 px-6">
                    <Link to="/" className="flex items-center gap-2 font-bold text-xl">
                        <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                            A
                        </div>
                        <span>Admin Panel</span>
                    </Link>
                </div>
                <nav className="flex-1 space-y-1 p-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            to={item.href}
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${isActive(item.href)
                                    ? "bg-primary/10 text-primary"
                                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                                }`}
                        >
                            <item.icon className="h-4 w-4" />
                            {item.name}
                        </Link>
                    ))}
                </nav>
                <div className="p-4 border-t border-border/50">
                    <Link to="/">
                        <Button variant="outline" className="w-full justify-start gap-2" size="sm">
                            <Home className="h-4 w-4" />
                            Back to Site
                        </Button>
                    </Link>
                    <Button variant="ghost" className="w-full justify-start gap-2 mt-2 text-muted-foreground hover:text-destructive" size="sm">
                        <LogOut className="h-4 w-4" />
                        Sign Out
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-64 p-8 overflow-auto">
                <div className="mx-auto max-w-6xl animate-fade-in">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};
