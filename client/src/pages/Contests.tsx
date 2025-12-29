import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Trophy, Users, Clock, Target, TrendingUp, Loader2, ArrowLeft } from "lucide-react";
import { Link, useParams, useLocation } from "wouter";
import { useState } from "react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

export default function Contests() {
  const params = useParams();
  const [, navigate] = useLocation();
  const matchId = params.id || "";
  const [selectedContest, setSelectedContest] = useState<any>(null);
  const [selectedTeamId, setSelectedTeamId] = useState<number | null>(null);

  // Fetch contests for this match (or all if no matchId)
  const { data: contests, isLoading: contestsLoading } = trpc.contests.list.useQuery(
    matchId ? { matchId } : {}
  );

  // Fetch user's teams
  const { data: myTeams, isLoading: teamsLoading } = trpc.teams.myTeams.useQuery();

  // Join contest mutation
  const joinContestMutation = trpc.contests.join.useMutation({
    onSuccess: () => {
      toast.success("Successfully joined contest!");
      setSelectedContest(null);
      setSelectedTeamId(null);
    },
    onError: (error) => {
      toast.error(error.message || "Failed to join contest");
    },
  });

  const handleJoinContest = () => {
    if (!selectedTeamId) {
      toast.error("Please select a team");
      return;
    }
    if (!selectedContest) return;

    joinContestMutation.mutate({
      contestId: selectedContest.id,
      teamId: selectedTeamId,
    });
  };

  const handleCreatePrivate = () => {
    toast.info("Feature coming soon: Create your own private contest!");
  };

  if (contestsLoading || teamsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading contests...</p>
        </div>
      </div>
    );
  }

  const availableTeams = matchId
    ? myTeams?.filter((team: any) => team.matchId === matchId) || []
    : myTeams || [];

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
            <Link href="/matches">
              <Button variant="ghost">Matches</Button>
            </Link>
            <Link href="/my-teams">
              <Button variant="ghost">My Teams</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container">
          {matchId && (
            <Link href="/matches">
              <Button variant="ghost" size="sm" className="mb-4 text-primary-foreground hover:text-primary-foreground/80">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Matches
              </Button>
            </Link>
          )}
          <div className="text-center">
            <Trophy className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">
              {matchId ? "Match Contests" : "Join Contests"}
            </h1>
            <p className="text-xl opacity-90">
              {matchId
                ? `Contests for Match ID: ${matchId}`
                : "Compete with other cricket enthusiasts and test your skills"}
            </p>
          </div>
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
                <div className="text-2xl font-bold">{contests?.length || 0}</div>
                <div className="text-sm text-muted-foreground">Available Contests</div>
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
            <Button onClick={handleCreatePrivate}>Create Private Contest</Button>
          </div>

          {!contests || contests.length === 0 ? (
            <Card>
              <CardContent className="pt-12 pb-12 text-center">
                <Trophy className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Contests Available</h3>
                <p className="text-muted-foreground mb-6">
                  {matchId
                    ? "Contests for this match haven't been created yet."
                    : "No contests are currently available. Check back soon!"}
                </p>
                <Link href="/matches">
                  <Button>Browse Matches</Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {contests.map((contest: any) => {
                const fillPercentage = (contest.currentEntries / contest.maxEntries) * 100;
                const spotsLeft = contest.maxEntries - contest.currentEntries;

                return (
                  <Card key={contest.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="flex items-center gap-2 mb-2">
                            {contest.name}
                            <Badge variant="default">Public</Badge>
                            {fillPercentage >= 80 && (
                              <Badge variant="destructive">Filling Fast!</Badge>
                            )}
                          </CardTitle>
                          <p className="text-muted-foreground">Match ID: {contest.matchId}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">Free</div>
                          <div className="text-sm text-muted-foreground">Entry</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {/* Progress Bar */}
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-muted-foreground">
                              {contest.currentEntries} / {contest.maxEntries} spots filled
                            </span>
                            <span className="font-semibold">{spotsLeft} spots left</span>
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
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span>{contest.maxEntries} max entries</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Trophy className="h-4 w-4 text-muted-foreground" />
                            <span>Practice Contest</span>
                          </div>
                        </div>

                        {/* Action Button */}
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              className="w-full"
                              disabled={spotsLeft === 0}
                              onClick={() => setSelectedContest(contest)}
                            >
                              {spotsLeft === 0 ? "Contest Full" : "Join Contest"}
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Select Your Team</DialogTitle>
                              <DialogDescription>
                                Choose a team to join {contest.name}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 mt-4">
                              {availableTeams.length === 0 ? (
                                <div className="text-center py-8">
                                  <Target className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                                  <p className="text-muted-foreground mb-4">
                                    You don't have any teams for this match yet.
                                  </p>
                                  <Link href={matchId ? `/create-team/${matchId}` : "/matches"}>
                                    <Button>
                                      {matchId ? "Create Team" : "Browse Matches"}
                                    </Button>
                                  </Link>
                                </div>
                              ) : (
                                <>
                                  <div className="space-y-2 max-h-[400px] overflow-y-auto">
                                    {availableTeams.map((team: any) => (
                                      <div
                                        key={team.id}
                                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                                          selectedTeamId === team.id
                                            ? "bg-primary/10 border-primary"
                                            : "hover:bg-muted/50"
                                        }`}
                                        onClick={() => setSelectedTeamId(team.id)}
                                      >
                                        <div className="flex items-center justify-between">
                                          <div>
                                            <div className="font-semibold">{team.name}</div>
                                            <div className="text-sm text-muted-foreground">
                                              Created{" "}
                                              {new Date(team.createdAt).toLocaleDateString()}
                                            </div>
                                          </div>
                                          <input
                                            type="radio"
                                            checked={selectedTeamId === team.id}
                                            onChange={() => setSelectedTeamId(team.id)}
                                            className="h-5 w-5"
                                          />
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                  <Button
                                    className="w-full"
                                    onClick={handleJoinContest}
                                    disabled={!selectedTeamId || joinContestMutation.isPending}
                                  >
                                    {joinContestMutation.isPending ? (
                                      <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Joining...
                                      </>
                                    ) : (
                                      "Confirm & Join"
                                    )}
                                  </Button>
                                </>
                              )}
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}

          {/* Create Team CTA */}
          {contests && contests.length > 0 && availableTeams.length === 0 && matchId && (
            <Card className="mt-8 bg-primary/5 border-primary/20">
              <CardContent className="pt-6 text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Create Your Team First</h3>
                <p className="text-muted-foreground mb-6">
                  You need to create a team for this match before joining contests.
                </p>
                <Link href={`/create-team/${matchId}`}>
                  <Button size="lg">
                    <Users className="mr-2 h-5 w-5" />
                    Create Team Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}
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
                  Select 11 players within the 100-credit budget and choose your captain and
                  vice-captain
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
