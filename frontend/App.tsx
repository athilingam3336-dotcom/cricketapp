import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, Platform, Text } from 'react-native';

import { Header } from './src/components/navigation/Header';
import { Footer } from './src/components/navigation/Footer';
import { MobileBottomNav } from './src/components/navigation/MobileBottomNav';
import { GlobalSearchModal } from './src/components/common/GlobalSearchModal';
import { NotificationDrawer } from './src/components/common/NotificationDrawer';
import { AuthModal } from './src/components/common/AuthModal';
import { COLORS } from './src/theme';
import { NavigationRoute, UserRole } from './src/types';

import { HomePage } from './src/components/pages/HomePage';
import { LiveMatchesPage } from './src/components/pages/LiveMatchesPage';
import { MatchCentrePage } from './src/components/pages/MatchCentrePage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<NavigationRoute>('HOME');
  const [selectedParamId, setSelectedParamId] = useState<string | undefined>(undefined);
  const [userRole, setUserRole] = useState<UserRole>('ADMIN');

  // Modals state
  const [searchVisible, setSearchVisible] = useState(false);
  const [notificationsVisible, setNotificationsVisible] = useState(false);
  const [authVisible, setAuthVisible] = useState(false);

  const handleNavigate = (route: NavigationRoute, paramId?: string) => {
    setCurrentRoute(route);
    setSelectedParamId(paramId);
  };

  const renderContent = () => {
    switch (currentRoute) {
      case 'HOME':
        return <HomePage onNavigate={handleNavigate} />;
      case 'LIVE':
        return <LiveMatchesPage onOpenMatchCentre={(id) => handleNavigate('MATCH_CENTRE', id)} />;
      case 'MATCH_CENTRE':
        return <MatchCentrePage matchId={selectedParamId || 'match-1'} />;
      default:
        return (
          <View style={styles.mainContainer}>
            <View style={styles.tempPlaceholder}>
              <Text style={styles.placeholderTitle}>REGAL CRICKET PLATFORM</Text>
              <Text style={styles.placeholderRoute}>Active Route: {currentRoute}</Text>
              {selectedParamId && <Text style={styles.placeholderParam}>ID: {selectedParamId}</Text>}
              <Text style={{color: COLORS.textMuted, marginTop: 20}}>This screen is under construction.</Text>
            </View>
          </View>
        );
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />

      {/* Global Shell Header */}
      <Header
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchVisible(true)}
        onOpenNotifications={() => setNotificationsVisible(true)}
        onOpenAuth={() => setAuthVisible(true)}
        onOpenScoringCentre={() => handleNavigate('SCORING_CENTRE')}
        userRole={userRole}
      />

      {/* Main Content Area */}
      <View style={{ flex: 1 }}>
        {renderContent()}
      </View>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Navigation Bar */}
      <MobileBottomNav
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenMore={() => setSearchVisible(true)}
      />

      {/* Modals & Drawers */}
      <GlobalSearchModal
        visible={searchVisible}
        onClose={() => setSearchVisible(false)}
        onNavigate={handleNavigate}
      />

      <NotificationDrawer
        visible={notificationsVisible}
        onClose={() => setNotificationsVisible(false)}
      />

      <AuthModal
        visible={authVisible}
        onClose={() => setAuthVisible(false)}
        currentRole={userRole}
        onRoleChange={setUserRole}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.midnightNavy,
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.midnightNavy,
    padding: 20,
  },
  tempPlaceholder: {
    padding: 30,
    backgroundColor: COLORS.midnightNavyCard,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.slateBorder,
    alignItems: 'center',
    marginVertical: 40,
  },
  placeholderTitle: {
    color: COLORS.championshipGold,
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 8,
  },
  placeholderRoute: {
    color: COLORS.warmWhite,
    fontSize: 16,
    fontWeight: '600',
  },
  placeholderParam: {
    color: COLORS.slateTextMuted,
    fontSize: 14,
    marginTop: 4,
  },
});
