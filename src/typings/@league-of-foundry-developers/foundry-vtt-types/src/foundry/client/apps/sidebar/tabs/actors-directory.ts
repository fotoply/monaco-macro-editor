
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\client\\apps\\sidebar\\tabs\\actors-directory.d.ts",
      "/**\n * The sidebar directory which organizes and displays world-level Actor documents.\n */\ndeclare class ActorDirectory extends SidebarDirectory<'Actor'> {\n  constructor(...args: ConstructorParameters<typeof SidebarDirectory>);\n\n  static override documentName: 'Actor';\n\n  protected override _canDragStart(selector: string): boolean;\n\n  protected override _onDragStart(event: DragEvent): void;\n\n  protected override _canDragDrop(selector: string): boolean;\n\n  protected override _getEntryContextOptions(): ContextMenuEntry[];\n}\n"
    ]
  