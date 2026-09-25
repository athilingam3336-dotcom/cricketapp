import { Platform } from 'react-native';

export const COLORS = {
  // Brand tokens derived from primary identity
  brandPrimary: '#071A3D',      // Midnight Navy
  brandSecondary: '#102A52',    // Navy Light
  brandAccent: '#D99A16',       // Championship Gold
  
  // Backgrounds & Surfaces (LIGHT UI)
  background: '#F7F8FA',
  backgroundLight: '#FFFFFF',
  surface: '#FFFFFF',
  surfaceElevated: '#FFFFFF',
  surfaceCardLight: '#F7F8FA',
  
  // Text Tokens
  textPrimary: '#172033',       // Dark Navy/Slate text
  textSecondary: '#475467',
  textMuted: '#667085',
  textDark: '#172033',
  textLight: '#FFFFFF',         // Added for contrast on dark panels
  
  // Borders & Dividers
  border: '#E5E7EB',
  borderGold: 'rgba(217, 154, 22, 0.3)',
  borderLight: '#F3F4F6',
  
  // Semantic State Colors
  success: '#198754',           
  warning: '#D99A16',           
  danger: '#8E1B2B',            // Cricket red
  live: '#8E1B2B',              // Cricket red used for live pulse
  
  // Cricket Event Specifics
  fourBoundary: '#102A52',      
  sixBoundary: '#D99A16',       
  wicketRed: '#8E1B2B',         
  
  // Alias backward compatibility mapping
  midnightNavy: '#071A3D',
  midnightNavyLight: '#102A52',
  midnightNavyCard: '#071A3D',
  championshipGold: '#D99A16',
  championshipGoldHover: '#F4E4B5',
  championshipGoldLight: 'rgba(217, 154, 22, 0.15)',
  crimson: '#8E1B2B',
  crimsonBright: '#8E1B2B',
  crimsonLight: 'rgba(142, 27, 43, 0.1)',
  warmWhite: '#FFFFFF',
  warmWhitePure: '#FFFFFF',
  deepSlate: '#172033',
  slateCard: '#FFFFFF',
  slateBorder: '#E5E7EB',
  slateTextMuted: '#667085',
  slateTextLight: '#475467',
  successLight: 'rgba(25, 135, 84, 0.15)',
  warningLight: 'rgba(217, 154, 22, 0.15)',
  info: '#102A52',
  infoLight: 'rgba(16, 42, 82, 0.15)',
};

export const FONTS = {
  heading: Platform.OS === 'web' ? 'Space Grotesk, system-ui, sans-serif' : 'System',
  body: Platform.OS === 'web' ? 'Chivo, system-ui, sans-serif' : 'System',
  tabular: Platform.OS === 'web' ? 'Chivo, monospace' : 'System',
};

export const SHADOWS = {
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  glowGold: {
    shadowColor: '#D4AF37',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  }
};
