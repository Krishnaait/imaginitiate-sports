import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Clock, Target, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { toast } from "sonner";

const mockContests = [
  {
    id: 1,
    name: "Mega Contest",
    match: "India vs Pakistan",
    totalSpots: 10000,
    filledSpots: 7543,
    skillPoints: 1000,
    type: "Public",
    startTime: "Tomorrow 7:00 PM",
  },
  {
    id: 2,
    name: "Practice Contest",
    match: "India vs Pakistan",
    totalSpots: 5000,
    filledSpots: 3210,
    skillPoints: 500,
    type: "Public",
    startTime: "Tomorrow 7:00 PM",
  },
  {
    id: 3,
    name: "Beginners Special",
    match: "India vs Pakistan",
    totalSpots: 2000,
    filledSpots: 1850,
    skillPoints: 300,
    type: "Public",
    startTime: "Tomorrow 7:00 PM",
  },
  {
    id: 4,
    name: "Expert Challenge",
    match: "India vs Pakistan",
    totalSpots: 500,
    filledSpots: 420,
    skillPoints: 2000,
    type: "Public",
    startTime: "Tomorrow 7:00 PM",
  },
  {
    id: 5,
    name: "Friends League",
    match: "India vs Pakistan",
    totalSpots: 50,
    filledSpots: 12,
    skillPoints: 200,
    type: "Private",
    startTime: "Tomorrow 7:00 PM",
    code: "FRIENDS2024",
  },
];

export default function Contests() {
  const handleJoinContest = (contestId: number) => {
    toast.success("Successfully joined the contest!");
  };

  const handleCreatePrivate = () => {
    toast.info("Feature coming soon: Create your own private contest!");
  };

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
            <Link href="/create-team">
              <Button>Create Team</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container text-center">
          <Trophy className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Join Contests</h1>
          <p className="text-xl opacity-90">
            Compete with other cricket enthusiasts and test your skills
          </p>
        </div>
      </section>

      {/* Contest Stats */}
      <section className="py-8 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">15,000+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Trophy className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-muted-foreground">Live Contests</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-muted-foreground">Skill-Based</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">Free</div>
                <div className="text-sm text-muted-foreground">To Play</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contests List */}
      <section className="py-12">
        <div className="container max-w-5xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Available Contests</h2>
            <Button onClick={handleCreatePrivate}>
              Create Private Contest
            </Button>
          </div>

          <div className="space-y-6">
            {mockContests.map((contest) => {
              const fillPercentage = (contest.filledSpots / contest.totalSpots) * 100;
              const spotsLeft = contest.totalSpots - contest.filledSpots;

              return (
                <Card key={contest.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center gap-2 mb-2">
                          {contest.name}
                          <Badge variant={contest.type === "Public" ? "default" : "secondary"}>
                            {contest.type}
                          </Badge>
                        </CardTitle>
                        <p className="text-muted-foreground">{contest.match}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{contest.skillPoints}</div>
                        <div className="text-sm text-muted-foreground">Skill Points</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Progress Bar */}
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-muted-foreground">
                            {contest.filledSpots.toLocaleString()} / {contest.totalSpots.toLocaleString()} spots filled
                          </span>
                          <span className="font-semibold">
                            {spotsLeft.toLocaleString()} spots left
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all"
                            style={{ width: `${fillPercentage}%` }}
                          />
                        </div>
                      </div>

                      {/* Contest Details */}
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{contest.startTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>{contest.totalSpots.toLocaleString()} max entries</span>
                        </div>
                        {contest.type === "Private" && contest.code && (
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">Code: {contest.code}</Badge>
                          </div>
                        )}
                      </div>

                      {/* Action Button */}
                      <div className="flex gap-3">
                        <Button
                          className="flex-1"
                          onClick={() => handleJoinContest(contest.id)}
                          disabled={spotsLeft === 0}
                        >
                          {spotsLeft === 0 ? "Contest Full" : "Join Contest"}
                        </Button>
                        <Button variant="outline">View Details</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">How to Join a Contest</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold mb-2">Create Your Team</h3>
                <p className="text-sm text-muted-foreground">
                  Select 11 players within the 100-credit budget and choose your captain and vice-captain
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold mb-2">Join a Contest</h3>
                <p className="text-sm text-muted-foreground">
                  Browse available contests and join one that matches your skill level and interests
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold mb-2">Track & Learn</h3>
                <p className="text-sm text-muted-foreground">
                  Watch your team's performance live, earn skill points, and improve your strategy
                </p>
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
