import React, { useState } from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../theme';
import { NavigationRoute } from '../../types';
import { MOCK_PLAYERS, MOCK_TEAMS, MOCK_MATCHES, MOCK_TOURNAMENTS, MOCK_NEWS, MOCK_VENUES } from '../../mock/mockData';

interface GlobalSearchModalProps {
  visible: boolean;
  onClose: () => void;
  onNavigate: (route: NavigationRoute, paramId?: string) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({ visible, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');

  const filteredPlayers = query
    ? MOCK_PLAYERS.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()) || p.teamName.toLowerCase().includes(query.toLowerCase()))
    : [];

  const filteredTeams = query
    ? MOCK_TEAMS.filter((t) => t.name.toLowerCase().includes(query.toLowerCase()) || t.district.toLowerCase().includes(query.toLowerCase()))
    : [];

  const filteredMatches = query
    ? MOCK_MATCHES.filter((m) => m.title.toLowerCase().includes(query.toLowerCase()) || m.teamA.name.toLowerCase().includes(query.toLowerCase()) || m.teamB.name.toLowerCase().includes(query.toLowerCase()))
    : [];

  const filteredTournaments = query
    ? MOCK_TOURNAMENTS.filter((t) => t.name.toLowerCase().includes(query.toLowerCase()))
    : [];

  const filteredNews = query
    ? MOCK_NEWS.filter((n) => n.title.toLowerCase().includes(query.toLowerCase()))
    : [];

  const filteredVenues = query
    ? MOCK_VENUES.filter((v) => v.name.toLowerCase().includes(query.toLowerCase()) || v.location.toLowerCase().includes(query.toLowerCase()))
    : [];

  const hasResults = query.trim().length > 0 && (
    filteredPlayers.length > 0 ||
    filteredTeams.length > 0 ||
    filteredMatches.length > 0 ||
    filteredTournaments.length > 0 ||
    filteredNews.length > 0 ||
    filteredVenues.length > 0
  );

