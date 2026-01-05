import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { Badge } from '@/components/ui/badge';

const StartProject = () => {
    return (
        <div className="min-h-screen bg-background font-sans">
            <Navbar />

            <section className="py-20 bg-slate-950 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <Badge className="mb-4" variant="outline">Project Initiation</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Launch Your <span className="text-gradient">Mission</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        From initial survey to final data delivery, we guide you every step of the way.
                    </p>
                </div>
            </section>

            <div className="-mt-10 mb-20">
                <ContactSection />
            </div>

            <Footer />
        </div>
    );
};

export default StartProject;
