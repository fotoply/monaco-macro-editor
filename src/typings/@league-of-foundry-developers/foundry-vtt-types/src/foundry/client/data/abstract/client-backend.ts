
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\client\\data\\abstract\\client-backend.d.ts",
      "import type { ConfiguredDocumentClassForName } from '../../../../types/helperTypes';\nimport type { Request } from '../../../common/abstract/backend.mjs.js';\nimport type Document from '../../../common/abstract/document.mjs.js';\n\ndeclare global {\n  /**\n   * The client-side database backend implementation which handles Document modification operations.\n   */\n  class ClientDatabaseBackend extends foundry.abstract.DatabaseBackend {\n    /**\n     * Activate the Socket event listeners used to receive responses from events which modify database documents\n     * @param socket - The active game socket\n     */\n    activateSocketListeners(socket: io.Socket): void;\n\n    protected override _getDocuments<T extends Document<any, any>>(\n      documentClass: ConstructorOf<T>,\n      request: Request,\n      user: InstanceType<ConfiguredDocumentClassForName<'User'>>\n    ): Promise<T[]>;\n\n    /**\n     * @remarks\n     * Get operations for embedded Documents are currently un-supported.\n     * The returned promise always rejects.\n     */\n    protected override _getEmbeddedDocuments<T extends Document<any, any>>(\n      documentClass: ConstructorOf<T>,\n      parent: T extends Document<any, infer U> ? U : never,\n      request: Request,\n      user: InstanceType<ConfiguredDocumentClassForName<'User'>>\n    ): Promise<never>;\n\n    protected override _createDocuments<T extends Document<any, any>>(\n      documentClass: ConstructorOf<T>,\n      request: Request,\n      user: InstanceType<ConfiguredDocumentClassForName<'User'>>\n    ): Promise<T[]>;\n\n    protected override _createEmbeddedDocuments<T extends Document<any, any>>(\n      documentClass: ConstructorOf<T>,\n      parent: T extends Document<any, infer U> ? U : never,\n      request: Request,\n      user: InstanceType<ConfiguredDocumentClassForName<'User'>>\n    ): Promise<T[]>;\n\n    /**\n     * Perform a standardized pre-creation workflow for all Document types. For internal use only.\n     * @internal\n     */\n    protected _preCreateDocumentArray<T extends Document<any, any>>(\n      documentClass: ConstructorOf<T>,\n      {\n        data,\n        options,\n        pack,\n        parent,\n        user\n      }: Pick<Request, 'data' | 'pack' | 'parent' | 'options'> & {\n        user: InstanceType<ConfiguredDocumentClassForName<'User'>>;\n      }\n    ): Promise<T[]>;\n\n    /**\n     * Handle a SocketResponse from the server when one or multiple documents were created\n     * @param response - The provided Socket response\n     * @returns An Array of created Document instances\n     * @internal\n     */\n    protected _handleCreateDocuments(response: SocketResponse): foundry.abstract.Document<any, any>[];\n\n    /**\n     * Handle a SocketResponse from the server when one or multiple documents were created\n     * @param response - The provided Socket response\n     * @returns An Array of created Document instances\n     * @internal\n     */\n    protected _handleCreateEmbeddedDocuments(response: SocketResponse): foundry.abstract.Document<any, any>[];\n\n    /**\n     * Perform a standardized post-creation workflow for all Document types. For internal use only.\n     * @returns An array of callback operations to perform once every Document is created\n     * @internal\n     */\n    protected _postCreateDocumentCallbacks(\n      type: string,\n      collection: Collection<foundry.abstract.Document<any, any>>,\n      result: object[],\n      { options, userId, parent, pack }: Pick<Request, 'options' | 'parent' | 'pack'> & { userId?: string }\n    ): (() => void)[];\n\n    protected override _updateDocuments<T extends Document<any, any>>(\n      documentClass: ConstructorOf<T>,\n      request: Request,\n      user: InstanceType<ConfiguredDocumentClassForName<'User'>>\n    ): Promise<T[]>;\n\n    protected override _updateEmbeddedDocuments<T extends Document<any, any>>(\n      documentClass: ConstructorOf<T>,\n      parent: T extends Document<any, infer U> ? U : never,\n      request: Request,\n      user: InstanceType<ConfiguredDocumentClassForName<'User'>>\n    ): Promise<T[]>;\n\n    /**\n     * Perform a standardized pre-update workflow for all Document types. For internal use only.\n     * @internal\n     */\n    protected _preUpdateDocumentArray<T extends Document<any, any>>(\n      collection: Collection<T>,\n      {\n        updates,\n        options,\n        user\n      }: Pick<Request, 'updates' | 'options'> & {\n        user: InstanceType<ConfiguredDocumentClassForName<'User'>>;\n      }\n    ): Promise<T[]>;\n\n    /**\n     * Handle a SocketResponse from the server when one or multiple documents were updated\n     * @param response - The provided Socket response\n     * @returns An Array of updated Document instances\n     * @internal\n     */\n    protected _handleUpdateDocuments(response: SocketResponse): foundry.abstract.Document<any, any>[];\n\n    /**\n     * Handle a SocketResponse from the server when embedded Documents are updated in a parent Document.\n     * @param response - The provided Socket response\n     * @returns An Array of updated Document instances\n     * @internal\n     */\n    protected _handleUpdateEmbeddedDocuments(response: SocketResponse): foundry.abstract.Document<any, any>[];\n\n    /**\n     * Perform a standardized post-update workflow for all Document types. For internal use only.\n     * @returns An array of callback operations to perform after every Document is updated\n     * @internal\n     */\n    protected _postUpdateDocumentCallbacks(\n      collection: Collection<foundry.abstract.Document<any, any>>,\n      result: object[],\n      { options, userId }: Pick<Request, 'options'> & { userId?: string }\n    ): () => void;\n\n    protected override _deleteDocuments<T extends Document<any, any>>(\n      documentClass: ConstructorOf<T>,\n      request: Request,\n      user: InstanceType<ConfiguredDocumentClassForName<'User'>>\n    ): Promise<T[]>;\n\n    protected override _deleteEmbeddedDocuments<T extends Document<any, any>>(\n      documentClass: ConstructorOf<T>,\n      parent: T extends Document<any, infer U> ? U : never,\n      request: Request,\n      user: InstanceType<ConfiguredDocumentClassForName<'User'>>\n    ): Promise<T[]>;\n\n    /**\n     * Perform a standardized pre-delete workflow for all Document types. For internal use only.\n     * @internal\n     */\n    protected _preDeleteDocumentArray<T extends Document<any, any>>(\n      collection: Collection<T>,\n      {\n        ids,\n        options,\n        user\n      }: Pick<Request, 'ids' | 'options'> & { user: InstanceType<ConfiguredDocumentClassForName<'User'>> }\n    ): Promise<T[]>;\n\n    /**\n     * Handle a SocketResponse from the server where Documents are deleted.\n     * @param response - The provided Socket response\n     * @returns An Array of deleted Document instances\n     * @internal\n     */\n    protected _handleDeleteDocuments(response: SocketResponse): foundry.abstract.Document<any, any>[];\n\n    /**\n     * Handle a SocketResponse from the server when embedded Documents are deleted from a parent Document.\n     * @param response - The provided Socket response\n     * @returns An Array of deleted Document instances\n     * @internal\n     */\n    protected _handleDeleteEmbeddedDocuments(response: SocketResponse): foundry.abstract.Document<any, any>[];\n\n    /**\n     * Perform a standardized post-deletion workflow for all Document types. For internal use only.\n     * @returns An array of callback operations to perform after every Document is deleted\n     * @internal\n     */\n    protected _postDeleteDocumentCallbacks(\n      collection: Collection<foundry.abstract.Document<any, any>>,\n      result: object[],\n      { options, userId }: Pick<Request, 'options'> & { userId?: string }\n    ): (() => void)[];\n\n    override getFlagScopes(): string[];\n\n    override getCompendiumScopes(): string[];\n  }\n}\n\nexport {};\n"
    ]
  