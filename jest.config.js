module.exports = {
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: ['/node_modules/', '/.next/'],
	collectCoverage: true,
	collectCoverageFrom: [
		'src/**/*.ts(x)?',
		'!src/**/stories.tsx',
		'!**/*.d.ts',
		'!**/node_modules/**'
	],
	setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
};
