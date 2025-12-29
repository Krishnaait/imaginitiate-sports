import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { getLoginUrl } from "@/const";
import { Trophy, Menu, X } from "lucide-react";
import { Link } from "wouter";
import { DisclaimerBanner } from "./DisclaimerBanner";
import { ReactNode, useState } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { isAuthenticated } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Disclaimer Banner */}
      <DisclaimerBanner />
      
      {/* Auto-Responsive Navigation Header */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex items-center justify-between" style={{ height: 'clamp(3.5rem, 10vw, 4rem)' }}>
          {/* Logo - Auto-responsive sizing */}
          <Link href="/">
            <div className="flex items-center cursor-pointer" style={{ gap: 'clamp(0.5rem, 2vw, 0.75rem)' }}>
              <img 
                src="/logo.png" 
                alt="IMAGINITIATE" 
                className="w-auto"
                style={{ height: 'clamp(2rem, 6vw, 3rem)' }}
              />
              <span 
                className="font-bold text-primary"
                style={{ fontSize: 'clamp(1.125rem, 3vw, 1.5rem)' }}
              >
                IMAGINITIATE
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden xl:flex items-center" style={{ gap: 'clamp(0.75rem, 2vw, 1rem)' }}>
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">
              About Us
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">
              How It Works
            </Link>
            <Link href="/responsible-gaming" className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">
              Responsible Gaming
            </Link>
            <Link href="/#faq" className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">
              FAQs
            </Link>
            <Link href="/fair-play" className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">
              Fair Play
            </Link>
            <Link href="/matches" className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">
              Matches
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">
              Contact Us
            </Link>
            {isAuthenticated ? (
              <Button size="sm" asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            ) : (
              <>
                <Button size="sm" variant="outline" asChild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="/register">Register</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle - Visible only on mobile */}
          <button
            className="xl:hidden p-2 rounded-md hover:bg-accent transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu - Auto-responsive */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t bg-background">
            <div 
              className="container flex flex-col"
              style={{ 
                gap: 'clamp(0.5rem, 2vw, 0.75rem)',
                paddingTop: 'clamp(1rem, 3vw, 1.5rem)',
                paddingBottom: 'clamp(1rem, 3vw, 1.5rem)'
              }}
            >
              <Link 
                href="/" 
                className="text-sm font-medium hover:text-primary transition-colors"
                style={{ padding: 'clamp(0.5rem, 2vw, 0.75rem) 0' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-sm font-medium hover:text-primary transition-colors"
                style={{ padding: 'clamp(0.5rem, 2vw, 0.75rem) 0' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/how-it-works" 
                className="text-sm font-medium hover:text-primary transition-colors"
                style={{ padding: 'clamp(0.5rem, 2vw, 0.75rem) 0' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                href="/responsible-gaming" 
                className="text-sm font-medium hover:text-primary transition-colors"
                style={{ padding: 'clamp(0.5rem, 2vw, 0.75rem) 0' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Responsible Gaming
              </Link>
              <Link 
                href="/#faq" 
                className="text-sm font-medium hover:text-primary transition-colors"
                style={{ padding: 'clamp(0.5rem, 2vw, 0.75rem) 0' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQs
              </Link>
              <Link 
                href="/fair-play" 
                className="text-sm font-medium hover:text-primary transition-colors"
                style={{ padding: 'clamp(0.5rem, 2vw, 0.75rem) 0' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Fair Play
              </Link>
              <Link 
                href="/matches" 
                className="text-sm font-medium hover:text-primary transition-colors"
                style={{ padding: 'clamp(0.5rem, 2vw, 0.75rem) 0' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Matches
              </Link>
              <Link 
                href="/contact" 
                className="text-sm font-medium hover:text-primary transition-colors"
                style={{ padding: 'clamp(0.5rem, 2vw, 0.75rem) 0' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              {isAuthenticated ? (
                <Button size="sm" asChild className="mt-2">
                  <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>Dashboard</Link>
                </Button>
              ) : (
                <div className="flex gap-2 mt-2">
                  <Button size="sm" variant="outline" asChild className="flex-1">
                    <Link href="/login" onClick={() => setMobileMenuOpen(false)}>Login</Link>
                  </Button>
                  <Button size="sm" asChild className="flex-1">
                    <Link href="/register" onClick={() => setMobileMenuOpen(false)}>Register</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Auto-Responsive Footer */}
      <footer className="bg-muted border-t" style={{ padding: 'clamp(2rem, 5vw, 3rem) 0' }}>
        <div className="container">
          {/* Footer Grid - Auto-responsive columns */}
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {/* Company Section */}
            <div>
              <h3 className="font-semibold mb-4" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}>
                Company
              </h3>
              <div className="flex flex-col gap-3">
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
                <Link href="/how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </Link>
                <Link href="/matches" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Fantasy Cricket
                </Link>
                <Link href="/matches" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Matches
                </Link>
              </div>
            </div>

            {/* Support Section */}
            <div>
              <h3 className="font-semibold mb-4" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}>
                Support
              </h3>
              <div className="flex flex-col gap-3">
                <Link href="/fair-play" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Fair Play
                </Link>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
                <Link href="/#faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  FAQs
                </Link>
              </div>
            </div>

            {/* Legal Section */}
            <div>
              <h3 className="font-semibold mb-4" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}>
                Legal
              </h3>
              <div className="flex flex-col gap-3">
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/disclaimer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Disclaimer
                </Link>
                <Link href="/responsible-gaming" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Responsible Gaming
                </Link>
              </div>
            </div>

            {/* Brand Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg">IMAGINITIATE</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Skill-based fantasy cricket platform. 100% free to play, educational, and compliant with Indian regulations.
              </p>
            </div>
          </div>

          {/* Footer Bottom - Auto-responsive */}
          <div 
            className="border-t pt-6 text-center text-sm text-muted-foreground"
            style={{ marginTop: 'clamp(2rem, 4vw, 3rem)' }}
          >
            <p>© {new Date().getFullYear()} IMAGINITIATE. All rights reserved.</p>
            <p className="mt-2">
              18+ Only | Skill-Based Gaming | India Compliant
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
