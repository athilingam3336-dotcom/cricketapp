import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../theme';
import { Match, NavigationRoute } from '../../types';
import { Badge } from '../common/Badge';

interface MatchCardProps {
  match: Match;
  onOpenMatchCentre: (matchId: string) => void;
}

export const MatchCard: React.FC<MatchCardProps> = ({ match, onOpenMatchCentre }) => {
  const isLive = match.status === 'LIVE';

  return (
    <View style={[styles.card, isLive && styles.liveCard]}>
      {/* Header Info */}
      <View style={styles.cardHeader}>
        <View style={styles.headerLeft}>
          <Text style={styles.tournamentName} numberOfLines={1}>{match.tournamentName}</Text>
          <Text style={styles.matchMeta}>{match.matchNumber} • {match.venue}</Text>
        </View>
        <Badge
          label={match.status}
          variant={isLive ? 'live' : match.status === 'UPCOMING' ? 'gold' : 'slate'}
        />
      </View>

      {/* Teams and Score Section */}
      <View style={styles.teamsSection}>
        {/* Team A */}
        <View style={styles.teamRow}>
          <View style={styles.teamBrand}>
            <View style={styles.teamBadge}>
              <Text style={styles.teamLetter}>{match.teamA.shortName.substring(0, 2)}</Text>
            </View>
            <Text style={styles.teamName}>{match.teamA.name}</Text>
          </View>
          <View style={styles.scoreCol}>
            {match.scoreA ? (
              <Text style={styles.scoreText}>
                {match.scoreA.runs}/{match.scoreA.wickets}
                <Text style={styles.oversText}> ({match.scoreA.overs} ov)</Text>
              </Text>
            ) : (
              <Text style={styles.yetToBat}>Yet to Bat</Text>
            )}
          </View>
        </View>

        <Text style={styles.vsText}>VS</Text>

        {/* Team B */}
        <View style={styles.teamRow}>
          <View style={styles.teamBrand}>
            <View style={[styles.teamBadge, { backgroundColor: COLORS.crimson }]}>
              <Text style={styles.teamLetter}>{match.teamB.shortName.substring(0, 2)}</Text>
            </View>
            <Text style={styles.teamName}>{match.teamB.name}</Text>
          </View>
          <View style={styles.scoreCol}>
            {match.scoreB ? (
              <Text style={styles.scoreText}>
                {match.scoreB.runs}/{match.scoreB.wickets}
                <Text style={styles.oversText}> ({match.scoreB.overs} ov)</Text>
              </Text>
            ) : (
              <Text style={styles.yetToBat}>Yet to Bat</Text>
            )}
          </View>
        </View>
      </View>

      {/* Match Situation & Metrics */}
      {isLive && (
        <View style={styles.situationBox}>
          <View style={styles.metricItem}>
            <Text style={styles.metricLabel}>Current RR</Text>
            <Text style={styles.metricValue}>{match.currentRR?.toFixed(2) || '6.45'}</Text>
          </View>
          {match.target && (
            <View style={styles.metricItem}>
              <Text style={styles.metricLabel}>Target</Text>
              <Text style={styles.metricValue}>{match.target}</Text>
            </View>
          )}
          {match.requiredRR && (
            <View style={styles.metricItem}>
              <Text style={styles.metricLabel}>Req. RR</Text>
              <Text style={styles.metricValue}>{match.requiredRR.toFixed(2)}</Text>
            </View>
          )}
        </View>
      )}

      {match.resultText && (
        <Text style={styles.resultText}>{match.resultText}</Text>
      )}

      {/* Footer CTA */}
      <TouchableOpacity
        style={styles.ctaButton}
        onPress={() => onOpenMatchCentre(match.id)}
      >
        <Text style={styles.ctaText}>OPEN MATCH CENTRE</Text>
        <Ionicons name="arrow-forward" size={14} color={COLORS.championshipGold} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surfaceElevated,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 16,
    marginBottom: 16,
  },
  liveCard: {
    borderColor: COLORS.championshipGold,
    backgroundColor: 'rgba(22, 42, 69, 0.95)',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  headerLeft: {
    flex: 1,
    marginRight: 10,
  },
  tournamentName: {
    color: COLORS.championshipGold,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  matchMeta: {
    color: COLORS.textMuted,
    fontSize: 11,
    marginTop: 2,
  },
  teamsSection: {
    marginVertical: 4,
  },
  teamRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
  },
  teamBrand: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teamBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: COLORS.championshipGold,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  teamLetter: {
    color: COLORS.midnightNavy,
    fontSize: 11,
    fontWeight: '800',
  },
  teamName: {
    color: COLORS.textPrimary,
    fontSize: 15,
    fontWeight: '700',
  },
  scoreCol: {
    alignItems: 'flex-end',
  },
  scoreText: {
    color: COLORS.textPrimary,
    fontSize: 18,
    fontWeight: '800',
    fontVariant: ['tabular-nums'],
  },
  oversText: {
    color: COLORS.textMuted,
    fontSize: 13,
    fontWeight: '500',
  },
  yetToBat: {
    color: COLORS.textMuted,
    fontSize: 13,
    fontStyle: 'italic',
  },
  vsText: {
    color: COLORS.border,
    fontSize: 10,
    fontWeight: '800',
    alignSelf: 'center',
    marginVertical: 2,
  },
  situationBox: {
    flexDirection: 'row',
    backgroundColor: COLORS.surface,
    borderRadius: 6,
    padding: 10,
    marginTop: 12,
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.15)',
  },
  metricItem: {
    alignItems: 'center',
  },
  metricLabel: {
    color: COLORS.textMuted,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  metricValue: {
    color: COLORS.championshipGold,
    fontSize: 14,
    fontWeight: '800',
    marginTop: 2,
    fontVariant: ['tabular-nums'],
  },
  resultText: {
    color: COLORS.success,
    fontSize: 12,
    fontWeight: '700',
    marginTop: 10,
    textAlign: 'center',
  },
  ctaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 14,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    gap: 6,
  },
  ctaText: {
    color: COLORS.championshipGold,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.8,
  },
});
