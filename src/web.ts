import { WebPlugin } from '@capacitor/core';

import type { nearpayPlugin } from './definitions';

export class nearpayWeb extends WebPlugin implements nearpayPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
