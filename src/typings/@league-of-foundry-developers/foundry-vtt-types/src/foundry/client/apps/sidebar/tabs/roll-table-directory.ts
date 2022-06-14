
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\client\\apps\\sidebar\\tabs\\roll-table-directory.d.ts",
      "/**\n * The sidebar directory which organizes and displays world-level RollTable documents.\n * @typeParam Options - The type of the options object\n */\ndeclare class RollTableDirectory<\n  Options extends SidebarDirectory.Options = SidebarDirectory.Options\n> extends SidebarDirectory<'RollTable', Options> {\n  static override documentName: 'RollTable';\n}\n"
    ]
  