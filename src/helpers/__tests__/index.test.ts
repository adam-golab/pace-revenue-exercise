import { convertMinutesToHours, calculateMinHeight } from '..';

describe('Helpers', () => {
  describe('convertMinutesToHours', () => {
    it('should correctly map 7:00', () => {
      const result = convertMinutesToHours(420);

      expect(result).toBe('07:00');
    });

    it('should correctly map 12:34', () => {
      const result = convertMinutesToHours(754);

      expect(result).toBe('12:34');
    });

    it('should correctly map 0:00', () => {
      const result = convertMinutesToHours(0);

      expect(result).toBe('00:00');
    });
  });

  describe('calculateMinHeight', () => {
    beforeEach(() => {
      global.getComputedStyle = jest.fn().mockImplementationOnce(() => ({
        fontSize: '16px',
      }));
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('should return 9 rows for a grid 850px tall', () => {
      // given
      const MOCKED_DOCUMENT = { documentElement: null } as Document;

      const ONE_ROW_HEIGHT = 850 / 144; // GRID_RESOLUTION
      const MINIMAL_HEIGHT = 3.375 * 16;
      const ROUNDED = Math.round(MINIMAL_HEIGHT / ONE_ROW_HEIGHT);

      // when
      const result = calculateMinHeight(850, MOCKED_DOCUMENT);

      // then
      expect(ROUNDED).toBe(9);
      expect(result).toBe(9);
    });

    it('should return 4 rows for a grid 1944px tall', () => {
      // given
      const MOCKED_DOCUMENT = { documentElement: null } as Document;

      // when
      const result = calculateMinHeight(1944, MOCKED_DOCUMENT);

      // then
      expect(result).toBe(4);
    });
  });
});
