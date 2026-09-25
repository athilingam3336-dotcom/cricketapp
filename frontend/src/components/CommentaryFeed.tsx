import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../theme';
import { CommentaryBall } from '../types';
import { matchService } from '../services/matchService';
import { LoadingSkeleton } from './common/LoadingSkeleton';

interface CommentaryFeedProps {
  matchId?: string;
}

export const CommentaryFeed: React.FC<CommentaryFeedProps> = ({ matchId }) => {
  const items = [
    {
      over: '19.2',
      runs: '2',
      badge: '2 Runs',
      badgeType: 'normal',
      title: 'K. Vetrivel to S. Muthukumar',
      sub: 'Pushed to Deep Cover',
      desc: 'Fuller length outside off stump, Muthukumar carves it cleanly through deep extra cover. Terrific hustle from the non-striker to make the second run safely! Virudhunagar Kings now require just 7 off 4.',
    },
    {
      over: '19.1',
      runs: '4',
      badge: 'Boundary FOUR',
      badgeType: 'boundary',
      title: 'K. Vetrivel to S. Muthukumar',
      sub: 'Square Cut Precision',
      desc: 'FOUR! Sensational execution! Short and wide outside off, Muthukumar rises on his toes and flays it hard past backward point. The fielder in the deep dives but the lightning outfield wins. The crowd at Sivakasi goes wild!',
    },
    {
      over: '18.6',
      runs: '1',
      badge: 'Single',
      badgeType: 'normal',
      title: 'M. Vignesh to R. Anandhan',
      sub: 'Safe Single',
      desc: 'Yorker aimed right at the base of leg stump, dug out safely toward mid-on. Retains the strike for Muthukumar to face the historic final over.',
    },
  ];

  return (
    <View style={styles.cardContainer}>
      {/* Header */}
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.cardTitle}>Over 20 Breakdown & Commentary Feed</Text>
          <Text style={styles.cardSubtitle}>Official scorer log certified by CFVD Technical Panel</Text>
        </View>

        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.pdfBtn}>
            <Text style={{ fontSize: 12 }}>📥</Text>
            <Text style={styles.pdfBtnText}>Full Scorecard PDF</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.syncBtn}>
            <Text style={{ fontSize: 12 }}>🔄</Text>
            <Text style={styles.syncBtnText}>Live Stream Sync</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Commentary Cards */}
      <View style={styles.listContainer}>
        {items.map((item, index) => {
          const isBoundary = item.badgeType === 'boundary';
          return (
            <View
              key={index}
              style={[styles.itemCard, isBoundary && styles.boundaryItemCard]}
            >
              <View style={[styles.runBox, isBoundary && styles.boundaryRunBox]}>
                <Text style={[styles.runText, isBoundary && styles.boundaryRunText]}>{item.runs}</Text>
                <Text style={[styles.overText, isBoundary && styles.boundaryOverText]}>{item.over}</Text>
              </View>

              <View style={{ flex: 1 }}>
                <View style={styles.titleRow}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <View style={[styles.badgeTag, isBoundary && styles.boundaryBadgeTag]}>
                    <Text style={[styles.badgeText, isBoundary && styles.boundaryBadgeText]}>{item.badge}</Text>
                  </View>
                  <Text style={styles.itemSub}>{item.sub}</Text>
                </View>
                <Text style={styles.itemDesc}>{item.desc}</Text>
              </View>
            </View>
          );
        })}
      </View>

      {/* Official Note */}
      <View style={styles.officialFooter}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
          <Text style={{ fontSize: 14 }}>🛡️</Text>
          <Text style={styles.officialText}>
            Match Referee: Thiru P. Shanmugam (TNCA Panel) • Umpires: R. Selvam & K. Balaji
          </Text>
        </View>
        <Text style={styles.syncText}>Official Live Feed Sync • CFVD MatchCenter v4.8</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
    marginTop: 10,
    marginBottom: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    flexWrap: 'wrap',
    gap: 12,
  },
  cardTitle: {
    color: '#111C2D',
    fontWeight: '800',
    fontSize: 20,
  },
  cardSubtitle: {
    color: '#44474C',
    fontSize: 12,
    marginTop: 2,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 8,
  },
  pdfBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E7EEFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    gap: 4,
  },
  pdfBtnText: {
    color: '#111C2D',
    fontSize: 12,
    fontWeight: '700',
  },
  syncBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0E1C2F',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    gap: 4,
  },
  syncBtnText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  listContainer: {
    gap: 12,
  },
  itemCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#F0F3FF',
    padding: 12,
    borderRadius: 8,
    gap: 12,
  },
  boundaryItemCard: {
    backgroundColor: 'rgba(254, 214, 91, 0.25)',
  },
  runBox: {
    width: 44,
    height: 44,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boundaryRunBox: {
    backgroundColor: '#FED65B',
  },
  runText: {
    color: '#111C2D',
    fontWeight: '800',
    fontSize: 18,
  },
  boundaryRunText: {
    color: '#745C00',
  },
  overText: {
    color: '#77849C',
    fontSize: 9,
    fontWeight: '700',
    marginTop: -2,
  },
  boundaryOverText: {
    color: '#745C00',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flexWrap: 'wrap',
  },
  itemTitle: {
    color: '#111C2D',
    fontWeight: '700',
    fontSize: 13,
  },
  badgeTag: {
    backgroundColor: '#D8E3FB',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  boundaryBadgeTag: {
    backgroundColor: '#FED65B',
  },
  badgeText: {
    color: '#111C2D',
    fontSize: 10,
    fontWeight: '800',
  },
  boundaryBadgeText: {
    color: '#745C00',
  },
  itemSub: {
    color: '#44474C',
    fontSize: 11,
  },
  itemDesc: {
    color: '#44474C',
    fontSize: 13,
    marginTop: 4,
    lineHeight: 18,
  },
  officialFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#E7EEFF',
    flexWrap: 'wrap',
    gap: 8,
  },
  officialText: {
    color: '#44474C',
    fontSize: 12,
  },
  syncText: {
    color: '#735C00',
    fontWeight: '800',
    fontSize: 10,
    textTransform: 'uppercase',
  },
});
