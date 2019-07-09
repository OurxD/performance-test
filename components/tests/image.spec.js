import { getSize } from '../PerformantImage';

describe('getSize is working properly', () => {
  it('should return mobile size', () => {
    const result = getSize({
      sizes: [123],
      isMobile: true,
    });

    expect(result).toBe(123);
  });

  it('should return tablet size', () => {
    const result = getSize({
      sizes: [123, 456],
      isMobile: true,
      isTablet: true,
    });

    expect(result).toBe(456);
  });

  it('should return desktop size', () => {
    const result = getSize({
      sizes: [123, 456, 789],
      isMobile: false,
      isTablet: false,
    });

    expect(result).toBe(789);
  });

  it('should return mobile size when tablet is not available', () => {
    const result = getSize({
      sizes: [123],
      isMobile: true,
      isTablet: true,
    });

    expect(result).toBe(123);
  });

  it('should return tablet size when desktop is not available', () => {
    const result = getSize({
      sizes: [123, 456],
      isMobile: false,
      isTablet: false,
    });

    expect(result).toBe(456);
  });

  it('should return mobile size when desktop and tablet is not available', () => {
    const result = getSize({
      sizes: [123],
      isMobile: false,
      isTablet: false,
    });

    expect(result).toBe(123);
  });
});