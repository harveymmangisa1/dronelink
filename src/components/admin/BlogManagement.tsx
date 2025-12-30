import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pencil, Trash2, Search } from "lucide-react";
import { CreatePostDialog } from "./CreatePostDialog";

const BlogManagement = () => {
    const [posts, setPosts] = useState([
        { id: 1, title: "The Future of Drones in Agriculture", status: "Published", date: "2024-03-15", author: "Jane Doe", category: "Agriculture" },
        { id: 2, title: "Precision Mapping Techniques", status: "Draft", date: "2024-03-10", author: "John Smith", category: "Technology" },
        { id: 3, title: "Drone Safety Regulations 2024", status: "Published", date: "2024-03-05", author: "Mike Ross", category: "News" },
    ]);

    const handleCreatePost = (newPostData: any) => {
        const newPost = {
            id: posts.length + 1,
            title: newPostData.title,
            status: "Draft",
            date: new Date().toISOString().split('T')[0],
            author: "Admin User",
            category: newPostData.category
        };
        setPosts([newPost, ...posts]);
    };

    const handleDeletePost = (id: number) => {
        setPosts(posts.filter(post => post.id !== id));
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Blog Posts</h1>
                    <p className="text-muted-foreground">Manage your articles and publications.</p>
                </div>
                <CreatePostDialog onPostCreated={handleCreatePost} />
            </div>

            <Card className="glass">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle>All Posts</CardTitle>
                        <div className="relative w-64">
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                            <input
                                placeholder="Search posts..."
                                className="w-full rounded-md border border-input bg-background/50 pl-8 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            />
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="rounded-md border border-border/50">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-muted/50 text-muted-foreground">
                                <tr>
                                    <th className="p-4 font-medium">Title</th>
                                    <th className="p-4 font-medium">Category</th>
                                    <th className="p-4 font-medium">Status</th>
                                    <th className="p-4 font-medium">Date</th>
                                    <th className="p-4 font-medium text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts.map((post) => (
                                    <tr key={post.id} className="border-t border-border/50 hover:bg-muted/30 transition-colors">
                                        <td className="p-4 font-medium">{post.title}</td>
                                        <td className="p-4 text-muted-foreground">{post.category}</td>
                                        <td className="p-4">
                                            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${post.status === 'Published'
                                                    ? 'bg-green-500/10 text-green-500'
                                                    : 'bg-yellow-500/10 text-yellow-500'
                                                }`}>
                                                {post.status}
                                            </span>
                                        </td>
                                        <td className="p-4 text-muted-foreground">{post.date}</td>
                                        <td className="p-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-blue-500">
                                                    <Pencil className="h-4 w-4" />
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8 hover:text-red-500"
                                                    onClick={() => handleDeletePost(post.id)}
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default BlogManagement;
