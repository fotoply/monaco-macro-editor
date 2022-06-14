
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\client\\pixi\\groups\\effects.d.ts",
      "/**\n * A container group which contains visual effects rendered above the primary group.\n */\ndeclare class EffectsCanvasGroup extends PIXI.Container {\n  constructor();\n\n  walls: WallsLayer;\n\n  lighting: LightingLayer;\n\n  weather: WeatherLayer;\n\n  sight: SightLayer;\n\n  /** @defaultValue `true` */\n  sortableChildren: boolean;\n\n  /**\n   * The name of this canvas group\n   * @defaultValue `\"effects\"`\n   */\n  static groupName: string;\n\n  /**\n   * Create the member layers of the scene container\n   * @internal\n   */\n  protected _createLayers(): void;\n}\n"
    ]
  