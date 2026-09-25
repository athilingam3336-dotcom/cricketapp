import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ChaseWormWidget: React.FC = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.headerRow}>
        <View style={styles.titleGroup}>
          <Text style={{ fontSize: 16 }}>📈</Text>
          <Text style={styles.cardTitle}>Chase Worm & Momentum</Text>
        </View>
        <View style={styles.legendGroup}>
          <Text style={styles.legendVk}>── VK: 168/5</Text>
          <Text style={styles.legendSs}>- - SS: 174/6</Text>
        </View>
      </View>

      {/* SVG Chart */}
      <View style={styles.chartWrapper}>
        <svg viewBox="0 0 400 160" style={{ width: '100%', height: 160, overflow: 'visible' }}>
          {/* Grid lines */}
          <line x1="30" y1="20" x2="390" y2="20" stroke="#dee8ff" strokeWidth="1" />
          <line x1="30" y1="60" x2="390" y2="60" stroke="#dee8ff" strokeWidth="1" />
          <line x1="30" y1="100" x2="390" y2="100" stroke="#dee8ff" strokeWidth="1" />
          <line x1="30" y1="140" x2="390" y2="140" stroke="#c5c6cd" strokeWidth="1.5" />

          {/* Y-Axis Labels */}
          <text x="22" y="24" textAnchor="end" fill="#75777d" fontSize="8" fontWeight="bold">180</text>
          <text x="22" y="64" textAnchor="end" fill="#75777d" fontSize="8" fontWeight="bold">120</text>
          <text x="22" y="104" textAnchor="end" fill="#75777d" fontSize="8" fontWeight="bold">60</text>
          <text x="22" y="144" textAnchor="end" fill="#75777d" fontSize="8" fontWeight="bold">0</text>

          {/* X-Axis Labels */}
          <text x="30" y="154" textAnchor="middle" fill="#75777d" fontSize="8">0</text>
          <text x="120" y="154" textAnchor="middle" fill="#75777d" fontSize="8">5 ov</text>
          <text x="210" y="154" textAnchor="middle" fill="#75777d" fontSize="8">10 ov</text>
          <text x="300" y="154" textAnchor="middle" fill="#75777d" fontSize="8">15 ov</text>
          <text x="380" y="154" textAnchor="middle" fill="#75777d" fontSize="8">20 ov</text>

          {/* Target Curve (Sivakasi Strikers 174) */}
          <path
            d="M 30,140 Q 75,125 120,110 T 210,78 T 300,50 L 380,26"
            fill="none"
            stroke="#77849c"
            strokeWidth="2"
            strokeDasharray="4,3"
          />

          {/* Chase Curve (Virudhunagar Kings 168 at 19.2) */}
          <path
            d="M 30,140 Q 75,130 120,105 T 210,85 T 300,45 L 370,30"
            fill="none"
            stroke="#735c00"
            strokeWidth="3"
          />

          {/* Wickets */}
          <circle cx="95" cy="118" r="3" fill="#ba1a1a" />
          <circle cx="165" cy="98" r="3" fill="#ba1a1a" />
          <circle cx="230" cy="76" r="3" fill="#ba1a1a" />
          <circle cx="280" cy="55" r="3" fill="#ba1a1a" />
          <circle cx="340" cy="38" r="3" fill="#ba1a1a" />

          {/* Live Beacon */}
          <circle cx="370" cy="30" r="5" fill="#fed65b" stroke="#735c00" strokeWidth="2" />
        </svg>
      </View>

      <View style={styles.footerRow}>
        <View style={styles.wicketLegend}>
          <View style={styles.redDot} />
          <Text style={styles.wicketLegendText}>Red Dots indicate Wickets</Text>
        </View>
        <Text style={styles.parScoreText}>Par Score at 19.2 Ov: 164 (+4 Ahead)</Text>
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
    marginBottom: 8,
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
  legendGroup: {
    flexDirection: 'row',
    gap: 8,
  },
  legendVk: {
    color: '#735C00',
    fontWeight: '700',
    fontSize: 10,
  },
  legendSs: {
    color: '#77849C',
    fontSize: 10,
  },
  chartWrapper: {
    marginTop: 4,
    marginBottom: 8,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  wicketLegend: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  redDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#BA1A1A',
  },
  wicketLegendText: {
    color: '#44474C',
    fontSize: 10,
  },
  parScoreText: {
    color: '#735C00',
    fontWeight: '700',
    fontSize: 10,
  },
});
