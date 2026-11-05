import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { Layout } from "./components/layout/Layout";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import FirstTimeBuyersPage from "./pages/FirstTimeBuyers";
import HowItWorksPage from "./pages/HowItWorks";
import FAQPage from "./pages/FAQ";
import ContactPage from "./pages/Contact";
import KnowledgeHubPage from "./pages/KnowledgeHub";
import PartnersPage from "./pages/Partners";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/first-time-buyers" element={<FirstTimeBuyersPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/knowledge-hub" element={<KnowledgeHubPage />} />
            <Route path="/partners" element={<PartnersPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
