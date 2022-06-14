
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\client\\apps\\sidebar\\tabs\\macros-directory.d.ts",
      "/**\n * The directory, not displayed in the sidebar, which organizes and displays world-level Macro documents.\n *\n * @see {@link Macros}        The WorldCollection of Macro Documents\n * @see {@link Macro}         The Macro Document\n * @see {@link MacroConfig}   The Macro Configuration Sheet\n */\ndeclare class MacroDirectory extends SidebarDirectory<'Macro'> {\n  constructor(options?: Partial<SidebarDirectory.Options>);\n\n  static override documentName: 'Macro';\n}\n"
    ]
  