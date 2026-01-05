import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Phone, AlertTriangle } from 'lucide-react';

const EmergencyContact = () => {
    return (
        <div className="min-h-screen bg-background font-sans">
            <Navbar />

            <section className="py-24 lg:py-48 flex flex-col items-center justify-center bg-red-950/20 text-center">
                <div className="w-24 h-24 bg-red-500/20 text-red-500 rounded-full flex items-center justify-center mb-6 animate-pulse">
                    <AlertTriangle className="w-12 h-12" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Emergency Response</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mb-12">
                    For urgent disaster response, search & rescue, or critical infrastructure failure support.
                    Our rapid response team is available 24/7.
                </p>

                <div className="flex flex-col gap-6">
                    <a href="tel:+265888321355">
                        <Button size="lg" variant="destructive" className="h-16 px-8 text-xl">
                            <Phone className="mr-3 w-6 h-6" /> Call Emergency Line: +265 888 32 13 55
                        </Button>
                    </a>
                    <span className="text-sm text-muted-foreground">Average dispatch time: 2 hours</span>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default EmergencyContact;
