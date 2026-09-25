export type NavigationRoute = 
  | 'HOME'
  | 'LIVE'
  | 'MATCHES'
  | 'MATCH_CENTRE'
  | 'SCORING_CENTRE'
  | 'FIXTURES'
  | 'RESULTS'
  | 'TOURNAMENTS'
  | 'TOURNAMENT_DETAIL'
  | 'TEAMS'
  | 'TEAM_DETAIL'
  | 'PLAYERS'
  | 'PLAYER_DETAIL'
  | 'STANDINGS'
  | 'LEADERBOARDS'
  | 'NEWS'
  | 'NEWS_DETAIL'
  | 'MEDIA'
  | 'SELECTIONS'
  | 'VENUES'
  | 'VENUE_DETAIL'
  | 'CLUB_DIRECTORY'
  | 'CLUB_DETAIL'
  | 'ADMIN'
  | 'SCORER_DASHBOARD'
  | 'AUTH'
  | 'ABOUT';

export type UserRole = 'ADMIN' | 'SCORER' | 'EDITOR' | 'TEAM_MANAGER' | 'VIEWER';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
  teamId?: string;
}

export type MatchStatus = 'UPCOMING' | 'LIVE' | 'COMPLETED' | 'POSTPONED' | 'CANCELLED';

export interface BatterScore {
  playerId: string;
  name: string;
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  strikeRate: number;
  dismissal?: string;
  isStriker?: boolean;
  isOut?: boolean;
}

export interface BowlerScore {
  playerId: string;
  name: string;
  overs: number;
  maidens: number;
  runs: number;
  wickets: number;
  economy: number;
  isCurrent?: boolean;
}

export interface ExtrasBreakdown {
  wides: number;
  noBalls: number;
  byes: number;
  legByes: number;
  penalties: number;
  total: number;
}

export interface InningScore {
  teamId: string;
  teamName: string;
  teamShortName: string;
  logoUrl?: string;
  runs: number;
  wickets: number;
  overs: number;
  declared?: boolean;
  batters: BatterScore[];
  bowlers: BowlerScore[];
  extras: ExtrasBreakdown;
}

export interface FallOfWicket {
  wicketNumber: number;
  runs: number;
  over: string;
  batterName: string;
  dismissalType: string;
}

export interface Partnership {
  batter1: string;
  batter2: string;
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
}

export interface CommentaryBall {
  id: string;
  over: number;
  ball: number;
  runs: number;
  isWicket: boolean;
  isBoundary: boolean;
  isSix: boolean;
  extraType?: 'WIDE' | 'NO_BALL' | 'BYE' | 'LEG_BYE' | 'PENALTY';
  wicketType?: 'BOWLED' | 'CAUGHT' | 'LBW' | 'RUN_OUT' | 'STUMPED' | 'HIT_WICKET' | 'RETIRED_HURT' | 'OBSTRUCTING';
  dismissedPlayer?: string;
  bowlerName: string;
  strikerName: string;
  text: string;
  timestamp: string;
}

export interface WagonWheelShot {
  id: string;
  over: number;
  runs: number;
  angleDeg: number; // 0 to 360 deg
  distance: number; // 0 to 100 percentage
  zone: 'Third Man' | 'Point' | 'Cover' | 'Extra Cover' | 'Mid Off' | 'Straight' | 'Mid On' | 'Mid Wicket' | 'Square Leg' | 'Fine Leg';
  batterName: string;
}

export interface Match {
  id: string;
  title: string;
  tournamentId: string;
  tournamentName: string;
  matchNumber: string;
  venue: string;
  venueId: string;
  date: string;
  time: string;
  status: MatchStatus;
  teamA: {
    id: string;
    name: string;
    shortName: string;
    logoUrl?: string;
  };
  teamB: {
    id: string;
    name: string;
    shortName: string;
    logoUrl?: string;
  };
  scoreA?: {
    runs: number;
    wickets: number;
    overs: number;
  };
  scoreB?: {
    runs: number;
    wickets: number;
    overs: number;
  };
  target?: number;
  requiredRR?: number;
  currentRR?: number;
  resultText?: string;
  tossText?: string;
  currentInning?: 1 | 2;
  innings?: [InningScore, InningScore?];
  currentBatters?: BatterScore[];
  currentBowler?: BowlerScore;
  fallOfWickets?: FallOfWicket[];
  partnerships?: Partnership[];
  commentary?: CommentaryBall[];
  wagonWheelShots?: WagonWheelShot[];
}

export interface Player {
  id: string;
  name: string;
  role: 'Batter' | 'Bowler' | 'All-Rounder' | 'Wicket Keeper';
  teamId: string;
  teamName: string;
  battingStyle: string;
  bowlingStyle: string;
  ageCategory: 'U14' | 'U16' | 'U19' | 'U23' | 'Senior';
  photoUrl?: string;
  district?: string;
  stats: {
    matches: number;
    runs: number;
    average: number;
    strikeRate: number;
    fours: number;
    sixes: number;
    fifties: number;
    hundreds: number;
    highestScore: string;
    wickets: number;
    economy: number;
    bowlingAverage: number;
    bowlingStrikeRate: number;
    bestBowling: string;
    maidens: number;
  };
}

export interface Team {
  id: string;
  name: string;
  shortName: string;
  district: string;
  category: string;
  logoUrl?: string;
  captainName: string;
  coachName: string;
  stats: {
    matches: number;
    wins: number;
    losses: number;
    ties: number;
    draws: number;
    winPercentage: number;
    highestScore: string;
    averageScore: number;
  };
  squadPlayerIds: string[];
}

export interface Tournament {
  id: string;
  name: string;
  season: string;
  category: 'Men' | 'Women' | 'Boys' | 'Girls' | 'U14' | 'U16' | 'U19' | 'U23' | 'Senior' | 'Club' | 'School' | 'District';
  startDate: string;
  endDate: string;
  location: string;
  teamsCount: number;
  status: 'UPCOMING' | 'ONGOING' | 'COMPLETED';
  bannerUrl?: string;
  description: string;
}

export interface GroupStanding {
  position: number;
  teamId: string;
  teamName: string;
  teamShortName: string;
  played: number;
  won: number;
  lost: number;
  tied: number;
  drawn: number;
  noResult: number;
  points: number;
  nrr: number;
  forRuns: string;
  againstRuns: string;
}

export interface LeaderboardEntry {
  rank: number;
  playerId: string;
  playerName: string;
  teamName: string;
  value: number | string;
  secondaryValue?: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  category: 'Matches' | 'Tournaments' | 'Selections' | 'Announcements' | 'Players' | 'Coaching' | 'Administration';
  summary: string;
  content: string;
  date: string;
  author: string;
  imageUrl?: string;
  featured?: boolean;
}

export interface MediaItem {
  id: string;
  title: string;
  type: 'PHOTO' | 'VIDEO';
  category: string;
  thumbnailUrl: string;
  videoUrl?: string;
  duration?: string;
  date: string;
  albumCount?: number;
}

export interface Venue {
  id: string;
  name: string;
  location: string;
  capacity: number;
  pitchType: string;
  imageUrl?: string;
  groundInformation: string;
}

export interface ClubDirectoryItem {
  id: string;
  name: string;
  type: 'Club' | 'District Association' | 'School' | 'Academy';
  district: string;
  establishedYear: number;
  teamsCount: number;
  playersCount: number;
  contactEmail: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  type: 'MATCH' | 'WICKET' | 'ANNOUNCEMENT' | 'SELECTION';
  read: boolean;
}
