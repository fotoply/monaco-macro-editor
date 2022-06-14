
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\client\\apps\\hud\\pause.d.ts",
      "/**\n * Pause notification in the HUD\n *\n * @typeParam Options - the type of the options object\n * @typeParam Data    - The data structure used to render the handlebars template.\n */\ndeclare class Pause<\n  Options extends ApplicationOptions = ApplicationOptions,\n  Data extends object = Pause.Data\n> extends Application<Options> {\n  static get defaultOptions(): ApplicationOptions;\n\n  override getData(options?: Partial<Options>): Data | Promise<Data>;\n}\n\ndeclare namespace Pause {\n  interface Data {\n    paused: boolean;\n  }\n}\n"
    ]
  