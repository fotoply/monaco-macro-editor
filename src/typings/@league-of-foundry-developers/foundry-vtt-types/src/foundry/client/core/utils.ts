
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\client\\core\\utils.d.ts",
      "/**\n * Export data content to be saved to a local file\n * @param data     - Data content converted to a string\n * @param type     - The type of\n * @param filename - The filename of the resulting download\n */\ndeclare function saveDataToFile(data: string, type: string, filename: string): void;\n\n/**\n * Read text data from a user provided File object\n * @param file - A File object\n * @returns A Promise which resolves to the loaded text data\n */\ndeclare function readTextFromFile(file: File): Promise<string>;\n\n/**\n * Retrieve an Entity or Embedded Entity by its Universally Unique Identifier (uuid).\n * @param uuid - The uuid of the Entity or Embedded Entity to retrieve\n */\ndeclare function fromUuid(uuid: string): Promise<foundry.abstract.Document<any, any> | null>;\n\n/**\n * Return a reference to the Document class implementation which is configured for use.\n * @param documentName - The canonical Document name, for example \"Actor\"\n * @returns configured Document class implementation\n */\ndeclare function getDocumentClass<DocumentName extends string>(\n  documentName: DocumentName\n): DocumentName extends keyof CONFIG\n  ? 'documentClass' extends keyof CONFIG[DocumentName]\n    ? CONFIG[DocumentName]['documentClass']\n    : undefined\n  : undefined;\n"
    ]
  