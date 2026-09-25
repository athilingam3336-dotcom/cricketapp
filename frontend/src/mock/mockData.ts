import { 
  Match, 
  Player, 
  Team, 
  Tournament, 
  GroupStanding, 
  NewsArticle, 
  MediaItem, 
  Venue, 
  ClubDirectoryItem,
  NotificationItem,
  User
} from '../types';

export const MOCK_USER: User = {
  id: 'usr-1',
  name: 'K. Rajasekar',
  email: 'admin@regalcricket.org',
  role: 'ADMIN',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
};

export const MOCK_TEAMS: Team[] = [
  {
    id: 'team-1',
    name: 'Tamil Titans',
    shortName: 'TT',
    district: 'Chennai',
    category: 'Senior Men',
    captainName: 'Arun Kumar',
    coachName: 'S. Ramanathan',
    stats: {
      matches: 18,
      wins: 14,
      losses: 3,
      ties: 1,
      draws: 0,
      winPercentage: 77.8,
      highestScore: '312/5',
      averageScore: 194.5,
    },
    squadPlayerIds: ['ply-1', 'ply-2', 'ply-3', 'ply-4', 'ply-5'],
  },
  {
    id: 'team-2',
    name: 'Madurai Warriors',
    shortName: 'MW',
    district: 'Madurai',
    category: 'Senior Men',
    captainName: 'Karthik Raja',
    coachName: 'M. Duraimurugan',
    stats: {
      matches: 18,
      wins: 12,
      losses: 5,
      ties: 0,
      draws: 1,
      winPercentage: 66.7,
      highestScore: '298/7',
      averageScore: 182.0,
    },
    squadPlayerIds: ['ply-6', 'ply-7', 'ply-8', 'ply-9', 'ply-10'],
  },
  {
    id: 'team-3',
    name: 'Sivakasi Strikers',
    shortName: 'SS',
    district: 'Virudhunagar',
    category: 'Senior Men',
    captainName: 'S. Muthukumar',
    coachName: 'K. Vetrivel',
    stats: {
      matches: 16,
      wins: 10,
      losses: 6,
      ties: 0,
      draws: 0,
      winPercentage: 62.5,
      highestScore: '284/6',
      averageScore: 178.4,
    },
    squadPlayerIds: ['ply-11', 'ply-12', 'ply-13', 'ply-14'],
  },
  {
    id: 'team-4',
    name: 'Coimbatore Panthers',
    shortName: 'CP',
    district: 'Coimbatore',
    category: 'Senior Men',
    captainName: 'R. Vignesh',
    coachName: 'V. Sundaram',
    stats: {
      matches: 16,
      wins: 9,
      losses: 7,
      ties: 0,
      draws: 0,
      winPercentage: 56.2,
      highestScore: '275/8',
      averageScore: 168.9,
    },
    squadPlayerIds: ['ply-15', 'ply-16'],
  },
];

export const MOCK_PLAYERS: Player[] = [
  {
    id: 'ply-1',
    name: 'Arun Kumar',
    role: 'Batter',
    teamId: 'team-1',
    teamName: 'Tamil Titans',
    battingStyle: 'Right Handed',
    bowlingStyle: 'Right Arm Off Break',
    ageCategory: 'Senior',
    district: 'Chennai',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
    stats: {
      matches: 28,
      runs: 1240,
      average: 49.6,
      strikeRate: 142.5,
      fours: 112,
      sixes: 45,
      fifties: 8,
      hundreds: 3,
      highestScore: '118*',
      wickets: 4,
      economy: 7.2,
      bowlingAverage: 32.5,
      bowlingStrikeRate: 27.0,
      bestBowling: '2/18',
      maidens: 1,
    }
  },
  {
    id: 'ply-2',
    name: 'Karthik Raja',
    role: 'All-Rounder',
    teamId: 'team-2',
    teamName: 'Madurai Warriors',
    battingStyle: 'Left Handed',
    bowlingStyle: 'Right Arm Fast Medium',
    ageCategory: 'Senior',
    district: 'Madurai',
    photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
    stats: {
      matches: 32,
      runs: 980,
      average: 36.3,
      strikeRate: 138.2,
      fours: 84,
      sixes: 32,
      fifties: 6,
      hundreds: 1,
      highestScore: '104',
      wickets: 42,
      economy: 6.85,
      bowlingAverage: 19.8,
      bowlingStrikeRate: 17.3,
      bestBowling: '5/24',
      maidens: 6,
    }
  },
  {
    id: 'ply-3',
    name: 'Rahul Vetrivel',
    role: 'Bowler',
    teamId: 'team-1',
    teamName: 'Tamil Titans',
    battingStyle: 'Right Handed',
    bowlingStyle: 'Left Arm Fast',
    ageCategory: 'Senior',
    district: 'Chennai',
    photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200',
    stats: {
      matches: 24,
      runs: 145,
      average: 14.5,
      strikeRate: 110.0,
      fours: 12,
      sixes: 4,
      fifties: 0,
      hundreds: 0,
      highestScore: '28',
      wickets: 48,
      economy: 6.42,
      bowlingAverage: 16.2,
      bowlingStrikeRate: 15.1,
      bestBowling: '6/18',
      maidens: 12,
    }
  },
  {
    id: 'ply-4',
    name: 'S. Muthukumar',
    role: 'Wicket Keeper',
    teamId: 'team-3',
    teamName: 'Sivakasi Strikers',
    battingStyle: 'Right Handed',
    bowlingStyle: 'None',
    ageCategory: 'Senior',
    district: 'Virudhunagar',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    stats: {
      matches: 30,
      runs: 1120,
      average: 41.5,
      strikeRate: 136.8,
      fours: 98,
      sixes: 38,
      fifties: 9,
      hundreds: 2,
      highestScore: '112*',
      wickets: 0,
      economy: 0,
      bowlingAverage: 0,
      bowlingStrikeRate: 0,
      bestBowling: '-',
      maidens: 0,
    }
  }
];

