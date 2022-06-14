
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\client\\data\\collections\\cards.d.ts",
      "/**\n * The collection of Cards documents which exist within the active World.\n * This Collection is accessible within the Game object as game.cards.\n * @see {@link Cards} The Cards document\n */\ndeclare class CardStacks extends WorldCollection<typeof foundry.documents.BaseCards, 'Cards'> {\n  static override documentName: 'Cards';\n}\n"
    ]
  