import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { FileDown, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const DownloadBrochure = () => {
    const [downloaded, setDownloaded] = useState(false);

    const handleDownload = () => {
        // In a real app, this would trigger a file download
        setDownloaded(true);
        // Simulate download delay
        setTimeout(() => {
            const link = document.createElement('a');
            link.href = '#'; // Would be actual PDF path
            link.download = 'DronelinkMW-Brochure-2024.pdf';
            // link.click(); // Commented out to prevent error in demo
        }, 500);
    };

    return (
        <div className="min-h-screen bg-background font-sans">
            <Navbar />

            <section className="py-32 container mx-auto px-4 text-center">
                <div className="max-w-2xl mx-auto bg-card border border-border/50 rounded-2xl p-12 shadow-2xl">
                    <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <FileDown className="w-8 h-8" />
                    </div>
                    <h1 className="text-3xl font-bold mb-4">Company Brochure</h1>
                    <p className="text-muted-foreground mb-8">
                        Get our comprehensive guide to drone services, specifications, and pricing packages.
                        Includes detailed case studies and technical capabilities.
                    </p>

                    {downloaded ? (
                        <div className="text-green-500 flex flex-col items-center animate-in fade-in zoom-in">
                            <CheckCircle className="w-12 h-12 mb-2" />
                            <p className="font-semibold">Download Started!</p>
                            <p className="text-sm text-muted-foreground mt-2">Check your downloads folder.</p>
                        </div>
                    ) : (
                        <Button onClick={handleDownload} size="lg" className="w-full sm:w-auto">
                            Download PDF (4.5 MB)
                        </Button>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default DownloadBrochure;
