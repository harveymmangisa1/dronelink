import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Upload, Send } from 'lucide-react';
import { toast } from 'sonner';

const SubmitResume = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("Application submitted successfully!");
    };

    return (
        <div className="min-h-screen bg-background font-sans">
            <Navbar />

            <section className="py-24 container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-bold text-foreground mb-2">Submit Your Resume</h1>
                        <p className="text-muted-foreground">
                            We're excited to hear from you. Tell us about your experience and why you'd be a great fit.
                        </p>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Application Form</CardTitle>
                            <CardDescription>Please fill out your details below.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">First Name</label>
                                        <Input required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Last Name</label>
                                        <Input required />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Email Address</label>
                                    <Input type="email" required />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">LinkedIn Profile (Optional)</label>
                                    <Input placeholder="https://linkedin.com/in/..." />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Upload CV / Resume</label>
                                    <div className="border-2 border-dashed border-input rounded-lg p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-muted/50 transition-colors">
                                        <Upload className="w-8 h-8 text-muted-foreground mb-2" />
                                        <p className="text-sm text-foreground font-medium">Click to upload or drag and drop</p>
                                        <p className="text-xs text-muted-foreground">PDF or DOCX up to 10MB</p>
                                        <Input type="file" className="hidden" accept=".pdf,.docx,.doc" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Cover Letter / Message</label>
                                    <Textarea placeholder="Tell us a bit about yourself..." className="min-h-[150px]" />
                                </div>

                                <Button type="submit" className="w-full">
                                    Submit Application <Send className="ml-2 w-4 h-4" />
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default SubmitResume;
