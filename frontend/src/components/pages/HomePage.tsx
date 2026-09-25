import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SHADOWS } from '../../theme';
import { MatchCard } from '../cards/MatchCard';
import { matchService } from '../../services/matchService';
import { Match, NavigationRoute } from '../../types';
import { useResponsive } from '../../hooks/useResponsive';

interface HomePageProps {
  onNavigate: (route: NavigationRoute, paramId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [liveMatches, setLiveMatches] = useState<Match[]>([]);
  const [upcomingMatches, setUpcomingMatches] = useState<Match[]>([]);
  const { isMobile, getCardWidth } = useResponsive();

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const live = await matchService.getLiveMatches();
      const upcoming = await matchService.getUpcomingMatches();
      setLiveMatches(live);
      setUpcomingMatches(upcoming.slice(0, 3)); // show top 3 upcoming
    } catch (e) {
      console.error('Failed to load dashboard data');
    }
  };

  const cardWidth = getCardWidth(16, 40); // 16px gap, 40px padding

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <View style={styles.heroInner}>
          <Text style={styles.heroPreTitle}>OFFICIAL CRICKET ASSOCIATION</Text>
          <Text style={styles.heroTitle}>THE GAME,{'\n'}MEASURED BALL BY BALL.</Text>
          <Text style={styles.heroSubtitle}>
            Live scores, fixtures, tournaments, player statistics and cricket intelligence in one professional platform.
          </Text>
          <View style={styles.heroActions}>
            <TouchableOpacity style={styles.btnPrimary} onPress={() => onNavigate('LIVE')}>
              <Text style={styles.btnPrimaryText}>LIVE MATCHES</Text>
              <Ionicons name="radio" size={16} color={COLORS.midnightNavy} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSecondary} onPress={() => onNavigate('SCORING_CENTRE')}>
              <Text style={styles.btnSecondaryText}>SCORING CENTRE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Main Layout Container */}
      <View style={styles.mainContent}>
        
        {/* Live Matches Section */}
        {liveMatches.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <View style={styles.sectionTitleRow}>
                <View style={styles.livePulse} />
                <Text style={styles.sectionTitle}>LIVE MATCHES</Text>
              </View>
              <TouchableOpacity onPress={() => onNavigate('LIVE')}>
                <Text style={styles.viewAllText}>View All</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.horizontalScrollWrapper}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.cardsScroll}>
                {liveMatches.map(match => (
                  <View key={match.id} style={{ width: isMobile ? 320 : 400 }}>
                    <MatchCard match={match} onOpenMatchCentre={(id) => onNavigate('MATCH_CENTRE', id)} />
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        )}

        {/* Upcoming Fixtures */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>UPCOMING FIXTURES</Text>
            <TouchableOpacity onPress={() => onNavigate('FIXTURES')}>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.gridContainer, isMobile && { flexDirection: 'column' }]}>
            {upcomingMatches.map(match => (
              <View key={match.id} style={{ width: isMobile ? '100%' : cardWidth, marginBottom: 16 }}>
                <MatchCard match={match} onOpenMatchCentre={(id) => onNavigate('MATCH_CENTRE', id)} />
              </View>
            ))}
          </View>
        </View>

        {/* Top Performers Preview (Static for now) */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>TOP PERFORMERS</Text>
            <TouchableOpacity onPress={() => onNavigate('LEADERBOARDS')}>
              <Text style={styles.viewAllText}>Leaderboards</Text>
            </TouchableOpacity>
          </View>
          
          <View style={[styles.gridContainer, isMobile && { flexDirection: 'column' }]}>
            <View style={[styles.performerCard, { width: isMobile ? '100%' : cardWidth, marginBottom: 16 }]}>
               <Text style={styles.performerCategory}>TOP RUN SCORER</Text>
               <Text style={styles.performerName}>Arun Kumar</Text>
               <Text style={styles.performerTeam}>Tamil Titans</Text>
               <Text style={styles.performerStat}>1240 Runs</Text>
            </View>
            <View style={[styles.performerCard, { width: isMobile ? '100%' : cardWidth, marginBottom: 16 }]}>
               <Text style={styles.performerCategory}>TOP WICKET TAKER</Text>
               <Text style={styles.performerName}>Rahul Vetrivel</Text>
               <Text style={styles.performerTeam}>Tamil Titans</Text>
               <Text style={styles.performerStat}>48 Wickets</Text>
            </View>
            <View style={[styles.performerCard, { width: isMobile ? '100%' : cardWidth, marginBottom: 16 }]}>
               <Text style={styles.performerCategory}>BEST STRIKE RATE</Text>
               <Text style={styles.performerName}>Karthik Raja</Text>
               <Text style={styles.performerTeam}>Madurai Warriors</Text>
               <Text style={styles.performerStat}>138.2 SR</Text>
            </View>
          </View>
        </View>

        {/* Call to action banners */}
        <View style={[styles.gridContainer, isMobile && { flexDirection: 'column' }]}>
          <TouchableOpacity style={[styles.promoBanner, { backgroundColor: COLORS.surfaceElevated, width: isMobile ? '100%' : cardWidth, marginBottom: 16 }]} onPress={() => onNavigate('TOURNAMENTS')}>
             <Ionicons name="trophy-outline" size={32} color={COLORS.championshipGold} />
             <Text style={styles.promoTitle}>TOURNAMENTS</Text>
             <Text style={styles.promoSub}>Explore all state championships & club leagues.</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.promoBanner, { backgroundColor: COLORS.midnightNavy, width: isMobile ? '100%' : cardWidth, marginBottom: 16 }]} onPress={() => onNavigate('PLAYERS')}>
             <Ionicons name="people-outline" size={32} color={COLORS.warmWhite} />
             <Text style={[styles.promoTitle, { color: COLORS.warmWhite }]}>PLAYER DATABASE</Text>
             <Text style={styles.promoSub}>Search full career profiles and statistics.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundLight,
  },
  heroSection: {
    backgroundColor: COLORS.midnightNavy,
    paddingVertical: 60,
    paddingHorizontal: 20,
    borderBottomWidth: 4,
    borderBottomColor: COLORS.championshipGold,
  },
  heroInner: {
    maxWidth: 1200,
    width: '100%',
    alignSelf: 'center',
  },
  heroPreTitle: {
    color: COLORS.championshipGold,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 16,
  },
  heroTitle: {
    color: COLORS.warmWhite,
    fontSize: Platform.OS === 'web' ? 56 : 42,
    fontWeight: '800',
    fontFamily: 'Space Grotesk',
    lineHeight: Platform.OS === 'web' ? 64 : 48,
    marginBottom: 20,
  },
  heroSubtitle: {
    color: COLORS.textSecondary,
    fontSize: 16,
    maxWidth: 600,
    lineHeight: 24,
    marginBottom: 32,
  },
  heroActions: {
    flexDirection: 'row',
    gap: 16,
    flexWrap: 'wrap',
  },
  btnPrimary: {
    backgroundColor: COLORS.championshipGold,
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  btnPrimaryText: {
    color: COLORS.midnightNavy,
    fontWeight: '800',
    fontSize: 14,
    letterSpacing: 0.5,
  },
  btnSecondary: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: COLORS.border,
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 8,
  },
  btnSecondaryText: {
    color: COLORS.warmWhite,
    fontWeight: '800',
    fontSize: 14,
    letterSpacing: 0.5,
  },
  mainContent: {
    maxWidth: 1200,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
    gap: 40,
  },
  section: {},
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderLight,
    paddingBottom: 10,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  livePulse: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.live,
    marginRight: 10,
  },
  sectionTitle: {
    color: COLORS.midnightNavy,
    fontSize: 18,
    fontWeight: '800',
    fontFamily: 'Space Grotesk',
    letterSpacing: 0.5,
  },
  viewAllText: {
    color: COLORS.championshipGold,
    fontSize: 13,
    fontWeight: '700',
  },
  horizontalScrollWrapper: {
    marginHorizontal: -20,
  },
  cardsScroll: {
    paddingHorizontal: 20,
    gap: 16,
  },
  cardContainer: {
    width: 320,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -10,
  },
  gridCardContainer: {
    width: '100%',
    paddingHorizontal: 10,
    // Add logic for 50% width on tablet, 33% on desktop later
  },
  performersGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  performerCard: {
    flex: 1,
    minWidth: 200,
    backgroundColor: COLORS.surfaceCardLight,
    padding: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.borderLight,
    ...SHADOWS.card,
  },
  performerCategory: {
    color: COLORS.textMuted,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  performerName: {
    color: COLORS.midnightNavy,
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 4,
  },
  performerTeam: {
    color: COLORS.textMuted,
    fontSize: 12,
    marginBottom: 12,
  },
  performerStat: {
    color: COLORS.championshipGold,
    fontSize: 20,
    fontWeight: '800',
    fontVariant: ['tabular-nums'],
  },
  promoBannersRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    marginTop: 20,
  },
  promoBanner: {
    flex: 1,
    minWidth: 280,
    padding: 30,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.borderLight,
    alignItems: 'flex-start',
  },
  promoTitle: {
    color: COLORS.championshipGold,
    fontSize: 18,
    fontWeight: '800',
    fontFamily: 'Space Grotesk',
    marginTop: 16,
    marginBottom: 8,
  },
  promoSub: {
    color: COLORS.textMuted,
    fontSize: 14,
    lineHeight: 20,
  }
});
