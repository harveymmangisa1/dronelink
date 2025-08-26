import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AerialImagery from "./pages/AerialImagery";
import GISMapping from "./pages/GISMapping";
import PrecisionAgriculture from "./pages/PrecisionAgriculture";
import LandHealthMonitoring from "./pages/LandHealthMonitoring";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/aerial-imagery" element={<AerialImagery />} />
          <Route path="/services/gis-mapping" element={<GISMapping />} />
          <Route path="/services/precision-agriculture" element={<PrecisionAgriculture />} />
          <Route path="/services/land-health-monitoring" element={<LandHealthMonitoring />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
