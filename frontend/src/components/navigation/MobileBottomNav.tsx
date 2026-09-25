import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../theme';
import { NavigationRoute } from '../../types';

interface MobileBottomNavProps {
  currentRoute: NavigationRoute;
  onNavigate: (route: NavigationRoute) => void;
  onOpenMore: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ currentRoute, onNavigate, onOpenMore }) => {
  const items: { route: NavigationRoute; label: string; icon: keyof typeof Ionicons.glyphMap }[] = [
    { route: 'HOME', label: 'Home', icon: 'home-outline' },
    { route: 'LIVE', label: 'Live', icon: 'radio-outline' },
    { route: 'MATCHES', label: 'Matches', icon: 'trophy-outline' },
    { route: 'PLAYERS', label: 'Players', icon: 'people-outline' },
  ];

  return (
    <View style={styles.barContainer}>
      {items.map((item) => {
        const isActive = currentRoute === item.route;
        return (
          <TouchableOpacity
            key={item.route}
            style={styles.navBtn}
            onPress={() => onNavigate(item.route)}
          >
            <Ionicons
              name={item.icon}
              size={20}
              color={isActive ? COLORS.championshipGold : COLORS.slateTextMuted}
            />
            <Text style={[styles.navLabel, isActive && styles.navLabelActive]}>{item.label}</Text>
          </TouchableOpacity>
        );
      })}

      <TouchableOpacity style={styles.navBtn} onPress={onOpenMore}>
        <Ionicons name="grid-outline" size={20} color={COLORS.slateTextMuted} />
        <Text style={styles.navLabel}>More</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  barContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.midnightNavy,
    borderTopWidth: 1,
    borderTopColor: COLORS.slateBorder,
    paddingVertical: 8,
    paddingBottom: 16,
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 90,
  },
  navBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  navLabel: {
    color: COLORS.slateTextMuted,
    fontSize: 10,
    fontWeight: '600',
    marginTop: 4,
  },
  navLabelActive: {
    color: COLORS.championshipGold,
    fontWeight: '700',
  },
});
