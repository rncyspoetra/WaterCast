import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPages from "./pages/LoginPages";
import { Toaster } from "@/components/ui/sonner";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardPages from "./pages/DashboardPages";
import UsersPages from "./pages/UsersPages";
import DailySalesPages from "./pages/DailySalesPages";
import MonthlySalesPages from "./pages/MonthlySalesPages";
import PredictPages from "./pages/PredictPages";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  Unauthorized401,
  Forbidden403,
  NotFound404,
  Error500,
} from "./components/ErrorComponent";

function App() {
  return (
    <BrowserRouter>
      <TooltipProvider>
        <Toaster theme="light" position="top-right" />

        <Routes>
          {/* Public route */}
          <Route path="/" element={<LoginPages />} />

          {/* Protected routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPages />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users"
            element={
              <ProtectedRoute>
                <UsersPages />
              </ProtectedRoute>
            }
          />
          <Route
            path="/daily-sales"
            element={
              <ProtectedRoute>
                <DailySalesPages />
              </ProtectedRoute>
            }
          />
          <Route
            path="/monthly-sales"
            element={
              <ProtectedRoute>
                <MonthlySalesPages />
              </ProtectedRoute>
            }
          />
          <Route
            path="/predict"
            element={
              <ProtectedRoute>
                <PredictPages />
              </ProtectedRoute>
            }
          />
          <Route
            path="/monthly-sales"
            element={
              <ProtectedRoute>
                <PredictPages />
              </ProtectedRoute>
            }
          />

          {/* Forbidden Route */}
          <Route path="/403" element={<Forbidden403 />} />

          {/* Unauthorized Route */}
          <Route path="/401" element={<Unauthorized401 />} />

          {/* Internal Server Error Route */}
          <Route path="/500" element={<Error500 />} />

          {/* Not Found Route */}
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </TooltipProvider>
    </BrowserRouter>
  );
}

export default App;