export const MOCK_TOURNAMENTS: Tournament[] = [
  {
    id: 'tour-1',
    name: 'Tamil Nadu State Championship 2026',
    season: '2026',
    category: 'Senior',
    startDate: '2026-09-10',
    endDate: '2026-10-15',
    location: 'Chennai & Madurai Grounds',
    teamsCount: 16,
    status: 'ONGOING',
    description: 'The premier first-division cricket league featuring the top district associations.',
    bannerUrl: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800',
  },
  {
    id: 'tour-2',
    name: 'Inter-District Under-19 Trophy',
    season: '2026',
    category: 'U19',
    startDate: '2026-10-01',
    endDate: '2026-11-05',
    location: 'Coimbatore Cricket Academy Ground',
    teamsCount: 24,
    status: 'UPCOMING',
    description: 'Youth talent search championship featuring promising junior cricketers across the state.',
    bannerUrl: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800',
  },
  {
    id: 'tour-3',
    name: 'District Association T20 Cup',
    season: '2026',
    category: 'Club',
    startDate: '2026-08-01',
    endDate: '2026-08-28',
    location: 'MA Chidambaram Stadium Annex',
    teamsCount: 12,
    status: 'COMPLETED',
    description: 'High-octane T20 tournament celebrating local club cricket mastery.',
    bannerUrl: 'https://images.unsplash.com/photo-1512719991214-e005549f6d12?w=800',
  }
];

