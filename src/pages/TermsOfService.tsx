import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-background font-sans">
            <Navbar />
            <div className="container mx-auto px-4 py-24 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-foreground">Terms of Service</h1>
                <div className="prose prose-invert max-w-none text-muted-foreground">
                    <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this websites particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Description of Service</h2>
                        <p>
                            DronelinkMW provides aerial imagery, GIS mapping, and precision agriculture services. You are responsible for obtaining access to the Service and that access may involve third party fees (such as Internet service provider or airtime charges).
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">3. User Conduct</h2>
                        <p>
                            You agree to use the website only for lawful purposes. You are prohibited from posting on or transmitting through the website any material that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, sexually explicit, profane, hateful, racially, ethnically, or otherwise objectionable.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Intellectual Property</h2>
                        <p>
                            The content, organization, graphics, design, compilation, magnetic translation, digital conversion and other matters related to the Site are protected under applicable copyrights, trademarks and other proprietary (including but not limited to intellectual property) rights.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TermsOfService;
