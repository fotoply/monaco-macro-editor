
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\common\\data\\data.mjs\\playlistData.d.ts",
      "import type { ConfiguredDocumentClass, ConfiguredFlags, PropertiesToSource } from '../../../../types/helperTypes';\nimport type DocumentData from '../../abstract/data.mjs';\nimport type EmbeddedCollection from '../../abstract/embedded-collection.mjs';\nimport * as documents from '../../documents.mjs';\nimport * as fields from '../fields.mjs';\n\ninterface PlaylistDataSchema extends DocumentSchema {\n  _id: fields.DocumentId;\n  name: fields.RequiredString;\n  description: fields.BlankString;\n  sounds: fields.EmbeddedCollectionField<typeof documents.BasePlaylistSound>;\n  mode: DocumentField<foundry.CONST.PLAYLIST_MODES> & {\n    type: typeof Number;\n    required: true;\n    default: typeof foundry.CONST.PLAYLIST_MODES.SEQUENTIAL;\n    validate: (m: unknown) => m is foundry.CONST.PLAYLIST_MODES;\n    validationError: 'Invalid {name} {field} provided which must be a value from CONST.PLAYLIST_MODES';\n  };\n  playing: fields.BooleanField;\n  fade: fields.IntegerField;\n  folder: fields.ForeignDocumentField<{ type: typeof documents.BaseFolder }>;\n  sorting: DocumentField<foundry.CONST.PLAYLIST_SORT_MODES> & {\n    type: foundry.CONST.PLAYLIST_SORT_MODES;\n    required: true;\n    default: typeof foundry.CONST.PLAYLIST_SORT_MODES.ALPHABETICAL;\n    validate: (m: unknown) => m is foundry.CONST.PLAYLIST_SORT_MODES;\n    validationError: 'Invalid Playlist sorting mode';\n  };\n  sort: fields.IntegerSortField;\n  seed: fields.NonnegativeIntegerField;\n  permission: fields.DocumentPermissions;\n  flags: fields.ObjectField;\n}\n\ninterface PlaylistDataProperties {\n  /**\n   * The _id which uniquely identifies this Playlist document\n   * @defaultValue `null`\n   */\n  _id: string | null;\n\n  /**\n   * The name of this playlist\n   */\n  name: string;\n\n  /**\n   * The description of this playlist\n   * @defaultValue `\"\"`\n   */\n  description: string;\n\n  /**\n   * A Collection of PlaylistSounds embedded documents which belong to this playlist\n   * @defaultValue `new EmbeddedCollection(PlaylistSoundData, [], BasePlaylistSound.implementation)`\n   */\n  sounds: EmbeddedCollection<ConfiguredDocumentClass<typeof documents.BasePlaylistSound>, PlaylistData>;\n\n  /**\n   * The playback mode for sounds in this playlist\n   * @defaultValue `CONST.PLAYLIST_MODES.SEQUENTIAL`\n   */\n  mode: foundry.CONST.PLAYLIST_MODES;\n\n  /**\n   * Is this playlist currently playing?\n   * @defaultValue `false`\n   */\n  playing: boolean;\n\n  /** A duration in milliseconds to fade volume transition */\n  fade: number | undefined;\n\n  /**\n   * The _id of a Folder which contains this playlist\n   * @defaultValue `null`\n   */\n  folder: string | null;\n\n  /**\n   * The sorting mode used for this playlist.\n   * @defaultValue `CONST.PLAYLIST_SORT_MODES.ALPHABETICAL`\n   */\n  sorting: foundry.CONST.PLAYLIST_SORT_MODES;\n\n  /**\n   * The numeric sort value which orders this playlist relative to its siblings\n   * @defaultValue `0`\n   */\n  sort: number;\n\n  /** A seed used for playlist randomization to guarantee that all clients generate the same random order. */\n  seed: number | undefined;\n\n  /**\n   * An object which configures user permissions to this playlist\n   * @defaultValue `{ default: CONST.ENTITY_PERMISSIONS.NONE }`\n   */\n  permission: Record<string, foundry.CONST.DOCUMENT_PERMISSION_LEVELS>;\n\n  /**\n   * An object of optional key/value flags\n   * @defaultValue `{}`\n   */\n  flags: ConfiguredFlags<'Playlist'>;\n}\n\ninterface PlaylistDataConstructorData {\n  /**\n   * The _id which uniquely identifies this Playlist document\n   * @defaultValue `null`\n   */\n  _id?: string | null | undefined;\n\n  /**\n   * The name of this playlist\n   */\n  name: string;\n\n  /**\n   * The description of this playlist\n   * @defaultValue `\"\"`\n   */\n  description?: string | null | undefined;\n\n  /**\n   * A Collection of PlaylistSounds embedded documents which belong to this playlist\n   * @defaultValue `new EmbeddedCollection(PlaylistSoundData, [], BasePlaylistSound.implementation)`\n   */\n  sounds?:\n    | EmbeddedCollection<ConfiguredDocumentClass<typeof documents.BasePlaylistSound>, PlaylistData>\n    | null\n    | undefined;\n\n  /**\n   * The playback mode for sounds in this playlist\n   * @defaultValue `CONST.PLAYLIST_MODES.SEQUENTIAL`\n   */\n  mode?: foundry.CONST.PLAYLIST_MODES | null | undefined;\n\n  /**\n   * Is this playlist currently playing?\n   * @defaultValue `false`\n   */\n  playing?: boolean | null | undefined;\n\n  /** A duration in milliseconds to fade volume transition */\n  fade?: number | null | undefined;\n\n  /**\n   * The _id of a Folder which contains this playlist\n   * @defaultValue `null`\n   */\n  folder?: InstanceType<ConfiguredDocumentClass<typeof documents.BaseFolder>> | string | null | undefined;\n\n  /**\n   * The sorting mode used for this playlist.\n   * @defaultValue `CONST.PLAYLIST_SORT_MODES.ALPHABETICAL`\n   */\n  sorting?: foundry.CONST.PLAYLIST_SORT_MODES | null | undefined;\n\n  /**\n   * The numeric sort value which orders this playlist relative to its siblings\n   * @defaultValue `0`\n   */\n  sort?: number | null | undefined;\n\n  /** A seed used for playlist randomization to guarantee that all clients generate the same random order. */\n  seed?: number | null | undefined;\n\n  /**\n   * An object which configures user permissions to this playlist\n   * @defaultValue `{ default: CONST.ENTITY_PERMISSIONS.NONE }`\n   */\n  permission?: Record<string, foundry.CONST.DOCUMENT_PERMISSION_LEVELS> | null | undefined;\n\n  /**\n   * An object of optional key/value flags\n   * @defaultValue `{}`\n   */\n  flags?: ConfiguredFlags<'Playlist'> | null | undefined;\n}\n\ntype PlaylistDataSource = PropertiesToSource<PlaylistDataProperties>;\n\n/**\n * The data schema for a Playlist document.\n * @see BasePlaylist\n */\nexport class PlaylistData extends DocumentData<\n  PlaylistDataSchema,\n  PlaylistDataProperties,\n  PlaylistDataSource,\n  PlaylistDataConstructorData,\n  documents.BasePlaylist\n> {\n  static override defineSchema(): PlaylistDataSchema;\n}\n\n// eslint-disable-next-line @typescript-eslint/no-empty-interface\nexport interface PlaylistData extends PlaylistDataProperties {}\n"
    ]
  