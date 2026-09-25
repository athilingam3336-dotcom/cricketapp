export interface Batter {
  name: string;
  role: string;
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  sr: number;
  isStriker?: boolean;
}

export interface Bowler {
  name: string;
  style: string;
  wickets: number;
  runs: number;
  overs: number;
  econ: number;
}

export interface Shot {
  id: string;
  x: number;
  y: number;
  type: '6' | '4' | '1' | '2' | '0';
  zone: string;
}

export interface CommentaryItem {
  over: string;
  runs: string;
  type: 'boundary' | 'run' | 'wicket' | 'dot';
  title: string;
  detail: string;
  badge: string;
}
