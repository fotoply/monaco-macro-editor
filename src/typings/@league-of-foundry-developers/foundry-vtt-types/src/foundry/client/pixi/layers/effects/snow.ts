
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\client\\pixi\\layers\\effects\\snow.d.ts",
      "/**\n * A special full-screen weather effect which uses one Emitters to render snowflakes\n */\ndeclare class SnowWeatherEffect extends SpecialEffect {\n  /**\n   * @defaultValue `'Snow'`\n   */\n  static get label(): string;\n\n  /**\n   * Configuration of the particle emitter for snowflakes\n   * @defaultValue\n   * ```typescript\n   * {\n   *   maxSpeed: 0,\n   *   noRotation: false,\n   *   blendMode: 'normal',\n   *   emitterLifetime: -1,\n   *   pos: {\n   *     x: 0,\n   *     y: 0\n   *   },\n   *   spawnType: 'rect',\n   *   alpha: {\n   *     start: 0.9,\n   *     end: 0.5\n   *   },\n   *   scale: {\n   *     start: 0.2,\n   *     end: 0.4,\n   *     minimumScaleMultiplier: 0.5\n   *   },\n   *   speed: {\n   *     start: 190,\n   *     end: 210,\n   *     minimumSpeedMultiplier: 0.6\n   *   },\n   *   startRotation: {\n   *     min: 50,\n   *     max: 75\n   *   },\n   *   rotation: 90,\n   *   rotationSpeed: {\n   *     min: 0,\n   *     max: 200\n   *   },\n   *   lifetime: {\n   *     min: 4,\n   *     max: 4\n   *   }\n   * }\n   * ```\n   */\n  static SNOW_CONFIG: PIXI.particles.EmitterConfig | PIXI.particles.OldEmitterConfig;\n\n  getParticleEmitters(): PIXI.particles.Emitter[];\n\n  /**\n   * @internal\n   */\n  protected _getSnowEmitter(parent: PIXI.Container): PIXI.particles.Emitter;\n}\n"
    ]
  