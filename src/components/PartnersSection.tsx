const PartnersSection = () => {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold mb-8">Our Partners</h2>
                <div className="flex justify-center gap-8 flex-wrap">
                    {/* Add partner logos here */}
                    <div className="p-4 bg-white rounded shadow">Partner 1</div>
                    <div className="p-4 bg-white rounded shadow">Partner 2</div>
                    <div className="p-4 bg-white rounded shadow">Partner 3</div>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
