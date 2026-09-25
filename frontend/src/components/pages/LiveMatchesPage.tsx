import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { COLORS } from '../../theme';
import { MatchCard } from '../cards/MatchCard';
import { matchService } from '../../services/matchService';
import { Match, MatchStatus } from '../../types';
import { EmptyState } from '../common/EmptyState';
import { ErrorState } from '../common/ErrorState';
import { useResponsive } from '../../hooks/useResponsive';

type FilterType = 'ALL' | 'LIVE' | 'UPCOMING' | 'COMPLETED';

interface LiveMatchesPageProps {
  onOpenMatchCentre: (matchId: string) => void;
}

export const LiveMatchesPage: React.FC<LiveMatchesPageProps> = ({ onOpenMatchCentre }) => {
  const [filter, setFilter] = useState<FilterType>('ALL');
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  const { isMobile, getCardWidth } = useResponsive();
  const cardWidth = getCardWidth(16, 40);

  useEffect(() => {
    loadMatches();
  }, [filter]);

  const loadMatches = async () => {
    setLoading(true);
    setError(false);
    try {
      let data: Match[];
      if (filter === 'LIVE') data = await matchService.getLiveMatches();
      else if (filter === 'UPCOMING') data = await matchService.getUpcomingMatches();
      else if (filter === 'COMPLETED') data = await matchService.getCompletedMatches();
      else data = await matchService.getMatches();
      
      setMatches(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const renderContent = () => {
    if (loading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={COLORS.championshipGold} />
          <Text style={styles.loadingText}>Loading matches...</Text>
        </View>
      );
    }

    if (error) {
      return <ErrorState onRetry={loadMatches} />;
    }

    if (matches.length === 0) {
      return <EmptyState title={`No ${filter !== 'ALL' ? filter : ''} Matches`} message="There are no matches matching your current filter criteria." />;
    }

    return (
      <View style={[styles.matchesGrid, isMobile && { flexDirection: 'column' }]}>
        {matches.map((match) => (
          <View key={match.id} style={{ width: isMobile ? '100%' : cardWidth, marginBottom: 16 }}>
             <MatchCard match={match} onOpenMatchCentre={onOpenMatchCentre} />
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.pageTitle}>Match Centre</Text>
        <Text style={styles.pageSubtitle}>Live scores, upcoming fixtures, and recent results</Text>
      </View>

      <View style={styles.filtersContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filtersScroll}>
          {(['ALL', 'LIVE', 'UPCOMING', 'COMPLETED'] as FilterType[]).map((f) => (
            <TouchableOpacity
              key={f}
              style={[styles.filterBtn, filter === f && styles.filterBtnActive]}
              onPress={() => setFilter(f)}
            >
              {f === 'LIVE' && <View style={styles.liveDot} />}
              <Text style={[styles.filterText, filter === f && styles.filterTextActive]}>
                {f}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView style={styles.contentScroll} contentContainerStyle={styles.contentScrollContainer}>
        {renderContent()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  pageTitle: {
    color: COLORS.textPrimary,
    fontSize: 24,
    fontWeight: '800',
    fontFamily: 'Space Grotesk',
    letterSpacing: 0.5,
  },
  pageSubtitle: {
    color: COLORS.textMuted,
    fontSize: 14,
    marginTop: 6,
  },
  filtersContainer: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    paddingBottom: 16,
  },
  filtersScroll: {
    paddingHorizontal: 20,
    gap: 12,
  },
  filterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.surface,
  },
  filterBtnActive: {
    borderColor: COLORS.championshipGold,
    backgroundColor: COLORS.championshipGoldLight,
  },
  filterText: {
    color: COLORS.textSecondary,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  filterTextActive: {
    color: COLORS.championshipGold,
    fontWeight: '700',
  },
  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.live,
    marginRight: 6,
  },
  contentScroll: {
    flex: 1,
  },
  contentScrollContainer: {
    padding: 20,
  },
  loadingContainer: {
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    color: COLORS.textSecondary,
    marginTop: 12,
    fontSize: 14,
  },
  matchesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -10,
  },
  cardWrapper: {
    width: '100%',
    paddingHorizontal: 10,
    // Add media queries or responsive hooks for tablet/desktop later
    // e.g. width: '50%' on tablet, '33%' on desktop
  }
});