export const MOCK_MATCHES: Match[] = [
  {
    id: 'match-1',
    title: 'Match 14 - State Championship Semi Final',
    tournamentId: 'tour-1',
    tournamentName: 'State Championship 2026',
    matchNumber: 'SF-1',
    venue: 'MA Chidambaram Stadium, Chennai',
    venueId: 'ven-1',
    date: '2026-09-25',
    time: '14:30 IST',
    status: 'LIVE',
    teamA: {
      id: 'team-1',
      name: 'Tamil Titans',
      shortName: 'TT',
    },
    teamB: {
      id: 'team-2',
      name: 'Madurai Warriors',
      shortName: 'MW',
    },
    scoreA: {
      runs: 284,
      wickets: 6,
      overs: 50.0,
    },
    scoreB: {
      runs: 184,
      wickets: 4,
      overs: 28.3,
    },
    target: 285,
    requiredRR: 4.69,
    currentRR: 6.45,
    tossText: 'Madurai Warriors won the toss and elected to field',
    currentInning: 2,
    innings: [
      {
        teamId: 'team-1',
        teamName: 'Tamil Titans',
        teamShortName: 'TT',
        runs: 284,
        wickets: 6,
        overs: 50.0,
        batters: [
          { playerId: 'ply-1', name: 'Arun Kumar', runs: 118, balls: 98, fours: 12, sixes: 4, strikeRate: 120.4, dismissal: 'c Karthik b Rahul' },
          { playerId: 'ply-2', name: 'S. Muthukumar', runs: 64, balls: 72, fours: 6, sixes: 2, strikeRate: 88.8, dismissal: 'lbw b Vignesh' },
          { playerId: 'ply-5', name: 'R. Anandhan', runs: 45, balls: 38, fours: 4, sixes: 1, strikeRate: 118.4, dismissal: 'run out (Karthik)' },
          { playerId: 'ply-6', name: 'K. Vetrivel', runs: 32, balls: 22, fours: 3, sixes: 2, strikeRate: 145.4, dismissal: 'not out' }
        ],
        bowlers: [
          { playerId: 'ply-2', name: 'Karthik Raja', overs: 10, maidens: 1, runs: 54, wickets: 2, economy: 5.4 },
          { playerId: 'ply-3', name: 'Rahul Vetrivel', overs: 10, maidens: 0, runs: 62, wickets: 3, economy: 6.2 },
          { playerId: 'ply-7', name: 'V. Sundaram', overs: 10, maidens: 2, runs: 42, wickets: 1, economy: 4.2 }
        ],
        extras: { wides: 12, noBalls: 3, byes: 4, legByes: 6, penalties: 0, total: 25 }
      },
      {
        teamId: 'team-2',
        teamName: 'Madurai Warriors',
        teamShortName: 'MW',
        runs: 184,
        wickets: 4,
        overs: 28.3,
        batters: [
          { playerId: 'ply-10', name: 'Arun', runs: 72, balls: 48, fours: 7, sixes: 2, strikeRate: 150.0, isStriker: true },
          { playerId: 'ply-11', name: 'Karthik', runs: 31, balls: 24, fours: 3, sixes: 1, strikeRate: 129.17, isStriker: false },
          { playerId: 'ply-12', name: 'M. Vijay', runs: 42, balls: 52, fours: 4, sixes: 0, strikeRate: 80.7, dismissal: 'b Rahul' },
          { playerId: 'ply-13', name: 'S. Prabhu', runs: 24, balls: 30, fours: 2, sixes: 0, strikeRate: 80.0, dismissal: 'c Arun b Vetrivel' }
        ],
        bowlers: [
          { playerId: 'ply-3', name: 'Rahul Vetrivel', overs: 6.3, maidens: 0, runs: 42, wickets: 2, economy: 6.46, isCurrent: true },
          { playerId: 'ply-8', name: 'K. Vetrivel', overs: 7.0, maidens: 0, runs: 48, wickets: 1, economy: 6.85 }
        ],
        extras: { wides: 8, noBalls: 2, byes: 2, legByes: 3, penalties: 0, total: 15 }
      }
    ],
    currentBatters: [
      { playerId: 'ply-10', name: 'Arun', runs: 72, balls: 48, fours: 7, sixes: 2, strikeRate: 150.0, isStriker: true },
      { playerId: 'ply-11', name: 'Karthik', runs: 31, balls: 24, fours: 3, sixes: 1, strikeRate: 129.17, isStriker: false }
    ],
    currentBowler: { playerId: 'ply-3', name: 'Rahul Vetrivel', overs: 3.3, maidens: 0, runs: 24, wickets: 2, economy: 6.85, isCurrent: true },
    fallOfWickets: [
      { wicketNumber: 1, runs: 48, over: '7.2', batterName: 'M. Vijay', dismissalType: 'b Rahul' },
      { wicketNumber: 2, runs: 92, over: '14.5', batterName: 'S. Prabhu', dismissalType: 'c Arun b Vetrivel' },
      { wicketNumber: 3, runs: 128, over: '20.1', batterName: 'R. Dinesh', dismissalType: 'lbw b Rahul' },
      { wicketNumber: 4, runs: 154, over: '24.2', batterName: 'P. Saravanan', dismissalType: 'run out' }
    ],
    partnerships: [
      { batter1: 'Arun', batter2: 'Karthik', runs: 84, balls: 71, fours: 9, sixes: 2 }
    ],
    commentary: [
      { id: 'c-1', over: 28, ball: 3, runs: 4, isWicket: false, isBoundary: true, isSix: false, bowlerName: 'Rahul', strikerName: 'Arun', text: 'FOUR! Smashed down the ground through mid-on with brutal power.', timestamp: '17:42' },
      { id: 'c-2', over: 28, ball: 2, runs: 1, isWicket: false, isBoundary: false, isSix: false, bowlerName: 'Rahul', strikerName: 'Karthik', text: '1 RUN. Tapped softly towards backward point for a quick single.', timestamp: '17:41' },
      { id: 'c-3', over: 28, ball: 1, runs: 0, isWicket: true, isBoundary: false, isSix: false, wicketType: 'CAUGHT', dismissedPlayer: 'P. Saravanan', bowlerName: 'Rahul', strikerName: 'Saravanan', text: 'WICKET! Caught at deep mid-wicket! High into the night sky and taken cleanly.', timestamp: '17:39' },
      { id: 'c-4', over: 27, ball: 6, runs: 6, isWicket: false, isBoundary: true, isSix: true, bowlerName: 'Vetrivel', strikerName: 'Arun', text: 'SIX! Picked off the pads and dispatched deep into the stands!', timestamp: '17:36' }
    ],
    wagonWheelShots: [
      { id: 'w-1', over: 28.3, runs: 4, angleDeg: 10, distance: 85, zone: 'Straight', batterName: 'Arun' },
      { id: 'w-2', over: 27.6, runs: 6, angleDeg: 280, distance: 95, zone: 'Mid Wicket', batterName: 'Arun' },
      { id: 'w-3', over: 26.2, runs: 4, angleDeg: 120, distance: 80, zone: 'Cover', batterName: 'Arun' },
      { id: 'w-4', over: 25.4, runs: 4, angleDeg: 230, distance: 75, zone: 'Square Leg', batterName: 'Karthik' },
      { id: 'w-5', over: 24.1, runs: 2, angleDeg: 45, distance: 50, zone: 'Extra Cover', batterName: 'Karthik' }
    ]
  },
  {
    id: 'match-2',
    title: 'Match 15 - Group Stage T20',
    tournamentId: 'tour-1',
    tournamentName: 'State Championship 2026',
    matchNumber: 'M-15',
    venue: 'NPR College Ground, Dindigul',
    venueId: 'ven-2',
    date: '2026-09-26',
    time: '09:30 IST',
    status: 'UPCOMING',
    teamA: { id: 'team-3', name: 'Sivakasi Strikers', shortName: 'SS' },
    teamB: { id: 'team-4', name: 'Coimbatore Panthers', shortName: 'CP' },
  },
  {
    id: 'match-3',
    title: 'Match 13 - Group Stage',
    tournamentId: 'tour-1',
    tournamentName: 'State Championship 2026',
    matchNumber: 'M-13',
    venue: 'SNR College Cricket Ground, Coimbatore',
    venueId: 'ven-3',
    date: '2026-09-24',
    time: '14:00 IST',
    status: 'COMPLETED',
    teamA: { id: 'team-1', name: 'Tamil Titans', shortName: 'TT' },
    teamB: { id: 'team-4', name: 'Coimbatore Panthers', shortName: 'CP' },
    scoreA: { runs: 215, wickets: 5, overs: 20.0 },
    scoreB: { runs: 182, wickets: 9, overs: 20.0 },
    resultText: 'Tamil Titans won by 33 runs',
  }
];

