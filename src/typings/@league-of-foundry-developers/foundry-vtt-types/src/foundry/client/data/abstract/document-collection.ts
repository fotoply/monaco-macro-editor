
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\client\\data\\abstract\\document-collection.d.ts",
      "import { ConfiguredDocumentClass, DocumentConstructor } from '../../../../types/helperTypes';\nimport { DocumentModificationOptions } from '../../../common/abstract/document.mjs';\n\ndeclare global {\n  /**\n   * An abstract subclass of the Collection container which defines a collection of Document instances.\n   */\n  abstract class DocumentCollection<T extends DocumentConstructor, Name extends string> extends foundry.utils\n    .Collection<StoredDocument<InstanceType<ConfiguredDocumentClass<T>>>> {\n    constructor();\n\n    /**\n     * An Array of application references which will be automatically updated when the collection content changes\n     * @defaultValue `[]`\n     */\n    apps: Application[];\n\n    /**\n     * The Collection class name\n     */\n    get name(): Name;\n\n    /**\n     * A reference to the Document class definition which is contained within this DocumentCollection.\n     */\n    get documentClass(): ConfiguredDocumentClass<T>;\n\n    /**\n     * A reference to the named Document class which is contained within this DocumentCollection.\n     * @remarks This accessor is abstract: A subclass of DocumentCollection must implement the documentName getter\n     */\n    get documentName(): ConfiguredDocumentClass<T>['metadata']['name'];\n\n    /**\n     * @remarks The parameter `id` is ignored, instead `document.id` is used as the key.\n     */\n    set(id: string, document: StoredDocument<InstanceType<ConfiguredDocumentClass<T>>>): this;\n\n    /**\n     * Render any Applications associated with this DocumentCollection.\n     */\n    render(force?: boolean, options?: ApplicationOptions): void;\n\n    /**\n     * Update all objects in this DocumentCollection with a provided transformation.\n     * Conditionally filter to only apply to Entities which match a certain condition.\n     * @param transformation - An object of data or function to apply to all matched objects\n     * @param condition      - A function which tests whether to target each object\n     *                         (default: `null`)\n     * @param options        - Additional options passed to Document.update\n     *                         (default: `{}`)\n     * @returns An array of updated data once the operation is complete\n     */\n    updateAll(\n      transformation:\n        | DeepPartial<InstanceType<ConfiguredDocumentClass<T>>['data']['_source']>\n        | ((\n            doc: StoredDocument<InstanceType<ConfiguredDocumentClass<T>>>\n          ) => DeepPartial<InstanceType<ConfiguredDocumentClass<T>>['data']['_source']>),\n      condition?: ((obj: StoredDocument<InstanceType<ConfiguredDocumentClass<T>>>) => boolean) | null,\n      options?: DocumentModificationContext\n    ): ReturnType<this['documentClass']['updateDocuments']>;\n\n    /**\n     * Preliminary actions taken before a set of Documents in this Collection are created.\n     * @param result  - An Array of created data objects\n     * @param options - Options which modified the creation operation\n     * @param userId  - The ID of the User who triggered the operation\n     */\n    protected _preCreateDocuments(\n      result: (InstanceType<T>['data']['_source'] & { _id: string })[],\n      options: DocumentModificationOptions,\n      userId: string\n    ): void;\n\n    /**\n     * Follow-up actions taken after a set of Documents in this Collection are created.\n     * @param documents - An Array of created Documents\n     * @param result    - An Array of created data objects\n     * @param options   - Options which modified the creation operation\n     * @param userId    - The ID of the User who triggered the operation\n     */\n    protected _onCreateDocuments(\n      documents: StoredDocument<InstanceType<ConfiguredDocumentClass<T>>>[],\n      result: (InstanceType<T>['data']['_source'] & { _id: string })[],\n      options: DocumentModificationOptions,\n      userId: string\n    ): void;\n\n    /**\n     * Preliminary actions taken before a set of Documents in this Collection are updated.\n     * @param result  - An Array of incremental data objects\n     * @param options - Options which modified the update operation\n     * @param userId  - The ID of the User who triggered the operation\n     */\n    protected _preUpdateDocuments(\n      result: (DeepPartial<InstanceType<T>['data']['_source']> & { _id: string })[],\n      options: DocumentModificationOptions,\n      userId: string\n    ): void;\n\n    /**\n     * Follow-up actions taken after a set of Documents in this Collection are updated.\n     * @param documents - An Array of updated Documents\n     * @param result    - An Array of incremental data objects\n     * @param options   - Options which modified the update operation\n     * @param userId    - The ID of the User who triggered the operation\n     */\n    protected _onUpdateDocuments(\n      documents: StoredDocument<InstanceType<ConfiguredDocumentClass<T>>>[],\n      result: (DeepPartial<InstanceType<T>['data']['_source']> & { _id: string })[],\n      options: DocumentModificationOptions,\n      userId: string\n    ): void;\n\n    /**\n     * Preliminary actions taken before a set of Documents in this Collection are deleted.\n     * @param result  - An Array of document IDs being deleted\n     * @param options - Options which modified the deletion operation\n     * @param userId  - The ID of the User who triggered the operation\n     */\n    protected _preDeleteDocuments(result: string[], options: DocumentModificationOptions, userId: string): void;\n\n    /**\n     * Follow-up actions taken after a set of Documents in this Collection are deleted.\n     * @param documents - An Array of deleted Documents\n     * @param result    - An Array of document IDs being deleted\n     * @param options   - Options which modified the deletion operation\n     * @param userId    - The ID of the User who triggered the operation\n     */\n    protected _onDeleteDocuments(\n      documents: StoredDocument<InstanceType<ConfiguredDocumentClass<T>>>[],\n      result: string[],\n      options: DocumentModificationOptions,\n      userId: string\n    ): void;\n\n    /**\n     * Generate the render context information provided for CRUD operations.\n     * @param action    - The CRUD operation.\n     * @param documents - The documents being operated on.\n     * @param data      - An array of creation or update objects, or an array of document IDs, depending on\n     *                    the operation.\n     * @internal\n     */\n    protected _getRenderContext(\n      action: DocumentCollection.RenderContext.Create<T>['action'],\n      documents: StoredDocument<InstanceType<ConfiguredDocumentClass<T>>>[],\n      data: (InstanceType<T>['data']['_source'] & { _id: string })[]\n    ): DocumentCollection.RenderContext.Create<T>;\n    protected _getRenderContext(\n      action: DocumentCollection.RenderContext.Update<T>['action'],\n      documents: StoredDocument<InstanceType<ConfiguredDocumentClass<T>>>[],\n      data: (DeepPartial<InstanceType<T>['data']['_source']> & { _id: string })[]\n    ): DocumentCollection.RenderContext.Update<T>;\n    protected _getRenderContext(\n      action: DocumentCollection.RenderContext.Delete<T>['action'],\n      documents: StoredDocument<InstanceType<ConfiguredDocumentClass<T>>>[],\n      data: string[]\n    ): DocumentCollection.RenderContext.Delete<T>;\n  }\n\n  namespace DocumentCollection {\n    namespace RenderContext {\n      interface Base<T extends DocumentConstructor> {\n        documentType: T['metadata']['name'];\n        documents: StoredDocument<InstanceType<ConfiguredDocumentClass<T>>>[];\n\n        /** @deprecated The 'entities' render context is deprecated. Please use 'documents' instead. */\n        get entities(): this['documents'];\n\n        /** @deprecated The 'entityType' render context is deprecated. Please use 'documentType' instead. */\n        get entityType(): this['documentType'];\n      }\n\n      interface Create<T extends DocumentConstructor> extends Base<T> {\n        action: 'create';\n        data: (InstanceType<T>['data']['_source'] & { _id: string })[];\n      }\n\n      interface Update<T extends DocumentConstructor> extends Base<T> {\n        action: 'update';\n        data: (DeepPartial<InstanceType<T>['data']['_source']> & { _id: string })[];\n      }\n\n      interface Delete<T extends DocumentConstructor> extends Base<T> {\n        action: 'delete';\n        data: string[];\n      }\n    }\n  }\n}\n"
    ]
  