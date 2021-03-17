import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'bla2',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type:'dist-custom-elements-bundle'
    },
    {
      type: 'docs-readme',
    },
  ],
  tsconfig: 'tsconfig.dist.json'
};
