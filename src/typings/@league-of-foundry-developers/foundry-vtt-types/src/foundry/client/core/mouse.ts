
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\client\\core\\mouse.d.ts",
      "/** Management class for Mouse events */\ndeclare class MouseManager {\n  constructor();\n\n  /**\n   * Specify a rate limit for mouse wheel to gate repeated scrolling.\n   * This is especially important for continuous scrolling mice which emit hundreds of events per second.\n   * This designates a minimum number of milliseconds which must pass before another wheel event is handled\n   * @defaultValue `50`\n   */\n  static MOUSE_WHEEL_RATE_LIMIT: number;\n\n  /**\n   * Master mouse-wheel event handler\n   * @internal\n   */\n  protected _onWheel(event: MouseEvent): void;\n}\n"
    ]
  