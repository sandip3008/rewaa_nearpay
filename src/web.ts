import { WebPlugin } from '@capacitor/core';

import type { purchasePlugin } from './definitions';

export class purchaseWeb extends WebPlugin implements purchasePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
