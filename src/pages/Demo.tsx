import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Calendar, PlayCircle } from 'lucide-react';
import { toast } from 'sonner';

const Demo = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("Demo request scheduled!");
    };

    return (
        <div className="min-h-screen bg-background font-sans">
            <Navbar />

            <section className="py-24 lg:py-32 flex flex-col items-center bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row gap-12 items-center">

                    {/* Left Column: Content */}
                    <div className="md:w-1/2 text-left">
                        <Badge className="mb-6 bg-accent/20 text-accent">See It In Action</Badge>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Experience the Power of <br /> <span className="text-gradient">Drone Intelligence</span>
                        </h1>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Book a personalized demo with our experts. We'll show you how our platform processes aerial data into actionable insights for your specific industry use case.
                        </p>
                        <div className="flex gap-4 items-center mb-8">
                            <div className="flex -space-x-4">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs">U{i}</div>
                                ))}
                            </div>
                            <span className="text-sm text-muted-foreground">Trusted by 100+ innovative companies</span>
                        </div>
                    </div>

                    {/* Right Column: Scheduler Form */}
                    <div className="md:w-1/2 w-full">
                        <Card className="bg-card/50 backdrop-blur-md border-white/10">
                            <CardContent className="p-8">
                                <div className="flex items-center gap-2 mb-6 text-foreground">
                                    <Calendar className="w-5 h-5 text-accent" />
                                    <h3 className="text-xl font-bold">Schedule Your Demo</h3>
                                </div>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <Input placeholder="First Name" required className="bg-background/50" />
                                        <Input placeholder="Last Name" required className="bg-background/50" />
                                    </div>
                                    <Input type="email" placeholder="Work Email" required className="bg-background/50" />
                                    <Input placeholder="Company Name" className="bg-background/50" />
                                    <Select>
                                        <SelectTrigger className="bg-background/50">
                                            <SelectValue placeholder="Industry Interests" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="ag">Agriculture</SelectItem>
                                            <SelectItem value="gis">Surveying / GIS</SelectItem>
                                            <SelectItem value="mining">Mining</SelectItem>
                                            <SelectItem value="gov">Government</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-white">
                                        Book Demo <PlayCircle className="ml-2 w-4 h-4" />
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Demo;
