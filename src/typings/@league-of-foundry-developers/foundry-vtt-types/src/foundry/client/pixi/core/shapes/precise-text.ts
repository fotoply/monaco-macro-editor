
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\client\\pixi\\core\\shapes\\precise-text.d.ts",
      "/**\n * An extension of the default PIXI.Text object which forces double resolution.\n * At default resolution Text often looks blurry or fuzzy.\n */\ndeclare class PreciseText extends PIXI.Text {\n  constructor(...args: ConstructorParameters<typeof PIXI.Text>);\n\n  /**\n   * Prepare a TextStyle object which merges the canvas defaults with user-provided options\n   * @param anchor  - A text anchor point from CONST.TEXT_ANCHOR_POINTS\n   * @param options - Additional options merged with the default TextStyle\n   * @returns The prepared TextStyle\n   */\n  static getTextStyle({\n    anchor,\n    ...options\n  }?: { anchor?: foundry.CONST.TEXT_ANCHOR_POINTS } & ConstructorParameters<typeof PIXI.TextStyle>[0]): PIXI.TextStyle;\n}\n"
    ]
  