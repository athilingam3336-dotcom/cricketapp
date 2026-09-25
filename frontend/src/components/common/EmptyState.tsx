import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../theme';

interface EmptyStateProps {
  title?: string;
  message?: string;
  icon?: keyof typeof Ionicons.glyphMap;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No Records Found',
  message = 'There are no active matches or data entries available for this section.',
  icon = 'search-outline',
}) => {
  return (
    <View style={styles.container}>
      <Ionicons name={icon} size={44} color={COLORS.championshipGold} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.midnightNavyCard,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.15)',
    marginVertical: 16,
  },
  title: {
    color: COLORS.warmWhite,
    fontSize: 18,
    fontWeight: '700',
    marginTop: 14,
    marginBottom: 6,
  },
  message: {
    color: COLORS.slateTextMuted,
    fontSize: 14,
    textAlign: 'center',
    maxWidth: 380,
  },
});
