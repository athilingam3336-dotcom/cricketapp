import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../theme';
import { NavigationRoute } from '../../types';

interface FooterProps {
  onNavigate: (route: NavigationRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <View style={styles.footerWrapper}>
      <View style={styles.footerInner}>
        {/* Brand & Mission Column */}
        <View style={styles.brandCol}>
          <View style={styles.brandRow}>
            <View style={styles.logoEmblem}>
              <Text style={styles.logoLetter}>R</Text>
            </View>
            <Text style={styles.brandTitle}>REGAL CRICKET</Text>
          </View>
          <Text style={styles.missionText}>
            The official governing body & cricket analytics platform. Measuring every ball, empowering local talent, and raising standard of cricket excellence.
          </Text>
          <Text style={styles.copyrightText}>
            © 2026 Regal Cricket Association. All rights reserved.
          </Text>
        </View>

        {/* Quick Links Column */}
        <View style={styles.linksCol}>
          <Text style={styles.colHeader}>COMPETITIONS</Text>
          <TouchableOpacity onPress={() => onNavigate('LIVE')}>
            <Text style={styles.linkText}>Live Match Centre</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onNavigate('FIXTURES')}>
            <Text style={styles.linkText}>Fixtures Calendar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onNavigate('RESULTS')}>
            <Text style={styles.linkText}>Match Results Archive</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onNavigate('STANDINGS')}>
            <Text style={styles.linkText}>Points Table & Standings</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onNavigate('LEADERBOARDS')}>
            <Text style={styles.linkText}>Player Leaderboards</Text>
          </TouchableOpacity>
        </View>

        {/* Directory Column */}
        <View style={styles.linksCol}>
          <Text style={styles.colHeader}>DIRECTORY</Text>
          <TouchableOpacity onPress={() => onNavigate('PLAYERS')}>
            <Text style={styles.linkText}>State Players</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onNavigate('TEAMS')}>
            <Text style={styles.linkText}>District Teams</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onNavigate('VENUES')}>
            <Text style={styles.linkText}>Stadium Venues</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onNavigate('CLUB_DIRECTORY')}>
            <Text style={styles.linkText}>Clubs & Academies</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onNavigate('SELECTIONS')}>
            <Text style={styles.linkText}>Selection Trials</Text>
          </TouchableOpacity>
        </View>

        {/* Portals & Governance */}
        <View style={styles.linksCol}>
          <Text style={styles.colHeader}>PORTALS</Text>
          <TouchableOpacity onPress={() => onNavigate('SCORER_DASHBOARD')}>
            <Text style={styles.linkText}>Official Scorer Console</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onNavigate('ADMIN')}>
            <Text style={styles.linkText}>Association Admin</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onNavigate('NEWS')}>
            <Text style={styles.linkText}>News & Announcements</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onNavigate('MEDIA')}>
            <Text style={styles.linkText}>Video & Photo Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onNavigate('ABOUT')}>
            <Text style={styles.linkText}>About Regal Cricket</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerWrapper: {
    backgroundColor: COLORS.midnightNavy,
    borderTopWidth: 1,
    borderTopColor: COLORS.slateBorder,
    paddingTop: 40,
    paddingBottom: 60,
    paddingHorizontal: 20,
    marginTop: 40,
  },
  footerInner: {
    maxWidth: 1400,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 30,
  },
  brandCol: {
    flex: 2,
    minWidth: 260,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  logoEmblem: {
    width: 30,
    height: 30,
    borderRadius: 6,
    backgroundColor: COLORS.championshipGold,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  logoLetter: {
    color: COLORS.midnightNavy,
    fontSize: 16,
    fontWeight: '900',
  },
  brandTitle: {
    color: COLORS.warmWhite,
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 1,
  },
  missionText: {
    color: COLORS.slateTextMuted,
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 16,
  },
  copyrightText: {
    color: COLORS.slateTextMuted,
    fontSize: 12,
  },
  linksCol: {
    flex: 1,
    minWidth: 160,
  },
  colHeader: {
    color: COLORS.championshipGold,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 14,
  },
  linkText: {
    color: COLORS.slateTextLight,
    fontSize: 13,
    marginBottom: 10,
  },
});
