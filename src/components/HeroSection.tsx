import { Button } from '@/components/ui/button';
import { ArrowRight, Play, MapPin, Camera, Leaf, BarChart3 } from 'lucide-react';
import heroImage from '@/assets/hero-drone.jpg';

const HeroSection = () => {
  const features = [
    { icon: Camera, text: 'Aerial Imagery' },
    { icon: MapPin, text: 'GIS Mapping' },
    { icon: Leaf, text: 'Precision Agriculture' },
    { icon: BarChart3, text: 'Land Monitoring' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional drone technology in action"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
        <div className="absolute inset-0 bg-background/20"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-accent rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-primary-glow rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-accent rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }}></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-card/20 backdrop-blur-sm border border-border/30 rounded-full mb-8">
            <span className="text-accent font-medium text-sm">Next-Gen Drone Intelligence</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Advanced Drone
            <span className="block bg-tech-gradient bg-clip-text text-transparent">
              Technology Solutions
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing aerial data collection with cutting-edge drone technology for 
            agriculture, mapping, and environmental monitoring.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {features.map((feature, index) => (
              <div
                key={feature.text}
                className="flex items-center space-x-2 bg-card/10 backdrop-blur-sm border border-border/20 rounded-full px-4 py-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="w-4 h-4 text-accent" />
                <span className="text-white/90 text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" className="group">
              Explore Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse-glow">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;