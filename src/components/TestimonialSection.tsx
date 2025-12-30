import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const TestimonialSection = () => {
    const testimonials = [
        {
            id: 1,
            name: "John Smith",
            role: "Farm Manager, AgriCorp",
            content: "DronelinkMW's agricultural drone services have revolutionized how we monitor our crops. The precision and data insights are unmatched.",
            rating: 5,
        },
        {
            id: 2,
            name: "Sarah Jones",
            role: "Director, EcoWatch",
            content: "The land health monitoring reports provided by DronelinkMW were crucial for our conservation project. Highly recommended!",
            rating: 5,
        },
        {
            id: 3,
            name: "David Brown",
            role: "Construction Lead, BuildRight",
            content: "Their GIS mapping and aerial imagery saved us weeks of surveying time. Professional, fast, and accurate.",
            rating: 5,
        },
    ];

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Trusted by <span className="text-gradient">Industry Leaders</span>
                    </h2>
                    <p className="text-muted-foreground">
                        See what our clients say about our drone solutions and services.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.id} className="glass hover:border-primary/50 transition-all duration-300">
                            <CardContent className="pt-6">
                                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                    ))}
                                </div>
                                <p className="text-muted-foreground mb-6 italic">
                                    "{testimonial.content}"
                                </p>
                                <div>
                                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
