import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ValueProposition from "./pages/ValueProposition";
import BuyerJourney from "./pages/BuyerJourney";
import RoadmapTimeline from "./pages/RoadmapTimeline";
import CompetitorMatrix from "./pages/CompetitorMatrix";
import EnergyProducts from "./pages/EnergyProducts";
import EnergyProductDetail from "./pages/EnergyProductDetail";
import EnergyProductProof from "./pages/EnergyProductProof";
import EnergyVendors from "./pages/EnergyVendors";
import EnergyVendorDetail from "./pages/EnergyVendorDetail";
import ClimateRisk from "./pages/ClimateRisk";
import ClimateRiskProof from "./pages/ClimateRiskProof";
import ClimateVendors from "./pages/ClimateVendors";
import ClimateVendorDetail from "./pages/ClimateVendorDetail";
import SustainabilityOverview from "./pages/SustainabilityOverview";
import SustainabilityProducts from "./pages/SustainabilityProducts";
import SustainabilityProductDetail from "./pages/SustainabilityProductDetail";
import CarbonPerformance from "./pages/CarbonPerformance";
import SupplyChain from "./pages/SupplyChain";
import EsgReporting from "./pages/EsgReporting";
import SustainabilityVendors from "./pages/SustainabilityVendors";
import SustainabilityVendorDetail from "./pages/SustainabilityVendorDetail";
import SharedPlatform from "./pages/SharedPlatform";
import DataGovernance from "./pages/DataGovernance";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/buyer-journey" element={<BuyerJourney />} />
          <Route path="/value-proposition" element={<ValueProposition />} />
          <Route path="/roadmap-timeline" element={<RoadmapTimeline />} />
          <Route path="/competitor-matrix" element={<CompetitorMatrix />} />
<Route path="/shared-platform" element={<SharedPlatform />} />
          <Route path="/data-governance" element={<DataGovernance />} />
          <Route path="/energy-products" element={<EnergyProducts />} />
          <Route path="/energy-products/:slug" element={<EnergyProductDetail />} />
          <Route path="/energy-products/:slug/proof" element={<EnergyProductProof />} />
          <Route path="/energy-vendors" element={<EnergyVendors />} />
          <Route path="/energy-vendors/:slug" element={<EnergyVendorDetail />} />
          <Route path="/climate-risk" element={<ClimateRisk />} />
          <Route path="/climate-risk/proof" element={<ClimateRiskProof />} />
          <Route path="/climate-vendors" element={<ClimateVendors />} />
          <Route path="/climate-vendors/:slug" element={<ClimateVendorDetail />} />

          <Route path="/sustainability" element={<SustainabilityOverview />} />
          <Route path="/sustainability-products" element={<SustainabilityProducts />} />
          <Route path="/sustainability-products/:slug" element={<SustainabilityProductDetail />} />
          <Route path="/carbon-performance" element={<CarbonPerformance />} />
          <Route path="/supply-chain" element={<SupplyChain />} />
          <Route path="/esg-reporting" element={<EsgReporting />} />
          <Route path="/sustainability-vendors" element={<SustainabilityVendors />} />
          <Route path="/sustainability-vendors/:slug" element={<SustainabilityVendorDetail />} />


          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
