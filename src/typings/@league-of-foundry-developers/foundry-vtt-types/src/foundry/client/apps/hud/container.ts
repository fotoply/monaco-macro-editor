
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\client\\apps\\hud\\container.d.ts",
      "/**\n * Render the HUD container\n * @typeParam Options - the type of the options object\n */\ndeclare class HeadsUpDisplay<Options extends ApplicationOptions = ApplicationOptions> extends Application<Options> {\n  /**\n   * Token HUD\n   */\n  token: TokenHUD;\n\n  /**\n   * Tile HUD\n   */\n  tile: TileHUD;\n\n  /**\n   * Drawing HUD\n   */\n  drawing: DrawingHUD;\n\n  /**\n   * Chat Bubbles\n   */\n  bubbles: ChatBubbles;\n\n  /**\n   * @defaultValue\n   * ```\n   * mergeObject(super.defaultOptions, {\n   *   id: \"hud\",\n   *   template: \"templates/hud/hud.html\",\n   *   popOut: false,\n   * })\n   * ```\n   */\n  static override get defaultOptions(): ApplicationOptions;\n\n  override getData(options?: Partial<Options>): {} | { width: number; height: number };\n\n  protected override _render(force?: boolean, options?: Application.RenderOptions<Options>): Promise<void>;\n\n  /**\n   * Align the position of the HUD layer to the current position of the canvas\n   */\n  align(): void;\n}\n"
    ]
  