import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
    return (
        <div className="min-h-screen bg-background font-sans">
            <Navbar />
            <div className="container mx-auto px-4 py-24 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-foreground">Cookie Policy</h1>
                <div className="prose prose-invert max-w-none text-muted-foreground">
                    <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">1. What Are Cookies</h2>
                        <p>
                            Cookies are small text files that are placed on your computer or mobile device by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">2. How We Use Cookies</h2>
                        <p>We use cookies for a variety of reasons detailed below:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly.</li>
                            <li><strong>Analytics Cookies:</strong> We use these to understand how visitors interact with our website.</li>
                            <li><strong>Functionality Cookies:</strong> These allow the website to remember choices you make.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Disabling Cookies</h2>
                        <p>
                            You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CookiePolicy;
