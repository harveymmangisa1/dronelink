import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PlaceholderPage = ({ title }: { title: string }) => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center bg-gray-50">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-lg text-gray-600 mb-8">This page is currently under construction.</p>
            <Link to="/">
                <Button>Return Home</Button>
            </Link>
        </div>
    );
};

export default PlaceholderPage;
