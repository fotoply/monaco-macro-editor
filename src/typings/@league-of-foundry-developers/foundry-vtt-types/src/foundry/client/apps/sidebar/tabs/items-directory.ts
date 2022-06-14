
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\client\\apps\\sidebar\\tabs\\items-directory.d.ts",
      "/**\n * The sidebar directory which organizes and displays world-level Item documents.\n */\ndeclare class ItemDirectory extends SidebarDirectory<'Item'> {\n  static override documentName: 'Item';\n\n  protected override _canDragDrop(selector: string): boolean;\n\n  protected override _getEntryContextOptions(): ContextMenuEntry[];\n}\n"
    ]
  