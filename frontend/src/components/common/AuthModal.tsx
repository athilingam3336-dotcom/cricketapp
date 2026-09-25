import React, { useState } from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../theme';
import { UserRole } from '../../types';

interface AuthModalProps {
  visible: boolean;
  onClose: () => void;
  currentRole: UserRole;
  onRoleChange: (role: UserRole) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ visible, onClose, currentRole, onRoleChange }) => {
  const [mode, setMode] = useState<'LOGIN' | 'REGISTER' | 'FORGOT'>('LOGIN');
  const [email, setEmail] = useState('admin@regalcricket.org');
  const [password, setPassword] = useState('••••••••');

  const roles: { role: UserRole; label: string; desc: string }[] = [
    { role: 'ADMIN', label: 'Association Admin', desc: 'Full access to state matches, tournament creation & content.' },
    { role: 'SCORER', label: 'Official Scorer', desc: 'Ball-by-ball scorekeeper interface & match management.' },
    { role: 'EDITOR', label: 'Media Editor', desc: 'Publish news, press releases, video highlights & photo galleries.' },
    { role: 'TEAM_MANAGER', label: 'Team Manager', desc: 'Manage district squads, player rosters & selection trials.' },
    { role: 'VIEWER', label: 'Fan / Spectator', desc: 'Public live score spectator mode.' },
  ];

  return (
    <Modal visible={visible} animationType="fade" transparent onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.title}>
              {mode === 'LOGIN' ? 'ASSOCIATION PORTAL LOGIN' : mode === 'REGISTER' ? 'CREATE REGAL ACCOUNT' : 'RESET PASSWORD'}
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={22} color={COLORS.warmWhite} />
            </TouchableOpacity>
          </View>

          <View style={styles.body}>
            {/* Form Inputs */}
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="name@regalcricket.org"
              placeholderTextColor={COLORS.slateTextMuted}
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              placeholder="••••••••"
              placeholderTextColor={COLORS.slateTextMuted}
            />

            <TouchableOpacity style={styles.submitBtn} onPress={onClose}>
              <Text style={styles.submitBtnText}>
                {mode === 'LOGIN' ? 'Sign In to Portal' : mode === 'REGISTER' ? 'Register Account' : 'Send Reset Link'}
              </Text>
            </TouchableOpacity>

            {/* Quick Role Simulator Section */}
            <View style={styles.roleSimContainer}>
              <Text style={styles.roleSimTitle}>SWAP USER ROLE DEMO</Text>
              <Text style={styles.roleSimSub}>Select a role to preview role-restricted dashboards & UI features:</Text>

              {roles.map((r) => (
                <TouchableOpacity
                  key={r.role}
                  style={[styles.roleCard, currentRole === r.role && styles.roleCardActive]}
                  onPress={() => onRoleChange(r.role)}
                >
                  <Ionicons
                    name={currentRole === r.role ? 'radio-button-on' : 'radio-button-off'}
                    size={18}
                    color={currentRole === r.role ? COLORS.championshipGold : COLORS.slateTextMuted}
                  />
                  <View style={{ marginLeft: 10, flex: 1 }}>
                    <Text style={[styles.roleLabel, currentRole === r.role && styles.roleLabelActive]}>{r.label}</Text>
                    <Text style={styles.roleDesc}>{r.desc}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(11, 25, 44, 0.85)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  modalContent: {
    width: '100%',
    maxWidth: 480,
    backgroundColor: COLORS.midnightNavyCard,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.slateBorder,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: COLORS.midnightNavy,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.slateBorder,
  },
  title: {
    color: COLORS.championshipGold,
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.8,
  },
  body: {
    padding: 20,
  },
  label: {
    color: COLORS.slateTextLight,
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 6,
    marginTop: 8,
  },
  input: {
    backgroundColor: COLORS.deepSlate,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: COLORS.warmWhite,
    fontSize: 14,
    borderWidth: 1,
    borderColor: COLORS.slateBorder,
  },
  submitBtn: {
    backgroundColor: COLORS.crimson,
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 16,
  },
  submitBtnText: {
    color: COLORS.warmWhite,
    fontWeight: '700',
    fontSize: 14,
  },
  roleSimContainer: {
    marginTop: 24,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: COLORS.slateBorder,
  },
  roleSimTitle: {
    color: COLORS.championshipGold,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 4,
  },
  roleSimSub: {
    color: COLORS.slateTextMuted,
    fontSize: 12,
    marginBottom: 12,
  },
  roleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.deepSlate,
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: COLORS.slateBorder,
  },
  roleCardActive: {
    borderColor: COLORS.championshipGold,
    backgroundColor: 'rgba(212, 175, 55, 0.08)',
  },
  roleLabel: {
    color: COLORS.warmWhite,
    fontSize: 13,
    fontWeight: '600',
  },
  roleLabelActive: {
    color: COLORS.championshipGold,
  },
  roleDesc: {
    color: COLORS.slateTextMuted,
    fontSize: 11,
    marginTop: 2,
  },
});
