import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamsSection from '@/components/TeamsSection';
import { Badge } from '@/components/ui/badge';
import { Rocket, Target, Users, Globe2, Award, Zap } from 'lucide-react';

const OurStory = () => {
    const milestones = [
        {
            year: '2019',
            title: 'The Beginning',
            description: 'DronelinkMW was founded with a single drone and a vision to revolutionize aerial data collection in Malawi.',
            icon: Rocket
        },
        {
            year: '2020',
            title: 'First Major Contract',
            description: 'Secured our first government contract for flood risk mapping in the Lower Shire Valley.',
            icon: Target
        },
        {
            year: '2021',
            title: 'Team Expansion',
            description: 'Grew to a team of 10 experts including certified pilots, GIS specialists, and data analysts.',
            icon: Users
        },
        {
            year: '2022',
            title: 'National Recognition',
            description: 'Awarded the "Innovation in Technology" award by the ICT Association of Malawi.',
            icon: Award
        },
        {
            year: '2023',
            title: 'International Partnerships',
            description: 'Established strategic partnerships with global drone technology leaders to bring advanced solutions to Africa.',
            icon: Globe2
        }
    ];

    return (
        <div className="min-h-screen bg-background font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-950">
                <div className="absolute inset-0 bg-hero-gradient opacity-20"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&auto=format&fit=crop&q=60')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <Badge variant="outline" className="mb-6 px-4 py-2 border-primary/30 text-primary bg-primary/10 backdrop-blur-md animate-fade-in">
                        About Us
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                        Our Journey of <span className="text-gradient">Innovation</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in delay-100">
                        From humble beginnings to leading the drone technology revolution in Malawi, this is the story of DronelinkMW.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                                <Zap className="w-4 h-4 mr-2" /> Our Mission
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                                Empowering Africa Through Aerial Intelligence
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We believe that accurate, real-time data is the key to solving some of our continent's biggest challenges. Whether it's optimizing agriculture yields, monitoring environmental health, or planning sustainable infrastructure, our mission is to provide the critical insights needed for better decision-making.
                            </p>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                            <img
                                src="https://images.unsplash.com/photo-1531297461136-82lw9b6c9a3e?w=800&auto=format&fit=crop&q=60"
                                alt="Innovation"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-16 text-foreground">Our History</h2>
                    <div className="space-y-12">
                        {milestones.map((milestone, index) => (
                            <div key={milestone.year} className="flex flex-col md:flex-row gap-8 items-center md:items-start group">
                                <div className="flex-shrink-0 w-24 h-24 bg-card rounded-2xl flex flex-col items-center justify-center border border-accent/20 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-sm font-bold text-muted-foreground">Est.</span>
                                    <span className="text-2xl font-bold text-accent">{milestone.year}</span>
                                </div>
                                <div className="flex-1 bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-accent/20 transition-colors">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 bg-accent/10 rounded-lg">
                                            <milestone.icon className="w-5 h-5 text-accent" />
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground">{milestone.title}</h3>
                                    </div>
                                    <p className="text-muted-foreground">{milestone.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <TeamsSection />

            <Footer />
        </div>
    );
};

export default OurStory;
