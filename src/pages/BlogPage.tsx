import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";

const BlogPage = () => {
    // Mock data (replace with Supabase data later)
    const posts = [
        {
            id: 1,
            title: "The Future of Drones in Agriculture",
            excerpt: "Discover how AI and drone technology are revolutionizing crop management and boosting yields across Africa.",
            date: "Mar 15, 2024",
            readTime: "5 min read",
            category: "Agriculture"
        },
        {
            id: 2,
            title: "Precision Mapping: LiDAR vs Photogrammetry",
            excerpt: "A deep dive into the technical differences and use cases for the two most popular aerial mapping technologies.",
            date: "Mar 10, 2024",
            readTime: "8 min read",
            category: "Technology"
        },
        {
            id: 3,
            title: "Drones and Land Health Monitoring",
            excerpt: "How aerial imagery is helping environmentalists track soil erosion and deforestation in real-time.",
            date: "Mar 05, 2024",
            readTime: "4 min read",
            category: "Environment"
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-24 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full -translate-y-1/2" />
                <div className="container mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                        Insights & <span className="text-gradient">Innovation</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                        Explore the latest trends in drone technology, aerial mapping, and precision agriculture.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="container mx-auto px-4 pb-24">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Card key={post.id} className="glass group hover:border-primary/50 transition-all duration-300">
                            <CardHeader>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/10 text-primary">
                                        {post.category}
                                    </span>
                                    <div className="flex items-center text-muted-foreground text-xs gap-2">
                                        <CalendarDays className="w-3 h-3" />
                                        {post.date}
                                    </div>
                                </div>
                                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                                    {post.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex items-center text-xs text-muted-foreground gap-1">
                                        <Clock className="w-3 h-3" />
                                        {post.readTime}
                                    </div>
                                    <Link to={`/blog/${post.id}`}>
                                        <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 h-auto hover:bg-transparent group/btn">
                                            Read More <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default BlogPage;
