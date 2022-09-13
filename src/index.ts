import { registerPlugin } from '@capacitor/core';

import type { purchasePlugin } from './definitions';

const purchase = registerPlugin<purchasePlugin>('purchase', {
  web: () => import('./web').then(m => new m.purchaseWeb()),
});

export * from './definitions';
export { purchase };
