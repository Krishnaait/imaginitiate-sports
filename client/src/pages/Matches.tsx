import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { getLoginUrl } from "@/const";
import { Trophy, Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";

export default function Matches() {
  const { isAuthenticated } = useAuth();
  const { data: liveMatches, isLoading: loadingLive } = trpc.matches.live.useQuery();
  const { data: upcomingMatches, isLoading: loadingUpcoming } = trpc.matches.upcoming.useQuery();
  const { data: completedMatches, isLoading: loadingCompleted } = trpc.matches.completed.useQuery();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const MatchCard = ({ match, status }: { match: any; status: 'live' | 'upcoming' | 'completed' }) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1 flex-1">
            <CardTitle className="text-lg">{match.name || 'Cricket Match'}</CardTitle>
            <CardDescription className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {match.venue || 'Venue TBA'}
            </CardDescription>
          </div>
          {status === 'live' && (
            <Badge variant="destructive" className="animate-pulse">
              <div className="h-2 w-2 bg-white rounded-full mr-2"></div>
              LIVE
            </Badge>
          )}
          {status === 'upcoming' && (
            <Badge variant="secondary">
              <Clock className="h-3 w-3 mr-1" />
              Upcoming
            </Badge>
          )}
          {status === 'completed' && (
            <Badge variant="outline">Completed</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {formatDate(match.dateTimeGMT || match.date)}
            </span>
          </div>
          <span className="text-sm text-muted-foreground">{match.matchType || 'T20'}</span>
        </div>
        
        {match.teams && match.teams.length >= 2 && (
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
              <span className="font-medium">{match.teams[0]}</span>
              {match.score && match.score[0] && (
                <span className="text-sm font-semibold">
                  {match.score[0].r}/{match.score[0].w} ({match.score[0].o})
                </span>
              )}
            </div>
            <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
              <span className="font-medium">{match.teams[1]}</span>
              {match.score && match.score[1] && (
                <span className="text-sm font-semibold">
                  {match.score[1].r}/{match.score[1].w} ({match.score[1].o})
                </span>
              )}
            </div>
          </div>
        )}

        {match.status && (
          <p className="text-sm text-center text-muted-foreground italic">{match.status}</p>
        )}

        <div className="flex gap-2">
          {isAuthenticated ? (
            <>
              <Button className="flex-1" size="sm">
                <Users className="h-4 w-4 mr-2" />
                Create Team
              </Button>
              <Button variant="outline" size="sm">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </>
          ) : (
            <a href={getLoginUrl()} className="w-full">
              <Button className="w-full" size="sm">
                Login to Play
              </Button>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );

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
            {isAuthenticated && (
              <Link href="/dashboard">
                <Button>Dashboard</Button>
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-muted/50 py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Cricket Matches</h1>
          <p className="text-xl text-muted-foreground">
            Browse live, upcoming, and completed matches. Create your fantasy team and compete!
          </p>
        </div>
      </section>

      {/* Matches Tabs */}
      <section className="py-12">
        <div className="container">
          <Tabs defaultValue="live" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="live">
                Live
                {liveMatches && liveMatches.length > 0 && (
                  <Badge variant="destructive" className="ml-2">{liveMatches.length}</Badge>
                )}
              </TabsTrigger>
              <TabsTrigger value="upcoming">
                Upcoming
                {upcomingMatches && upcomingMatches.length > 0 && (
                  <Badge variant="secondary" className="ml-2">{upcomingMatches.length}</Badge>
                )}
              </TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>

            <TabsContent value="live" className="mt-8">
              {loadingLive ? (
                <div className="text-center py-12">
                  <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
                  <p className="mt-4 text-muted-foreground">Loading live matches...</p>
                </div>
              ) : liveMatches && liveMatches.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {liveMatches.map((match: any) => (
                    <MatchCard key={match.id} match={match} status="live" />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Clock className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No Live Matches</h3>
                  <p className="text-muted-foreground">Check back soon for live cricket action!</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="upcoming" className="mt-8">
              {loadingUpcoming ? (
                <div className="text-center py-12">
                  <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
                  <p className="mt-4 text-muted-foreground">Loading upcoming matches...</p>
                </div>
              ) : upcomingMatches && upcomingMatches.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {upcomingMatches.map((match: any) => (
                    <MatchCard key={match.id} match={match} status="upcoming" />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No Upcoming Matches</h3>
                  <p className="text-muted-foreground">New matches will be added soon!</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="completed" className="mt-8">
              {loadingCompleted ? (
                <div className="text-center py-12">
                  <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
                  <p className="mt-4 text-muted-foreground">Loading completed matches...</p>
                </div>
              ) : completedMatches && completedMatches.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {completedMatches.map((match: any) => (
                    <MatchCard key={match.id} match={match} status="completed" />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Trophy className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No Completed Matches</h3>
                  <p className="text-muted-foreground">Completed matches will appear here.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted/50 mt-auto">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2024 IMAGINITIATE VENTURES PRIVATE LIMITED. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
