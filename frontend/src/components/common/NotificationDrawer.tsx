import React from 'react';
import { View, Text, Modal, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../theme';
import { MOCK_NOTIFICATIONS } from '../../mock/mockData';
import { NotificationItem } from '../../types';

interface NotificationDrawerProps {
  visible: boolean;
  onClose: () => void;
}

export const NotificationDrawer: React.FC<NotificationDrawerProps> = ({ visible, onClose }) => {
  const [notifications, setNotifications] = React.useState<NotificationItem[]>(MOCK_NOTIFICATIONS);

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  return (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.drawerContainer}>
          <View style={styles.header}>
            <View style={styles.headerTitleRow}>
              <Ionicons name="notifications-outline" size={20} color={COLORS.championshipGold} style={{ marginRight: 8 }} />
              <Text style={styles.headerTitle}>Match & News Alerts</Text>
            </View>
            <View style={styles.headerActions}>
              <TouchableOpacity onPress={markAllRead} style={styles.markReadBtn}>
                <Text style={styles.markReadText}>Mark all as read</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
                <Ionicons name="close" size={22} color={COLORS.slateTextLight} />
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView style={styles.list}>
            {notifications.map((item) => (
              <View key={item.id} style={[styles.itemCard, !item.read && styles.unreadCard]}>
                <View style={styles.itemHeader}>
                  <Text style={[styles.typeBadge, item.type === 'WICKET' ? styles.wicketBadge : styles.normalBadge]}>
                    {item.type}
                  </Text>
                  <Text style={styles.timeText}>{item.time}</Text>
                </View>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemMessage}>{item.message}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(11, 25, 44, 0.75)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  drawerContainer: {
    width: '100%',
    maxWidth: 380,
    height: '100%',
    backgroundColor: COLORS.midnightNavyCard,
    borderLeftWidth: 1,
    borderLeftColor: COLORS.slateBorder,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.slateBorder,
    backgroundColor: COLORS.midnightNavy,
  },
  headerTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: COLORS.warmWhite,
    fontSize: 16,
    fontWeight: '700',
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  markReadBtn: {
    paddingVertical: 2,
  },
  markReadText: {
    color: COLORS.championshipGold,
    fontSize: 12,
  },
  closeBtn: {
    padding: 4,
  },
  list: {
    padding: 16,
  },
  itemCard: {
    backgroundColor: COLORS.deepSlate,
    borderRadius: 8,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.slateBorder,
  },
  unreadCard: {
    borderColor: COLORS.championshipGold,
    backgroundColor: 'rgba(212, 175, 55, 0.05)',
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  typeBadge: {
    fontSize: 10,
    fontWeight: '700',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    overflow: 'hidden',
  },
  normalBadge: {
    backgroundColor: COLORS.championshipGoldLight,
    color: COLORS.championshipGold,
  },
  wicketBadge: {
    backgroundColor: COLORS.crimsonLight,
    color: COLORS.crimsonBright,
  },
  timeText: {
    color: COLORS.slateTextMuted,
    fontSize: 11,
  },
  itemTitle: {
    color: COLORS.warmWhite,
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 4,
  },
  itemMessage: {
    color: COLORS.slateTextMuted,
    fontSize: 13,
    lineHeight: 18,
  },
});
