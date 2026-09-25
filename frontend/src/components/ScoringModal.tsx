import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput, ScrollView } from 'react-native';

interface ScoringModalProps {
  visible: boolean;
  onClose: () => void;
  onUpdateScore: (ballRun: number, isWicket?: boolean) => void;
}

export const ScoringModal: React.FC<ScoringModalProps> = ({ visible, onClose, onUpdateScore }) => {
  const [matchTitle, setMatchTitle] = useState('Virudhunagar Kings vs Sivakasi Strikers');
  const [runsAdded, setRunsAdded] = useState<number[]>([]);

  const handleScoreBtn = (val: number, isWicket = false) => {
    onUpdateScore(val, isWicket);
    setRunsAdded((prev) => [...prev, val]);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {/* Header */}
          <View style={styles.modalHeader}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <Text style={{ fontSize: 20 }}>🏏</Text>
              <View>
                <Text style={styles.modalTitle}>Live Scorekeeper Console</Text>
                <Text style={styles.modalSub}>{matchTitle}</Text>
              </View>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Text style={{ color: '#FFFFFF', fontWeight: '800', fontSize: 16 }}>✕</Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={{ padding: 16 }}>
            {/* Quick Scoring Buttons */}
            <Text style={styles.sectionTitle}>BALL CONTROL PANEL (OVER 20)</Text>
            <View style={styles.buttonsGrid}>
              <TouchableOpacity style={styles.scorePadBtn} onPress={() => handleScoreBtn(0)}>
                <Text style={styles.scorePadText}>0 (Dot)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.scorePadBtn} onPress={() => handleScoreBtn(1)}>
                <Text style={styles.scorePadText}>1 Run</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.scorePadBtn} onPress={() => handleScoreBtn(2)}>
                <Text style={styles.scorePadText}>2 Runs</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.scorePadBtn} onPress={() => handleScoreBtn(3)}>
                <Text style={styles.scorePadText}>3 Runs</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.scorePadBtn, styles.fourBtn]} onPress={() => handleScoreBtn(4)}>
                <Text style={[styles.scorePadText, styles.fourText]}>4 (FOUR)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.scorePadBtn, styles.sixBtn]} onPress={() => handleScoreBtn(6)}>
                <Text style={[styles.scorePadText, styles.sixText]}>6 (SIX)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.scorePadBtn, styles.wicketBtn]} onPress={() => handleScoreBtn(0, true)}>
                <Text style={[styles.scorePadText, styles.wicketText]}>OUT (Wicket)</Text>
              </TouchableOpacity>
            </View>

            {/* Extras */}
            <Text style={[styles.sectionTitle, { marginTop: 16 }]}>EXTRAS & DISMISSALS</Text>
            <View style={styles.extrasRow}>
              <TouchableOpacity style={styles.extraBtn} onPress={() => handleScoreBtn(1)}>
                <Text style={styles.extraText}>Wide (+1)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.extraBtn} onPress={() => handleScoreBtn(1)}>
                <Text style={styles.extraText}>No Ball (+1)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.extraBtn} onPress={() => handleScoreBtn(1)}>
                <Text style={styles.extraText}>Leg Bye (+1)</Text>
              </TouchableOpacity>
            </View>

            {/* Added runs trail */}
            {runsAdded.length > 0 && (
              <View style={styles.trailBox}>
                <Text style={styles.trailLabel}>Balls Recorded in this session:</Text>
                <View style={styles.trailRow}>
                  {runsAdded.map((r, i) => (
                    <View key={i} style={styles.trailDot}>
                      <Text style={styles.trailDotText}>{r}</Text>
                    </View>
                  ))}
                </View>
              </View>
            )}
          </ScrollView>

          <View style={styles.modalFooter}>
            <TouchableOpacity style={styles.doneBtn} onPress={onClose}>
              <Text style={styles.doneBtnText}>Close & Return to Match Dashboard</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  modalContent: {
    backgroundColor: '#0E1C2F',
    borderRadius: 12,
    width: '100%',
    maxWidth: 600,
    maxHeight: '90%',
    overflow: 'hidden',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1E2D42',
  },
  modalTitle: {
    color: '#FED65B',
    fontWeight: '800',
    fontSize: 16,
  },
  modalSub: {
    color: '#BAC7E1',
    fontSize: 12,
  },
  closeBtn: {
    padding: 8,
  },
  sectionTitle: {
    color: '#77849C',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  buttonsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  scorePadBtn: {
    flex: 1,
    minWidth: 110,
    backgroundColor: '#1E2D42',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scorePadText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 14,
  },
  fourBtn: {
    backgroundColor: '#FED65B',
  },
  fourText: {
    color: '#745C00',
  },
  sixBtn: {
    backgroundColor: '#735C00',
  },
  sixText: {
    color: '#FFFFFF',
  },
  wicketBtn: {
    backgroundColor: '#BA1A1A',
  },
  wicketText: {
    color: '#FFFFFF',
  },
  extrasRow: {
    flexDirection: 'row',
    gap: 8,
  },
  extraBtn: {
    flex: 1,
    backgroundColor: '#1E2D42',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  extraText: {
    color: '#BAC7E1',
    fontSize: 12,
    fontWeight: '700',
  },
  trailBox: {
    marginTop: 16,
    backgroundColor: '#111C2D',
    padding: 12,
    borderRadius: 8,
  },
  trailLabel: {
    color: '#77849C',
    fontSize: 11,
    marginBottom: 6,
  },
  trailRow: {
    flexDirection: 'row',
    gap: 6,
    flexWrap: 'wrap',
  },
  trailDot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FED65B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  trailDotText: {
    color: '#0E1C2F',
    fontWeight: '800',
    fontSize: 12,
  },
  modalFooter: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#1E2D42',
  },
  doneBtn: {
    backgroundColor: '#FED65B',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  doneBtnText: {
    color: '#0E1C2F',
    fontWeight: '800',
    fontSize: 14,
  },
});
