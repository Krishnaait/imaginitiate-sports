import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Heart, Target, Shield, CheckCircle2, XCircle } from "lucide-react";
import { Link } from "wouter";
import { Layout } from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      {/* Navigation */}
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About IMAGINITIATE</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Empowering cricket enthusiasts through skill-based fantasy gaming
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <Heart className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          </div>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              IMAGINITIATE was born from a simple belief: fantasy cricket should be accessible to everyone who loves the game. We noticed that many platforms focused on monetary aspects, creating barriers for cricket enthusiasts who simply wanted to test their knowledge and strategic thinking.
            </p>
            <p>
              In 2024, a team of passionate cricket fans and technology enthusiasts came together with a vision to create something different. We wanted to build a platform where success depends entirely on your cricket knowledge, analytical skills, and strategic decision-making—not on luck or financial investment.
            </p>
            <p>
              Today, IMAGINITIATE stands as a testament to that vision. We've created a completely free, skill-based fantasy cricket platform that serves as both an educational tool and an engaging way to experience cricket. Our community is built on the foundation of fair play, learning, and the pure joy of cricket strategy.
            </p>
            <p>
              Every feature we develop, every decision we make, is guided by one principle: making fantasy cricket a skill-based, educational, and enjoyable experience for all cricket lovers, regardless of their background or resources.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <Target className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  To democratize fantasy cricket by providing a completely free, skill-based platform that enhances cricket knowledge and strategic thinking.
                </p>
                <p>
                  We aim to create an inclusive community where cricket enthusiasts can compete, learn, and grow their understanding of the game without any financial barriers.
                </p>
                <p>
                  Our mission is to prove that fantasy sports can be purely educational and entertaining, focusing on skill development rather than monetary gains.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Trophy className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  To become the world's leading educational fantasy cricket platform, recognized for promoting skill-based gaming and cricket knowledge.
                </p>
                <p>
                  We envision a future where millions of cricket fans use IMAGINITIATE to deepen their understanding of the game, develop analytical skills, and connect with fellow enthusiasts.
                </p>
                <p>
                  Our vision extends beyond cricket—we want to set a new standard for how fantasy sports platforms can prioritize education, skill development, and community over commercial interests.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why We're Free */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Why We're Free</h2>
            <p className="text-xl text-muted-foreground">
              Our commitment to accessibility and education
            </p>
          </div>
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">1. Education Over Commerce</h3>
                <p className="text-muted-foreground">
                  We believe that learning and improving cricket knowledge should never be locked behind a paywall. IMAGINITIATE is designed as an educational tool first, helping users understand player statistics, match dynamics, and strategic thinking. By keeping it free, we ensure that anyone passionate about cricket can access these learning opportunities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">2. Skill-Based Gaming Philosophy</h3>
                <p className="text-muted-foreground">
                  When there's no monetary element involved, the focus shifts entirely to skill and strategy. Users compete based on their cricket knowledge, analytical abilities, and decision-making skills. This creates a pure, merit-based environment where success is determined by understanding the game, not by financial investment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">3. Inclusive Community Building</h3>
                <p className="text-muted-foreground">
                  Cricket unites people across all backgrounds. By making IMAGINITIATE completely free, we remove economic barriers and create an inclusive space where cricket fans from all walks of life can participate equally. Whether you're a student, a working professional, or a retired cricket enthusiast, you have the same opportunities to compete and excel.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">4. Responsible Gaming</h3>
                <p className="text-muted-foreground">
                  By eliminating any monetary transactions, we eliminate the risks associated with financial gaming. Users can enjoy fantasy cricket without worrying about losses, addiction to monetary gains, or financial stress. This aligns with our commitment to responsible gaming and user well-being.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">5. Long-Term Sustainability</h3>
                <p className="text-muted-foreground">
                  Our free model is sustainable because we're not driven by profit maximization. We're supported by cricket enthusiasts who believe in our mission. This allows us to focus on improving the platform, adding educational features, and building a strong community without the pressure of monetization.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fair Play Gaming */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Fair Play Gaming</h2>
            <p className="text-xl text-muted-foreground">
              Our commitment to integrity and transparency
            </p>
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Transparent Scoring System</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                All scoring rules are clearly documented and publicly available. Points are calculated based on real match statistics from official sources. There are no hidden algorithms or arbitrary point adjustments. What you see is what you get—complete transparency in how teams are ranked and scored.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Equal Opportunities for All</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Every user has access to the same information, features, and opportunities. There are no premium tiers, no advantages, and no shortcuts. Success on IMAGINITIATE is determined solely by your cricket knowledge and strategic decisions, ensuring a level playing field for everyone.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Real-Time Data Integrity</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                We source our match data from reliable cricket APIs and official sources. Player statistics, match scores, and performance metrics are updated in real-time to ensure accuracy. We maintain strict data integrity protocols to prevent any manipulation or errors.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Anti-Cheating Measures</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                We have systems in place to detect and prevent unfair practices such as multiple account creation, automated team selection, or any form of manipulation. Fair play is not just encouraged—it's enforced through our monitoring systems and community reporting mechanisms.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Community-Driven Fairness</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Our community plays an active role in maintaining fair play. Users can report suspicious activities, suggest improvements to rules, and participate in discussions about platform fairness. We regularly review feedback and make adjustments to ensure the platform remains equitable for all.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Do's and Don'ts</h2>
            <p className="text-xl text-muted-foreground">
              Guidelines for a positive experience on IMAGINITIATE
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Do's */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6" />
                Do's
              </h3>
              <div className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-2">✓ Research Before Selecting</h4>
                    <p className="text-sm text-muted-foreground">
                      Study player statistics, recent form, pitch conditions, and head-to-head records before creating your team.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-2">✓ Learn from Results</h4>
                    <p className="text-sm text-muted-foreground">
                      Analyze your team's performance after each match to understand what worked and what didn't.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-2">✓ Engage with Community</h4>
                    <p className="text-sm text-muted-foreground">
                      Share strategies, discuss player performances, and learn from other cricket enthusiasts.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-2">✓ Balance Your Team</h4>
                    <p className="text-sm text-muted-foreground">
                      Create well-rounded teams with a good mix of batsmen, bowlers, all-rounders, and wicket-keepers.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-2">✓ Play Responsibly</h4>
                    <p className="text-sm text-muted-foreground">
                      Set time limits, maintain balance with other activities, and remember it's meant for fun and learning.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-2">✓ Report Issues</h4>
                    <p className="text-sm text-muted-foreground">
                      Help us maintain platform integrity by reporting bugs, suspicious activities, or unfair practices.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-2">✓ Respect Other Users</h4>
                    <p className="text-sm text-muted-foreground">
                      Maintain a positive, respectful attitude in all interactions with fellow cricket enthusiasts.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Don'ts */}
            <div>
              <h3 className="text-2xl font-bold text-destructive mb-6 flex items-center gap-2">
                <XCircle className="h-6 w-6" />
                Don'ts
              </h3>
              <div className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-2">✗ Don't Create Multiple Accounts</h4>
                    <p className="text-sm text-muted-foreground">
                      Each user should have only one account. Multiple accounts violate fair play principles.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-2">✗ Don't Use Automated Tools</h4>
                    <p className="text-sm text-muted-foreground">
                      Bots, scripts, or automated team selection tools are strictly prohibited.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-2">✗ Don't Share Account Details</h4>
                    <p className="text-sm text-muted-foreground">
                      Keep your login credentials private. Account sharing compromises security and fairness.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-2">✗ Don't Harass Other Users</h4>
                    <p className="text-sm text-muted-foreground">
                      Bullying, harassment, or abusive behavior toward other users will not be tolerated.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-2">✗ Don't Manipulate the System</h4>
                    <p className="text-sm text-muted-foreground">
                      Any attempt to exploit bugs, manipulate scores, or cheat the system is strictly forbidden.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-2">✗ Don't Spread Misinformation</h4>
                    <p className="text-sm text-muted-foreground">
                      Avoid sharing false information about players, matches, or platform features.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-2">✗ Don't Neglect Other Responsibilities</h4>
                    <p className="text-sm text-muted-foreground">
                      While we love cricket, don't let fantasy gaming interfere with work, studies, or personal relationships.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Be part of a growing community of cricket enthusiasts who value skill, learning, and fair play.
          </p>
          <Link href="/dashboard">
            <Button size="lg" variant="secondary">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted/50">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2024 IMAGINITIATE VENTURES PRIVATE LIMITED. All rights reserved.</p>
        </div>
      </footer>
    </Layout>
  );
}
