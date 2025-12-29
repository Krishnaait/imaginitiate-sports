import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Trophy, Users, Target, TrendingUp, Calendar, LogOut } from "lucide-react";
import { Link, useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function Dashboard() {
  const { user, isAuthenticated, loading } = useAuth();
  const [, setLocation] = useLocation();
  const logoutMutation = trpc.auth.logout.useMutation({
    onSuccess: () => {
      toast.success("Logged out successfully");
      setLocation("/");
    },
  });

  const { data: liveMatches } = trpc.matches.live.useQuery();
  const { data: upcomingMatches } = trpc.matches.upcoming.useQuery();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    setLocation("/");
    return null;
  }

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  const getInitials = (name: string | null | undefined) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      {/* Navigation */}
      <nav className="border-b bg-background sticky top-0 z-50">
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
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {getInitials(user?.name)}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">{user?.name || "User"}</span>
            </div>
            <Button variant="ghost" size="icon" onClick={handleLogout}>
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="container py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name || "Player"}!</h1>
          <p className="text-muted-foreground">
            Manage your teams, track your performance, and join new contests.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Skill Points</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{user?.skillPoints || 0}</div>
              <p className="text-xs text-muted-foreground">Total earned</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">My Teams</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">Active teams</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Contests</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">Joined contests</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Rank</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">-</div>
              <p className="text-xs text-muted-foreground">Global ranking</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Live Matches</CardTitle>
              <CardDescription>
                Join contests for matches happening right now
              </CardDescription>
            </CardHeader>
            <CardContent>
              {liveMatches && liveMatches.length > 0 ? (
                <div className="space-y-2">
                  {liveMatches.slice(0, 3).map((match: any) => (
                    <div key={match.id} className="flex items-center justify-between p-3 bg-muted/50 rounded">
                      <div>
                        <p className="font-medium text-sm">{match.name}</p>
                        <p className="text-xs text-muted-foreground">{match.venue}</p>
                      </div>
                      <Button size="sm">Join</Button>
                    </div>
                  ))}
                  <Link href="/matches">
                    <Button variant="outline" className="w-full mt-2">
                      View All Live Matches
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">No live matches at the moment</p>
                  <Link href="/matches">
                    <Button variant="outline" className="mt-4">
                      View Upcoming Matches
                    </Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Matches</CardTitle>
              <CardDescription>
                Plan ahead and create teams for upcoming fixtures
              </CardDescription>
            </CardHeader>
            <CardContent>
              {upcomingMatches && upcomingMatches.length > 0 ? (
                <div className="space-y-2">
                  {upcomingMatches.slice(0, 3).map((match: any) => (
                    <div key={match.id} className="flex items-center justify-between p-3 bg-muted/50 rounded">
                      <div>
                        <p className="font-medium text-sm">{match.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(match.dateTimeGMT).toLocaleDateString()}
                        </p>
                      </div>
                      <Button size="sm" variant="outline">Create Team</Button>
                    </div>
                  ))}
                  <Link href="/matches">
                    <Button variant="outline" className="w-full mt-2">
                      View All Upcoming Matches
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">No upcoming matches available</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* My Teams Section */}
        <Card>
          <CardHeader>
            <CardTitle>My Teams</CardTitle>
            <CardDescription>
              View and manage your fantasy cricket teams
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-12">
              <Users className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Teams Yet</h3>
              <p className="text-muted-foreground mb-4">
                Create your first team and start competing!
              </p>
              <Link href="/matches">
                <Button>Browse Matches</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted/50 mt-auto">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2024 IMAGINITIATE VENTURES PRIVATE LIMITED. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
