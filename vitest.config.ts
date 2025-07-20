import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./setupTests.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        '**/*.test.{ts,tsx}',
        '**/*.spec.{ts,tsx}',
        'src/index.{ts,tsx}',
        'src/setupTests.{ts,tsx}',
        '**/*.d.ts',
      ],
      thresholds: {
        statements: 80,
        branches: 50,
        functions: 50,
        lines: 50,
      },
    },
  },
});