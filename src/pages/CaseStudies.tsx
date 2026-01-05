import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart, Map, CheckCircle2 } from 'lucide-react';

const CaseStudies = () => {
    const studies = [
        {
            title: 'Precision Agriculture for Mega-Farms',
            client: 'Malawi Tea Estates',
            result: '15% Yield Increase',
            description: 'Deployed multispectral drone imaging to analyze crop health across 500 hectares. Identified nutrient deficiencies and optimized fertilizer distribution, resulting in significant yield improvements.',
            image: 'https://images.unsplash.com/photo-1625246333195-5848c4282185?w=800&auto=format&fit=crop&q=60',
            tags: ['Agriculture', 'Multispectral', 'Data Analysis']
        },
        {
            title: 'Disaster Response Mapping',
            client: 'National Disaster Management',
            result: '48h Response Time',
            description: 'Provided rapid 3D mapping of flood-affected areas in the Lower Shire. Enabled relief teams to identify safe routes and prioritize aid distribution effectively.',
            image: 'https://images.unsplash.com/photo-1569426903279-d3e750fc3324?w=800&auto=format&fit=crop&q=60',
            tags: ['Emergency', 'Mapping', '3D Modeling']
        },
        {
            title: 'Infrastructure Inspection',
            client: 'Telecom Networks',
            result: '60% Cost Reduction',
            description: 'Conducted automated thermal and visual inspections of 50 telecom towers. Replaced hazardous manual climbs with drone surveys, improving safety and speed.',
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60',
            tags: ['Inspection', 'Thermal', 'Safety']
        }
    ];

    return (
        <div className="min-h-screen bg-background font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-950">
                <div className="absolute inset-0 bg-hero-gradient opacity-20"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=60')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <Badge variant="outline" className="mb-6 px-4 py-2 border-primary/30 text-primary bg-primary/10 backdrop-blur-md animate-fade-in">
                        Case Studies
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                        Real Results, <span className="text-gradient">Proven Impact</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in delay-100">
                        Discover how our aerial intelligence solutions solve complex challenges and deliver tangible value for our clients.
                    </p>
                </div>
            </section>

            {/* Case Studies List */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="space-y-24">
                        {studies.map((study, index) => (
                            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                                {/* Image Info */}
                                <div className="lg:w-1/2 relative group">
                                    <div className="absolute inset-0 bg-accent/20 rounded-3xl transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                        <img
                                            src={study.image}
                                            alt={study.title}
                                            className="w-full h-[400px] object-cover"
                                        />
                                        <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-md px-4 py-2 rounded-lg border border-border shadow-lg">
                                            <span className="text-sm font-semibold text-foreground">{study.client}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="lg:w-1/2 space-y-6">
                                    <div className="flex gap-2 flex-wrap">
                                        {study.tags.map(tag => (
                                            <Badge key={tag} variant="secondary" className="px-3 py-1">{tag}</Badge>
                                        ))}
                                    </div>
                                    <h2 className="text-3xl font-bold text-foreground">{study.title}</h2>
                                    <div className="flex items-center gap-3 text-emerald-500 font-bold text-xl">
                                        <CheckCircle2 className="w-6 h-6" />
                                        {study.result}
                                    </div>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        {study.description}
                                    </p>
                                    <Button variant="outline" className="group">
                                        Read Full Success Story
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CaseStudies;
