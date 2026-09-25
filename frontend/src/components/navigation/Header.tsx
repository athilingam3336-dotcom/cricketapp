import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../theme';
import { NavigationRoute, UserRole } from '../../types';

interface HeaderProps {
  currentRoute: NavigationRoute;
  onNavigate: (route: NavigationRoute, paramId?: string) => void;
  onOpenSearch: () => void;
  onOpenNotifications: () => void;
  onOpenAuth: () => void;
  onOpenScoringCentre: () => void;
  userRole: UserRole;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onNavigate,
  onOpenSearch,
  onOpenNotifications,
  onOpenAuth,
  onOpenScoringCentre,
  userRole,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mainNavItems: { route: NavigationRoute; label: string }[] = [
    { route: 'HOME', label: 'HOME' },
    { route: 'LIVE', label: 'LIVE' },
    { route: 'MATCHES', label: 'MATCHES' },
    { route: 'TOURNAMENTS', label: 'TOURNAMENTS' },
    { route: 'TEAMS', label: 'TEAMS' },
    { route: 'PLAYERS', label: 'PLAYERS' },
    { route: 'STANDINGS', label: 'STANDINGS' },
    { route: 'LEADERBOARDS', label: 'LEADERBOARDS' },
    { route: 'NEWS', label: 'NEWS' },
    { route: 'MEDIA', label: 'MEDIA' },
    { route: 'ABOUT', label: 'ABOUT' },
  ];

  const secondaryNavItems: { route: NavigationRoute; label: string; icon: keyof typeof Ionicons.glyphMap }[] = [
    { route: 'SELECTIONS', label: 'Selections', icon: 'ribbon-outline' },
    { route: 'VENUES', label: 'Venues', icon: 'location-outline' },
    { route: 'CLUB_DIRECTORY', label: 'Clubs & Districts', icon: 'business-outline' },
    { route: 'ADMIN', label: 'Admin Portal', icon: 'settings-outline' },
  ];

