import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-background font-sans">
            <Navbar />
            <div className="container mx-auto px-4 py-24 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>
                <div className="prose prose-invert max-w-none text-muted-foreground">
                    <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Introduction</h2>
                        <p>
                            DronelinkMW ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website and our practices for collecting, using, maintaining, protecting, and disclosing that information.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Information We Collect</h2>
                        <p>We collect several types of information from and about users of our Website, including information:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>By which you may be personally identified, such as name, postal address, e-mail address, telephone number ("personal information").</li>
                            <li>About your internet connection, the equipment you use to access our Website, and usage details.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">3. How We Use Your Information</h2>
                        <p>We use information that we collect about you or that you provide to us, including any personal information:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>To present our Website and its contents to you.</li>
                            <li>To provide you with information, products, or services that you request from us.</li>
                            <li>To fulfill any other purpose for which you provide it.</li>
                            <li>To notify you about changes to our Website or any products or services we offer or provide though it.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Contact Information</h2>
                        <p>
                            To ask questions or comment about this privacy policy and our privacy practices, contact us at: <a href="mailto:info@dronelinkmw.com" className="text-primary hover:underline">info@dronelinkmw.com</a>.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
