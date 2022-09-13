import { registerPlugin } from '@capacitor/core';

import type { nearpayPlugin } from './definitions';

const nearpay = registerPlugin<nearpayPlugin>('nearpay', {
  web: () => import('./web').then(m => new m.nearpayWeb()),
});

export * from './definitions';
export { nearpay };
