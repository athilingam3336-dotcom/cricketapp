import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

interface BadgeProps {
  label: string;
  variant?: 'live' | 'gold' | 'navy' | 'slate' | 'success';
}

export const Badge: React.FC<BadgeProps> = ({ label, variant = 'navy' }) => {
  const getStyle = () => {
    switch (variant) {
      case 'live':
        return { bg: COLORS.crimson, text: COLORS.warmWhite };
      case 'gold':
        return { bg: COLORS.championshipGoldLight, text: COLORS.championshipGold, border: COLORS.championshipGold };
      case 'success':
        return { bg: COLORS.successLight, text: COLORS.success, border: COLORS.success };
      case 'slate':
        return { bg: COLORS.deepSlate, text: COLORS.slateTextLight };
      default:
        return { bg: COLORS.midnightNavyCard, text: COLORS.championshipGold, border: 'rgba(212, 175, 55, 0.3)' };
    }
  };

  const styleConfig = getStyle();

  return (
    <View
      style={[
        styles.badge,
        { backgroundColor: styleConfig.bg },
        styleConfig.border ? { borderWidth: 1, borderColor: styleConfig.border } : null,
      ]}
    >
      {variant === 'live' && <View style={styles.pulseDot} />}
      <Text style={[styles.badgeText, { color: styleConfig.text }]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  pulseDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.warmWhite,
    marginRight: 6,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
});
