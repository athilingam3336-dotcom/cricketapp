import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Footer: React.FC = () => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.innerFooter}>
        <View style={styles.gridContainer}>
          {/* Col 1 & 2: Federation Info */}
          <View style={styles.colLarge}>
            <View style={styles.logoRow}>
              <View style={styles.logoBadge}>
                <Text style={styles.logoText}>CF</Text>
              </View>
              <View>
                <Text style={styles.titleText}>CRICKET FEDERATION</Text>
                <Text style={styles.subTitleText}>VIRUDHUNAGAR DISTRICT (CFVD)</Text>
              </View>
            </View>
            <Text style={styles.description}>
              Official governing body administering district cricket leagues, youth academy championships, umpire certifications, and grassroots player pipelines across Virudhunagar District under state affiliation.
            </Text>
            <View style={styles.badgesRow}>
              <View style={styles.pillBadge}>
                <Text style={styles.pillBadgeText}>Affiliation: TNCA Grassroots</Text>
              </View>
              <View style={styles.pillBadge}>
                <Text style={styles.pillBadgeText}>BCCI Protocol</Text>
              </View>
            </View>
          </View>

          {/* Col 3: Competitions */}
          <View style={styles.col}>
            <Text style={styles.colHeader}>Competitions</Text>
            <Text style={styles.linkText}>Senior District League</Text>
            <Text style={styles.linkText}>U-19 Inter-School Trophy</Text>
            <Text style={styles.linkText}>First Division Knockouts</Text>
            <Text style={styles.linkText}>Rural Taluk Cricket Cup</Text>
            <Text style={styles.linkText}>Women's Premier Challenge</Text>
          </View>

          {/* Col 4: Governance */}
          <View style={styles.col}>
            <Text style={styles.colHeader}>Governance</Text>
            <Text style={styles.linkText}>Executive Committee</Text>
            <Text style={styles.linkText}>Official Match Officials</Text>
            <Text style={styles.linkText}>Code of Conduct & By-Laws</Text>
            <Text style={styles.linkText}>Disciplinary Registry</Text>
            <Text style={styles.linkText}>Annual Audit Reports</Text>
          </View>

          {/* Col 5: District Office */}
          <View style={styles.col}>
            <Text style={styles.colHeader}>District Office</Text>
            <Text style={styles.linkText}>Federation Pavilion</Text>
            <Text style={styles.linkText}>District Sports Complex</Text>
            <Text style={styles.linkText}>Virudhunagar - 626001, Tamil Nadu</Text>
            <Text style={styles.linkText}>officials@virudhunagarcricket.in</Text>
            <Text style={styles.linkText}>+91 (04562) 245 889</Text>
          </View>
        </View>

        {/* Bottom copyright row */}
        <View style={styles.bottomRow}>
          <Text style={styles.copyrightText}>
            © 2025 Cricket Federation of Virudhunagar District. All rights reserved.
          </Text>
          <View style={styles.bottomLinks}>
            <Text style={styles.bottomLinkText}>Privacy Policy</Text>
            <Text style={styles.bottomLinkText}>Tournament Regulations</Text>
            <Text style={styles.bottomLinkText}>Anti-Doping Policy</Text>
            <Text style={styles.bottomLinkText}>Match Center API</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#0E1C2F',
    borderTopWidth: 1,
    borderTopColor: '#1E2D42',
    paddingHorizontal: 20,
    paddingVertical: 32,
    marginTop: 20,
  },
  innerFooter: {
    maxWidth: 1360,
    alignSelf: 'center',
    width: '100%',
  },
  gridContainer: {
    flexDirection: 'row',
    gap: 24,
    flexWrap: 'wrap',
    marginBottom: 32,
  },
  colLarge: {
    flex: 2,
    minWidth: 280,
    gap: 12,
  },
  col: {
    flex: 1,
    minWidth: 180,
    gap: 8,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  logoBadge: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#FED65B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: '#0E1C2F',
    fontWeight: '900',
    fontSize: 16,
  },
  titleText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 14,
  },
  subTitleText: {
    color: '#FED65B',
    fontSize: 9,
    fontWeight: '700',
  },
  description: {
    color: '#94A3B8',
    fontSize: 12,
    lineHeight: 18,
  },
  badgesRow: {
    flexDirection: 'row',
    gap: 8,
  },
  pillBadge: {
    backgroundColor: '#1E2D42',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  pillBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  colHeader: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 14,
    marginBottom: 4,
  },
  linkText: {
    color: '#94A3B8',
    fontSize: 12,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#1E2D42',
    paddingTop: 16,
    flexWrap: 'wrap',
    gap: 12,
  },
  copyrightText: {
    color: '#77849C',
    fontSize: 12,
  },
  bottomLinks: {
    flexDirection: 'row',
    gap: 16,
  },
  bottomLinkText: {
    color: '#94A3B8',
    fontSize: 12,
  },
});
