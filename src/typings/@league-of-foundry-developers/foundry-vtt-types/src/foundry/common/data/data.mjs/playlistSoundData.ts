
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\common\\data\\data.mjs\\playlistSoundData.d.ts",
      "import type { ConfiguredFlags, FieldReturnType, PropertiesToSource } from '../../../../types/helperTypes';\nimport type DocumentData from '../../abstract/data.mjs';\nimport type { documents } from '../../module.mjs';\nimport * as fields from '../fields.mjs';\n\ninterface PlaylistSoundDataSchema extends DocumentSchema {\n  _id: fields.DocumentId;\n  name: fields.RequiredString;\n  description: fields.BlankString;\n  path: fields.AudioField;\n  playing: fields.BooleanField;\n  pausedTime: FieldReturnType<fields.NumericField, { default: null }>;\n  repeat: fields.BooleanField;\n  volume: FieldReturnType<fields.AlphaField, { default: 0.5 }>;\n  fade: fields.IntegerField;\n  sort: fields.IntegerSortField;\n  flags: fields.ObjectField;\n}\n\ninterface PlaylistSoundDataProperties {\n  /**\n   * The _id which uniquely identifies this PlaylistSound document\n   * @defaultValue `null`\n   */\n  _id: string | null;\n\n  /**\n   * The name of this sound track\n   */\n  name: string;\n\n  /**\n   * The description of this sound track\n   * @defaultValue `\"\"`\n   */\n  description: string;\n\n  /**\n   * The audio file path that is played by this sound\n   */\n  path: string | null | undefined;\n\n  /**\n   * Is this sound currently playing?\n   * @defaultValue `false`\n   */\n  playing: boolean;\n\n  /**\n   * The time in seconds at which playback was paused\n   * @defaultValue `null`\n   */\n  pausedTime: number | null;\n\n  /**\n   * Does this sound loop?\n   * @defaultValue `false`\n   */\n  repeat: boolean;\n\n  /**\n   * The audio volume of the sound, from 0 to 1\n   * @defaultValue `0.5`\n   */\n  volume: number;\n\n  /** A duration in milliseconds to fade volume transition */\n  fade: number | undefined;\n\n  /** @defaultValue `0` */\n  sort: number;\n\n  /**\n   * An object of optional key/value flags\n   * @defaultValue `{}`\n   */\n  flags: ConfiguredFlags<'PlaylistSound'>;\n}\n\ninterface PlaylistSoundDataConstructorData {\n  /**\n   * The _id which uniquely identifies this PlaylistSound document\n   * @defaultValue `null`\n   */\n  _id?: string | null | undefined;\n\n  /**\n   * The name of this sound track\n   */\n  name: string;\n\n  /**\n   * The description of this sound track\n   * @defaultValue `\"\"`\n   */\n  description?: string | null | undefined;\n\n  /**\n   * The audio file path that is played by this sound\n   */\n  path?: string | null | undefined;\n\n  /**\n   * Is this sound currently playing?\n   * @defaultValue `false`\n   */\n  playing?: boolean | null | undefined;\n\n  /**\n   * The time in seconds at which playback was paused\n   * @defaultValue `null`\n   */\n  pausedTime?: number | null | undefined;\n\n  /**\n   * Does this sound loop?\n   * @defaultValue `false`\n   */\n  repeat?: boolean | null | undefined;\n\n  /**\n   * The audio volume of the sound, from 0 to 1\n   * @defaultValue `0.5`\n   */\n  volume?: number | null | undefined;\n\n  /** A duration in milliseconds to fade volume transition */\n  fade?: number | null | undefined;\n\n  /** @defaultValue `0` */\n  sort: number | null | undefined;\n\n  /**\n   * An object of optional key/value flags\n   * @defaultValue `{}`\n   */\n  flags?: ConfiguredFlags<'PlaylistSound'> | null | undefined;\n}\n\ntype PlaylistSoundDataSource = PropertiesToSource<PlaylistSoundDataProperties>;\n\n/**\n * The data schema for a PlaylistSound embedded document.\n * @see BasePlaylistSound\n */\nexport class PlaylistSoundData extends DocumentData<\n  PlaylistSoundDataSchema,\n  PlaylistSoundDataProperties,\n  PlaylistSoundDataSource,\n  PlaylistSoundDataConstructorData,\n  documents.BasePlaylistSound\n> {\n  static override defineSchema(): PlaylistSoundDataSchema;\n\n  protected override _initialize(): void;\n}\n\n// eslint-disable-next-line @typescript-eslint/no-empty-interface\nexport interface PlaylistSoundData extends PlaylistSoundDataProperties {}\n"
    ]
  