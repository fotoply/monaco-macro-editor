
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\client\\apps\\sidebar\\tabs\\scenes-directory.d.ts",
      "/**\n * A directory listing of active game scenes\n */\ndeclare class SceneDirectory extends SidebarDirectory<'Scene'> {\n  static override documentName: 'Scene';\n\n  /**\n   * @defaultValue `\"templates/sidebar/scene-partial.html\"`\n   */\n  static override documentPartial: string;\n\n  protected override _render(\n    force?: boolean,\n    options?: Application.RenderOptions<SidebarDirectory.Options>\n  ): Promise<void>;\n\n  protected override _getEntryContextOptions(): ContextMenuEntry[];\n}\n"
    ]
  