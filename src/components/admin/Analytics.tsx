import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Users,
    Eye,
    BarChart3,
    ArrowUpRight,
    ArrowDownRight,
    TrendingUp,
    Map as MapIcon,
    Camera
} from "lucide-react";

const Analytics = () => {
    const stats = [
        { title: "Total Site Visits", value: "12,845", change: "+12%", trend: "up", icon: Eye },
        { title: "Project Inquiries", value: "482", change: "+8%", trend: "up", icon: Users },
        { title: "GIS Projects", value: "24", change: "-2%", trend: "down", icon: MapIcon },
        { title: "Aerial Imagery", value: "156", change: "+15%", trend: "up", icon: Camera },
    ];

    const recentActivity = [
        { user: "Sarah Johnson", action: "Requested Demo", time: "2 min ago", region: "Lilongwe" },
        { user: "Michael Phiri", action: "Downloaded Brochure", time: "15 min ago", region: "Blantyre" },
        { user: "Global Tea Ltd", action: "Project Consultation", time: "1 hour ago", region: "Thyolo" },
        { user: "Chizi Surveyors", action: "New Account", time: "3 hours ago", region: "Mzuzu" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Analytics Overview</h1>
                <p className="text-muted-foreground">Real-time data on site performance and project engagement.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <Card key={stat.title} className="bg-card/50 backdrop-blur-sm border-white/10 overflow-hidden relative group interactive">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <stat.icon className="w-12 h-12" />
                        </div>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                            <stat.icon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <div className="flex items-center text-xs mt-1">
                                {stat.trend === "up" ? (
                                    <span className="text-green-500 flex items-center">
                                        <ArrowUpRight className="h-3 w-3 mr-1" /> {stat.change}
                                    </span>
                                ) : (
                                    <span className="text-red-500 flex items-center">
                                        <ArrowDownRight className="h-3 w-3 mr-1" /> {stat.change}
                                    </span>
                                )}
                                <span className="text-muted-foreground ml-1">from last month</span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                {/* Main Chart Mockup */}
                <Card className="col-span-4 bg-card/50 backdrop-blur-sm border-white/10">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-accent" />
                            Engagement Trends
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[300px] w-full bg-muted/20 rounded-lg flex items-end justify-between p-6 gap-2">
                            {[40, 60, 45, 90, 65, 80, 55, 70, 85, 40, 50, 95].map((h, i) => (
                                <div
                                    key={i}
                                    className="w-full bg-tech-gradient rounded-t-sm transition-all duration-1000 ease-out animate-in slide-in-from-bottom-full"
                                    style={{ height: `${h}%`, animationDelay: `${i * 50}ms` }}
                                />
                            ))}
                        </div>
                        <div className="flex justify-between mt-4 text-xs text-muted-foreground px-2">
                            <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span>
                        </div>
                    </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card className="col-span-3 bg-card/50 backdrop-blur-sm border-white/10">
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            {recentActivity.map((activity, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-9 h-9 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-xs font-bold text-accent">
                                        {activity.user[0]}
                                    </div>
                                    <div className="flex-1 space-y-1">
                                        <p className="text-sm font-medium leading-none">{activity.user}</p>
                                        <p className="text-xs text-muted-foreground">
                                            {activity.action} in <span className="text-foreground">{activity.region}</span>
                                        </p>
                                    </div>
                                    <div className="text-xs text-muted-foreground">{activity.time}</div>
                                </div>
                            ))}
                        </div>
                        <Button variant="ghost" className="w-full mt-6 text-xs text-accent">View all reports</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Analytics;
