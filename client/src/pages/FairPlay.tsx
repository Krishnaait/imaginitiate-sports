import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Shield, Eye, Users, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function FairPlay() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <Trophy className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">IMAGINITIATE</span>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost">Home</Button>
            </Link>
            <Link href="/matches">
              <Button variant="ghost">Matches</Button>
            </Link>
            <Link href="/dashboard">
              <Button>Dashboard</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <Shield className="h-20 w-20 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Fair Play Policy</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Our commitment to integrity, transparency, and equal opportunities for all users
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              At IMAGINITIATE, fair play is not just a policy—it's the foundation of our platform. We believe that every user deserves an equal opportunity to succeed based solely on their cricket knowledge and strategic abilities. Our fair play principles ensure that the platform remains transparent, secure, and equitable for all participants.
            </p>
            <p>
              This page outlines our comprehensive fair play policy, the measures we take to maintain integrity, and what we expect from our community members.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Core Fair Play Principles</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Equal Opportunities for All</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Every user on IMAGINITIATE has access to the same features, information, and opportunities. There are no premium memberships, paid advantages, or hidden benefits. Whether you're a new user or a veteran, you compete on the same level playing field.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>All users see the same player statistics and match information</li>
                  <li>No user can access features unavailable to others</li>
                  <li>Contest entry is open to everyone without restrictions</li>
                  <li>Success depends entirely on skill, not on account status or tenure</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Eye className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Complete Transparency</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We maintain full transparency in all aspects of the platform:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Scoring Rules:</strong> All point calculation methods are publicly documented and accessible</li>
                  <li><strong>Data Sources:</strong> We clearly state where match data and statistics come from</li>
                  <li><strong>Leaderboard Rankings:</strong> Ranking algorithms are straightforward and explained</li>
                  <li><strong>Platform Changes:</strong> Any updates to rules or features are communicated in advance</li>
                  <li><strong>No Hidden Algorithms:</strong> What you see is what you get—no secret formulas or adjustments</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle2 className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Data Integrity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Accurate, reliable data is crucial for fair competition:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We source match data from official cricket APIs and verified sources</li>
                  <li>Player statistics are updated in real-time during matches</li>
                  <li>Points are calculated automatically based on documented rules</li>
                  <li>We maintain strict protocols to prevent data manipulation or errors</li>
                  <li>Any data discrepancies are investigated and corrected promptly</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Community-Driven Fairness</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Our community plays an active role in maintaining fair play:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Users can report suspicious activities or rule violations</li>
                  <li>We review all reports and take appropriate action</li>
                  <li>Community feedback shapes platform improvements and rule updates</li>
                  <li>Open discussions about fairness are encouraged and valued</li>
                  <li>We maintain a zero-tolerance policy for harassment or abuse</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Anti-Cheating Measures */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <AlertTriangle className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Anti-Cheating Measures</h2>
            <p className="text-xl text-muted-foreground">
              How we detect and prevent unfair practices
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Multiple Account Detection</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="mb-3">Creating multiple accounts to gain unfair advantages is strictly prohibited.</p>
                <p className="mb-3"><strong>Our detection systems:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Monitor account creation patterns and device fingerprints</li>
                  <li>Detect suspicious login behaviors and IP addresses</li>
                  <li>Identify accounts with similar team selections or patterns</li>
                  <li>Flag accounts that appear to be coordinating with each other</li>
                </ul>
                <p className="mt-3"><strong>Consequences:</strong> All related accounts will be permanently banned, and any accumulated skill points will be forfeited.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Automated Tool Prevention</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="mb-3">Using bots, scripts, or automated team selection tools violates fair play principles.</p>
                <p className="mb-3"><strong>We prevent automation through:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>CAPTCHA verification for critical actions</li>
                  <li>Rate limiting on API requests and team submissions</li>
                  <li>Behavioral analysis to detect non-human patterns</li>
                  <li>Regular security audits and updates</li>
                </ul>
                <p className="mt-3"><strong>Consequences:</strong> Immediate account suspension and investigation. Confirmed automation results in permanent ban.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Collusion Detection</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="mb-3">Users working together to manipulate contest outcomes is unfair to other participants.</p>
                <p className="mb-3"><strong>We monitor for:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Coordinated team selections across multiple accounts</li>
                  <li>Unusual patterns in private contest participation</li>
                  <li>Information sharing that provides unfair advantages</li>
                  <li>Strategic manipulation of contest entries</li>
                </ul>
                <p className="mt-3"><strong>Consequences:</strong> All involved accounts will be banned, and affected contests may be voided.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Bug Exploitation</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="mb-3">Exploiting platform bugs or glitches for personal advantage is strictly forbidden.</p>
                <p className="mb-3"><strong>Expected behavior:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Report any bugs or glitches immediately to our support team</li>
                  <li>Do not attempt to exploit discovered issues</li>
                  <li>Do not share exploit information with others</li>
                  <li>Cooperate with investigations if you've encountered bugs</li>
                </ul>
                <p className="mt-3"><strong>Consequences:</strong> Accounts exploiting bugs will be suspended. Repeated violations result in permanent ban. Users who report bugs responsibly may receive recognition.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* User Responsibilities */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">User Responsibilities</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Security</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="list-disc list-inside space-y-2">
                  <li>Keep your login credentials confidential</li>
                  <li>Do not share your account with others</li>
                  <li>Use a strong, unique password</li>
                  <li>Log out from shared devices</li>
                  <li>Report any unauthorized access immediately</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Respectful Conduct</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="list-disc list-inside space-y-2">
                  <li>Treat other users with respect and courtesy</li>
                  <li>No harassment, bullying, or abusive language</li>
                  <li>Avoid spreading misinformation about players or matches</li>
                  <li>Engage constructively in community discussions</li>
                  <li>Report inappropriate behavior to moderators</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Honest Participation</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="list-disc list-inside space-y-2">
                  <li>Create teams based on your own research and analysis</li>
                  <li>Do not attempt to manipulate contests or rankings</li>
                  <li>Play within the spirit of fair competition</li>
                  <li>Accept outcomes gracefully, whether you win or lose</li>
                  <li>Learn from experiences and improve your skills</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Reporting Violations</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="mb-3">Help us maintain platform integrity by reporting:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Suspected multiple accounts or collusion</li>
                  <li>Automated tools or bot usage</li>
                  <li>Harassment or abusive behavior</li>
                  <li>Data errors or scoring discrepancies</li>
                  <li>Any other violations of fair play principles</li>
                </ul>
                <p className="mt-3">All reports are reviewed confidentially, and reporters' identities are protected.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enforcement */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Enforcement & Consequences</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Investigation Process</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="mb-3">When a violation is reported or detected:</p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Our team reviews the evidence and account activity</li>
                  <li>We may temporarily suspend accounts during investigation</li>
                  <li>Users may be contacted for clarification or additional information</li>
                  <li>Decisions are made based on clear evidence and platform policies</li>
                  <li>Users are notified of outcomes and any actions taken</li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Violation Consequences</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Minor Violations (First Offense)</h4>
                    <p>Warning, temporary suspension (1-7 days), or contest disqualification</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Moderate Violations (Repeated or Serious)</h4>
                    <p>Extended suspension (7-30 days), skill points deduction, contest bans</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Major Violations (Cheating, Fraud, Abuse)</h4>
                    <p>Permanent account ban, forfeiture of all skill points, IP/device blacklist</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Appeals Process</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="mb-3">If you believe an enforcement action was made in error:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Submit an appeal through our contact form within 7 days</li>
                  <li>Provide any evidence supporting your case</li>
                  <li>Appeals are reviewed by a different team member</li>
                  <li>Decisions on appeals are final and binding</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Our Commitment to You</h2>
          <div className="prose prose-lg max-w-none text-primary-foreground/90 space-y-4">
            <p>
              We are committed to maintaining IMAGINITIATE as a fair, transparent, and enjoyable platform for all cricket enthusiasts. Fair play is not negotiable—it's what makes our community trustworthy and our competitions meaningful.
            </p>
            <p>
              By enforcing these policies consistently and transparently, we ensure that every user can compete with confidence, knowing that success is determined by skill and knowledge, not by unfair advantages.
            </p>
            <p>
              Thank you for being part of our community and upholding these fair play principles.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted/50">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2024 IMAGINITIATE VENTURES PRIVATE LIMITED. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
