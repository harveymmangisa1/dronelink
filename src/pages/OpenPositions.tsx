import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const OpenPositions = () => {
    const jobs = [
        {
            title: "Senior Drone Pilot",
            type: "Full-time",
            location: "Lilongwe, Malawi",
            department: "Operations",
            description: "We are looking for an experienced certified pilot to lead complex aerial survey missions."
        },
        {
            title: "GIS Data Analyst",
            type: "Full-time",
            location: "Lilongwe, Malawi",
            department: "Data Science",
            description: "Process and analyze large datasets of aerial imagery to derive actionable insights for clients."
        },
        {
            title: "Sales Representative",
            type: "Part-time / Remote",
            location: "Blantyre, Malawi",
            department: "Sales",
            description: "Drive growth by connecting with agricultural and industrial clients who need drone solutions."
        }
    ];

    return (
        <div className="min-h-screen bg-background font-sans">
            <Navbar />

            <section className="py-24 bg-slate-950 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Join the <span className="text-gradient">Future</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Build your career with Malawi's leading drone technology company. We're always looking for passionate talent.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid gap-6 max-w-4xl mx-auto">
                        {jobs.map((job, index) => (
                            <Card key={index} className="group hover:border-primary/50 transition-colors">
                                <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                                    <div className="space-y-3">
                                        <div className="flex gap-2">
                                            <Badge variant="secondary">{job.department}</Badge>
                                            <Badge variant="outline">{job.type}</Badge>
                                        </div>
                                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                            {job.title}
                                        </h3>
                                        <div className="flex gap-4 text-sm text-muted-foreground">
                                            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Posted 2 days ago</span>
                                        </div>
                                        <p className="text-muted-foreground max-w-xl">
                                            {job.description}
                                        </p>
                                    </div>
                                    <Link to="/submit-resume">
                                        <Button className="shrink-0 bg-background text-foreground border border-input hover:bg-accent hover:text-accent-foreground">
                                            Apply Now
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-muted-foreground mb-4">Don't see a perfect fit?</p>
                        <Link to="/submit-resume">
                            <Button variant="outline">Send Us Your Resume Anyway</Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default OpenPositions;
