import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Star, Shield, Target, Info, Loader2 } from "lucide-react";
import { Link, useParams, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

interface Player {
  id: string;
  name: string;
  role: "WK" | "BAT" | "AR" | "BOWL";
  credits: number;
  teamName: string;
}

export default function CreateTeam() {
  const params = useParams();
  const [, navigate] = useLocation();
  const matchId = params.id || "";

  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);
  const [captain, setCaptain] = useState<string | null>(null);
  const [viceCaptain, setViceCaptain] = useState<string | null>(null);
  const [teamName, setTeamName] = useState("");
  const [filterRole, setFilterRole] = useState<string>("ALL");

  // Fetch match squad
  const { data: squadData, isLoading: squadLoading } = trpc.matches.squad.useQuery(
    { matchId },
    { enabled: !!matchId }
  );

  // Create team mutation
  const createTeamMutation = trpc.teams.create.useMutation({
    onSuccess: (data) => {
      toast.success("Team created successfully!");
      navigate(`/my-teams`);
    },
    onError: (error) => {
      toast.error(error.message || "Failed to create team");
    },
  });

  // Combine players from both teams and assign random credits
  const allPlayers: Player[] = squadData
    ? [
        ...(squadData.map((p: any) => ({
          id: p.id,
          name: p.name,
          role: p.role as "WK" | "BAT" | "AR" | "BOWL",
          credits: Math.floor(Math.random() * 4) + 7, // 7-10 credits
          teamName: p.teamName || "Unknown",
        })) || []),
      ]
    : [];

  const totalCredits = 100;
  const usedCredits = selectedPlayers.reduce((sum, p) => sum + p.credits, 0);
  const remainingCredits = totalCredits - usedCredits;

  const roleCount = {
    WK: selectedPlayers.filter((p) => p.role === "WK").length,
    BAT: selectedPlayers.filter((p) => p.role === "BAT").length,
    AR: selectedPlayers.filter((p) => p.role === "AR").length,
    BOWL: selectedPlayers.filter((p) => p.role === "BOWL").length,
  };

  const filteredPlayers =
    filterRole === "ALL"
      ? allPlayers
      : allPlayers.filter((p) => p.role === filterRole);

  const handlePlayerToggle = (player: Player) => {
    if (selectedPlayers.find((p) => p.id === player.id)) {
      setSelectedPlayers(selectedPlayers.filter((p) => p.id !== player.id));
      if (captain === player.id) setCaptain(null);
      if (viceCaptain === player.id) setViceCaptain(null);
    } else {
      if (selectedPlayers.length >= 11) {
        toast.error("You can only select 11 players");
        return;
      }
      if (usedCredits + player.credits > totalCredits) {
        toast.error("Not enough credits");
        return;
      }
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };

  const validateTeam = () => {
    if (!teamName.trim()) {
      toast.error("Please enter a team name");
      return false;
    }
    if (selectedPlayers.length !== 11) {
      toast.error("Please select exactly 11 players");
      return false;
    }
    if (!captain || !viceCaptain) {
      toast.error("Please select captain and vice-captain");
      return false;
    }
    if (captain === viceCaptain) {
      toast.error("Captain and vice-captain must be different players");
      return false;
    }

    // Validate role composition
    if (roleCount.WK < 1 || roleCount.WK > 4) {
      toast.error("Team must have 1-4 wicketkeepers");
      return false;
    }
    if (roleCount.BAT < 3 || roleCount.BAT > 6) {
      toast.error("Team must have 3-6 batsmen");
      return false;
    }
    if (roleCount.AR < 1 || roleCount.AR > 4) {
      toast.error("Team must have 1-4 all-rounders");
      return false;
    }
    if (roleCount.BOWL < 3 || roleCount.BOWL > 6) {
      toast.error("Team must have 3-6 bowlers");
      return false;
    }

    return true;
  };

  const handleSaveTeam = () => {
    if (!validateTeam()) return;

    createTeamMutation.mutate({
      matchId,
      name: teamName,
      players: selectedPlayers.map((p) => ({
        playerId: p.id,
        playerName: p.name,
        role: p.role,
        credits: p.credits,
      })),
      captainId: captain!,
      viceCaptainId: viceCaptain!,
    });
  };

  if (!matchId) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">
              No match selected. Please select a match first.
            </p>
            <Link href="/matches">
              <Button className="w-full mt-4">Go to Matches</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (squadLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading match squad...</p>
        </div>
      </div>
    );
  }

  if (!squadData || squadData.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">
              Squad data not available for this match.
            </p>
            <Link href="/matches">
              <Button className="w-full mt-4">Go to Matches</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

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
      <section className="bg-primary text-primary-foreground py-8">
        <div className="container">
          <h1 className="text-3xl font-bold mb-2">Create Your Team</h1>
          <p className="opacity-90">Match ID: {matchId}</p>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Enter team name (e.g., My Dream Team)"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              className="px-4 py-2 rounded-lg bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60 border border-primary-foreground/20 w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="bg-muted/50 py-4 sticky top-16 z-40 border-b">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <Card>
              <CardContent className="pt-4 text-center">
                <div className="text-2xl font-bold">{selectedPlayers.length}/11</div>
                <div className="text-sm text-muted-foreground">Players</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4 text-center">
                <div className="text-2xl font-bold">{remainingCredits.toFixed(1)}</div>
                <div className="text-sm text-muted-foreground">Credits Left</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4 text-center">
                <div className="text-2xl font-bold">{roleCount.WK}</div>
                <div className="text-sm text-muted-foreground">WK</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4 text-center">
                <div className="text-2xl font-bold">{roleCount.BAT}</div>
                <div className="text-sm text-muted-foreground">BAT</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4 text-center">
                <div className="text-2xl font-bold">
                  {roleCount.AR} / {roleCount.BOWL}
                </div>
                <div className="text-sm text-muted-foreground">AR / BOW</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Player Selection */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Select Players ({filteredPlayers.length} available)
                    </CardTitle>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant={filterRole === "ALL" ? "default" : "outline"}
                        onClick={() => setFilterRole("ALL")}
                      >
                        All
                      </Button>
                      <Button
                        size="sm"
                        variant={filterRole === "WK" ? "default" : "outline"}
                        onClick={() => setFilterRole("WK")}
                      >
                        WK
                      </Button>
                      <Button
                        size="sm"
                        variant={filterRole === "BAT" ? "default" : "outline"}
                        onClick={() => setFilterRole("BAT")}
                      >
                        BAT
                      </Button>
                      <Button
                        size="sm"
                        variant={filterRole === "AR" ? "default" : "outline"}
                        onClick={() => setFilterRole("AR")}
                      >
                        AR
                      </Button>
                      <Button
                        size="sm"
                        variant={filterRole === "BOWL" ? "default" : "outline"}
                        onClick={() => setFilterRole("BOWL")}
                      >
                        BOW
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 max-h-[600px] overflow-y-auto">
                    {filteredPlayers.map((player) => {
                      const isSelected = selectedPlayers.find((p) => p.id === player.id);
                      const isCaptain = captain === player.id;
                      const isViceCaptain = viceCaptain === player.id;

                      return (
                        <div
                          key={player.id}
                          className={`flex items-center justify-between p-4 border rounded-lg transition-colors ${
                            isSelected ? "bg-primary/10 border-primary" : "hover:bg-muted/50"
                          }`}
                        >
                          <div className="flex items-center gap-4 flex-1">
                            <input
                              type="checkbox"
                              checked={!!isSelected}
                              onChange={() => handlePlayerToggle(player)}
                              className="h-5 w-5"
                            />
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold">{player.name}</span>
                                {isCaptain && <Badge variant="default">C</Badge>}
                                {isViceCaptain && <Badge variant="secondary">VC</Badge>}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {player.teamName} • {player.role}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            {isSelected && (
                              <div className="flex gap-2">
                                <Button
                                  size="sm"
                                  variant={isCaptain ? "default" : "outline"}
                                  onClick={() => setCaptain(player.id)}
                                  title="Set as Captain (2x points)"
                                >
                                  <Star className="h-4 w-4" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant={isViceCaptain ? "default" : "outline"}
                                  onClick={() => setViceCaptain(player.id)}
                                  title="Set as Vice-Captain (1.5x points)"
                                >
                                  <Shield className="h-4 w-4" />
                                </Button>
                              </div>
                            )}
                            <div className="text-right">
                              <div className="font-bold">{player.credits}</div>
                              <div className="text-xs text-muted-foreground">credits</div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Team Summary */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Team Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Wicket-keepers</span>
                      <span
                        className={`text-sm font-semibold ${
                          roleCount.WK >= 1 && roleCount.WK <= 4
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {roleCount.WK} / 1-4
                      </span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Batsmen</span>
                      <span
                        className={`text-sm font-semibold ${
                          roleCount.BAT >= 3 && roleCount.BAT <= 6
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {roleCount.BAT} / 3-6
                      </span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">All-rounders</span>
                      <span
                        className={`text-sm font-semibold ${
                          roleCount.AR >= 1 && roleCount.AR <= 4
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {roleCount.AR} / 1-4
                      </span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Bowlers</span>
                      <span
                        className={`text-sm font-semibold ${
                          roleCount.BOWL >= 3 && roleCount.BOWL <= 6
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {roleCount.BOWL} / 3-6
                      </span>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">Total Players</span>
                      <span className="font-semibold">
                        {selectedPlayers.length} / 11
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Credits Used</span>
                      <span className="font-semibold">
                        {usedCredits.toFixed(1)} / {totalCredits}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5" />
                    Quick Tips
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>• Captain earns 2x points</p>
                  <p>• Vice-captain earns 1.5x points</p>
                  <p>• Choose players based on recent form</p>
                  <p>• Balance your team across both teams</p>
                  <p>• Consider pitch conditions</p>
                </CardContent>
              </Card>

              <Button
                className="w-full"
                size="lg"
                onClick={handleSaveTeam}
                disabled={
                  !teamName.trim() ||
                  selectedPlayers.length !== 11 ||
                  !captain ||
                  !viceCaptain ||
                  createTeamMutation.isPending
                }
              >
                {createTeamMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating Team...
                  </>
                ) : (
                  "Save Team"
                )}
              </Button>
            </div>
          </div>
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
