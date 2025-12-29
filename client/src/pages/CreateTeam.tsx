import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Star, Shield, Target, Info } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { toast } from "sonner";

// Mock player data
const mockPlayers = [
  { id: 1, name: "Virat Kohli", team: "IND", role: "Batsman", credits: 11, points: 850 },
  { id: 2, name: "Rohit Sharma", team: "IND", role: "Batsman", credits: 10.5, points: 820 },
  { id: 3, name: "Jasprit Bumrah", team: "IND", role: "Bowler", credits: 10, points: 780 },
  { id: 4, name: "Hardik Pandya", team: "IND", role: "All-rounder", credits: 9.5, points: 750 },
  { id: 5, name: "KL Rahul", team: "IND", role: "Wicket-keeper", credits: 9, points: 720 },
  { id: 6, name: "Ravindra Jadeja", team: "IND", role: "All-rounder", credits: 9, points: 710 },
  { id: 7, name: "Mohammed Shami", team: "IND", role: "Bowler", credits: 8.5, points: 680 },
  { id: 8, name: "Shubman Gill", team: "IND", role: "Batsman", credits: 8.5, points: 670 },
  { id: 9, name: "Rishabh Pant", team: "IND", role: "Wicket-keeper", credits: 9, points: 690 },
  { id: 10, name: "Yuzvendra Chahal", team: "IND", role: "Bowler", credits: 8, points: 650 },
  { id: 11, name: "Babar Azam", team: "PAK", role: "Batsman", credits: 10.5, points: 810 },
  { id: 12, name: "Shaheen Afridi", team: "PAK", role: "Bowler", credits: 9.5, points: 740 },
  { id: 13, name: "Mohammad Rizwan", team: "PAK", role: "Wicket-keeper", credits: 9, points: 700 },
  { id: 14, name: "Shadab Khan", team: "PAK", role: "All-rounder", credits: 8.5, points: 660 },
  { id: 15, name: "Haris Rauf", team: "PAK", role: "Bowler", credits: 8, points: 640 },
];

export default function CreateTeam() {
  const [selectedPlayers, setSelectedPlayers] = useState<typeof mockPlayers>([]);
  const [captain, setCaptain] = useState<number | null>(null);
  const [viceCaptain, setViceCaptain] = useState<number | null>(null);

  const totalCredits = 100;
  const usedCredits = selectedPlayers.reduce((sum, p) => sum + p.credits, 0);
  const remainingCredits = totalCredits - usedCredits;

  const roleCount = {
    "Wicket-keeper": selectedPlayers.filter(p => p.role === "Wicket-keeper").length,
    "Batsman": selectedPlayers.filter(p => p.role === "Batsman").length,
    "All-rounder": selectedPlayers.filter(p => p.role === "All-rounder").length,
    "Bowler": selectedPlayers.filter(p => p.role === "Bowler").length,
  };

  const handlePlayerToggle = (player: typeof mockPlayers[0]) => {
    if (selectedPlayers.find(p => p.id === player.id)) {
      setSelectedPlayers(selectedPlayers.filter(p => p.id !== player.id));
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

  const handleSaveTeam = () => {
    if (selectedPlayers.length !== 11) {
      toast.error("Please select exactly 11 players");
      return;
    }
    if (!captain || !viceCaptain) {
      toast.error("Please select captain and vice-captain");
      return;
    }
    if (captain === viceCaptain) {
      toast.error("Captain and vice-captain must be different players");
      return;
    }
    toast.success("Team saved successfully!");
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
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-8">
        <div className="container">
          <h1 className="text-3xl font-bold mb-2">Create Your Team</h1>
          <p className="opacity-90">India vs Pakistan • T20 Match • Tomorrow 7:00 PM</p>
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
                <div className="text-2xl font-bold">{roleCount["Wicket-keeper"]}</div>
                <div className="text-sm text-muted-foreground">WK</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4 text-center">
                <div className="text-2xl font-bold">{roleCount["Batsman"]}</div>
                <div className="text-sm text-muted-foreground">BAT</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4 text-center">
                <div className="text-2xl font-bold">{roleCount["All-rounder"]} / {roleCount["Bowler"]}</div>
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
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Select Players
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {mockPlayers.map((player) => {
                      const isSelected = selectedPlayers.find(p => p.id === player.id);
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
                                {player.team} • {player.role} • {player.points} pts
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
                                >
                                  <Star className="h-4 w-4" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant={isViceCaptain ? "default" : "outline"}
                                  onClick={() => setViceCaptain(player.id)}
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
                      <span className="text-sm font-semibold">{roleCount["Wicket-keeper"]} / 1-4</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Batsmen</span>
                      <span className="text-sm font-semibold">{roleCount["Batsman"]} / 3-6</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">All-rounders</span>
                      <span className="text-sm font-semibold">{roleCount["All-rounder"]} / 1-4</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Bowlers</span>
                      <span className="text-sm font-semibold">{roleCount["Bowler"]} / 3-6</span>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">Total Players</span>
                      <span className="font-semibold">{selectedPlayers.length} / 11</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Credits Used</span>
                      <span className="font-semibold">{usedCredits.toFixed(1)} / {totalCredits}</span>
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
                  <p>• Choose players based on recent form and match conditions</p>
                  <p>• Balance your team across both teams</p>
                  <p>• Consider pitch conditions and weather</p>
                </CardContent>
              </Card>

              <Button
                className="w-full"
                size="lg"
                onClick={handleSaveTeam}
                disabled={selectedPlayers.length !== 11 || !captain || !viceCaptain}
              >
                Save Team
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
