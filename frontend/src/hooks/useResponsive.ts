import { useWindowDimensions } from 'react-native';

export const useResponsive = () => {
  const { width, height } = useWindowDimensions();

  return {
    width,
    height,
    isMobile: width < 768,
    isTablet: width >= 768 && width < 1024,
    isDesktop: width >= 1024,
    // Provide column counts for grids
    numColumns: width >= 1200 ? 3 : width >= 768 ? 2 : 1,
    // Calculate a dynamic width for cards to fit nicely with gaps
    getCardWidth: (gap: number = 16, padding: number = 40) => {
      const availableWidth = width - padding;
      if (width >= 1200) return (availableWidth - (gap * 2)) / 3;
      if (width >= 768) return (availableWidth - gap) / 2;
      return availableWidth;
    }
  };
};
