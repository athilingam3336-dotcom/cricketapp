import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../theme';

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  message = 'Failed to load data. Please check connection and retry.',
  onRetry,
}) => {
  return (
    <View style={styles.container}>
      <Ionicons name="alert-circle-outline" size={48} color={COLORS.crimsonBright} />
      <Text style={styles.title}>Something Went Wrong</Text>
      <Text style={styles.message}>{message}</Text>
      {onRetry && (
        <TouchableOpacity style={styles.button} onPress={onRetry}>
          <Ionicons name="refresh-outline" size={18} color={COLORS.warmWhite} style={{ marginRight: 6 }} />
          <Text style={styles.buttonText}>Retry Action</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.midnightNavyCard,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.slateBorder,
    marginVertical: 16,
  },
  title: {
    color: COLORS.warmWhite,
    fontSize: 18,
    fontWeight: '700',
    marginTop: 12,
    marginBottom: 6,
  },
  message: {
    color: COLORS.slateTextMuted,
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    maxWidth: 400,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.crimson,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: COLORS.warmWhite,
    fontWeight: '600',
    fontSize: 14,
  },
});
