import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getLoginUrl } from "@/const";
import { Trophy, Users, Brain, Shield, TrendingUp, Target, CheckCircle2, AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";

export default function Home() {
  const { user, isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Disclaimer Banner */}
      <DisclaimerBanner />
      
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="IMAGINITIATE" className="h-10 w-auto" />
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="/responsible-gaming" className="text-sm font-medium hover:text-primary transition-colors">
              Responsible Gaming
            </Link>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
              FAQs
            </a>
            <Link href="/fair-play" className="text-sm font-medium hover:text-primary transition-colors">
              Fair Play
            </Link>
            <Link href="/matches" className="text-sm font-medium hover:text-primary transition-colors">
              Matches
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact Us
            </Link>
            {isAuthenticated ? (
              <Link href="/dashboard">
                <Button size="sm">Dashboard</Button>
              </Link>
            ) : (
              <>
                <a href={getLoginUrl()}>
                  <Button size="sm" variant="outline">Login</Button>
                </a>
                <a href={getLoginUrl()}>
                  <Button size="sm">Register</Button>
                </a>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/hero-banner.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Master Your Cricket Knowledge
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                Free-to-play fantasy cricket platform where skill meets strategy. Build your dream team and compete with cricket enthusiasts worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {isAuthenticated ? (
                  <Link href="/dashboard">
                    <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                      Go to Dashboard
                    </Button>
                  </Link>
                ) : (
                  <a href={getLoginUrl()}>
                    <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                      Start Playing Free
                    </Button>
                  </a>
                )}
                <a href="#how-it-works">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30">
                    Learn How
                  </Button>
                </a>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm text-white/80">Free to Play</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">Skill</div>
                  <div className="text-sm text-white/80">Based Gaming</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">Safe</div>
                  <div className="text-sm text-white/80">& Educational</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl animate-float">
                <img src="/cricketer-hero.jpg" alt="Cricket Player in Action" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose IMAGINITIATE?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the thrill of fantasy cricket with our skill-based, educational platform designed for true cricket fans.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Brain className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Skill-Based Gameplay</CardTitle>
                <CardDescription>
                  Test your cricket knowledge and strategic thinking. Success comes from understanding the game, not luck.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>100% Free to Play</CardTitle>
                <CardDescription>
                  No hidden costs, no subscriptions. Enjoy unlimited access to all features completely free.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Compete with Friends</CardTitle>
                <CardDescription>
                  Create private contests, challenge your friends, and prove who knows cricket best.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Real-Time Updates</CardTitle>
                <CardDescription>
                  Track live matches, get instant score updates, and watch your team's performance in real-time.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Target className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Educational Focus</CardTitle>
                <CardDescription>
                  Learn cricket strategies, player statistics, and improve your understanding of the game.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Trophy className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Leaderboards & Rankings</CardTitle>
                <CardDescription>
                  Climb the ranks, earn skill points, and showcase your cricket expertise to the community.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started in minutes with our simple, educational approach to fantasy cricket.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                1
              </div>
              <h3 className="text-xl font-semibold">Sign Up Free</h3>
              <p className="text-muted-foreground">
                Create your account in seconds. No credit card required, completely free forever.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                2
              </div>
              <h3 className="text-xl font-semibold">Choose a Match</h3>
              <p className="text-muted-foreground">
                Browse live, upcoming, and completed matches. Select the one you want to play.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                3
              </div>
              <h3 className="text-xl font-semibold">Build Your Team</h3>
              <p className="text-muted-foreground">
                Select 11 players within your credit limit. Choose captain and vice-captain strategically.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                4
              </div>
              <h3 className="text-xl font-semibold">Earn Skill Points</h3>
              <p className="text-muted-foreground">
                Watch your team perform and earn skill points based on real match performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Matches Preview Section */}
      <section id="matches" className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Live & Upcoming Matches</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join contests for live matches or plan ahead with upcoming fixtures.
            </p>
          </div>
          <div className="text-center">
            <Link href="/matches">
              <Button size="lg">View All Matches</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about IMAGINITIATE fantasy sports.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is IMAGINITIATE really free to play?</AccordionTrigger>
              <AccordionContent>
                Yes! IMAGINITIATE is 100% free to play. There are no hidden costs, no subscriptions, and no in-app purchases. We believe fantasy cricket should be accessible to everyone who loves the game.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do I earn skill points?</AccordionTrigger>
              <AccordionContent>
                Skill points are earned based on your team's real-world performance in matches. Players score points for runs, wickets, catches, and other cricket actions. Your captain earns 2x points and vice-captain earns 1.5x points.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can I create private contests with friends?</AccordionTrigger>
              <AccordionContent>
                Absolutely! You can create private contests and invite your friends to compete. It's a great way to add friendly competition to your cricket watching experience.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What makes this skill-based and not gambling?</AccordionTrigger>
              <AccordionContent>
                IMAGINITIATE is purely skill-based and educational. Success depends on your cricket knowledge, strategic team selection, and understanding of player performance. There's no element of chance or betting involved. It's designed to enhance your cricket knowledge and analytical skills.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>How do I choose the best team?</AccordionTrigger>
              <AccordionContent>
                Consider factors like recent form, pitch conditions, head-to-head records, and player roles. Balance your team across batsmen, bowlers, all-rounders, and wicket-keepers. Use your cricket knowledge to make informed decisions about captain and vice-captain selections.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Can I edit my team after creating it?</AccordionTrigger>
              <AccordionContent>
                You can edit your team until the match starts. Once the match begins, your team is locked and you can watch how your selections perform in real-time.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-muted/50">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Compliance & Legal</h2>
            <p className="text-xl text-muted-foreground">
              Our commitment to safe, legal, and responsible gaming.
            </p>
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Skill-Based Gaming
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  IMAGINITIATE operates as a skill-based fantasy sports platform. Success on our platform depends entirely on your cricket knowledge, strategic thinking, and analytical abilities. We do not offer any form of gambling or games of chance.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Educational Purpose
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our platform is designed for educational and entertainment purposes. We aim to enhance your understanding of cricket, improve analytical skills, and provide a fun way to engage with the sport you love.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Age Requirement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Users must be 18 years or older to participate. We verify age during registration to ensure compliance with legal requirements and protect minors.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Data Privacy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We take your privacy seriously. All personal information is encrypted and stored securely. We never share your data with third parties without your explicit consent.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Responsible Play Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <AlertCircle className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Responsible Play</h2>
            <p className="text-xl text-muted-foreground">
              Enjoy fantasy cricket responsibly and maintain a healthy balance.
            </p>
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Play for Fun & Learning</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  IMAGINITIATE is designed to be an enjoyable, educational experience. Remember to:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Set time limits for your gaming sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Focus on learning and improving your cricket knowledge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Maintain a healthy balance with other activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Remember it's a game meant for entertainment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Self-Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you find yourself experiencing any of the following, consider taking a break:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Spending more time than intended on the platform</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Neglecting other responsibilities or relationships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Feeling stressed or anxious about your team's performance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If you have concerns about your gaming habits or need support, please contact our support team. We're here to help ensure your experience remains positive and healthy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Test Your Cricket Knowledge?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of cricket fans on IMAGINITIATE. Build your dream team, compete with friends, and prove your expertise.
          </p>
          {isAuthenticated ? (
            <Link href="/dashboard">
              <Button size="lg" variant="secondary">
                Go to Dashboard
              </Button>
            </Link>
          ) : (
            <a href={getLoginUrl()}>
              <Button size="lg" variant="secondary">
                Start Playing Free Now
              </Button>
            </a>
          )}
        </div>
      </section>

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
              <ul className="text-xs text-amber-700 dark:text-amber-400 space-y-1">
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
