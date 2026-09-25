import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const H2HBattleWidget: React.FC = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.headerRow}>
        <View style={styles.titleGroup}>
          <Text style={{ fontSize: 16 }}>🤼</Text>
          <Text style={styles.cardTitle}>Live Key Battle</Text>
        </View>
        <Text style={styles.h2hTag}>H2H CAREER</Text>
      </View>

      <View style={styles.profilesGrid}>
        {/* Batter */}
        <View style={styles.profileBox}>
          <View style={styles.avatarRow}>
            <View style={[styles.initialCircle, { backgroundColor: '#0E1C2F' }]}>
              <Text style={{ color: '#FFFFFF', fontWeight: '800', fontSize: 11 }}>SM</Text>
            </View>
            <View>
              <Text style={styles.nameText}>Muthukumar</Text>
              <Text style={styles.subText}>Right Hand Bat</Text>
            </View>
          </View>
          <View style={styles.statList}>
            <View style={styles.statRow}>
              <Text style={styles.statLabel}>vs Medium Pace:</Text>
              <Text style={styles.statValue}>SR 174.2</Text>
            </View>
            <View style={styles.statRow}>
              <Text style={styles.statLabel}>Death Overs (16-20):</Text>
              <Text style={styles.statValue}>224 Runs (128b)</Text>
            </View>
            <View style={styles.statRow}>
              <Text style={styles.statLabel}>Dismissals:</Text>
              <Text style={[styles.statValue, { color: '#735C00' }]}>Once in 2024</Text>
            </View>
          </View>
        </View>

        {/* Bowler */}
        <View style={styles.profileBox}>
          <View style={styles.avatarRow}>
            <View style={[styles.initialCircle, { backgroundColor: '#FED65B' }]}>
              <Text style={{ color: '#745C00', fontWeight: '800', fontSize: 11 }}>KV</Text>
            </View>
            <View>
              <Text style={styles.nameText}>Vetrivel</Text>
              <Text style={styles.subText}>Death Bowler</Text>
            </View>
          </View>
          <View style={styles.statList}>
            <View style={styles.statRow}>
              <Text style={styles.statLabel}>Yorker Accuracy:</Text>
              <Text style={styles.statValue}>68%</Text>
            </View>
            <View style={styles.statRow}>
              <Text style={styles.statLabel}>20th Over Econ:</Text>
              <Text style={styles.statValue}>8.40 RPO</Text>
            </View>
            <View style={styles.statRow}>
              <Text style={styles.statLabel}>Dots Bowled Today:</Text>
              <Text style={[styles.statValue, { color: '#0E1C2F' }]}>8 Dots</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.recordBox}>
        <Text style={styles.recordText}>Matchup Record: 14 Balls • 28 Runs • 1 Wicket</Text>
        <Text style={styles.dotPctText}>DOT BALL %: 28%</Text>
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
    marginBottom: 12,
  },
  titleGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  cardTitle: {
    color: '#111C2D',
    fontWeight: '800',
    fontSize: 16,
  },
  h2hTag: {
    color: '#77849C',
    fontSize: 9,
    fontWeight: '800',
  },
  profilesGrid: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  profileBox: {
    flex: 1,
    minWidth: 140,
    backgroundColor: '#F0F3FF',
    padding: 10,
    borderRadius: 8,
  },
  avatarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  initialCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameText: {
    color: '#111C2D',
    fontWeight: '700',
    fontSize: 12,
  },
  subText: {
    color: '#44474C',
    fontSize: 9,
  },
  statList: {
    gap: 4,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statLabel: {
    color: '#44474C',
    fontSize: 10,
  },
  statValue: {
    color: '#111C2D',
    fontWeight: '700',
    fontSize: 10,
  },
  recordBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(254, 214, 91, 0.2)',
    padding: 8,
    borderRadius: 6,
  },
  recordText: {
    color: '#111C2D',
    fontSize: 11,
    fontWeight: '600',
  },
  dotPctText: {
    color: '#735C00',
    fontWeight: '800',
    fontSize: 10,
  },
});
