
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\client\\data\\collections\\fog.d.ts",
      "/**\n * The singleton collection of FogExploration documents which exist within the active World.\n * @see {@link FogExploration} The FogExploration document\n */\ndeclare class FogExplorations extends WorldCollection<typeof foundry.documents.BaseFogExploration, 'FogExplorations'> {\n  static documentName: 'FogExploration';\n}\n"
    ]
  