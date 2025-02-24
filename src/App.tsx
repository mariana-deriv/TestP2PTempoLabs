import { Suspense } from "react";
import { useRoutes, Routes, Route, Navigate } from "react-router-dom";
import routes from "tempo-routes";
import BuySell from "./pages/buy-sell";
import Orders from "./pages/orders";
import MyAds from "./pages/my-ads";
import Profile from "./pages/profile";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        {/* Add tempo routes before other routes */}
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        <Routes>
          <Route path="/" element={<Navigate to="/buy-sell" replace />} />
          <Route path="/buy-sell" element={<BuySell />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/my-ads" element={<MyAds />} />
          <Route path="/profile" element={<Profile />} />
          {/* Add tempo route before catch-all */}
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}
        </Routes>
      </>
    </Suspense>
  );
}

export default App;
