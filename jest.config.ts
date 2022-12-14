import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  transform: {
    /* Use babel-jest to transpile tests with the next/babel preset
        https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
};
export default config;
