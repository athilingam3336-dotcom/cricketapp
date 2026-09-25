import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Platform } from 'react-native';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenScoringModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onOpenScoringModal }) => {
  const navItems = [
    { id: 'live-matches', label: 'Live Matches' },
    { id: 'tournaments', label: 'Tournaments' },
    { id: 'clubs-teams', label: 'Clubs & Teams' },
    { id: 'points-table', label: 'District Points Table' },
    { id: 'registration', label: 'Player Registration' },
    { id: 'bookings', label: 'Ground Bookings' }
  ];

  return (
    <View style={styles.headerContainer}>
      <View style={styles.innerHeader}>
        {/* Brand Logo */}
        <TouchableOpacity style={styles.brandGroup} onPress={() => setActiveTab('live-matches')}>
          <View style={styles.logoBadge}>
            <Text style={styles.logoBadgeText}>CF</Text>
          </View>
          <View style={styles.brandTitleContainer}>
            <Text style={styles.brandTitle}>CRICKET FEDERATION</Text>
            <Text style={styles.brandSubtitle}>VIRUDHUNAGAR DISTRICT</Text>
          </View>
        </TouchableOpacity>

        {/* Navigation Tabs (Desktop) */}
        <View style={styles.navContainer}>
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <TouchableOpacity
                key={item.id}
                style={[styles.navItem, isActive && styles.activeNavItem]}
                onPress={() => setActiveTab(item.id)}
              >
                <Text style={[styles.navText, isActive && styles.activeNavText]}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Right Section: Search + Score Button + Admin */}
        <View style={styles.rightSection}>
          <View style={styles.searchBox}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="Search fixtures, clubs, players..."
              placeholderTextColor="#77849C"
            />
          </View>

          <TouchableOpacity style={styles.scoreButton} onPress={onOpenScoringModal}>
            <Text style={styles.scoreButtonIcon}>🏏</Text>
            <Text style={styles.scoreButtonText}>Host / Score Match</Text>
          </TouchableOpacity>

          <View style={styles.adminBadge}>
            <View style={styles.adminInfo}>
              <Text style={styles.adminName}>District Admin</Text>
              <Text style={styles.adminRole}>CFVD PANEL</Text>
            </View>
            <View style={styles.avatarCircle}>
              <Text style={styles.avatarInitial}>A</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#0E1C2F',
    borderBottomWidth: 1,
    borderBottomColor: '#1E2D42',
    paddingHorizontal: 20,
    paddingVertical: 12,
    zIndex: 100,
  },
  innerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 1360,
    alignSelf: 'center',
    width: '100%',
    flexWrap: 'wrap',
    gap: 12,
  },
  brandGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  logoBadge: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#FED65B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoBadgeText: {
    color: '#0E1C2F',
    fontWeight: '900',
    fontSize: 18,
    letterSpacing: 0.5,
  },
  brandTitleContainer: {
    justifyContent: 'center',
  },
  brandTitle: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 15,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  brandSubtitle: {
    color: '#FED65B',
    fontWeight: '700',
    fontSize: 10,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  navContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    flexWrap: 'wrap',
  },
  navItem: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
  },
  activeNavItem: {
    backgroundColor: '#1E2D42',
  },
  navText: {
    color: '#94A3B8',
    fontSize: 13,
    fontWeight: '600',
  },
  activeNavText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E2D42',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    width: 200,
  },
  searchIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  searchInput: {
    color: '#FFFFFF',
    fontSize: 12,
    flex: 1,
    padding: 0,
  },
  scoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FED65B',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    gap: 6,
  },
  scoreButtonIcon: {
    fontSize: 14,
  },
  scoreButtonText: {
    color: '#0E1C2F',
    fontWeight: '800',
    fontSize: 13,
  },
  adminBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingLeft: 8,
    borderLeftWidth: 1,
    borderLeftColor: '#1E2D42',
  },
  adminInfo: {
    alignItems: 'flex-end',
  },
  adminName: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  adminRole: {
    color: '#FED65B',
    fontSize: 9,
    fontWeight: '700',
  },
  avatarCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FED65B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInitial: {
    color: '#0E1C2F',
    fontWeight: '800',
    fontSize: 14,
  },
});
