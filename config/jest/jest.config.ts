import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  testEnvironment: "jsdom",
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  moduleDirectories: [
    "node_modules"
  ],
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node"
  ],
  rootDir: '../../',
  testMatch: [
    // '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^src/(.*)$": "<rootDir>/src/$1",
    "^shared/(.*)$": "<rootDir>/src/shared/$1"
  }
};

export default config;
