/**
 * Cricket API integration using CricAPI
 * Fetches live, upcoming, and completed match data
 */

const CRIC_API_KEY = process.env.CRIC_API_KEY || "";
const BASE_URL = "https://api.cricapi.com/v1";

export interface CricketMatch {
  id: string;
  name?: string;
  matchType: string;
  status: string;
  venue?: string;
  date?: string;
  dateTimeGMT: string;
  t1: string; // Team 1 name
  t2: string; // Team 2 name
  t1img?: string; // Team 1 image
  t2img?: string; // Team 2 image
  t1s?: string; // Team 1 score
  t2s?: string; // Team 2 score
  series?: string; // Series name
  ms?: string; // Match status: live, fixture, result
}

export interface Player {
  id: string;
  name: string;
  role: string;
  credits?: number;
}

export async function getMatches(): Promise<CricketMatch[]> {
  try {
    const url = `${BASE_URL}/cricScore?apikey=${CRIC_API_KEY}`;
    const res = await fetch(url, { cache: 'no-store' });
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching matches:", error);
    return [];
  }
}

export async function getMatchSquad(matchId: string): Promise<Player[]> {
  try {
    const url = `${BASE_URL}/match_squad?apikey=${CRIC_API_KEY}&id=${matchId}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching match squad:", error);
    return [];
  }
}

export async function getLiveMatches(): Promise<CricketMatch[]> {
  const matches = await getMatches();
  return matches.filter((m) => m.ms === "live");
}

export async function getUpcomingMatches(): Promise<CricketMatch[]> {
  const matches = await getMatches();
  return matches.filter((m) => m.ms === "fixture").sort((a, b) => 
    new Date(a.dateTimeGMT).getTime() - new Date(b.dateTimeGMT).getTime()
  );
}

export async function getCompletedMatches(): Promise<CricketMatch[]> {
  const matches = await getMatches();
  return matches.filter((m) => m.ms === "result").sort((a, b) => 
    new Date(b.dateTimeGMT).getTime() - new Date(a.dateTimeGMT).getTime()
  );
}
