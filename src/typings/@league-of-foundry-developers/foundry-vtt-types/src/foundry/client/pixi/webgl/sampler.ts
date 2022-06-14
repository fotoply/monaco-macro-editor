
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\client\\pixi\\webgl\\sampler.d.ts",
      "/**\n * A simple shader to emulate a PIXI.Sprite with a PIXI.Mesh (but faster!)\n */\ndeclare class BaseSamplerShader extends AbstractBaseShader {\n  static override vertexShader: string;\n\n  static override fragmentShader: string;\n\n  /**\n   * @defaultValue\n   * ```javascript\n   * {\n   *   screenDimensions: [1, 1],\n   *   sampler: 0\n   * };\n   * ```\n   */\n  static override defaultUniforms: AbstractBaseShader.Uniforms;\n}\n"
    ]
  