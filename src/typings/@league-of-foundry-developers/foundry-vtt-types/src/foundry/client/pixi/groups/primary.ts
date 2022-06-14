
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\client\\pixi\\groups\\primary.d.ts",
      "/**\n * A cached container group which renders the primary visible contents of a Scene.\n */\ndeclare class PrimaryCanvasGroup extends CachedContainer {\n  constructor();\n\n  background: BackgroundLayer;\n\n  drawings: DrawingsLayer;\n\n  grid: GridLayer;\n\n  templates: TemplateLayer;\n\n  tokens: TokenLayer;\n\n  foreground: ForegroundLayer;\n\n  /** @defaultValue `true` */\n  sortableChildren: boolean;\n\n  /**\n   * The name of this canvas group\n   * @defaultValue `\"primary\"`\n   */\n  static groupName: string;\n\n  /**\n   * @defaultValue `[0, 0, 0, 0]`\n   */\n  override clearColor: [r: number, g: number, b: number, a: number];\n\n  /**\n   * Create the member layers of the scene container\n   * @internal\n   */\n  protected _createLayers(): void;\n\n  override render(renderer: Parameters<PIXI.Container['render']>[0]): void;\n}\n"
    ]
  