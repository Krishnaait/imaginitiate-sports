import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { getLoginUrl } from "@/const";
import { Trophy } from "lucide-react";
import { Link } from "wouter";
import { DisclaimerBanner } from "./DisclaimerBanner";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Disclaimer Banner */}
      <DisclaimerBanner />
      
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <Trophy className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">IMAGINITIATE</span>
            </div>
          </Link>
          <div className="flex items-center gap-4 overflow-x-auto">
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
              <Link href="/dashboard">
                <Button size="sm">Dashboard</Button>
              </Link>
            ) : (
              <>
                <Link href="/login">
                  <Button size="sm" variant="outline">Login</Button>
                </Link>
                <Link href="/register">
                  <Button size="sm">Register</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg">IMAGINITIATE</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Fantasy Sports - Skill-based, educational, and completely free to play.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>IMAGINITIATE VENTURES PRIVATE LIMITED</li>
                <li>A-96 GROUND FLOOR</li>
                <li>SHANKAR GARDEN VIKASPURI</li>
                <li>NEW DELHI, Delhi, 110018</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
                <li><Link href="/how-it-works" className="text-muted-foreground hover:text-primary">How It Works</Link></li>
                <li><Link href="/fantasy-cricket" className="text-muted-foreground hover:text-primary">Fantasy Cricket</Link></li>
                <li><Link href="/matches" className="text-muted-foreground hover:text-primary">Matches</Link></li>
                <li><Link href="/fair-play" className="text-muted-foreground hover:text-primary">Fair Play</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/terms" className="text-muted-foreground hover:text-primary">Terms & Conditions</Link></li>
                <li><Link href="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="/disclaimer" className="text-muted-foreground hover:text-primary">Disclaimer</Link></li>
                <li><Link href="/responsible-gaming" className="text-muted-foreground hover:text-primary">Responsible Gaming</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 IMAGINITIATE VENTURES PRIVATE LIMITED. All rights reserved.</p>
            <p className="mt-2">imanitiatesports.com - Free-to-play skill-based fantasy cricket platform.</p>
            <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
              <p className="text-amber-800 dark:text-amber-300 font-semibold mb-2">Important Disclaimers:</p>
              <ul className="text-xs text-amber-700 dark:text-amber-400 space-y-1 text-left max-w-4xl mx-auto">
                <li><strong>Age Restriction:</strong> This platform is strictly for users 18 years of age and above only.</li>
                <li><strong>Geo-Restrictions:</strong> This platform is not available for users in the following Indian states: Assam, Telangana, Tamil Nadu, Orissa, Andhra Pradesh, Nagaland, and Sikkim.</li>
                <li><strong>Legal Compliance:</strong> IMAGINITIATE operates in full compliance with Indian laws and regulations governing fantasy sports. We strictly follow all applicable Indian fantasy sports rules and regulations.</li>
                <li><strong>Skill-Based Platform:</strong> This is a 100% free-to-play, skill-based educational platform. No monetary transactions are involved.</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
