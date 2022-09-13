export interface nearpayPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
