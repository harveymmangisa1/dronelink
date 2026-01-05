import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Microscope, School, Network } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResearchCollaboration = () => {
    return (
        <div className="min-h-screen bg-background font-sans">
            <Navbar />

            <section className="py-24 bg-slate-950 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Research & <span className="text-gradient">Innovation</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        We partner with universities, NGOs, and research institutions to push the boundaries of drone technology and spatial analysis.
                    </p>
                </div>
            </section>

            <section className="py-20 container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-card p-8 rounded-2xl border border-border/50 text-center hover:border-accent/50 transition-colors">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <School className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Academic Partnerships</h3>
                        <p className="text-muted-foreground mb-6">Joint research projects, student internships, and data sharing for academic publications.</p>
                    </div>
                    <div className="bg-card p-8 rounded-2xl border border-border/50 text-center hover:border-accent/50 transition-colors">
                        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <Microscope className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">R&D Projects</h3>
                        <p className="text-muted-foreground mb-6">Developing new algorithms and sensor integrations for local context applications.</p>
                    </div>
                    <div className="bg-card p-8 rounded-2xl border border-border/50 text-center hover:border-accent/50 transition-colors">
                        <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <Network className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Data Consortiums</h3>
                        <p className="text-muted-foreground mb-6">Contributing to national and regional spatial data infrastructures.</p>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold mb-6">Interested in collaborating?</h3>
                    <Link to="/contact">
                        <Button size="lg">Contact Our Research Lead</Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ResearchCollaboration;
