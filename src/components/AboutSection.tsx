import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Award, Users, Zap, ArrowRight } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Shield, value: '500+', label: 'Projects Completed', color: 'text-blue-500' },
    { icon: Award, value: '99%', label: 'Client Satisfaction', color: 'text-green-500' },
    { icon: Users, value: '50+', label: 'Expert Team Members', color: 'text-purple-500' },
    { icon: Zap, value: '24/7', label: 'Support Available', color: 'text-orange-500' },
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We constantly push the boundaries of drone technology to deliver cutting-edge solutions.',
    },
    {
      title: 'Precision & Quality',
      description: 'Every project is executed with meticulous attention to detail and the highest quality standards.',
    },
    {
      title: 'Sustainable Solutions',
      description: 'Our drone services contribute to environmental monitoring and sustainable development practices.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content Side */}
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <span className="text-primary font-medium text-sm">About DronelinkMW</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Pioneering the Future of
              <span className="block bg-tech-gradient bg-clip-text text-transparent">
                Aerial Intelligence
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Founded with a vision to revolutionize how we collect and analyze aerial data, DronelinkMW 
              combines cutting-edge drone technology with advanced AI and spatial analysis to deliver 
              unprecedented insights for agriculture, mapping, and environmental monitoring.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of certified drone pilots, GIS specialists, and data scientists work together to 
              provide comprehensive solutions that help businesses make informed decisions based on 
              accurate, real-time aerial data.
            </p>
            
            <Button variant="hero" size="lg" className="group">
              Our Story
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Visual Side */}
          <div className="animate-fade-in">
            <div className="relative">
              {/* Main Card */}
              <Card className="bg-card-gradient border-border/50 shadow-card p-8">
                <CardContent className="p-0">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-tech-gradient rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <Zap className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Mission Statement</h3>
                    <p className="text-muted-foreground">
                      Empowering industries with intelligent aerial solutions that drive innovation, 
                      sustainability, and data-driven decision making.
                    </p>
                  </div>
                  
                  {/* Values */}
                  <div className="space-y-4">
                    {values.map((value, index) => (
                      <div
                        key={value.title}
                        className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg animate-scale-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                          <p className="text-sm text-muted-foreground">{value.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent/20 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className="card-hover bg-card-gradient border-border/50 text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto`} />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;