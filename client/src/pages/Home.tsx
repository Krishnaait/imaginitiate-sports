import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Menu, X, Trophy } from "lucide-react";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center space-x-3 hover:opacity-80 transition-opacity cursor-pointer">
                <img src="/logo.png" alt="IMAGINITIATE Logo" className="h-12 w-auto" />
                <span className="text-2xl font-bold text-emerald-400">IMAGINITIATE</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center space-x-8">
              <Link href="/" className="text-gray-300 hover:text-emerald-400 transition-colors">Home</Link>
              <Link href="/about" className="text-gray-300 hover:text-emerald-400 transition-colors">About Us</Link>
              <Link href="/how-it-works" className="text-gray-300 hover:text-emerald-400 transition-colors">How It Works</Link>
              <Link href="/matches" className="text-gray-300 hover:text-emerald-400 transition-colors">Matches</Link>
              <Link href="/responsible-gaming" className="text-gray-300 hover:text-emerald-400 transition-colors">Responsible Gaming</Link>
              <Link href="/fair-play" className="text-gray-300 hover:text-emerald-400 transition-colors">Fair Play</Link>
              <Link href="/contact" className="text-gray-300 hover:text-emerald-400 transition-colors">Contact Us</Link>
              {isAuthenticated ? (
                <Link href="/dashboard"><Button className="bg-emerald-500 hover:bg-emerald-600 text-white">Dashboard</Button></Link>
              ) : (
                <>
                  <Link href="/login"><Button variant="outline" className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white">Login</Button></Link>
                  <Link href="/register"><Button className="bg-emerald-500 hover:bg-emerald-600 text-white">Register</Button></Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="xl:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="xl:hidden py-4 border-t border-gray-800">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="text-gray-300 hover:text-emerald-400 transition-colors">Home</Link>
                <Link href="/about" className="text-gray-300 hover:text-emerald-400 transition-colors">About Us</Link>
                <Link href="/how-it-works" className="text-gray-300 hover:text-emerald-400 transition-colors">How It Works</Link>
                <Link href="/matches" className="text-gray-300 hover:text-emerald-400 transition-colors">Matches</Link>
                <Link href="/responsible-gaming" className="text-gray-300 hover:text-emerald-400 transition-colors">Responsible Gaming</Link>
                <Link href="/fair-play" className="text-gray-300 hover:text-emerald-400 transition-colors">Fair Play</Link>
                <Link href="/contact" className="text-gray-300 hover:text-emerald-400 transition-colors">Contact Us</Link>
                <div className="flex flex-col space-y-2 pt-4">
                  {isAuthenticated ? (
                    <Link href="/dashboard"><Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">Dashboard</Button></Link>
                  ) : (
                    <>
                      <Link href="/login"><Button variant="outline" className="w-full border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white">Login</Button></Link>
                      <Link href="/register"><Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">Register</Button></Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-cricket-stadium.jpg"
            alt="Cricket Stadium"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-gray-900"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center pt-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            MASTER YOUR CRICKET
            <br />
            <span className="text-emerald-400">KNOWLEDGE</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Free-to-play fantasy cricket platform where skill meets strategy. Build your dream team and compete with cricket enthusiasts worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {isAuthenticated ? (
              <Link href="/dashboard">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-6">
                  Go to Dashboard
                </Button>
              </Link>
            ) : (
              <>
                <Link href="/register">
                  <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-6">
                    Start Playing Free
                  </Button>
                </Link>
                <Link href="/how-it-works">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6">
                    Learn How
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <span className="text-emerald-400 font-bold">100%</span>
              </div>
              <span>Skill Based</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <Trophy className="text-emerald-400" size={24} />
              </div>
              <span>Safe & Secure</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <Card className="relative overflow-hidden bg-gray-900 border-gray-800 hover:border-emerald-500 transition-all group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/cricket-batsman-action.jpg"
                  alt="Create Your Team"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Create Your Team</h3>
                <p className="text-gray-400 text-sm">
                  Select 11 players within 100 credits. Choose your captain and vice-captain wisely.
                </p>
              </div>
            </Card>

            {/* Feature 2 */}
            <Card className="relative overflow-hidden bg-gray-900 border-gray-800 hover:border-emerald-500 transition-all group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/cricket-strategy-planning.jpg"
                  alt="Join Contests"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Join Contests</h3>
                <p className="text-gray-400 text-sm">
                  Enter free or paid contests. Compete with thousands of players for exciting prizes.
                </p>
              </div>
            </Card>

            {/* Feature 3 */}
            <Card className="relative overflow-hidden bg-gray-900 border-gray-800 hover:border-emerald-500 transition-all group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/cricket-team-celebration.jpg"
                  alt="Track Live Scores"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Track Live Scores</h3>
                <p className="text-gray-400 text-sm">
                  Follow real-time match updates and see your team's performance as it happens.
                </p>
              </div>
            </Card>

            {/* Feature 4 */}
            <Card className="relative overflow-hidden bg-gray-900 border-gray-800 hover:border-emerald-500 transition-all group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/cricket-bowler-action.jpg"
                  alt="Win Big Prizes"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Win Big Prizes</h3>
                <p className="text-gray-400 text-sm">
                  Top performers win cash prizes, rewards, and exclusive merchandise.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/cricket-batsman-action.jpg"
            alt="Strategic Fantasy Cricket"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Strategic Fantasy Cricket
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Experience the thrill of fantasy cricket with our skill-based platform. Analyze player stats, study pitch conditions, and make strategic decisions to outsmart your opponents. Every choice matters in the pursuit of victory.
            </p>
            <Link href="/how-it-works">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                Discover More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">10K+</div>
              <div className="text-gray-400">Active Players</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">500+</div>
              <div className="text-gray-400">Daily Contests</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">₹10L+</div>
              <div className="text-gray-400">Prizes Won</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">4.8★</div>
              <div className="text-gray-400">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* The True Emotions Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/cricket-bowler-action.jpg"
            alt="The Thrill of Competition"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-gray-900 via-gray-900/95 to-gray-900/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl ml-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              The Thrill of Competition
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Feel the adrenaline rush as your players score runs, take wickets, and lead your team to victory. Experience the emotional rollercoaster of fantasy cricket where every ball can change your fortunes. Join millions who live and breathe cricket through strategic gameplay.
            </p>
            <Link href="/matches">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                View Matches
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/cricket-team-celebration.jpg"
            alt="Start Playing Today"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            START PLAYING TODAY
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of cricket fans and start winning
          </p>
          <Link href="/register">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-12 py-6">
              Register Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.png" alt="IMAGINITIATE Logo" className="h-10 w-auto" />
                <span className="text-xl font-bold text-emerald-400">IMAGINITIATE</span>
              </div>
              <p className="text-gray-400 text-sm">
                India's most trusted fantasy cricket platform. Play responsibly and win big.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <div className="flex flex-col space-y-2">
                <Link href="/about" className="text-gray-400 hover:text-emerald-400 text-sm">About Us</Link>
                <Link href="/how-it-works" className="text-gray-400 hover:text-emerald-400 text-sm">How It Works</Link>
                <Link href="/fantasy-cricket" className="text-gray-400 hover:text-emerald-400 text-sm">Fantasy Cricket</Link>
                <Link href="/contact" className="text-gray-400 hover:text-emerald-400 text-sm">Contact</Link>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-bold mb-4">Legal</h3>
              <div className="flex flex-col space-y-2">
                <Link href="/terms" className="text-gray-400 hover:text-emerald-400 text-sm">Terms & Conditions</Link>
                <Link href="/privacy" className="text-gray-400 hover:text-emerald-400 text-sm">Privacy Policy</Link>
                <Link href="/disclaimer" className="text-gray-400 hover:text-emerald-400 text-sm">Disclaimer</Link>
                <Link href="/responsible-gaming" className="text-gray-400 hover:text-emerald-400 text-sm">Responsible Gaming</Link>
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-white font-bold mb-4">Follow Us</h3>
              <div className="flex flex-col space-y-2">
                <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm">YouTube</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 IMAGINITIATE. All rights reserved. | imaginitiatesports.com</p>
            <p className="mt-2 text-xs">18+ Only • Geo-Restricted: Assam, Telangana, Tamil Nadu, Orissa, Andhra Pradesh, Nagaland, Sikkim • India Compliant Fantasy Sports Regulations</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
