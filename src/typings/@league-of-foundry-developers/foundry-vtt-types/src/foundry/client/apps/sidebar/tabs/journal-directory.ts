
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\client\\apps\\sidebar\\tabs\\journal-directory.d.ts",
      "/**\n * The sidebar directory which organizes and displays world-level JournalEntry documents.\n * @typeParam Options - The type of the options object\n */\ndeclare class JournalDirectory<\n  Options extends SidebarDirectory.Options = SidebarDirectory.Options\n> extends SidebarDirectory<'JournalEntry', Options> {\n  static override documentName: 'JournalEntry';\n\n  protected override _getEntryContextOptions(): ContextMenuEntry[];\n}\n"
    ]
  