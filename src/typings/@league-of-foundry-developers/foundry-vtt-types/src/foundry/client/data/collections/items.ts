
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\client\\data\\collections\\items.d.ts",
      "/**\n * The singleton collection of Item documents which exist within the active World.\n * This Collection is accessible within the Game object as game.items.\n *\n * @see {@link Item} The Item document\n * @see {@link ItemDirectory} The ItemDirectory sidebar directory\n */\ndeclare class Items extends WorldCollection<typeof foundry.documents.BaseItem, 'Items'> {\n  static override documentName: 'Item';\n}\n"
    ]
  