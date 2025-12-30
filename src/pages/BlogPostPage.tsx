import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";

const BlogPostPage = () => {
    const { postId } = useParams();

    // Mock data - would normally fetch by ID
    const post = {
        title: "The Future of Drones in Agriculture",
        date: "March 15, 2024",
        author: "Jane Doe",
        readTime: "5 min read",
        content: "Drones are transforming agriculture by providing real-time data on crop health, soil conditions, and irrigation needs...",
        image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=2000" // Placeholder
    };

    return (
        <article className="min-h-screen bg-background pb-20">
            {/* Hero Header */}
            <div className="relative h-[40vh] min-h-[400px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 z-20 container mx-auto px-4 pb-12">
                    <Link to="/blog">
                        <Button variant="ghost" className="text-white/80 hover:text-white mb-6 p-0 hover:bg-transparent">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                        </Button>
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight max-w-4xl">
                        {post.title}
                    </h1>
                    <div className="flex flex-wrap gap-6 text-white/80 text-sm">
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4" /> {post.author}
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" /> {post.date}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" /> {post.readTime}
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-3xl mx-auto prose prose-lg prose-invert text-muted-foreground">
                    <p className="text-xl text-foreground font-medium mb-8 leading-relaxed">
                        {post.content}
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <h2>Key Benefits</h2>
                    <ul>
                        <li>Increased efficiency in crop monitoring</li>
                        <li>Reduced costs through precision spraying</li>
                        <li>Better data for yield prediction</li>
                    </ul>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </article>
    );
};

export default BlogPostPage;
