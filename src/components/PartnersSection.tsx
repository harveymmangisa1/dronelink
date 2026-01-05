import { Card } from '@/components/ui/card';
import { Building2, Globe2, Landmark, Plane, TreePine, Wifi } from 'lucide-react';

const PartnersSection = () => {
    const partners = [
        { name: 'Ministry of Agriculture', icon: TreePine },
        { name: 'Lilongwe City Council', icon: Landmark },
        { name: 'Telekom Networks', icon: Wifi },
        { name: 'Global Surveyors', icon: Globe2 },
        { name: 'Urban Plan Co.', icon: Building2 },
        { name: 'Aero Tech', icon: Plane },
    ];

    return (
        <section className="py-20 bg-muted/20 border-y border-white/5 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl translate-y-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Trusted by <span className="text-gradient">Industry Leaders</span>
                    </h2>
                    <p className="text-muted-foreground">
                        Collaborating with top organizations to deliver excellence.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {partners.map((partner, index) => (
                        <Card
                            key={index}
                            className="bg-card/50 backdrop-blur-sm border-white/10 p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/5 transition-colors group cursor-pointer"
                        >
                            <partner.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground text-center transition-colors">
                                {partner.name}
                            </span>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
