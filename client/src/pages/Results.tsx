import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, TrendingUp, Award, Star } from "lucide-react";
import { Link } from "wouter";

const mockResults = [
  {
    id: 1,
    contest: "Mega Contest",
    match: "India vs Pakistan",
    date: "Dec 28, 2024",
    myRank: 1234,
    myPoints: 450,
    totalParticipants: 10000,
    topScore: 890,
    myTeam: "Dream Team 1",
  },
  {
    id: 2,
    contest: "Expert Challenge",
    match: "Australia vs England",
    date: "Dec 25, 2024",
    myRank: 45,
    myPoints: 680,
    totalParticipants: 500,
    topScore: 720,
    myTeam: "Bowler Power",
  },
  {
    id: 3,
    contest: "Beginners Special",
    match: "South Africa vs New Zealand",
    date: "Dec 20, 2024",
    myRank: 856,
    myPoints: 320,
    totalParticipants: 2000,
    topScore: 580,
    myTeam: "First XI",
  },
];

const mockLeaderboard = [
  { rank: 1, username: "CricketPro123", points: 890, team: "Champions XI" },
  { rank: 2, username: "FantasyKing", points: 875, team: "Power Hitters" },
  { rank: 3, username: "StrategyMaster", points: 860, team: "Balanced Force" },
  { rank: 4, username: "CricketGenius", points: 845, team: "Smart Picks" },
  { rank: 5, username: "SkillPlayer", points: 830, team: "Dream Squad" },
];

export default function Results() {
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
            <Link href="/dashboard">
              <Button variant="ghost">Dashboard</Button>
            </Link>
            <Link href="/my-teams">
              <Button variant="ghost">My Teams</Button>
            </Link>
            <Link href="/contests">
              <Button>Browse Contests</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container text-center">
          <Trophy className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Contest Results</h1>
          <p className="text-xl opacity-90">View your performance and learn from the best</p>
        </div>
      </section>

      {/* Performance Summary */}
      <section className="py-8 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <Trophy className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">{mockResults.length}</div>
                <div className="text-sm text-muted-foreground">Contests Played</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Medal className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">45</div>
                <div className="text-sm text-muted-foreground">Best Rank</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">680</div>
                <div className="text-sm text-muted-foreground">Highest Score</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold">483</div>
                <div className="text-sm text-muted-foreground">Avg Score</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* My Results */}
      <section className="py-12">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold mb-8">My Contest Results</h2>
          <div className="space-y-6">
            {mockResults.map((result) => {
              const percentile = ((result.totalParticipants - result.myRank) / result.totalParticipants) * 100;
              const isTopPerformer = percentile >= 90;

              return (
                <Card key={result.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center gap-2 mb-2">
                          {result.contest}
                          {isTopPerformer && (
                            <Badge variant="default" className="bg-yellow-500">
                              <Award className="h-3 w-3 mr-1" />
                              Top 10%
                            </Badge>
                          )}
                        </CardTitle>
                        <p className="text-muted-foreground">{result.match}</p>
                        <p className="text-sm text-muted-foreground">{result.date}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-4xl font-bold text-primary">#{result.myRank}</div>
                        <div className="text-sm text-muted-foreground">
                          out of {result.totalParticipants.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Score Details */}
                      <div className="grid md:grid-cols-4 gap-4">
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">My Points</div>
                          <div className="text-2xl font-bold text-primary">{result.myPoints}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Top Score</div>
                          <div className="text-2xl font-bold">{result.topScore}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Percentile</div>
                          <div className="text-2xl font-bold text-green-600">{percentile.toFixed(1)}%</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Team Used</div>
                          <div className="font-semibold">{result.myTeam}</div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-muted-foreground">Performance</span>
                          <span className="font-semibold">
                            {((result.myPoints / result.topScore) * 100).toFixed(1)}% of top score
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all"
                            style={{ width: `${(result.myPoints / result.topScore) * 100}%` }}
                          />
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3 pt-4 border-t">
                        <Button variant="outline" size="sm">
                          View Full Leaderboard
                        </Button>
                        <Button variant="outline" size="sm">
                          View My Team
                        </Button>
                        <Button variant="outline" size="sm">
                          View Top Teams
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sample Leaderboard */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Top Performers - Mega Contest</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {mockLeaderboard.map((entry) => (
                  <div
                    key={entry.rank}
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                          entry.rank === 1
                            ? "bg-yellow-500 text-white"
                            : entry.rank === 2
                            ? "bg-gray-400 text-white"
                            : entry.rank === 3
                            ? "bg-amber-600 text-white"
                            : "bg-muted text-foreground"
                        }`}
                      >
                        {entry.rank === 1 ? "🥇" : entry.rank === 2 ? "🥈" : entry.rank === 3 ? "🥉" : entry.rank}
                      </div>
                      <div>
                        <div className="font-semibold">{entry.username}</div>
                        <div className="text-sm text-muted-foreground">{entry.team}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{entry.points}</div>
                      <div className="text-sm text-muted-foreground">points</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Learning Tips */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Learn from Results</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Analyze Top Teams</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Study the teams of top performers to understand their player selections, captain choices, and overall strategy. Look for patterns in successful teams.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Compare Your Choices</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Compare your team with top-ranking teams. Identify which players you missed and why they performed well. This helps improve future selections.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Track Your Progress</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Monitor your average rank and score over time. Look for improvement trends and identify areas where you're consistently strong or weak.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Learn from Mistakes</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Don't be discouraged by poor results. Every contest is a learning opportunity. Analyze what went wrong and adjust your strategy accordingly.
              </CardContent>
            </Card>
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
