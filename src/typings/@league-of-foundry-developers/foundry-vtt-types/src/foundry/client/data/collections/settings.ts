
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\client\\data\\collections\\settings.d.ts",
      "/**\n * The Collection of Setting documents which exist within the active World.\n * This collection is accessible as game.settings.storage.get(\"world\")\n *\n * @see {@link Setting} The Setting document\n */\ndeclare class WorldSettings extends WorldCollection<typeof foundry.documents.BaseSetting, 'WorldSettings'> {\n  static override documentName: 'Setting';\n\n  override get directory(): undefined;\n\n  /**\n   * Return the Setting or Keybind document with the given key.\n   * @param key - The setting key\n   * @returns The Setting.\n   */\n  getSetting(key: string): ReturnType<this['find']>;\n\n  /**\n   * Return the serialized value of the world setting as a string\n   * @param key - The setting key\n   * @returns The serialized setting string\n   */\n  getItem(key: string): string | null;\n}\n"
    ]
  