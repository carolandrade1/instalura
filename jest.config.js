module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.config.js'],
  moduleDirectories: [
    '<rootDir>/node_modules',
    'node_modules',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/cypress/',
    '<rootDir>/dist/',
  ],
  testEnvironment: 'jsdom',
};
