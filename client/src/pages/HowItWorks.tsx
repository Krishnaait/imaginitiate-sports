import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Users, Target, Award, TrendingUp, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Layout } from "@/components/Layout";

export default function HowItWorks() {
  return (
    <Layout>
      {/* Navigation */}
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Master fantasy cricket in 4 simple steps
          </p>
        </div>
      </section>

      {/* Getting Started Steps */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">Getting Started</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Sign Up",
                description: "Create your free account in seconds. No credit card required.",
              },
              {
                step: "2",
                title: "Choose Match",
                description: "Browse live, upcoming, or completed matches to join.",
              },
              {
                step: "3",
                title: "Build Team",
                description: "Select 11 players within your credit budget.",
              },
              {
                step: "4",
                title: "Earn Points",
                description: "Watch your team perform and climb the leaderboard.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Create Team */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <Users className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">How to Create Your Team</h2>
            <p className="text-xl text-muted-foreground">
              Build your dream cricket team strategically
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Step 1: Select a Match</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>Navigate to the Matches page and choose from live, upcoming, or completed matches. Each match displays:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Team names and match type (T20, ODI, Test)</li>
                  <li>Venue and match timing</li>
                  <li>Available contests to join</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Step 2: Choose Your Players</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>Select 11 players from both teams within a 100-credit budget:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Wicket-keepers:</strong> Minimum 1, Maximum 4</li>
                  <li><strong>Batsmen:</strong> Minimum 3, Maximum 6</li>
                  <li><strong>All-rounders:</strong> Minimum 1, Maximum 4</li>
                  <li><strong>Bowlers:</strong> Minimum 3, Maximum 6</li>
                </ul>
                <p className="mt-3">Each player has a credit value based on their recent performance and skill level.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Step 3: Select Captain & Vice-Captain</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>Choose your team leaders strategically:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Captain:</strong> Earns 2x points from their performance</li>
                  <li><strong>Vice-Captain:</strong> Earns 1.5x points from their performance</li>
                </ul>
                <p className="mt-3">Tip: Select players likely to have significant impact on the match (top batsmen, key bowlers, or in-form all-rounders).</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Step 4: Save & Join Contest</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>Once satisfied with your team:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Review your team composition and credits used</li>
                  <li>Save your team with a memorable name</li>
                  <li>Join public contests or create private ones with friends</li>
                  <li>You can create multiple teams for the same match</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scoring System */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <Target className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Scoring System</h2>
            <p className="text-xl text-muted-foreground">
              How players earn points for your team
            </p>
          </div>

          <div className="space-y-8">
            {/* Batting Points */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Batting Points</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Every run scored</span>
                    <span className="font-semibold text-primary">+1 point</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Boundary (4 runs)</span>
                    <span className="font-semibold text-primary">+1 bonus point</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Six (6 runs)</span>
                    <span className="font-semibold text-primary">+2 bonus points</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Half-century (50 runs)</span>
                    <span className="font-semibold text-primary">+8 bonus points</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Century (100 runs)</span>
                    <span className="font-semibold text-primary">+16 bonus points</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Dismissal for a duck (batsman)</span>
                    <span className="font-semibold text-destructive">-2 points</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bowling Points */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Bowling Points</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Every wicket taken</span>
                    <span className="font-semibold text-primary">+25 points</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Bonus (LBW / Bowled)</span>
                    <span className="font-semibold text-primary">+8 bonus points</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>3 wickets in a match</span>
                    <span className="font-semibold text-primary">+4 bonus points</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>4 wickets in a match</span>
                    <span className="font-semibold text-primary">+8 bonus points</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>5 wickets in a match</span>
                    <span className="font-semibold text-primary">+16 bonus points</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Maiden over</span>
                    <span className="font-semibold text-primary">+12 points</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fielding Points */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Fielding Points</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Catch taken</span>
                    <span className="font-semibold text-primary">+8 points</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>3 catches in a match</span>
                    <span className="font-semibold text-primary">+4 bonus points</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Stumping</span>
                    <span className="font-semibold text-primary">+12 points</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Run out (direct hit)</span>
                    <span className="font-semibold text-primary">+12 points</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Run out (thrower/catcher)</span>
                    <span className="font-semibold text-primary">+6 points</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Other Points */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Other Points</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Player of the Match</span>
                    <span className="font-semibold text-primary">+25 points</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Playing XI (selected to play)</span>
                    <span className="font-semibold text-primary">+4 points</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leaderboard Rankings */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <Award className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Leaderboard Rankings</h2>
            <p className="text-xl text-muted-foreground">
              How rankings are calculated and displayed
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Real-Time Updates</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="mb-3">Leaderboards update in real-time as matches progress:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Points are calculated instantly when players perform actions (runs, wickets, catches)</li>
                  <li>Your team's rank changes dynamically based on total points accumulated</li>
                  <li>You can track your position against other participants throughout the match</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ranking Criteria</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="mb-3">Teams are ranked based on:</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Total Points:</strong> Primary ranking factor. Higher points = higher rank.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Tiebreaker 1:</strong> If points are equal, the team created earlier gets priority.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Captain/Vice-Captain Impact:</strong> Strategic captain choices can significantly boost your total.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contest Types</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Public Contests</h4>
                    <p>Compete with all users who join the same contest. Leaderboards show all participants ranked by points.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Private Contests</h4>
                    <p>Create contests for friends and family. Only invited participants appear on the leaderboard.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Global Leaderboard</h4>
                    <p>Track your overall performance across all matches and contests. Earn skill points to climb the global rankings.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Skill Points System</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="mb-3">Beyond individual contests, you earn cumulative skill points:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Skill points are awarded based on your final rank in each contest</li>
                  <li>Higher ranks earn more skill points</li>
                  <li>Skill points accumulate over time, reflecting your overall expertise</li>
                  <li>Global leaderboard showcases top skill point earners</li>
                  <li>Use skill points to track your improvement and compare with the community</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tips for Success */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <TrendingUp className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Tips for Success</h2>
            <p className="text-xl text-muted-foreground">
              Strategies to improve your fantasy cricket game
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Research Player Form</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Check recent performances, averages, and statistics before selecting players. In-form players are more likely to perform well.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Consider Pitch Conditions</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Some pitches favor batsmen, others favor bowlers. Choose your team composition based on expected conditions.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Balance Your Team</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Don't overload on batsmen or bowlers. A balanced team with all-rounders provides flexibility and scoring opportunities.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Choose Captain Wisely</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Your captain earns 2x points. Select a player likely to have maximum impact—top-order batsmen or strike bowlers.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Monitor Team News</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Stay updated on injuries, team changes, and playing XI announcements. Last-minute changes can affect your strategy.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Learn from Results</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Analyze your team's performance after each match. Understand what worked and what didn't to improve future selections.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Play?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Put your cricket knowledge to the test and start building winning teams!
          </p>
          <Link href="/matches">
            <Button size="lg" variant="secondary">
              Browse Matches
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
