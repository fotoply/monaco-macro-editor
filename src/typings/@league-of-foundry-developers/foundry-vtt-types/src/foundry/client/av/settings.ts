
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\client\\av\\settings.d.ts",
      "interface AVSettingsData {\n  /** Whether this user has muted themselves. */\n  muted?: boolean | undefined;\n\n  /** Whether this user has hidden their video. */\n  hidden?: boolean | undefined;\n\n  /** Whether the user is broadcasting audio. */\n  speaking?: boolean | undefined;\n}\n\ndeclare class AVSettings {\n  constructor();\n\n  /** @internal */\n  protected _set: <T>(key: string, value: T) => void;\n\n  /** @internal */\n  protected _change: () => void;\n\n  client: AVSettings.ClientSettings;\n\n  world: AVSettings.WorldSettings;\n\n  protected _original: AVSettings.Settings;\n\n  /**\n   * WebRTC Mode, Disabled, Audio only, Video only, Audio & Video\n   */\n  static AV_MODES: {\n    DISABLED: 0;\n    AUDIO: 1;\n    VIDEO: 2;\n    AUDIO_VIDEO: 3;\n  };\n\n  static VOICE_MODES: AVSettings.VoiceModes;\n\n  static DEFAULT_CLIENT_SETTINGS: {\n    /**\n     * @defaultValue `'default'`\n     */\n    videoSrc: string;\n\n    /**\n     * @defaultValue `'default'`\n     */\n    audioSrc: string;\n\n    /**\n     * @defaultValue `'default'`\n     */\n    audioSink: string;\n\n    /**\n     * @defaultValue\n     */\n    dockSize: 'large' | 'medium' | 'small';\n\n    /**\n     * @defaultValue `'bottom'`\n     */\n    dockPosition: string;\n\n    /**\n     * @defaultValue `false`\n     */\n    hidePlayerList: boolean;\n\n    /**\n     * @defaultValue `false`\n     */\n    muteAll: boolean;\n\n    voice: {\n      /**\n       * @defaultValue `'AVSettings.VOICE_MODES.PTT'`\n       */\n      mode: AVSettings.VOICE_MODES;\n\n      /**\n       * @defaultValue\n       * ```\n       * \"`\"\n       * ```\n       */\n      pttName: string;\n\n      /**\n       * @defaultValue `100`\n       */\n      pttDelay: number;\n\n      /**\n       * @defaultValue `-45`\n       */\n      activityThreshold: number;\n    };\n\n    /**\n     * @defaultValue `{}`\n     */\n    users: Record<string, AVSettings.StoredUserSettings>;\n  };\n\n  static DEFAULT_WORLD_SETTINGS: {\n    /**\n     * @defaultValue `AVSettings.AV_MODES.DISABLED`\n     */\n    mode: AVSettings.AV_MODES;\n\n    turn: {\n      /**\n       * @defaultValue `'server'`\n       */\n      type: string;\n\n      /**\n       * @defaultValue `\"\"`\n       */\n      url: string;\n\n      /**\n       * @defaultValue `\"\"`\n       */\n      username: string;\n\n      /**\n       * @defaultValue `\"\"`\n       */\n      password: string;\n    };\n  };\n\n  static DEFAULT_USER_SETTINGS: {\n    /**\n     * @defaultValue `false`\n     */\n    popout: boolean;\n\n    /**\n     * @defaultValue `100`\n     */\n    x: number;\n\n    /**\n     * @defaultValue `100`\n     */\n    y: number;\n\n    /**\n     * @defaultValue `0`\n     */\n    z: number;\n\n    /**\n     * @defaultValue `320`\n     */\n    width: number;\n\n    /**\n     * @defaultValue `1.0`\n     */\n    volume: number;\n\n    /**\n     * @defaultValue `false`\n     */\n    muted: boolean;\n\n    /**\n     * @defaultValue `false`\n     */\n    hidden: boolean;\n\n    /**\n     * @defaultValue `false`\n     */\n    blocked: boolean;\n  };\n\n  /**\n   * Stores the transient AV activity data received from other users.\n   */\n  activity: Record<string, AVSettingsData>;\n\n  initialize(): void;\n\n  changed(): void;\n\n  get<S extends 'client' | 'world'>(scope: S, setting: string): unknown; // TODO: Improve once we have proper typing for dot notation\n\n  getUser(userId: string): AVSettings.UserSettings | null;\n\n  set<S extends 'client' | 'world'>(scope: S, setting: string, value: unknown): void; // TODO: Improve once we have proper typing for dot notation\n\n  /**\n   * Return a mapping of AV settings for each game User.\n   */\n  get users(): Record<string, AVSettings.UserSettings>;\n\n  /**\n   * Prepare a standardized object of user settings data for a single User\n   * @internal\n   */\n  protected _getUserSettings(user: User): AVSettings.UserSettings;\n\n  /**\n   * Handle setting changes to either rctClientSettings or rtcWorldSettings.\n   * @internal\n   */\n  protected _onSettingsChanged(): void;\n\n  /**\n   * Handle another connected user changing their AV settings.\n   */\n  handleUserActivity(userId: string, settings: AVSettingsData): void;\n}\n\ndeclare namespace AVSettings {\n  type ClientSettings = typeof AVSettings.DEFAULT_CLIENT_SETTINGS;\n  type WorldSettings = typeof AVSettings.DEFAULT_WORLD_SETTINGS;\n  type StoredUserSettings = typeof AVSettings.DEFAULT_USER_SETTINGS;\n  type UserSettings = StoredUserSettings & { canBroadcastAudio: boolean; canBroadcastVideo: boolean };\n  type Settings = { client: ClientSettings; world: WorldSettings };\n  interface DefaultVoiceModes {\n    ALWAYS: 'always';\n    ACTIVITY: 'activity';\n    PTT: 'ptt';\n  }\n  // eslint-disable-next-line @typescript-eslint/no-empty-interface\n  interface Overrides {}\n  type VoiceModes = PropertyTypeOrFallback<AVSettings.Overrides, 'VoiceModes', DefaultVoiceModes>;\n  type VOICE_MODES = ValueOf<VoiceModes>;\n  type AV_MODES = ValueOf<typeof AVSettings.AV_MODES>;\n}\n"
    ]
  