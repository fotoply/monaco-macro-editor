
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\client\\pixi\\core\\containers\\sampler-mesh.d.ts",
      "/**\n * A Mesh subclass used to render a texture with faster performance than a PIXI.Sprite.\n */\ndeclare class SamplerMesh extends PIXI.Mesh {\n  /**\n   * The basic quad geometry used for the Mesh\n   * @defaultValue\n   * ```javascript\n   * new PIXI.Geometry()\n   *   .addAttribute('aVertexPosition', [0, 0, 1, 0, 1, 1, 0, 1], 2)\n   *   .addAttribute('aUvs', [0, 0, 1, 0, 1, 1, 0, 1], 2)\n   *   .addIndex([0, 1, 2, 0, 2, 3])\n   * ```\n   */\n  static QUAD: PIXI.Geometry;\n\n  /**\n   * Create a SamplerMesh using a provided RenderTexture\n   * @param texture - The texture to render using a Mesh\n   */\n  static create(texture: PIXI.RenderTexture): SamplerMesh;\n}\n"
    ]
  