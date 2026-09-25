import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

export const WagonWheelWidget: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'ALL' | 'SIXES' | 'FOURS' | 'SINGLES' | 'DOTS'>('ALL');
  const [selectedBatter, setSelectedBatter] = useState<string>('muthu');

  const shotsSixes = [
    { x1: 250, y1: 260, x2: 65, y2: 180 }, // Deep Mid Wicket
    { x1: 250, y1: 260, x2: 190, y2: 28 }, // Straight Long On
    { x1: 250, y1: 260, x2: 350, y2: 40 }, // Extra Cover
  ];

  const shotsFours = [
    { x1: 250, y1: 260, x2: 420, y2: 110 }, // Cover Drive
    { x1: 250, y1: 260, x2: 455, y2: 215 }, // Point Cut
    { x1: 250, y1: 260, x2: 220, y2: 465 }, // Fine Leg
    { x1: 250, y1: 260, x2: 70, y2: 350 },  // Square Leg
    { x1: 250, y1: 260, x2: 265, y2: 28 },  // Straight Drive
  ];

  const shotsSingles = [
    { x1: 250, y1: 260, x2: 310, y2: 170 },
    { x1: 250, y1: 260, x2: 340, y2: 200 },
    { x1: 250, y1: 260, x2: 330, y2: 330 },
    { x1: 250, y1: 260, x2: 360, y2: 280 },
    { x1: 250, y1: 260, x2: 160, y2: 180 },
    { x1: 250, y1: 260, x2: 140, y2: 270 },
    { x1: 250, y1: 260, x2: 170, y2: 340 },
    { x1: 250, y1: 260, x2: 205, y2: 390 },
    { x1: 250, y1: 260, x2: 275, y2: 150 },
    { x1: 250, y1: 260, x2: 225, y2: 140 },
  ];

  const showSixes = selectedFilter === 'ALL' || selectedFilter === 'SIXES';
  const showFours = selectedFilter === 'ALL' || selectedFilter === 'FOURS';
  const showSingles = selectedFilter === 'ALL' || selectedFilter === 'SINGLES';

  return (
    <View style={styles.cardContainer}>
      {/* Header & Filter Controls */}
      <View style={styles.headerRow}>
        <View>
          <View style={styles.titleRow}>
            <Text style={styles.radarIcon}>📡</Text>
            <Text style={styles.cardTitle}>360° Vector Wagon Wheel</Text>
          </View>
          <Text style={styles.cardSubtitle}>Live ball trajectory analysis for S. Muthukumar (64 off 38 balls)</Text>
        </View>

        <View style={styles.batterPicker}>
          <Text style={styles.pickerLabel}>FILTER PLAYER:</Text>
          <View style={styles.pickerBox}>
            <Text style={styles.pickerText}>S. Muthukumar (64*)</Text>
          </View>
        </View>
      </View>

      {/* Trajectory Filters Row */}
      <View style={styles.filterRow}>
        <View style={styles.filterButtonsGroup}>
          <TouchableOpacity
            style={[styles.filterBtn, selectedFilter === 'ALL' && styles.filterBtnActive]}
            onPress={() => setSelectedFilter('ALL')}
          >
            <Text style={[styles.filterBtnText, selectedFilter === 'ALL' && styles.filterBtnTextActive]}>
              All Shots (38)
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.filterBtn, selectedFilter === 'SIXES' && styles.filterBtnActive]}
            onPress={() => setSelectedFilter('SIXES')}
          >
            <View style={[styles.dotLegend, { backgroundColor: '#735C00' }]} />
            <Text style={[styles.filterBtnText, selectedFilter === 'SIXES' && styles.filterBtnTextActive]}>
              6s (3)
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.filterBtn, selectedFilter === 'FOURS' && styles.filterBtnActive]}
            onPress={() => setSelectedFilter('FOURS')}
          >
            <View style={[styles.dotLegend, { backgroundColor: '#0E1C2F' }]} />
            <Text style={[styles.filterBtnText, selectedFilter === 'FOURS' && styles.filterBtnTextActive]}>
              4s (5)
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.filterBtn, selectedFilter === 'SINGLES' && styles.filterBtnActive]}
            onPress={() => setSelectedFilter('SINGLES')}
          >
            <View style={[styles.dotLegend, { backgroundColor: '#75777D' }]} />
            <Text style={[styles.filterBtnText, selectedFilter === 'SINGLES' && styles.filterBtnTextActive]}>
              1s/2s (16)
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.filterBtn, selectedFilter === 'DOTS' && styles.filterBtnActive]}
            onPress={() => setSelectedFilter('DOTS')}
          >
            <Text style={[styles.filterBtnText, selectedFilter === 'DOTS' && styles.filterBtnTextActive]}>
              Dots (14)
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.legendRow}>
          <Text style={styles.legendText}>🟡 Gold = Boundary 6</Text>
          <Text style={styles.legendText}>🔵 Navy = Boundary 4</Text>
        </View>
      </View>

      {/* SVG Field Graphic */}
      <View style={styles.svgWrapper}>
        <svg viewBox="0 0 500 500" style={{ width: '100%', height: '100%', maxHeight: 420 }}>
          {/* Turf background */}
          <circle cx="250" cy="250" r="235" fill="#f0f7f2" />
          <circle cx="250" cy="250" r="225" fill="#e4f2e8" stroke="#111c2d" strokeWidth="1.5" strokeDasharray="4,4" />
          <circle cx="250" cy="250" r="130" fill="#daf0e1" stroke="#525f75" strokeWidth="1" strokeDasharray="2,2" />

          {/* Sector Lines */}
          <g stroke="#b8cfc1" strokeWidth="1">
            <line x1="250" y1="250" x2="250" y2="15" />
            <line x1="250" y1="250" x2="416" y2="84" />
            <line x1="250" y1="250" x2="485" y2="250" />
            <line x1="250" y1="250" x2="416" y2="416" />
            <line x1="250" y1="250" x2="250" y2="485" />
            <line x1="250" y1="250" x2="84" y2="416" />
            <line x1="250" y1="250" x2="15" y2="250" />
            <line x1="250" y1="250" x2="84" y2="84" />
          </g>

          {/* Pitch */}
          <rect x="238" y="215" width="24" height="70" rx="3" fill="#e0cfa5" stroke="#735c00" strokeWidth="1" />
          <line x1="235" y1="230" x2="265" y2="230" stroke="#40000a" strokeWidth="1.5" />
          <line x1="235" y1="270" x2="265" y2="270" stroke="#40000a" strokeWidth="1.5" />
          <circle cx="250" cy="265" r="3" fill="#111c2d" />

          {/* Labels */}
          <text x="250" y="38" textAnchor="middle" fill="#3a475c" fontSize="9" fontWeight="bold">LONG OFF</text>
          <text x="390" y="90" textAnchor="middle" fill="#3a475c" fontSize="9" fontWeight="bold">DEEP COVER</text>
          <text x="465" y="245" textAnchor="middle" fill="#3a475c" fontSize="9" fontWeight="bold">POINT</text>
          <text x="395" y="410" textAnchor="middle" fill="#3a475c" fontSize="9" fontWeight="bold">THIRD MAN</text>
          <text x="250" y="475" textAnchor="middle" fill="#3a475c" fontSize="9" fontWeight="bold">FINE LEG</text>
          <text x="105" y="410" textAnchor="middle" fill="#3a475c" fontSize="9" fontWeight="bold">SQUARE LEG</text>
          <text x="45" y="245" textAnchor="middle" fill="#3a475c" fontSize="9" fontWeight="bold">MID WICKET</text>
          <text x="105" y="90" textAnchor="middle" fill="#3a475c" fontSize="9" fontWeight="bold">LONG ON</text>

          <text x="375" y="255" textAnchor="middle" fill="#77849c" fontSize="10" fontWeight="bold">OFF SIDE</text>
          <text x="125" y="255" textAnchor="middle" fill="#77849c" fontSize="10" fontWeight="bold">LEG SIDE</text>

          {/* Sixes Rays */}
          {showSixes && shotsSixes.map((s, i) => (
            <g key={`6-${i}`}>
              <line x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2} stroke="#735c00" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx={s.x2} cy={s.y2} r="5" fill="#735c00" stroke="#fed65b" strokeWidth="1.5" />
            </g>
          ))}

          {/* Fours Rays */}
          {showFours && shotsFours.map((s, i) => (
            <g key={`4-${i}`}>
              <line x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2} stroke="#0e1c2f" strokeWidth="2" strokeLinecap="round" />
              <circle cx={s.x2} cy={s.y2} r="4" fill="#0e1c2f" />
            </g>
          ))}

          {/* Singles Rays */}
          {showSingles && shotsSingles.map((s, i) => (
            <line key={`1-${i}`} x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2} stroke="#75777d" strokeWidth="1.2" strokeDasharray="3,2" />
          ))}
        </svg>

        {/* Favored stroke badge overlay */}
        <View style={styles.favoredBadge}>
          <Text style={styles.favoredLabel}>FAVORED STROKE</Text>
          <Text style={styles.favoredTitle}>Mid-Wicket Pull (26 runs)</Text>
        </View>
      </View>

      {/* Off vs Leg Split Stats */}
      <View style={styles.splitRow}>
        <View style={styles.splitCard}>
          <View style={[styles.splitBadge, { backgroundColor: '#0E1C2F' }]}>
            <Text style={{ color: '#FFFFFF', fontWeight: '800', fontSize: 13 }}>52%</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.splitLabel}>OFF-SIDE SCORING</Text>
            <Text style={styles.splitRuns}>33 Runs <Text style={styles.splitSub}> (19 Balls)</Text></Text>
            <Text style={styles.splitDetail}>Boundary %: 61% (2x6, 3x4)</Text>
          </View>
        </View>

        <View style={styles.splitCard}>
          <View style={[styles.splitBadge, { backgroundColor: '#735C00' }]}>
            <Text style={{ color: '#FFFFFF', fontWeight: '800', fontSize: 13 }}>48%</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.splitLabel}>LEG-SIDE SCORING</Text>
            <Text style={styles.splitRuns}>31 Runs <Text style={styles.splitSub}> (19 Balls)</Text></Text>
            <Text style={styles.splitDetail}>Boundary %: 58% (1x6, 2x4)</Text>
          </View>
        </View>
      </View>

      {/* Zone Run Leaderboard */}
      <View style={styles.leaderboardContainer}>
        <Text style={styles.leaderboardTitle}>ZONE RUN DISTRIBUTION LEADERBOARD</Text>
        <View style={styles.leaderboardGrid}>
          <View style={styles.zoneBox}>
            <Text style={styles.zoneName}>Deep Mid-Wicket</Text>
            <Text style={styles.zoneRuns}>22</Text>
            <Text style={styles.zoneDetail}>1x6 • 2x4</Text>
          </View>

          <View style={styles.zoneBox}>
            <Text style={styles.zoneName}>Cover Point</Text>
            <Text style={styles.zoneRuns}>18</Text>
            <Text style={styles.zoneDetail}>2x4 • 4x1</Text>
          </View>

          <View style={styles.zoneBox}>
            <Text style={styles.zoneName}>Long Off</Text>
            <Text style={styles.zoneRuns}>14</Text>
            <Text style={styles.zoneDetail}>1x6 • 1x4</Text>
          </View>

          <View style={styles.zoneBox}>
            <Text style={styles.zoneName}>Fine Leg</Text>
            <Text style={styles.zoneRuns}>10</Text>
            <Text style={styles.zoneDetail}>1x4 • 3x2</Text>
          </View>
        </View>
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
    marginBottom: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    flexWrap: 'wrap',
    gap: 8,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  radarIcon: {
    fontSize: 16,
  },
  cardTitle: {
    color: '#111C2D',
    fontWeight: '800',
    fontSize: 18,
  },
  cardSubtitle: {
    color: '#44474C',
    fontSize: 12,
    marginTop: 2,
  },
  batterPicker: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  pickerLabel: {
    color: '#44474C',
    fontSize: 10,
    fontWeight: '700',
  },
  pickerBox: {
    backgroundColor: '#F0F3FF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  pickerText: {
    color: '#111C2D',
    fontSize: 12,
    fontWeight: '600',
  },
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F0F3FF',
    padding: 8,
    borderRadius: 8,
    marginBottom: 14,
    flexWrap: 'wrap',
    gap: 8,
  },
  filterButtonsGroup: {
    flexDirection: 'row',
    gap: 6,
    flexWrap: 'wrap',
  },
  filterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D8E3FB',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    gap: 4,
  },
  filterBtnActive: {
    backgroundColor: '#000000',
  },
  filterBtnText: {
    color: '#111C2D',
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  filterBtnTextActive: {
    color: '#FFFFFF',
  },
  dotLegend: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  legendRow: {
    flexDirection: 'row',
    gap: 12,
  },
  legendText: {
    fontSize: 10,
    color: '#44474C',
    fontWeight: '600',
  },
  svgWrapper: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  favoredBadge: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 8,
    borderRadius: 6,
    borderLeftWidth: 3,
    borderLeftColor: '#735C00',
  },
  favoredLabel: {
    color: '#44474C',
    fontSize: 9,
    fontWeight: '700',
  },
  favoredTitle: {
    color: '#111C2D',
    fontSize: 12,
    fontWeight: '800',
  },
  splitRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 16,
    flexWrap: 'wrap',
  },
  splitCard: {
    flex: 1,
    minWidth: 220,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F3FF',
    padding: 10,
    borderRadius: 8,
    gap: 10,
  },
  splitBadge: {
    width: 38,
    height: 38,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splitLabel: {
    color: '#44474C',
    fontSize: 10,
    fontWeight: '700',
  },
  splitRuns: {
    color: '#111C2D',
    fontWeight: '800',
    fontSize: 14,
  },
  splitSub: {
    color: '#44474C',
    fontSize: 11,
    fontWeight: '400',
  },
  splitDetail: {
    color: '#44474C',
    fontSize: 10,
    marginTop: 2,
  },
  leaderboardContainer: {
    marginTop: 16,
  },
  leaderboardTitle: {
    color: '#44474C',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  leaderboardGrid: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
  },
  zoneBox: {
    flex: 1,
    minWidth: 100,
    backgroundColor: '#F0F3FF',
    padding: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  zoneName: {
    color: '#44474C',
    fontSize: 10,
  },
  zoneRuns: {
    color: '#111C2D',
    fontSize: 16,
    fontWeight: '800',
  },
  zoneDetail: {
    color: '#735C00',
    fontSize: 9,
    fontWeight: '700',
  },
});
