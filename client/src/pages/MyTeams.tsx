import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Edit, Trash2, Copy, Star, Shield, Plus } from "lucide-react";
import { Link } from "wouter";
import { toast } from "sonner";

const mockTeams = [
  {
    id: 1,
    name: "Dream Team 1",
    match: "India vs Pakistan",
    contest: "Mega Contest",
    players: 11,
    captain: "Virat Kohli",
    viceCaptain: "Babar Azam",
    points: 450,
    rank: 1234,
    status: "Live",
    created: "2 hours ago",
  },
  {
    id: 2,
    name: "Balanced XI",
    match: "India vs Pakistan",
    contest: "Practice Contest",
    players: 11,
    captain: "Rohit Sharma",
    viceCaptain: "Shaheen Afridi",
    points: 0,
    rank: null,
    status: "Upcoming",
    created: "1 day ago",
  },
  {
    id: 3,
    name: "Bowler Power",
    match: "Australia vs England",
    contest: "Expert Challenge",
    players: 11,
    captain: "Pat Cummins",
    viceCaptain: "James Anderson",
    points: 680,
    rank: 45,
    status: "Completed",
    created: "3 days ago",
  },
];

export default function MyTeams() {
  const handleEdit = (teamId: number) => {
    toast.info("Redirecting to team editor...");
  };

  const handleDelete = (teamId: number) => {
    toast.success("Team deleted successfully");
  };

  const handleClone = (teamId: number) => {
    toast.success("Team cloned successfully");
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
            <Link href="/contests">
              <Button variant="ghost">Contests</Button>
            </Link>
            <Link href="/create-team">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Team
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-2">My Teams</h1>
          <p className="text-xl opacity-90">Manage and track all your fantasy cricket teams</p>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-8 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-primary">{mockTeams.length}</div>
                <div className="text-sm text-muted-foreground">Total Teams</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-green-600">
                  {mockTeams.filter(t => t.status === "Live").length}
                </div>
                <div className="text-sm text-muted-foreground">Live Teams</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-blue-600">
                  {mockTeams.filter(t => t.status === "Upcoming").length}
                </div>
                <div className="text-sm text-muted-foreground">Upcoming Teams</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-gray-600">
                  {mockTeams.filter(t => t.status === "Completed").length}
                </div>
                <div className="text-sm text-muted-foreground">Completed Teams</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Teams List */}
      <section className="py-12">
        <div className="container max-w-6xl">
          {mockTeams.length === 0 ? (
            <Card>
              <CardContent className="pt-12 pb-12 text-center">
                <Trophy className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Teams Yet</h3>
                <p className="text-muted-foreground mb-6">
                  Create your first fantasy cricket team and start competing!
                </p>
                <Link href="/create-team">
                  <Button size="lg">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Your First Team
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {mockTeams.map((team) => (
                <Card key={team.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle>{team.name}</CardTitle>
                          <Badge
                            variant={
                              team.status === "Live"
                                ? "default"
                                : team.status === "Upcoming"
                                ? "secondary"
                                : "outline"
                            }
                          >
                            {team.status}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">{team.match}</p>
                        <p className="text-sm text-muted-foreground">Contest: {team.contest}</p>
                      </div>
                      {team.status === "Completed" && team.rank && (
                        <div className="text-right">
                          <div className="text-3xl font-bold text-primary">#{team.rank}</div>
                          <div className="text-sm text-muted-foreground">Rank</div>
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Team Details */}
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Captain</div>
                          <div className="flex items-center gap-2 font-semibold">
                            <Star className="h-4 w-4 text-yellow-500" />
                            {team.captain}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Vice-Captain</div>
                          <div className="flex items-center gap-2 font-semibold">
                            <Shield className="h-4 w-4 text-blue-500" />
                            {team.viceCaptain}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Points</div>
                          <div className="font-semibold text-lg text-primary">{team.points}</div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3 pt-4 border-t">
                        {team.status !== "Completed" && (
                          <>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleEdit(team.id)}
                              disabled={team.status === "Live"}
                            >
                              <Edit className="h-4 w-4 mr-2" />
                              Edit
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleClone(team.id)}
                            >
                              <Copy className="h-4 w-4 mr-2" />
                              Clone
                            </Button>
                          </>
                        )}
                        {team.status === "Completed" && (
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        )}
                        {team.status === "Upcoming" && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDelete(team.id)}
                            className="ml-auto text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </Button>
                        )}
                      </div>

                      {/* Team Info */}
                      <div className="text-xs text-muted-foreground pt-2 border-t">
                        Created {team.created} • {team.players} players selected
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Team Management Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Create Multiple Teams</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Try different strategies by creating multiple teams for the same match. This helps you learn what works best and improves your overall understanding.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Clone Successful Teams</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Use the clone feature to create variations of your successful teams. Make small adjustments to test different captain choices or player combinations.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Review Past Performance</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Analyze your completed teams to understand which decisions led to success or failure. This reflection is key to improving your skills.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Edit Before Deadline</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                You can edit your teams until the match starts. Stay updated on team news, injuries, and pitch conditions to make last-minute adjustments.
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
