import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Brain, Users, Target, Zap, Star } from "lucide-react";
import { Link } from "wouter";
import { Layout } from "@/components/Layout";

export default function FantasyCricket() {
  return (
    <Layout>
      {/* Navigation */}
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Fantasy Cricket</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Where cricket knowledge meets strategic gaming
          </p>
        </div>
      </section>

      {/* What is Fantasy Cricket */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <Brain className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">What is Fantasy Cricket?</h2>
          </div>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              Fantasy cricket is a skill-based online game where you create virtual teams of real cricket players and earn points based on their actual performance in live matches. It's a perfect blend of cricket knowledge, statistical analysis, and strategic decision-making.
            </p>
            <p>
              Unlike traditional cricket watching, fantasy cricket makes you an active participant. You're not just a spectator—you're a team selector, strategist, and manager. Every decision you make, from player selection to captain choice, directly impacts your team's success.
            </p>
            <p>
              At IMAGINITIATE, we've designed fantasy cricket to be purely skill-based and educational. There's no element of chance or luck—your success depends entirely on your cricket knowledge, research abilities, and strategic thinking. It's a platform where cricket enthusiasts can test their expertise, learn from outcomes, and continuously improve their understanding of the game.
            </p>
          </div>
        </div>
      </section>

      {/* How Fantasy Cricket Works */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">How Fantasy Cricket Works</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  Select a Real Match
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Choose from upcoming, live, or completed cricket matches. Each match represents an opportunity to create a fantasy team and test your predictions against real-world outcomes.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  Build Your Dream Team
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Select 11 players from both competing teams within a 100-credit budget. Each player has a credit value based on their skill level and recent form. You must balance your team across wicket-keepers, batsmen, all-rounders, and bowlers while staying within budget.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  Choose Captain & Vice-Captain
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Designate one player as captain (earns 2x points) and another as vice-captain (earns 1.5x points). This strategic decision can significantly impact your total score, so choose players likely to perform exceptionally.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  Join Contests
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Enter your team into public contests (compete with all users) or create private contests with friends. You can create multiple teams for the same match with different strategies.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">5</span>
                  Track Performance
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                As the real match progresses, your fantasy team earns points based on actual player performances. Watch live updates, track your rank on the leaderboard, and see how your strategic choices play out in real-time.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">6</span>
                  Learn & Improve
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                After the match, analyze your team's performance. Understand which decisions worked, which didn't, and why. Use these insights to refine your strategy for future matches and continuously improve your cricket knowledge.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why Play Fantasy Cricket?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Brain className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Enhance Cricket Knowledge</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Deepen your understanding of player statistics, match dynamics, pitch conditions, and team strategies. Fantasy cricket transforms you from a casual viewer into an informed analyst.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Develop Strategic Thinking</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Learn to make data-driven decisions, manage limited resources (credits), and balance risk vs. reward. These skills extend beyond cricket into real-world problem-solving.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Compete with Friends</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Create private contests, challenge your friends, and add a competitive edge to match-watching. Fantasy cricket makes every match more engaging and interactive.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Real-Time Engagement</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Experience matches more intensely as you track your selected players' performances. Every run, wicket, and catch directly impacts your fantasy team's success.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Star className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Skill-Based Competition</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Success depends entirely on your knowledge and strategy, not luck. The more you learn and improve, the better your results—creating a rewarding learning curve.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Trophy className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Track Your Progress</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Earn skill points, climb leaderboards, and measure your improvement over time. See how you rank against the community and celebrate your growth as a fantasy cricket strategist.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skill-Based Nature */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why Fantasy Cricket is Skill-Based</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Research & Analysis</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Success requires studying player statistics, recent form, head-to-head records, pitch reports, and weather conditions. The more thorough your research, the better your team selection.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Strategic Decision-Making</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                You must make strategic choices: Which players to select within budget constraints? Who should be captain? How to balance the team? These decisions directly determine your success and improve with experience.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Continuous Learning</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Every match provides learning opportunities. Analyzing outcomes helps you understand what works, refine your approach, and make better decisions in future matches. Skill compounds over time.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>No Element of Chance</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Unlike games of chance, fantasy cricket rewards knowledge and preparation. While cricket itself has unpredictable moments, your ability to assess probabilities, identify value picks, and make informed choices determines long-term success.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Fantasy Cricket Journey</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of cricket enthusiasts testing their knowledge and strategic skills!
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" variant="secondary">
                Create Your Team
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
                Learn More
              </Button>
            </Link>
          </div>
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
