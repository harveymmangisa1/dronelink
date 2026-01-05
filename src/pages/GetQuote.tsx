import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const GetQuote = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setTimeout(() => {
            setSubmitted(true);
            toast.success("Quote request sent successfully!");
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-background font-sans">
            <Navbar />

            <section className="py-24 lg:py-32 relative overflow-hidden bg-slate-950">
                <div className="absolute inset-0 bg-hero-gradient opacity-20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <Badge className="mb-6 bg-primary/20 text-primary hover:bg-primary/30">Get a Quote</Badge>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Start Your Project with <span className="text-gradient">Precision</span>
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Tell us about your project requirements, and our team will provide a tailored solution and detailed quotation within 24 hours.
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <Card className="bg-card/50 backdrop-blur-md border-white/10 shadow-2xl">
                            <CardContent className="p-8">
                                {submitted ? (
                                    <div className="text-center py-16">
                                        <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle className="w-10 h-10" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-white mb-2">Request Received!</h2>
                                        <p className="text-muted-foreground mb-8">
                                            Thank you for contacting us. We have received your quote request and will get back to you shortly.
                                        </p>
                                        <Button onClick={() => setSubmitted(false)} variant="outline">
                                            Submit Another Request
                                        </Button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-foreground">First Name</label>
                                                <Input placeholder="John" required className="bg-background/50" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-foreground">Last Name</label>
                                                <Input placeholder="Doe" required className="bg-background/50" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-foreground">Email Address</label>
                                            <Input type="email" placeholder="john@company.com" required className="bg-background/50" />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-foreground">Service Type</label>
                                            <Select>
                                                <SelectTrigger className="bg-background/50">
                                                    <SelectValue placeholder="Select a service" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="mapping">GIS Mapping & Surveying</SelectItem>
                                                    <SelectItem value="agriculture">Precision Agriculture</SelectItem>
                                                    <SelectItem value="inspection">Infrastructure Inspection</SelectItem>
                                                    <SelectItem value="imagery">Aerial Photography/Video</SelectItem>
                                                    <SelectItem value="other">Other/Custom</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-foreground">Project Details</label>
                                            <Textarea
                                                placeholder="Please describe your project location, scope, and specific requirements..."
                                                className="bg-background/50 min-h-[120px]"
                                                required
                                            />
                                        </div>

                                        <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                                            Submit Request <Send className="ml-2 w-4 h-4" />
                                        </Button>
                                    </form>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default GetQuote;
