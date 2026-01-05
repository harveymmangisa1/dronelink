import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, ArrowRight, ExternalLink, Calendar } from 'lucide-react';

const Portfolio = () => {
    const [filter, setFilter] = useState('All');
    const [projects, setProjects] = useState<any[]>([]);

    useEffect(() => {
        const storedProjects = localStorage.getItem('dronelink_portfolio');
        if (storedProjects) {
            setProjects(JSON.parse(storedProjects));
        } else {
            const initialProjects = [
                {
                    id: 1,
                    title: "Tea Estate Yield Optimization",
                    category: "Agriculture",
                    location: "Thyolo, Malawi",
                    date: "Oct 2023",
                    image: "https://images.unsplash.com/photo-1625246333195-5848c4282185?w=800&auto=format&fit=crop&q=60",
                    description: "Implemented precision agriculture monitoring for a 500-hectare tea estate, resulting in a 15% yield increase through targeted fertilization."
                },
                {
                    id: 2,
                    title: "Urban Development Survey",
                    category: "Mapping",
                    location: "Lilongwe City",
                    date: "Jan 2024",
                    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&auto=format&fit=crop&q=60",
                    description: "High-resolution topographical mapping of 50 sq km for new urban infrastructure planning and zoning."
                },
                {
                    id: 3,
                    title: "Telecom Tower Inspection",
                    category: "Inspection",
                    location: "Blantyre",
                    date: "Dec 2023",
                    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60",
                    description: "Automated thermal and visual inspection of 20 telecommunication towers, reducing inspection time by 60%."
                },
                {
                    id: 4,
                    title: "Wildlife Conservation Tracking",
                    category: "Conservation",
                    location: "Liwonde National Park",
                    date: "Nov 2023",
                    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&auto=format&fit=crop&q=60",
                    description: "Aerial anti-poaching surveillance and animal population counting to support conservation efforts."
                },
                {
                    id: 5,
                    title: "Flood Risk Assessment",
                    category: "Mapping",
                    location: "Lower Shire",
                    date: "Feb 2024",
                    image: "https://images.unsplash.com/photo-1569426903279-d3e750fc3324?w=800&auto=format&fit=crop&q=60",
                    description: "Emergency 3D terrain modeling to assess flood risks and plan drainage systems for vulnerable communities."
                },
                {
                    id: 6,
                    title: "Solar Farm Inspection",
                    category: "Inspection",
                    location: "Salima",
                    date: "Sep 2023",
                    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=60",
                    description: "Thermal imaging of solar panels to identify defective cells and optimize energy output efficiency."
                }
            ];
            setProjects(initialProjects);
            localStorage.setItem('dronelink_portfolio', JSON.stringify(initialProjects));
        }
    }, []);

    const categories = ['All', 'Agriculture', 'Mapping', 'Inspection', 'Conservation'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div className="min-h-screen bg-background font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-950">
                <div className="absolute inset-0 bg-hero-gradient opacity-20"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506947411487-a56738267384?w=1200&auto=format&fit=crop&q=60')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <Badge variant="outline" className="mb-6 px-4 py-2 border-primary/30 text-primary bg-primary/10 backdrop-blur-md animate-fade-in">
                        Our Portfolio
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                        Showcasing <span className="text-gradient">Excellence</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in delay-100">
                        Explore our diverse portfolio of successful projects, demonstrating the power of aerial intelligence across industries.
                    </p>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-20 bg-background relative">
                <div className="container mx-auto px-4">

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in">
                        {categories.map((cat) => (
                            <Button
                                key={cat}
                                variant={filter === cat ? "default" : "outline"}
                                className={`rounded-full px-6 transition-all duration-300 ${filter === cat
                                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                                    : "hover:border-primary/50 hover:text-primary"
                                    }`}
                                onClick={() => setFilter(cat)}
                            >
                                {cat}
                            </Button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <Card
                                key={project.id}
                                className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm card-hover animate-scale-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Image Container */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                        <Button variant="secondary" className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                                            View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <Badge className="bg-background/80 backdrop-blur-md text-foreground pointer-events-none">
                                            {project.category}
                                        </Badge>
                                    </div>
                                </div>

                                <CardContent className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                                                {project.title}
                                            </h3>
                                            <div className="flex items-center text-sm text-muted-foreground gap-4">
                                                <span className="flex items-center gap-1">
                                                    <MapPin className="w-3.5 h-3.5" /> {project.location}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-3.5 h-3.5" /> {project.date}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    <div className="pt-4 border-t border-border/50 flex justify-between items-center">
                                        <span className="text-xs font-medium text-primary uppercase tracking-wider">
                                            Result
                                        </span>
                                        <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Portfolio;