export const MOCK_STANDINGS: GroupStanding[] = [
  { position: 1, teamId: 'team-1', teamName: 'Tamil Titans', teamShortName: 'TT', played: 6, won: 5, lost: 1, tied: 0, drawn: 0, noResult: 0, points: 10, nrr: +1.425, forRuns: '1240/112', againstRuns: '1080/120' },
  { position: 2, teamId: 'team-2', teamName: 'Madurai Warriors', teamShortName: 'MW', played: 6, won: 4, lost: 2, tied: 0, drawn: 0, noResult: 0, points: 8, nrr: +0.892, forRuns: '1150/118', againstRuns: '1090/115' },
  { position: 3, teamId: 'team-3', teamName: 'Sivakasi Strikers', teamShortName: 'SS', played: 6, won: 3, lost: 3, tied: 0, drawn: 0, noResult: 0, points: 6, nrr: -0.114, forRuns: '1080/120', againstRuns: '1100/114' },
  { position: 4, teamId: 'team-4', teamName: 'Coimbatore Panthers', teamShortName: 'CP', played: 6, won: 0, lost: 6, tied: 0, drawn: 0, noResult: 0, points: 0, nrr: -2.180, forRuns: '940/120', againstRuns: '1140/100' }
];

export const MOCK_NEWS: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'State Senior Championship Semi Finals Set for Thrilling Finish at Chepauk',
    category: 'Matches',
    summary: 'Tamil Titans and Madurai Warriors clash in a high-scoring encounter with place in grand final on the line.',
    content: 'The semi-finals of the Tamil Nadu State Championship 2026 produced masterclass batting performances at Chepauk. Tamil Titans set an intimidating target of 285 runs, powered by a brilliant century from skipper Arun Kumar...',
    date: 'Sep 25, 2026',
    author: 'Regal Media Desk',
    imageUrl: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800',
    featured: true,
  },
  {
    id: 'news-2',
    title: 'Selection Trials for Inter-District U19 Squad Announced',
    category: 'Selections',
    summary: 'District associations invite registered U19 players for state talent identification camps next month.',
    content: 'The Junior Selection Committee has announced open trials across 4 zones (North, South, East, West) starting October 5th. All eligible players must present official age certificates...',
    date: 'Sep 24, 2026',
    author: 'Association Secretary',
    imageUrl: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800',
  },
  {
    id: 'news-3',
    title: 'New High Performance Coaching Facility Inaugurated in Salem',
    category: 'Coaching',
    summary: 'State-of-the-art indoor nets and biomechanics laboratory now open for academy trainees.',
    content: 'A state-of-the-art high-performance centre with 8 synthetic indoor pitches, automated bowling machines, and video analysis tools was inaugurated today...',
    date: 'Sep 22, 2026',
    author: 'Infrastructure Committee',
    imageUrl: 'https://images.unsplash.com/photo-1512719991214-e005549f6d12?w=800',
  }
];

