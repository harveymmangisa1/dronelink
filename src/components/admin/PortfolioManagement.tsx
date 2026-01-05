import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2, Search, MapPin, Calendar, ExternalLink } from "lucide-react";
import { CreateProjectDialog } from "./CreateProjectDialog";
import { Badge } from "@/components/ui/badge";

const PortfolioManagement = () => {
    const [projects, setProjects] = useState<any[]>([]);

    useEffect(() => {
        const storedProjects = localStorage.getItem('dronelink_portfolio');
        if (storedProjects) {
            setProjects(JSON.parse(storedProjects));
        } else {
            // Initial mock data if empty
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
                }
            ];
            setProjects(initialProjects);
            localStorage.setItem('dronelink_portfolio', JSON.stringify(initialProjects));
        }
    }, []);

    const handleAddProject = (newProjectData: any) => {
        const newProject = {
            id: Date.now(),
            ...newProjectData
        };
        const updatedProjects = [newProject, ...projects];
        setProjects(updatedProjects);
        localStorage.setItem('dronelink_portfolio', JSON.stringify(updatedProjects));
    };

    const handleDeleteProject = (id: number) => {
        const updatedProjects = projects.filter(p => p.id !== id);
        setProjects(updatedProjects);
        localStorage.setItem('dronelink_portfolio', JSON.stringify(updatedProjects));
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Portfolio Management</h1>
                    <p className="text-muted-foreground">Manage the projects featured on the public portfolio page.</p>
                </div>
                <CreateProjectDialog onProjectAdded={handleAddProject} />
            </div>

            <Card className="glass">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle>Featured Projects</CardTitle>
                        <div className="relative w-64">
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                            <input
                                placeholder="Search projects..."
                                className="w-full rounded-md border border-input bg-background/50 pl-8 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            />
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    {projects.length === 0 ? (
                        <div className="text-center py-12 text-muted-foreground">
                            No projects found. Add one to show on the portfolio.
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects.map((project) => (
                                <Card key={project.id} className="bg-card/50 overflow-hidden group">
                                    <div className="relative h-40">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                                        />
                                        <div className="absolute top-2 right-2 flex gap-2">
                                            <Button
                                                variant="destructive"
                                                size="icon"
                                                className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                                                onClick={() => handleDeleteProject(project.id)}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                        <div className="absolute bottom-2 left-2">
                                            <Badge variant="secondary" className="bg-black/60 text-white backdrop-blur-sm">
                                                {project.category}
                                            </Badge>
                                        </div>
                                    </div>
                                    <CardContent className="p-4">
                                        <h3 className="font-bold truncate text-lg mb-1">{project.title}</h3>
                                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                                            <span className="flex items-center gap-1"><MapPin className="w-3" /> {project.location}</span>
                                            <span className="flex items-center gap-1"><Calendar className="w-3" /> {project.date}</span>
                                        </div>
                                        <p className="text-xs text-muted-foreground line-clamp-2 mb-4">
                                            {project.description}
                                        </p>
                                        <div className="flex justify-between items-center pt-2 border-t border-border/50">
                                            <span className="text-[10px] uppercase tracking-wider font-semibold text-primary">Live on Site</span>
                                            <ExternalLink className="w-3 h-3 text-muted-foreground" />
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default PortfolioManagement;
