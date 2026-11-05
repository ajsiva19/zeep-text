import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Logo } from "../ui/Logo";
import { Button } from "../ui/Button";
import { ThemeToggle } from "../ui/ThemeToggle";

const navItems = [
  { to: "/", label: "Home" },
  {
    to: "/about",
    label: "About",
    children: [
      { to: "/about", label: "About Us" },
      { to: "/how-it-works", label: "How It Works" },
    ],
  },
  {
    to: "/services",
    label: "Loan Program",
    children: [
      { to: "/services", label: "All Programs" },
      { to: "/services#home-purchase", label: "Home Purchase" },
      { to: "/first-time-buyers", label: "First-Time Buyers" },
      { to: "/services#refinancing", label: "Refinancing" },
      { to: "/services#investment", label: "Investment Property" },
    ],
  },
  {
    to: "/knowledge-hub",
    label: "Resources",
    children: [
      { to: "/knowledge-hub", label: "Knowledge Hub" },
      { to: "/faq", label: "FAQ" },
    ],
  },
  { to: "/partners", label: "Partner" },
  { to: "/contact", label: "Contact" },
];

function NavItem({ item, onNavigate }) {
  if (!item.children) {
    return (
      <NavLink
        to={item.to}
        end={item.to === "/"}
        onClick={onNavigate}
        className={({ isActive }) =>
          `text-[13px] font-medium tracking-wide transition-colors py-2 ${
            isActive ? "text-gold-500" : "text-nav hover:text-gold-500"
          }`
        }
      >
        {item.label}
      </NavLink>
    );
  }

  return (
    <div className="relative group">
      <NavLink
        to={item.to}
        onClick={onNavigate}
        className={({ isActive }) =>
          `inline-flex items-center gap-1 text-[13px] font-medium tracking-wide transition-colors py-2 ${
            isActive ? "text-gold-500" : "text-nav hover:text-gold-500"
          }`
        }
      >
        {item.label}
        <ChevronDown className="w-3.5 h-3.5" />
      </NavLink>
      <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute left-0 top-full pt-2 z-50">
        <div className="min-w-52 rounded-lg bg-surface border border-line shadow-lg py-2">
          {item.children.map((child) => (
            <Link
              key={child.to}
              to={child.to}
              onClick={onNavigate}
              className="block px-4 py-2 text-sm text-nav hover:text-gold-500 hover:bg-muted"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-gold-500 text-navy-950 overflow-hidden h-9">
        <div className="marquee-track h-full items-center">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="inline-flex items-center gap-2 px-8 text-xs sm:text-sm font-semibold whitespace-nowrap">
              <Phone className="w-3.5 h-3.5" />
              For Assistance (555) 123-4567
            </span>
          ))}
        </div>
      </div>

      <div className="bg-header/95 backdrop-blur-md border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[76px] gap-4">
            <Link to="/" className="shrink-0" onClick={() => setMobileOpen(false)}>
              <Logo />
            </Link>

            <nav className="hidden xl:flex items-center gap-6">
              {navItems.map((item) => (
                <NavItem key={item.label} item={item} />
              ))}
            </nav>

            <div className="hidden xl:flex items-center gap-3">
              <Button to="/contact" size="sm">
                Let&apos;s Talk
              </Button>
              <ThemeToggle />
            </div>

            <div className="xl:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                className="text-nav p-2"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileOpen && (
          <div className="xl:hidden border-t border-line bg-header">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded text-sm font-medium ${
                        isActive ? "text-gold-500 bg-muted" : "text-nav hover:text-gold-500"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                  {item.children?.map((child) => (
                    <Link
                      key={child.to}
                      to={child.to}
                      onClick={() => setMobileOpen(false)}
                      className="block pl-8 pr-4 py-2 text-sm text-body hover:text-gold-500"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="px-4 pt-3">
                <Button to="/contact" size="sm" className="w-full" onClick={() => setMobileOpen(false)}>
                  Let&apos;s Talk
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