export const MOCK_MEDIA: MediaItem[] = [
  {
    id: 'med-1',
    title: 'Semi Final Match Highlights: Tamil Titans vs Madurai Warriors',
    type: 'VIDEO',
    category: 'Match Highlights',
    thumbnailUrl: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    duration: '12:45',
    date: 'Sep 25, 2026',
  },
  {
    id: 'med-2',
    title: 'Arun Kumar Masterclass Century - 118 (98 balls)',
    type: 'VIDEO',
    category: 'Player Spotlight',
    thumbnailUrl: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    duration: '06:20',
    date: 'Sep 25, 2026',
  },
  {
    id: 'med-3',
    title: 'Photo Gallery: Chepauk Crowd & Match Action',
    type: 'PHOTO',
    category: 'Match Photography',
    thumbnailUrl: 'https://images.unsplash.com/photo-1512719991214-e005549f6d12?w=600',
    albumCount: 24,
    date: 'Sep 25, 2026',
  }
];

export const MOCK_VENUES: Venue[] = [
  {
    id: 'ven-1',
    name: 'MA Chidambaram Stadium',
    location: 'Chepauk, Chennai',
    capacity: 38000,
    pitchType: 'Spin Friendly / Balanced',
    imageUrl: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800',
    groundInformation: 'Historical venue established in 1916. Features modern floodlights, sporting soil pitches, and corporate boxes.',
  },
  {
    id: 'ven-2',
    name: 'NPR College Ground',
    location: 'Natham, Dindigul',
    capacity: 12000,
    pitchType: 'Batting Paradise / High Scoring',
    imageUrl: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800',
    groundInformation: 'Scenic ground surrounded by hills. Known for fast outfield and excellent bounce for pace bowlers in morning sessions.',
  }
];

export const MOCK_CLUBS: ClubDirectoryItem[] = [
  { id: 'club-1', name: 'Chepauk Cricket Club', type: 'Club', district: 'Chennai', establishedYear: 1952, teamsCount: 4, playersCount: 65, contactEmail: 'info@chepaukcc.org' },
  { id: 'club-2', name: 'Madurai District Cricket Association', type: 'District Association', district: 'Madurai', establishedYear: 1974, teamsCount: 12, playersCount: 180, contactEmail: 'mdca@regalcricket.org' },
  { id: 'club-3', name: 'St. Bedes Sports Academy', type: 'Academy', district: 'Chennai', establishedYear: 1998, teamsCount: 6, playersCount: 120, contactEmail: 'contact@stbedesacademy.in' }
];

export const MOCK_NOTIFICATIONS: NotificationItem[] = [
  { id: 'notif-1', title: 'WICKET!', message: 'Saravanan run out at 24.2 overs in Match #14.', time: '5 mins ago', type: 'WICKET', read: false },
  { id: 'notif-2', title: '50 RUNS!', message: 'Arun reaches half century off 34 balls.', time: '22 mins ago', type: 'MATCH', read: false },
  { id: 'notif-3', title: 'U19 Squad Trials', message: 'Official notification published for junior trials.', time: '2 hours ago', type: 'ANNOUNCEMENT', read: true }
];
