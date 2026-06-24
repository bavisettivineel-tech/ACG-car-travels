import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoadingScreen } from "@/components/LoadingScreen";
import { lazy, Suspense } from "react";

const HomePage       = lazy(() => import("@/pages/HomePage"));
const TaxiService    = lazy(() => import("@/pages/TaxiServicePage"));
const AirportTransfer = lazy(() => import("@/pages/AirportTransferPage"));
const OutstationCab  = lazy(() => import("@/pages/OutstationCabPage"));
const TempoTraveller = lazy(() => import("@/pages/TempoTravellerPage"));
const InnovaCrysta   = lazy(() => import("@/pages/InnovaCrystaPage"));
const TourPackages   = lazy(() => import("@/pages/TourPackagesPage"));

export default function App() {
  return (
    <BrowserRouter>
      <LoadingScreen />
      <Suspense fallback={<div className="min-h-screen bg-[#050505]" />}>
        <Routes>
          <Route path="/"                              element={<HomePage />} />
          <Route path="/taxi-service-amalapuram"       element={<TaxiService />} />
          <Route path="/airport-transfer-amalapuram"   element={<AirportTransfer />} />
          <Route path="/outstation-cab-amalapuram"     element={<OutstationCab />} />
          <Route path="/tempo-traveller-amalapuram"    element={<TempoTraveller />} />
          <Route path="/innova-crysta-amalapuram"      element={<InnovaCrysta />} />
          <Route path="/tour-packages-amalapuram"      element={<TourPackages />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
