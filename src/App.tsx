import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import CategoryPage from "./pages/CategoryPage";
import AboutPage from "./pages/AboutPage";
import LearnPage from "./pages/LearnPage";
import ProductPage from "./pages/ProductPage";
import BestSellersPage from "./pages/BestSellersPage";
import ShopByCategoryPage from "./pages/ShopByCategoryPage";
import StacksPage from "./pages/StacksPage";
import QuizzesPage from "./pages/QuizzesPage";
import GuidesPage from "./pages/GuidesPage";
import GuideArticlePage from "./pages/GuideArticlePage";
import QualityPage from "./pages/QualityPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/best-sellers" element={<BestSellersPage />} />
          <Route path="/shop-by-category" element={<ShopByCategoryPage />} />
          <Route path="/stacks" element={<StacksPage />} />
          <Route path="/quizzes" element={<QuizzesPage />} />
          <Route path="/guides" element={<GuidesPage />} />
          <Route path="/guides/:slug" element={<GuideArticlePage />} />
          <Route path="/quality" element={<QualityPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
