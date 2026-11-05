import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-page">
      <Header />
      <main className="flex-1 pt-[112px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
