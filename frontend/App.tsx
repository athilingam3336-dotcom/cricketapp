import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, SafeAreaView, Platform } from 'react-native';

import { Header } from './src/components/Header';
import { BroadcastBanner } from './src/components/BroadcastBanner';
import { WagonWheelWidget } from './src/components/WagonWheelWidget';
import { WinPredictorWidget } from './src/components/WinPredictorWidget';
import { ChaseWormWidget } from './src/components/ChaseWormWidget';
import { H2HBattleWidget } from './src/components/H2HBattleWidget';
import { CommentaryFeed } from './src/components/CommentaryFeed';
import { Footer } from './src/components/Footer';
import { ScoringModal } from './src/components/ScoringModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('live-matches');
  const [scoringModalVisible, setScoringModalVisible] = useState<boolean>(false);

  const [scoreData, setScoreData] = useState({
    teamA: 'Sivakasi Strikers',
    teamAScore: '174/6',
    teamAOvers: '20.0',
    teamB: 'Virudhunagar Kings',
    teamBScore: '168/5',
    teamBOvers: '19.2',
    target: 175,
    neededRuns: 7,
    neededBalls: 4,
    striker: 'S. Muthukumar',
    strikerRuns: 64,
    strikerBalls: 38,
    nonStriker: 'R. Anandhan',
    nonStrikerRuns: 18,
    nonStrikerBalls: 11,
    bowler: 'K. Vetrivel',
    bowlerWickets: 2,
    bowlerRuns: 35,
    bowlerOvers: 3.2,
  });

  const handleUpdateScore = (ballRun: number, isWicket = false) => {
    setScoreData((prev) => {
      const currentRuns = parseInt(prev.teamBScore.split('/')[0]) + ballRun;
      const currentWickets = isWicket
        ? parseInt(prev.teamBScore.split('/')[1]) + 1
        : parseInt(prev.teamBScore.split('/')[1]);

      const neededRuns = Math.max(0, prev.target - currentRuns);
      const neededBalls = Math.max(0, prev.neededBalls - 1);

      return {
        ...prev,
        teamBScore: `${currentRuns}/${currentWickets}`,
        neededRuns,
        neededBalls,
        strikerRuns: prev.strikerRuns + ballRun,
        strikerBalls: prev.strikerBalls + 1,
      };
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />

      {/* District Header & Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenScoringModal={() => setScoringModalVisible(true)}
      />

      <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Top Scoreboard Hero Strip */}
        <BroadcastBanner scoreData={scoreData} />

        {/* Cockpit Grid */}
        <View style={styles.mainCockpit}>
          <View style={styles.gridContainer}>
            {/* Left Column (Wagon Wheel & Zone Leaderboard) */}
            <View style={styles.leftCol}>
              <WagonWheelWidget />
            </View>

            {/* Right Column (Win Predictor, Chase Worm, H2H Battle) */}
            <View style={styles.rightCol}>
              <WinPredictorWidget />
              <ChaseWormWidget />
              <H2HBattleWidget />
            </View>
          </View>

          {/* Ball-by-ball Commentary Feed */}
          <CommentaryFeed />
        </View>

        {/* Footer */}
        <Footer />
      </ScrollView>

      {/* Interactive Scorekeeper Modal */}
      <ScoringModal
        visible={scoringModalVisible}
        onClose={() => setScoringModalVisible(false)}
        onUpdateScore={handleUpdateScore}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0E1C2F',
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
  scrollContent: {
    flex: 1,
    backgroundColor: '#F9F9FF',
  },
  mainCockpit: {
    maxWidth: 1360,
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  gridContainer: {
    flexDirection: 'row',
    gap: 20,
    flexWrap: 'wrap',
  },
  leftCol: {
    flex: 7,
    minWidth: 320,
  },
  rightCol: {
    flex: 5,
    minWidth: 300,
  },
});
