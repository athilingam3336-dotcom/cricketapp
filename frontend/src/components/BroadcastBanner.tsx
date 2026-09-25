import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface BroadcastBannerProps {
  scoreData?: {
    teamA: string;
    teamAScore: string;
    teamAOvers: string;
    teamB: string;
    teamBScore: string;
    teamBOvers: string;
    target: number;
    neededRuns: number;
    neededBalls: number;
    striker: string;
    strikerRuns: number;
    strikerBalls: number;
    nonStriker: string;
    nonStrikerRuns: number;
    nonStrikerBalls: number;
    bowler: string;
    bowlerWickets: number;
    bowlerRuns: number;
    bowlerOvers: number;
  };
}

export const BroadcastBanner: React.FC<BroadcastBannerProps> = ({ scoreData }) => {
  const data = scoreData || {
    teamA: 'Sivakasi Strikers',
    teamAScore: '174/6',
    teamAOvers: '20.0',
    teamB: 'Virudhunagar Kings',
    teamBScore: '168/5',
    teamBOvers: '19.2',
    target: 175,
    neededRuns: 7,
    neededBalls: 4,
    striker: 'S. Muthukumar',
    strikerRuns: 64,
    strikerBalls: 38,
    nonStriker: 'R. Anandhan',
    nonStrikerRuns: 18,
    nonStrikerBalls: 11,
    bowler: 'K. Vetrivel',
    bowlerWickets: 2,
    bowlerRuns: 35,
    bowlerOvers: 3.2,
  };

  return (
    <View style={styles.bannerContainer}>
      <View style={styles.innerContainer}>
        {/* Ribbon Status */}
        <View style={styles.ribbonRow}>
          <View style={styles.leftRibbon}>
            <View style={styles.liveBadge}>
              <View style={styles.pulseDot} />
              <Text style={styles.liveText}>LIVE FINAL</Text>
            </View>
            <Text style={styles.leagueText}>CFVD District Super League 2025</Text>
            <Text style={styles.dotSeparator}>•</Text>
            <Text style={styles.venueText}>Sivakasi Turf Ground, Virudhunagar</Text>
          </View>
          <View style={styles.rightRibbon}>
            <Text style={styles.dlsLabel}>DLS Target:</Text>
            <Text style={styles.dlsValue}>{data.target} Runs</Text>
            <Text style={styles.weatherText}>29°C Clear • Dew: Moderate</Text>
          </View>
        </View>

        {/* Hero Scoreboard Strip */}
        <View style={styles.heroStrip}>
          {/* Team A */}
          <View style={styles.teamCard}>
            <View style={styles.teamLogoBadge}>
              <Text style={styles.teamLogoText}>SS</Text>
            </View>
            <View style={styles.teamDetails}>
              <Text style={styles.teamTitle}>{data.teamA}</Text>
              <Text style={styles.inningsText}>1st Innings • {data.teamAOvers} Overs</Text>
            </View>
            <View style={styles.scoreContainer}>
              <Text style={styles.primaryScore}>{data.teamAScore}</Text>
              <Text style={styles.crrText}>CRR 8.70</Text>
            </View>
          </View>

          {/* Center Equation */}
          <View style={styles.centerCard}>
            <View style={styles.equationBadge}>
              <Text style={styles.equationText}>
                ⚡ Kings need {data.neededRuns} runs in {data.neededBalls} balls
              </Text>
            </View>
            <Text style={styles.chaseSubtext}>Target {data.target} • RRR 10.50 • Final Over Thriller</Text>
            
            {/* Ball Sequence */}
            <View style={styles.overBallsRow}>
              <Text style={styles.overBallsLabel}>Over 20:</Text>
              <View style={styles.ballDot}><Text style={styles.ballText}>0</Text></View>
              <View style={[styles.ballDot, styles.fourBall]}><Text style={[styles.ballText, styles.fourBallText]}>4</Text></View>
              <View style={styles.ballDot}><Text style={styles.ballText}>1</Text></View>
              <View style={styles.ballDot}><Text style={styles.ballText}>2</Text></View>
              <View style={[styles.ballDot, styles.activeBall]}><Text style={styles.activeBallText}>?</Text></View>
              <View style={styles.ballDot}><Text style={styles.ballText}>•</Text></View>
            </View>
          </View>

          {/* Team B (Chasing) */}
          <View style={[styles.teamCard, styles.chasingTeamCard]}>
            <View style={[styles.teamLogoBadge, { backgroundColor: '#0E1C2F' }]}>
              <Text style={[styles.teamLogoText, { color: '#FED65B' }]}>VK</Text>
            </View>
            <View style={styles.teamDetails}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                <Text style={styles.teamTitle}>{data.teamB}</Text>
                <View style={styles.pingDot} />
              </View>
              <Text style={styles.inningsText}>Chasing {data.target} • {data.teamBOvers} Overs</Text>
            </View>
            <View style={styles.scoreContainer}>
              <Text style={styles.primaryScore}>{data.teamBScore}</Text>
              <Text style={styles.reqText}>REQ RR 10.50</Text>
            </View>
          </View>
        </View>

        {/* Active Batters & Bowlers Mini Bar */}
        <View style={styles.playersBar}>
          {/* Striker */}
          <View style={styles.playerCard}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <Text style={{ fontSize: 16 }}>🏏</Text>
              <View>
                <Text style={styles.playerName}>{data.striker}*</Text>
                <Text style={styles.playerRole}>Striker • Right Hand Bat</Text>
              </View>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.playerMainStat}>{data.strikerRuns}</Text>
              <Text style={styles.playerSubStat}>({data.strikerBalls}b • 5x4, 3x6 • SR 168.4)</Text>
            </View>
          </View>

          {/* Non-Striker */}
          <View style={styles.playerCard}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <Text style={{ fontSize: 16 }}>🏏</Text>
              <View>
                <Text style={styles.playerName}>{data.nonStriker}</Text>
                <Text style={styles.playerRole}>Non-Striker • Right Hand Bat</Text>
              </View>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.playerMainStat}>{data.nonStrikerRuns}</Text>
              <Text style={styles.playerSubStat}>({data.nonStrikerBalls}b • 2x4, 0x6 • SR 163.6)</Text>
            </View>
          </View>

          {/* Bowler */}
          <View style={styles.playerCard}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <Text style={{ fontSize: 16 }}>⚾</Text>
              <View>
                <Text style={styles.playerName}>{data.bowler}</Text>
                <Text style={styles.playerRole}>Right Arm Medium Fast</Text>
              </View>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.playerMainStat}>{data.bowlerWickets}/{data.bowlerRuns}</Text>
              <Text style={styles.playerSubStat}>({data.bowlerOvers} ov • Econ 10.50)</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    backgroundColor: '#0E1C2F',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1E2D42',
  },
  innerContainer: {
    maxWidth: 1360,
    alignSelf: 'center',
    width: '100%',
  },
  ribbonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    flexWrap: 'wrap',
    gap: 8,
  },
  leftRibbon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  liveBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#40000A',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    gap: 6,
  },
  pulseDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF4D4D',
  },
  liveText: {
    color: '#FFB3B3',
    fontWeight: '800',
    fontSize: 10,
    letterSpacing: 1,
  },
  leagueText: {
    color: '#77849C',
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  dotSeparator: {
    color: '#77849C',
  },
  venueText: {
    color: '#BAC7E1',
    fontSize: 12,
  },
  rightRibbon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dlsLabel: {
    color: '#77849C',
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  dlsValue: {
    color: '#FED65B',
    fontWeight: '700',
    fontSize: 13,
  },
  weatherText: {
    color: '#BAC7E1',
    fontSize: 12,
  },
  heroStrip: {
    flexDirection: 'row',
    backgroundColor: '#111C2D',
    borderRadius: 12,
    padding: 12,
    gap: 12,
    flexWrap: 'wrap',
  },
  teamCard: {
    flex: 1,
    minWidth: 260,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(14, 28, 47, 0.7)',
    padding: 12,
    borderRadius: 8,
  },
  chasingTeamCard: {
    backgroundColor: '#FFFFFF',
    borderLeftWidth: 4,
    borderLeftColor: '#735C00',
  },
  teamLogoBadge: {
    width: 44,
    height: 44,
    borderRadius: 8,
    backgroundColor: '#E7EEFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  teamLogoText: {
    color: '#111C2D',
    fontWeight: '800',
    fontSize: 16,
  },
  teamDetails: {
    flex: 1,
    marginLeft: 12,
  },
  teamTitle: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
  pingDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FED65B',
  },
  inningsText: {
    color: '#77849C',
    fontSize: 11,
    marginTop: 2,
  },
  scoreContainer: {
    alignItems: 'flex-end',
  },
  primaryScore: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 24,
  },
  crrText: {
    color: '#77849C',
    fontSize: 10,
    fontWeight: '700',
  },
  reqText: {
    color: '#735C00',
    fontSize: 10,
    fontWeight: '800',
  },
  centerCard: {
    flex: 1,
    minWidth: 260,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  equationBadge: {
    backgroundColor: '#FED65B',
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 6,
  },
  equationText: {
    color: '#745C00',
    fontWeight: '800',
    fontSize: 12,
    textTransform: 'uppercase',
  },
  chaseSubtext: {
    color: '#D8E3FB',
    fontSize: 12,
    fontWeight: '500',
  },
  overBallsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 8,
  },
  overBallsLabel: {
    color: '#77849C',
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginRight: 4,
  },
  ballDot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#D8E3FB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fourBall: {
    backgroundColor: '#FED65B',
  },
  fourBallText: {
    color: '#745C00',
  },
  activeBall: {
    backgroundColor: '#000000',
    borderWidth: 1,
    borderColor: '#FED65B',
  },
  activeBallText: {
    color: '#FED65B',
  },
  ballText: {
    color: '#111C2D',
    fontWeight: '800',
    fontSize: 11,
  },
  playersBar: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 12,
    flexWrap: 'wrap',
  },
  playerCard: {
    flex: 1,
    minWidth: 240,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(14, 28, 47, 0.9)',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
  },
  playerName: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 13,
  },
  playerRole: {
    color: '#77849C',
    fontSize: 10,
  },
  playerMainStat: {
    color: '#FED65B',
    fontWeight: '800',
    fontSize: 18,
  },
  playerSubStat: {
    color: '#CFDAF2',
    fontSize: 10,
  },
});
