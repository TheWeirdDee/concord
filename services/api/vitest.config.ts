import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    projects: [
      // `pnpm test`: in memory, against FakeChain.
      { test: { name: "unit", include: ["test/*.test.ts"] } },
      // `pnpm test:integration`: a real network, started by .github/workflows/integration.yml.
      {
        test: {
          name: "integration",
          include: ["test/integration/*.test.ts"],
          testTimeout: 300_000,
          hookTimeout: 300_000,
        },
      },
    ],
  },
});