  return (
    <Modal visible={visible} animationType="fade" transparent onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          {/* Search Bar */}
          <View style={styles.searchHeader}>
            <Ionicons name="search" size={22} color={COLORS.championshipGold} style={{ marginRight: 10 }} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search players, teams, matches, news, venues..."
              placeholderTextColor={COLORS.slateTextMuted}
              value={query}
              onChangeText={setQuery}
              autoFocus
            />
            {query ? (
              <TouchableOpacity onPress={() => setQuery('')} style={{ padding: 4 }}>
                <Ionicons name="close-circle" size={20} color={COLORS.slateTextMuted} />
              </TouchableOpacity>
            ) : null}
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Text style={styles.closeBtnText}>ESC</Text>
            </TouchableOpacity>
          </View>

          {/* Results Area */}
          <ScrollView style={styles.resultsContainer} keyboardShouldPersistTaps="handled">
            {!query.trim() && (
              <View style={styles.suggestionContainer}>
                <Text style={styles.suggestionTitle}>POPULAR SEARCHES</Text>
                <View style={styles.tagRow}>
                  {['Arun Kumar', 'Tamil Titans', 'State Championship', 'Chepauk Stadium', 'U19 Trials'].map((tag) => (
                    <TouchableOpacity
                      key={tag}
                      style={styles.tag}
                      onPress={() => setQuery(tag)}
                    >
                      <Text style={styles.tagText}>{tag}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            )}

            {query.trim().length > 0 && !hasResults && (
              <Text style={styles.noResultsText}>No records found matching "{query}"</Text>
            )}

            {/* Players */}
            {filteredPlayers.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>PLAYERS</Text>
                {filteredPlayers.map((p) => (
                  <TouchableOpacity
                    key={p.id}
                    style={styles.resultItem}
                    onPress={() => {
                      onClose();
                      onNavigate('PLAYER_DETAIL', p.id);
                    }}
                  >
                    <Ionicons name="person" size={18} color={COLORS.championshipGold} style={styles.itemIcon} />
                    <View style={{ flex: 1 }}>
                      <Text style={styles.itemTitle}>{p.name}</Text>
                      <Text style={styles.itemSub}>{p.role} • {p.teamName}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            {/* Teams */}
            {filteredTeams.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>TEAMS</Text>
                {filteredTeams.map((t) => (
                  <TouchableOpacity
                    key={t.id}
                    style={styles.resultItem}
                    onPress={() => {
                      onClose();
                      onNavigate('TEAM_DETAIL', t.id);
                    }}
                  >
                    <Ionicons name="shield-checkmark" size={18} color={COLORS.championshipGold} style={styles.itemIcon} />
                    <View style={{ flex: 1 }}>
                      <Text style={styles.itemTitle}>{t.name} ({t.shortName})</Text>
                      <Text style={styles.itemSub}>{t.district} District • {t.category}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            {/* Matches */}
            {filteredMatches.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>MATCHES</Text>
                {filteredMatches.map((m) => (
                  <TouchableOpacity
                    key={m.id}
                    style={styles.resultItem}
                    onPress={() => {
                      onClose();
                      onNavigate('MATCH_CENTRE', m.id);
                    }}
                  >
                    <Ionicons name="trophy" size={18} color={COLORS.crimsonBright} style={styles.itemIcon} />
                    <View style={{ flex: 1 }}>
                      <Text style={styles.itemTitle}>{m.teamA.name} vs {m.teamB.name}</Text>
                      <Text style={styles.itemSub}>{m.tournamentName} • {m.venue}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            {/* Tournaments */}
            {filteredTournaments.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>TOURNAMENTS</Text>
                {filteredTournaments.map((t) => (
                  <TouchableOpacity
                    key={t.id}
                    style={styles.resultItem}
                    onPress={() => {
                      onClose();
                      onNavigate('TOURNAMENT_DETAIL', t.id);
                    }}
                  >
                    <Ionicons name="ribbon" size={18} color={COLORS.championshipGold} style={styles.itemIcon} />
                    <View style={{ flex: 1 }}>
                      <Text style={styles.itemTitle}>{t.name}</Text>
                      <Text style={styles.itemSub}>{t.category} • {t.season}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(11, 25, 44, 0.85)',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 80,
    paddingHorizontal: 16,
  },
  modalContent: {
    width: '100%',
    maxWidth: 680,
    backgroundColor: COLORS.midnightNavyCard,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.slateBorder,
    overflow: 'hidden',
    maxHeight: '75%',
  },
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.slateBorder,
    backgroundColor: COLORS.midnightNavy,
  },
  searchInput: {
    flex: 1,
    color: COLORS.warmWhite,
    fontSize: 16,
    paddingVertical: 4,
  },
  closeBtn: {
    backgroundColor: COLORS.deepSlate,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginLeft: 8,
  },
  closeBtnText: {
    color: COLORS.slateTextMuted,
    fontSize: 11,
    fontWeight: '700',
  },
  resultsContainer: {
    padding: 16,
  },
  suggestionContainer: {
    paddingVertical: 10,
  },
  suggestionTitle: {
    color: COLORS.championshipGold,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 10,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: COLORS.deepSlate,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.slateBorder,
  },
  tagText: {
    color: COLORS.warmWhite,
    fontSize: 13,
  },
  noResultsText: {
    color: COLORS.slateTextMuted,
    textAlign: 'center',
    marginVertical: 20,
  },
  section: {
    marginBottom: 18,
  },
  sectionTitle: {
    color: COLORS.championshipGold,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 8,
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: COLORS.deepSlate,
    marginBottom: 6,
  },
  itemIcon: {
    marginRight: 12,
  },
  itemTitle: {
    color: COLORS.warmWhite,
    fontSize: 14,
    fontWeight: '600',
  },
  itemSub: {
    color: COLORS.slateTextMuted,
    fontSize: 12,
    marginTop: 2,
  },
});
