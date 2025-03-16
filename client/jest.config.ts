export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",                                                   // Use 'jsdom' for React testing
  transform: {
    '^.+\\.tsx?$': 'ts-jest',                                                 // Transform TypeScript and JSX files
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['**/?(*.)+(test).ts?(x)'],                                      // Match test files
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],                            // Optional: Setup file for Jest
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',                                           // Map path aliases (if you're using them)
  },
};