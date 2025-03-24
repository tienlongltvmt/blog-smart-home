
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, User, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(2);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 items-center w-full z-50 transition-all duration-300 ease-in-out"
      )}
    >
      <div
        className={cn(
          "container mx-auto px-4 md:px-6 rounded-b-lg",
          isScrolled
            ? "bg-white bg-opacity-95 backdrop-blur-sm shadow-sm"
            : "bg-white"
        )}
      >
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-semibold tracking-tight">
                Stuffeus
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/brands">Brands</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <div className="flex items-center border rounded-lg p-2 mb-3">
              <Search className="h-4 w-4 mr-2 text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent border-none focus:outline-none text-sm"
              />
            </div>
            <MobileNavLink to="/brands">Brands</MobileNavLink>
            <MobileNavLink to="/shop">Shop</MobileNavLink>
            <MobileNavLink to="/blog">Blog</MobileNavLink>
            <MobileNavLink to="/account">My Account</MobileNavLink>
          </div>
        </div>
      )}
    </header>
  );
};

// Desktop Navigation Link
const NavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  const location = useLocation();
  const isActive =
    location.pathname === to ||
    (to !== "/" && location.pathname.startsWith(to));

  return (
    <Link
      to={to}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary relative py-1 px-1",
        isActive
          ? "text-primary after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-primary after:content-['']"
          : "text-foreground/80"
      )}
    >
      {children}
    </Link>
  );
};

// Mobile Navigation Link
const MobileNavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  const location = useLocation();
  const isActive =
    location.pathname === to ||
    (to !== "/" && location.pathname.startsWith(to));

  return (
    <Link
      to={to}
      className={cn(
        "block py-2 px-3 rounded-md transition-colors",
        isActive
          ? "bg-secondary font-medium"
          : "text-foreground/80 hover:bg-secondary/50"
      )}
    >
      {children}
    </Link>
  );
};

export default Navbar;
