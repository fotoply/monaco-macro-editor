
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\client\\apps\\av\\av-config.d.ts",
      "export {};\n\ndeclare global {\n  /**\n   * Audio/Video Conferencing Configuration Sheet\n   *\n   * @typeParam Options - The type of the options object\n   * @typeParam Data    - The data structure used to render the handlebars template.\n   */\n  class AVConfig<\n    Options extends FormApplicationOptions = FormApplicationOptions,\n    Data extends object = AVConfig.Data\n  > extends FormApplication<Options, Data, AVMaster> {\n    /**\n     * @param object  - The {@link AVMaster} instance being configured.\n     * @param options - Application configuration options.\n     */\n    constructor(object?: AVMaster | undefined, options?: Partial<Options> | undefined);\n\n    static override get defaultOptions(): FormApplicationOptions;\n\n    override getData(options: Partial<Options>): Promise<Data>;\n\n    override activateListeners(html: JQuery): void;\n\n    /**\n     * Set a section's input to enabled or disabled\n     * @param selector - Selector for the section to enable or disable\n     * @param enabled  - Whether to enable or disable this section\n     *                   (default: true)\n     * @internal\n     */\n    protected _setConfigSectionEnabled(selector: string, enabled?: boolean): void;\n\n    /**\n     * Determine whether a given video or audio source, or audio sink has become\n     * unavailable since the last time it was set.\n     * @param sources - The available devices\n     * @param source  - The selected device\n     * @internal\n     */\n    protected _isSourceUnavailable(sources: Record<string, string>, source: string): boolean;\n\n    /**\n     * Callback when the turn server type changes\n     * Will enable or disable the turn section based on whether the user selected a custom turn or not\n     * @param event - The event that triggered the turn server type change\n     * @internal\n     */\n    protected _onTurnTypeChanged(event: JQuery.ChangeEvent): void;\n\n    protected override _updateObject(event: Event, formData?: object): Promise<unknown>;\n  }\n\n  namespace AVConfig {\n    interface Data {\n      user: Game['user'];\n      modes: {\n        [Key in ValueOf<typeof AVSettings.AV_MODES>]: string;\n      };\n      voiceModes: {\n        [Key in ValueOf<typeof AVSettings.VOICE_MODES>]: string;\n      };\n      serverTypes: {\n        FVTT: string;\n        custom: string;\n      };\n      turnTypes: {\n        FVTT: string;\n        custom: string;\n      };\n      settings: AVSettings;\n      canSelectMode: boolean;\n      noSSL: boolean;\n      videoSources: Record<string, string>;\n      audioSources: Record<string, string>;\n      audioSinks: Record<string, string> | false;\n      videoSrcUnavailable: boolean;\n      audioSrcUnavailable: boolean;\n      audioSinkUnavailable: boolean;\n      audioDisabled: boolean;\n      videoDisabled: boolean;\n    }\n  }\n}\n"
    ]
  