
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\client\\pixi\\layers\\grid\\highlight.d.ts",
      "/**\n * A special Graphics class which handles Grid layer highlighting\n */\ndeclare class GridHighlight extends PIXI.Graphics {\n  constructor(name: string, ...args: ConstructorParameters<typeof PIXI.Graphics>);\n\n  /**\n   * Track the Grid Highlight name\n   */\n  name: string;\n\n  /**\n   * Track distinct positions which have already been highlighted\n   */\n  positions: Set<string>;\n\n  /**\n   * Record a position that is highlighted and return whether or not it should be rendered\n   * @param x - The x-coordinate to highlight\n   * @param y - The y-coordinate to highlight\n   * @returns Whether or not to draw the highlight for this location\n   */\n  highlight(x: number, y: number): boolean;\n\n  override clear(): this;\n\n  override destroy(...args: Parameters<PIXI.Graphics['destroy']>): void;\n}\n"
    ]
  