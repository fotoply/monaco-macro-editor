
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\client\\data\\documents\\folder.d.ts",
      "import { ConfiguredDocumentClass, ConstructorDataType, DocumentConstructor } from '../../../../types/helperTypes';\nimport { DocumentModificationOptions } from '../../../common/abstract/document.mjs';\n\ndeclare global {\n  /**\n   * The client-side Folder document which extends the common BaseFolder model.\n   * Each Folder document contains FolderData which defines its data schema.\n   *\n   * @see {@link data.FolderData}              The Folder data schema\n   * @see {@link documents.Folders}            The world-level collection of Folder documents\n   * @see {@link embedded.FolderSound}         The FolderSound embedded document within a parent Folder\n   * @see {@link applications.FolderConfig}    The Folder configuration application\n   *\n   * @param data - Initial data provided to construct the Folder document\n   */\n  class Folder extends ClientDocumentMixin(foundry.documents.BaseFolder) {\n    /**\n     * The depth of this folder in its sidebar tree\n     *\n     * @remarks For folders that have been populated by the {@link SidebarDirectory}, this is always be defined\n     */\n    depth?: number;\n\n    /**\n     * Return an array of the Document instances which are contained within this Folder.\n     */\n    get contents(): InstanceType<typeof CONFIG[this['data']['type']]['documentClass']>[];\n\n    /**\n     * Return whether the folder is displayed in the sidebar to the current user\n     */\n    get displayed(): boolean;\n\n    /**\n     * Return a reference to the Document type which is contained within this Folder.\n     */\n    get documentClass(): typeof CONFIG[this['data']['type']]['documentClass'];\n\n    /**\n     * Return a reference to the WorldCollection instance which provides Documents to this Folder.\n     */\n    get documentCollection(): Collection<InstanceType<typeof CONFIG[this['data']['type']]['documentClass']>>; // TODO: WorldCollection or ReturnType<Game['collections]['get]>\n\n    /**\n     * Return whether the folder is currently expanded within the sidebar interface.\n     */\n    get expanded(): boolean;\n\n    /**\n     * A reference to the parent Folder if one is set, otherwise null.\n     */\n    get parentFolder(): Folder | null;\n\n    /**\n     * Present a Dialog form to create a new Folder.\n     * @see {@link ClientDocumentMixin.createDialog}\n     * @param data    - Initial data with which to populate the creation form\n     *                  (default: `{}`)\n     * @param context - Additional context options or dialog positioning options\n     *                  (default: `{}`)\n     * @returns A Promise which resolves to the created Folder, or null if the dialog was closed.\n     *\n     * @remarks For weird reasons, we need to make this generic.\n     */\n    static createDialog<T extends DocumentConstructor>(\n      this: T,\n      data?:\n        | DeepPartial<\n            | ConstructorDataType<InstanceType<T>['data']>\n            | (ConstructorDataType<InstanceType<T>['data']> & Record<string, unknown>)\n          >\n        | undefined,\n      context?: Partial<Omit<FolderConfig.Options, 'resolve'>>\n    ): Promise<InstanceType<ConfiguredDocumentClass<T>> | null | undefined>;\n\n    /**\n     * Export all Documents contained in this Folder to a given Compendium pack.\n     * Optionally update existing Documents within the Pack by name, otherwise append all new entries.\n     * @param pack    - A Compendium pack to which the documents will be exported\n     * @param options - Additional options which customize how content is exported. See {@link ClientDocumentMixin#toCompendium}\n     *                  (default: `{}`)\n     * @returns The updated Compendium Collection instance\n     */\n    exportToCompendium<Metadata extends CompendiumCollection.Metadata>(\n      pack: CompendiumCollection<Metadata>,\n      options?: Folder.ExportToCompendiumOptions | undefined\n    ): Promise<CompendiumCollection<Metadata>>;\n\n    /**\n     * Provide a dialog form that allows for exporting the contents of a Folder into an eligible Compendium pack.\n     * @param pack    - A pack ID to set as the default choice in the select input\n     * @param options - Additional options passed to the Dialog.prompt method\n     *                  (default: `{}`)\n     * @returns A Promise which resolves or rejects once the dialog has been submitted or closed\n     */\n    exportDialog(pack: string, options?: DialogOptions): Promise<void>;\n\n    /**\n     * Get the Folder documents which are sub-folders of the current folder, either direct children or recursively.\n     * @param recursive - Identify child folders recursively, if false only direct children are returned\n     *                    (default: `false`)\n     * @returns An array of Folder documents which are subfolders of this one\n     */\n    getSubfolders(recursive?: boolean): InstanceType<ConfiguredDocumentClass<typeof Folder>>[];\n\n    protected _onDelete(options: DocumentModificationOptions, userId: string): void;\n  }\n\n  namespace Folder {\n    interface ExportToCompendiumOptions {\n      /** Update existing entries in the Compendium pack, matching by name */\n      updateByName?: boolean | undefined;\n    }\n  }\n}\n"
    ]
  