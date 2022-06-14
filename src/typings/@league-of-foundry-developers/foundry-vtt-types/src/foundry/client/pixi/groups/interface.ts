
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\client\\pixi\\groups\\interface.d.ts",
      "/**\n * A container group which displays interface elements rendered above other canvas groups.\n */\ndeclare class InterfaceCanvasGroup extends PIXI.Container {\n  constructor();\n\n  sounds: SoundsLayer;\n\n  notes: NotesLayer;\n\n  controls: ControlsLayer;\n\n  /** @defaultValue `true` */\n  sortableChildren: boolean;\n\n  /**\n   * The name of this canvas group\n   * @defaultValue `\"interface\"`\n   */\n  static groupName: string;\n\n  /**\n   * Create the member layers of the scene container\n   * @internal\n   */\n  protected _createLayers(): void;\n}\n"
    ]
  