import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface WinPredictorProps {
  teamAPercent?: number;
  teamBPercent?: number;
  teamAName?: string;
  teamBName?: string;
}

export const WinPredictorWidget: React.FC<WinPredictorProps> = ({
  teamAPercent = 46,
  teamBPercent = 54,
  teamAName = 'Sivakasi Strikers',
  teamBName = 'Virudhunagar Kings',
}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.headerRow}>
        <View style={styles.titleGroup}>
          <Text style={styles.icon}>📊</Text>
          <Text style={styles.cardTitle}>CFVD Win Predictor</Text>
        </View>
        <Text style={styles.modelTag}>BALL 19.2 MODEL</Text>
      </View>

      <Text style={styles.subtitle}>
        Real-time calculations factoring required rate, wickets in hand & pitch dew.
      </Text>

      {/* Dual Bar Gauge */}
      <View style={styles.gaugeContainer}>
        <View style={styles.labelsRow}>
          <Text style={styles.teamBText}>
            {teamBName}: <Text style={styles.teamBVal}>{teamBPercent}%</Text>
          </Text>
          <Text style={styles.teamAText}>
            <Text style={styles.teamAVal}>{teamAPercent}%</Text> :{teamAName}
          </Text>
        </View>

        <View style={styles.trackBar}>
          <View style={[styles.teamBFill, { width: `${teamBPercent}%` }]} />
          <View style={[styles.teamAFill, { width: `${teamAPercent}%` }]} />
        </View>

        <View style={styles.subLabelsRow}>
          <Text style={styles.subLeft}>Favored (Muthukumar On Strike)</Text>
          <Text style={styles.subRight}>Needs 1 Wicket / 2 Dot Balls</Text>
        </View>
      </View>

      {/* Over Shift Insight */}
      <View style={styles.insightBox}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, flex: 1 }}>
          <Text style={{ fontSize: 14 }}>💡</Text>
          <Text style={styles.insightText}>
            Kings shifted +8% after Muthukumar's 19.1 boundary
          </Text>
        </View>
        <Text style={styles.insightTag}>OVER SHIFT</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
    marginBottom: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  titleGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  icon: {
    fontSize: 16,
  },
  cardTitle: {
    color: '#111C2D',
    fontWeight: '800',
    fontSize: 16,
  },
  modelTag: {
    color: '#77849C',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  subtitle: {
    color: '#44474C',
    fontSize: 11,
    marginBottom: 12,
  },
  gaugeContainer: {
    marginBottom: 12,
  },
  labelsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  teamBText: {
    color: '#111C2D',
    fontWeight: '700',
    fontSize: 13,
  },
  teamBVal: {
    color: '#735C00',
    fontWeight: '900',
    fontSize: 16,
  },
  teamAText: {
    color: '#44474C',
    fontWeight: '700',
    fontSize: 13,
  },
  teamAVal: {
    color: '#0E1C2F',
    fontWeight: '900',
    fontSize: 16,
  },
  trackBar: {
    height: 12,
    backgroundColor: '#0E1C2F',
    borderRadius: 6,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  teamBFill: {
    height: '100%',
    backgroundColor: '#FED65B',
  },
  teamAFill: {
    height: '100%',
    backgroundColor: '#525F75',
  },
  subLabelsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  subLeft: {
    color: '#77849C',
    fontSize: 9,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  subRight: {
    color: '#77849C',
    fontSize: 9,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  insightBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F0F3FF',
    padding: 10,
    borderRadius: 8,
  },
  insightText: {
    color: '#111C2D',
    fontSize: 11,
    fontWeight: '600',
  },
  insightTag: {
    color: '#77849C',
    fontSize: 9,
    fontWeight: '800',
  },
});
