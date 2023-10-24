
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://www.wixapis.com/graphql/alpha",
  generates: {
    "lib/wix/generated/": {
      preset: 'client',
      config: {
        documentMode: 'string'
      },
    }
  },
  documents: ["lib/wix/**/*.ts"]
};

export default config;
