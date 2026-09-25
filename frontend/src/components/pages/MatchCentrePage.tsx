import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../theme';
import { matchService } from '../../services/matchService';
import { Match } from '../../types';
import { ErrorState } from '../common/ErrorState';
import { useResponsive } from '../../hooks/useResponsive';

// Temporary widget imports - we'll create sophisticated versions later
import { CommentaryFeed } from '../CommentaryFeed';
import { WagonWheelWidget } from '../WagonWheelWidget';
import { ChaseWormWidget } from '../ChaseWormWidget';

interface MatchCentrePageProps {
  matchId: string;
}

type TabType = 'OVERVIEW' | 'SCORECARD' | 'COMMENTARY' | 'WAGON_WHEEL' | 'PARTNERSHIPS' | 'ANALYTICS' | 'FALL_OF_WICKETS';

export const MatchCentrePage: React.FC<MatchCentrePageProps> = ({ matchId }) => {
  const [match, setMatch] = useState<Match | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('OVERVIEW');
  const { isMobile } = useResponsive();

  useEffect(() => {
    loadMatch();
  }, [matchId]);

  const loadMatch = async () => {
    setLoading(true);
    setError(false);
    try {
      const data = await matchService.getMatchById(matchId);
      if (data) setMatch(data);
      else setError(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const tabs: { key: TabType; label: string }[] = [
    { key: 'OVERVIEW', label: 'Overview' },
    { key: 'SCORECARD', label: 'Scorecard' },
    { key: 'COMMENTARY', label: 'Commentary' },
    { key: 'WAGON_WHEEL', label: 'Wagon Wheel' },
    { key: 'PARTNERSHIPS', label: 'Partnerships' },
    { key: 'ANALYTICS', label: 'Analytics' },
    { key: 'FALL_OF_WICKETS', label: 'FOW' }
  ];

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.championshipGold} />
      </View>
    );
  }

  if (error || !match) {
    return <ErrorState onRetry={loadMatch} />;
  }

  const isLive = match.status === 'LIVE';

  return (
    <View style={styles.container}>
      {/* Broadcast Scoreboard Header */}
      <View style={styles.heroSection}>
        <View style={styles.heroInner}>
          {/* Top Meta */}
          <View style={styles.heroMeta}>
            <Text style={styles.heroMetaText}>{match.tournamentName} • {match.matchNumber}</Text>
            {isLive && (
              <View style={styles.liveBadge}>
                <View style={styles.liveDot} />
                <Text style={styles.liveBadgeText}>LIVE</Text>
              </View>
            )}
          </View>

          {/* Scoreboard Layout */}
          <View style={[styles.scoreboardLayout, isMobile && { flexDirection: 'column', gap: 12 }]}>
            {/* Team A */}
            <View style={[styles.teamBlock, match.currentInning === 1 && styles.teamBlockActive]}>
              <Text style={styles.teamNameHero}>{match.teamA.name}</Text>
              {match.scoreA ? (
                <View style={styles.scoreRowHero}>
                  <Text style={styles.runsHero}>{match.scoreA.runs}/{match.scoreA.wickets}</Text>
                  <Text style={styles.oversHero}>({match.scoreA.overs})</Text>
                </View>
              ) : (
                <Text style={styles.yetToBatHero}>Yet to Bat</Text>
              )}
            </View>

            <View style={styles.vsDivider}>
              <Text style={styles.vsText}>VS</Text>
            </View>

            {/* Team B */}
            <View style={[styles.teamBlock, match.currentInning === 2 && styles.teamBlockActive]}>
              <Text style={styles.teamNameHero}>{match.teamB.name}</Text>
              {match.scoreB ? (
                <View style={styles.scoreRowHero}>
                  <Text style={styles.runsHero}>{match.scoreB.runs}/{match.scoreB.wickets}</Text>
                  <Text style={styles.oversHero}>({match.scoreB.overs})</Text>
                </View>
              ) : (
                <Text style={styles.yetToBatHero}>Yet to Bat</Text>
              )}
            </View>
          </View>

          {/* Match Situation / Context */}
          <View style={styles.matchContextBar}>
            {match.resultText ? (
              <Text style={styles.resultText}>{match.resultText}</Text>
            ) : match.tossText && !match.target ? (
              <Text style={styles.contextText}>{match.tossText}</Text>
            ) : null}
            
            {match.target && (
              <View style={styles.targetMetrics}>
                <Text style={styles.targetText}>Target: {match.target}</Text>
                <Text style={styles.targetText}>Req RR: {match.requiredRR?.toFixed(2)}</Text>
                <Text style={styles.targetText}>Curr RR: {match.currentRR?.toFixed(2)}</Text>
              </View>
            )}
          </View>
        </View>
      </View>

      {/* Tabs Navigation */}
      <View style={styles.tabsContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabsScroll}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab.key}
              style={[styles.tabBtn, activeTab === tab.key && styles.tabBtnActive]}
              onPress={() => setActiveTab(tab.key)}
            >
              <Text style={[styles.tabText, activeTab === tab.key && styles.tabTextActive]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Tab Content */}
      <ScrollView style={styles.contentArea}>
        {activeTab === 'OVERVIEW' && (
          <View style={[styles.overviewGrid, isMobile && { flexDirection: 'column' }]}>
             {/* Current Batters */}
             <View style={styles.tableCard}>
                <Text style={styles.cardTitle}>CURRENT BATTERS</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View style={{ minWidth: isMobile ? 400 : '100%' }}>
                    {match.currentBatters?.map(b => (
                      <View key={b.playerId} style={styles.tableRow}>
                        <Text style={[styles.cellPlayer, b.isStriker && styles.striker]}>{b.name}{b.isStriker ? '*' : ''}</Text>
                        <Text style={styles.cellStat}>{b.runs}</Text>
                        <Text style={styles.cellStat}>{b.balls}</Text>
                        <Text style={styles.cellStat}>{b.fours}</Text>
                        <Text style={styles.cellStat}>{b.sixes}</Text>
                        <Text style={styles.cellStat}>{b.strikeRate}</Text>
                      </View>
                    ))}
                    <View style={[styles.tableRow, styles.tableHeaderRow]}>
                       <Text style={styles.cellPlayer}>Batsman</Text>
                       <Text style={styles.cellStat}>R</Text>
                       <Text style={styles.cellStat}>B</Text>
                       <Text style={styles.cellStat}>4s</Text>
                       <Text style={styles.cellStat}>6s</Text>
                       <Text style={styles.cellStat}>SR</Text>
                    </View>
                  </View>
                </ScrollView>
             </View>

             {/* Current Bowler */}
             <View style={styles.tableCard}>
                <Text style={styles.cardTitle}>CURRENT BOWLER</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View style={{ minWidth: isMobile ? 400 : '100%' }}>
                    {match.currentBowler && (
                      <View style={styles.tableRow}>
                        <Text style={styles.cellPlayer}>{match.currentBowler.name}</Text>
                        <Text style={styles.cellStat}>{match.currentBowler.overs}</Text>
                        <Text style={styles.cellStat}>{match.currentBowler.maidens}</Text>
                        <Text style={styles.cellStat}>{match.currentBowler.runs}</Text>
                        <Text style={styles.cellStat}>{match.currentBowler.wickets}</Text>
                        <Text style={styles.cellStat}>{match.currentBowler.economy}</Text>
                      </View>
                    )}
                    <View style={[styles.tableRow, styles.tableHeaderRow]}>
                       <Text style={styles.cellPlayer}>Bowler</Text>
                       <Text style={styles.cellStat}>O</Text>
                       <Text style={styles.cellStat}>M</Text>
                       <Text style={styles.cellStat}>R</Text>
                       <Text style={styles.cellStat}>W</Text>
                       <Text style={styles.cellStat}>ECO</Text>
                    </View>
                  </View>
                </ScrollView>
             </View>
          </View>
        )}
        
        {activeTab === 'COMMENTARY' && (
           <CommentaryFeed matchId={match.id} />
        )}

        {activeTab === 'WAGON_WHEEL' && (
           <View style={{ padding: 20 }}>
              <WagonWheelWidget />
           </View>
        )}

        {activeTab === 'ANALYTICS' && (
           <View style={{ padding: 20 }}>
              <ChaseWormWidget />
           </View>
        )}
        
        {/* Fill in other tabs progressively */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundLight,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  heroSection: {
    backgroundColor: COLORS.midnightNavy,
    paddingTop: 20,
    paddingBottom: 24,
    borderBottomWidth: 4,
    borderBottomColor: COLORS.championshipGold,
  },
  heroInner: {
    maxWidth: 1000,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  heroMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  heroMetaText: {
    color: COLORS.textMuted,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  liveBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.crimsonLight,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.crimsonBright,
  },
  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.warmWhite,
    marginRight: 6,
  },
  liveBadgeText: {
    color: COLORS.warmWhite,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
  },
  scoreboardLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  teamBlock: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.surfaceElevated,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  teamBlockActive: {
    borderColor: COLORS.championshipGold,
    backgroundColor: 'rgba(212, 175, 55, 0.05)',
  },
  teamNameHero: {
    color: COLORS.textPrimary,
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 8,
  },
  scoreRowHero: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 8,
  },
  runsHero: {
    color: COLORS.championshipGold,
    fontSize: 36,
    fontWeight: '800',
    fontFamily: 'Space Grotesk',
    fontVariant: ['tabular-nums'],
  },
  oversHero: {
    color: COLORS.textMuted,
    fontSize: 16,
    fontWeight: '600',
  },
  yetToBatHero: {
    color: COLORS.textMuted,
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 4,
  },
  vsDivider: {
    paddingHorizontal: 20,
  },
  vsText: {
    color: COLORS.textMuted,
    fontSize: 14,
    fontWeight: '800',
  },
  matchContextBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: COLORS.surfaceElevated,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  contextText: {
    color: COLORS.textSecondary,
    fontSize: 13,
  },
  resultText: {
    color: COLORS.success,
    fontSize: 14,
    fontWeight: '700',
  },
  targetMetrics: {
    flexDirection: 'row',
    gap: 20,
  },
  targetText: {
    color: COLORS.textPrimary,
    fontSize: 13,
    fontWeight: '600',
  },
  tabsContainer: {
    backgroundColor: COLORS.surface,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  tabsScroll: {
    paddingHorizontal: 10,
  },
  tabBtn: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabBtnActive: {
    borderBottomColor: COLORS.championshipGold,
  },
  tabText: {
    color: COLORS.textMuted,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  tabTextActive: {
    color: COLORS.championshipGold,
  },
  contentArea: {
    flex: 1,
  },
  overviewGrid: {
    padding: 20,
    maxWidth: 1000,
    width: '100%',
    alignSelf: 'center',
    gap: 20,
  },
  tableCard: {
    backgroundColor: COLORS.surfaceCardLight,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.borderLight,
    padding: 16,
  },
  cardTitle: {
    color: COLORS.midnightNavy,
    fontSize: 13,
    fontWeight: '800',
    marginBottom: 12,
    fontFamily: 'Space Grotesk',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderLight,
  },
  tableHeaderRow: {
    borderBottomWidth: 0,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: COLORS.borderLight,
    marginTop: 4,
  },
  cellPlayer: {
    flex: 2,
    color: COLORS.textDark,
    fontSize: 14,
    fontWeight: '600',
  },
  striker: {
    color: COLORS.championshipGold,
  },
  cellStat: {
    flex: 1,
    color: COLORS.textDark,
    fontSize: 14,
    textAlign: 'center',
    fontVariant: ['tabular-nums'],
  },
});
