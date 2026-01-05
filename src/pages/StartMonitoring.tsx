import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Activity, Lock } from 'lucide-react';

const StartMonitoring = () => {
    return (
        <div className="min-h-screen bg-background font-sans">
            <Navbar />

            <section className="py-32 flex justify-center items-center min-h-[80vh] bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
                <div className="container px-4 relative z-10 max-w-md">
                    <Card className="bg-card/50 backdrop-blur-xl border-white/10 shadow-2xl">
                        <CardHeader className="text-center">
                            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Activity className="w-8 h-8 text-blue-500" />
                            </div>
                            <CardTitle className="text-2xl font-bold">Client Portal</CardTitle>
                            <CardDescription>Sign in to access real-time monitoring dashboard</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Project ID / Username</label>
                                    <Input placeholder="Enter your ID" className="bg-background/50" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Access Key</label>
                                    <Input type="password" placeholder="••••••••" className="bg-background/50" />
                                </div>
                                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                    Launch Dashboard <Lock className="ml-2 w-4 h-4" />
                                </Button>
                            </form>
                            <div className="mt-4 text-center text-sm text-muted-foreground">
                                Need access? <a href="/contact" className="text-primary hover:underline">Contact Support</a>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default StartMonitoring;
