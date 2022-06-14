
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\client\\data\\collections\\tables.d.ts",
      "/**\n * The singleton collection of RollTable documents which exist within the active World.\n * This Collection is accessible within the Game object as game.tables.\n *\n * @see {@link RollTable} The RollTable document\n * @see {@link RollTableDirectory} The RollTableDirectory sidebar directory\n */\ndeclare class RollTables extends WorldCollection<typeof foundry.documents.BaseRollTable, 'RollTables'> {\n  static override documentName: 'RollTable';\n\n  override get directory(): typeof ui['tables'];\n\n  /**\n   * Register world settings related to RollTable documents\n   */\n  static registerSettings(): void;\n}\n"
    ]
  