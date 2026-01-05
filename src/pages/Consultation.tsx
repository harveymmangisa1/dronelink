import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { Badge } from '@/components/ui/badge';

const Consultation = () => {
    return (
        <div className="min-h-screen bg-background font-sans">
            <Navbar />

            <section className="py-20 bg-slate-950 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <Badge className="mb-4" variant="outline">Free Consultation</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Let's Discuss Your <span className="text-gradient">Project</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Not sure where to start? Our specific solutions can be tailored to your needs.
                        Talk to an expert today, obligation-free.
                    </p>
                </div>
            </section>

            {/* Reuse the ContactSection which has a robust form */}
            <div className="-mt-10 mb-20">
                <ContactSection />
            </div>

            <Footer />
        </div>
    );
};

export default Consultation;
