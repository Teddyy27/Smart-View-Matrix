
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Automation from "./pages/Automation";
import User from "./pages/User";
<<<<<<< HEAD
import Settings from "./pages/Settings";
=======
import Users from "./pages/Users";
>>>>>>> 3b4dab00704b99baed51bd7c9048dd1b6547f817
import { AuthProvider } from "./contexts/AuthContext";

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/automation" element={<Automation />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={<User />} />
<<<<<<< HEAD
            <Route path="/users" element={<User />} />
            <Route path="/settings" element={<Settings />} />
=======
            <Route path="/users" element={<Users />} />
>>>>>>> 3b4dab00704b99baed51bd7c9048dd1b6547f817
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;