  return (
    <View style={styles.headerWrapper}>
      {/* Top Federation Branding Banner */}
      <View style={styles.topBar}>
        <View style={styles.topBarContent}>
          <View style={styles.topBarLeft}>
            <Text style={styles.topBarTagline}>STATE CRICKET ASSOCIATION • OFFICIAL PLATFORM</Text>
          </View>
          <View style={styles.topBarRight}>
            {(userRole === 'ADMIN' || userRole === 'SCORER') && (
              <TouchableOpacity style={styles.scorerLauncher} onPress={onOpenScoringCentre}>
                <Ionicons name="keypad" size={14} color={COLORS.warmWhite} style={{ marginRight: 6 }} />
                <Text style={styles.scorerLauncherText}>SCORING CENTRE UI</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity style={styles.roleBadgeBtn} onPress={onOpenAuth}>
              <Text style={styles.roleBadgeText}>ROLE: {userRole}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Main Header Container */}
      <View style={styles.mainHeader}>
        <View style={styles.mainHeaderInner}>
          {/* Brand Logo & Name */}
          <TouchableOpacity style={styles.brandContainer} onPress={() => onNavigate('HOME')}>
            <View style={styles.logoEmblem}>
              <Text style={styles.logoLetter}>R</Text>
            </View>
            <View style={styles.brandTextCol}>
              <Text style={styles.brandName}>REGAL CRICKET</Text>
              <Text style={styles.brandSub}>STATE ASSOCIATION & MATCH CENTRE</Text>
            </View>
          </TouchableOpacity>

          {/* Desktop Main Navigation Tabs */}
          <View style={styles.desktopNav}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollNavContent}>
              {mainNavItems.map((item) => {
                const isActive = currentRoute === item.route;
                return (
                  <TouchableOpacity
                    key={item.route}
                    style={[styles.navLink, isActive && styles.navLinkActive]}
                    onPress={() => onNavigate(item.route)}
                  >
                    {item.route === 'LIVE' && <View style={styles.liveIndicatorDot} />}
                    <Text style={[styles.navLinkText, isActive && styles.navLinkTextActive]}>
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>

          {/* Right Action Icons: Search, Notifications, Profile */}
          <View style={styles.rightActions}>
            <TouchableOpacity style={styles.iconBtn} onPress={onOpenSearch} accessibilityLabel="Search">
              <Ionicons name="search-outline" size={20} color={COLORS.warmWhite} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconBtn} onPress={onOpenNotifications} accessibilityLabel="Notifications">
              <Ionicons name="notifications-outline" size={20} color={COLORS.warmWhite} />
              <View style={styles.notifBadgeDot} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconBtn} onPress={onOpenAuth} accessibilityLabel="User Profile">
              <Ionicons name="person-circle-outline" size={24} color={COLORS.championshipGold} />
            </TouchableOpacity>

            {/* Mobile Hamburger Toggle */}
            <TouchableOpacity
              style={styles.mobileHamburgerBtn}
              onPress={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Ionicons name={mobileMenuOpen ? 'close' : 'menu'} size={24} color={COLORS.warmWhite} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <View style={styles.mobileDrawer}>
          <ScrollView style={styles.mobileDrawerScroll}>
            <Text style={styles.drawerGroupTitle}>MAIN NAVIGATION</Text>
            {mainNavItems.map((item) => (
              <TouchableOpacity
                key={item.route}
                style={[styles.mobileNavItem, currentRoute === item.route && styles.mobileNavItemActive]}
                onPress={() => {
                  setMobileMenuOpen(false);
                  onNavigate(item.route);
                }}
              >
                <Text style={[styles.mobileNavText, currentRoute === item.route && styles.mobileNavTextActive]}>
                  {item.label}
                </Text>
                {item.route === 'LIVE' && <View style={styles.liveIndicatorDot} />}
              </TouchableOpacity>
            ))}

            <Text style={[styles.drawerGroupTitle, { marginTop: 16 }]}>ASSOCIATION DIRECTORY</Text>
            {secondaryNavItems.map((item) => (
              <TouchableOpacity
                key={item.route}
                style={styles.mobileNavItem}
                onPress={() => {
                  setMobileMenuOpen(false);
                  onNavigate(item.route);
                }}
              >
                <Ionicons name={item.icon} size={18} color={COLORS.championshipGold} style={{ marginRight: 10 }} />
                <Text style={styles.mobileNavText}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: COLORS.midnightNavy,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.slateBorder,
    zIndex: 100,
  },
  topBar: {
    backgroundColor: COLORS.deepSlate,
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
  },
  topBarContent: {
    maxWidth: 1400,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topBarTagline: {
    color: COLORS.slateTextMuted,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
  },
  topBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  scorerLauncher: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.crimson,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 4,
  },
  scorerLauncherText: {
    color: COLORS.warmWhite,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  roleBadgeBtn: {
    backgroundColor: 'rgba(212, 175, 55, 0.15)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.3)',
  },
  roleBadgeText: {
    color: COLORS.championshipGold,
    fontSize: 10,
    fontWeight: '700',
  },
  mainHeader: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  mainHeaderInner: {
    maxWidth: 1400,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoEmblem: {
    width: 38,
    height: 38,
    borderRadius: 8,
    backgroundColor: COLORS.championshipGold,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    shadowColor: COLORS.championshipGold,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  logoLetter: {
    color: COLORS.midnightNavy,
    fontSize: 22,
    fontWeight: '900',
    fontFamily: Platform.OS === 'web' ? 'Space Grotesk' : undefined,
  },
  brandTextCol: {
    justifyContent: 'center',
  },
  brandName: {
    color: COLORS.warmWhite,
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 0.8,
    fontFamily: Platform.OS === 'web' ? 'Space Grotesk' : undefined,
  },
  brandSub: {
    color: COLORS.championshipGold,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.2,
  },
  desktopNav: {
    flex: 1,
    marginHorizontal: 20,
  },
  scrollNavContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  navLink: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 6,
  },
  navLinkActive: {
    backgroundColor: 'rgba(212, 175, 55, 0.12)',
    borderBottomWidth: 2,
    borderBottomColor: COLORS.championshipGold,
  },
  navLinkText: {
    color: COLORS.slateTextLight,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  navLinkTextActive: {
    color: COLORS.championshipGold,
  },
  liveIndicatorDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.crimsonBright,
    marginRight: 6,
  },
  rightActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.deepSlate,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  notifBadgeDot: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.crimsonBright,
  },
  mobileHamburgerBtn: {
    padding: 6,
    marginLeft: 4,
  },
  mobileDrawer: {
    backgroundColor: COLORS.midnightNavyCard,
    borderTopWidth: 1,
    borderTopColor: COLORS.slateBorder,
    maxHeight: 400,
  },
  mobileDrawerScroll: {
    padding: 16,
  },
  drawerGroupTitle: {
    color: COLORS.championshipGold,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 8,
  },
  mobileNavItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 6,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
  },
  mobileNavItemActive: {
    backgroundColor: 'rgba(212, 175, 55, 0.15)',
  },
  mobileNavText: {
    color: COLORS.warmWhite,
    fontSize: 14,
    fontWeight: '600',
  },
  mobileNavTextActive: {
    color: COLORS.championshipGold,
    fontWeight: '700',
  },
});
