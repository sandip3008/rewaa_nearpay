export interface purchasePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
