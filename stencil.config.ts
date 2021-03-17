import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'bla2',
  outputTargets: [
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  tsconfig: 'tsconfig.json'
};
