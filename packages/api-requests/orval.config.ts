import { defineConfig } from 'orval';

const base = './src/open-api';
const apiBase = `${base}/api`;

export default defineConfig({
  api: {
    output: {
      target: `${apiBase}/requests.ts`,
      client: 'react-query',
      mock: true,
      prettier: true,
      override: {
        query: {
          useInfinite: true,
          useMutation: true,
        },
        mutator: {
          path: `../../apps/frontend/src/lib/mutator/custom-client.ts`,
        },
      },
    },
    input: {
      target: `${apiBase}/open-api.json`,
      /*   override: {
        transformer: `${base}/transformers/scramble-transformer.cjs`,
      },*/
    },
  },
});
