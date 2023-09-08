import "./App.css";
import { Header } from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./lib/utils";

export function App() {
  const helmetContext = {};
  return (
    <HelmetProvider context={helmetContext}>
      <ScrollToTop />
      <main className="relative min-h-full">
        <Header />
        <Outlet />
        <Footer />
      </main>
    </HelmetProvider>
  );
}
