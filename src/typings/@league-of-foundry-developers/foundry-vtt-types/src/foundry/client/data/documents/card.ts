
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\client\\data\\documents\\card.d.ts",
      "import type { ConfiguredDocumentClassForName, ConstructorDataType } from '../../../../types/helperTypes';\n\ndeclare global {\n  /**\n   * The client-side Card document which extends the common BaseCard model.\n   * Each Card document contains CardData which defines its data schema.\n   *\n   * @see {@link data.CardData}                      The Card data schema\n   * @see {@link documents.Cards}                    The Cards document type which contains Card embedded documents\n   */\n  class Card extends ClientDocumentMixin(foundry.documents.BaseCard) {\n    /**\n     * The card back.\n     * This reference is cached and lazily evaluated to retrieve an image and name from the source deck.\n     */\n    get back(): foundry.data.CardFaceData;\n\n    /**\n     * @defaultValue `undefined`\n     * @internal\n     */\n    protected _back?: foundry.data.CardFaceData | undefined;\n\n    /**\n     * The current card face\n     */\n    get face(): foundry.data.CardFaceData | null;\n\n    /**\n     * The image used to depict the back of this card\n     */\n    get backImg(): string;\n\n    /**\n     * The image of the currently displayed card face or back\n     */\n    get img(): string;\n\n    /**\n     * The name of the current card face, or the name of the card itself\n     */\n    get name(): string;\n\n    /**\n     * A reference to the source Cards document which defines this Card.\n     */\n    get source(): InstanceType<ConfiguredDocumentClassForName<'Cards'>> | undefined | null;\n\n    /**\n     * A convenience property for whether or not the Card is within its source Cards stack. Cards in decks are always\n     * considered home.\n     */\n    get isHome(): boolean;\n\n    /**\n     * Whether or not to display the face of this card?\n     */\n    get showFace(): boolean;\n\n    /**\n     * Does this Card have a next face available to flip to?\n     */\n    get hasNextFace(): boolean;\n\n    /**\n     * Does this Card have a previous face available to flip to?\n     */\n    get hasPreviousFace(): boolean;\n\n    override prepareDerivedData(): void;\n\n    /**\n     * Flip this card to some other face. A specific face may be requested, otherwise:\n     * If the card currently displays a face the card is flipped to the back.\n     * If the card currently displays the back it is flipped to the first face.\n     * @param face - A specific face to flip the card to\n     * @returns A reference to this card after the flip operation is complete\n     */\n    flip(face?: number | null | undefined): Promise<InstanceType<ConfiguredDocumentClassForName<'Card'>> | undefined>;\n\n    /**\n     * Pass this Card to some other Cards document.\n     * @param to      - A new Cards document this card should be passed to\n     * @param options - (default: `{}`)\n     * @returns A reference to this card after the it has been passed to another parent document\n     */\n    pass(\n      to: InstanceType<ConfiguredDocumentClassForName<'Cards'>>,\n      options?: Cards.PassOptions | undefined\n    ): Promise<InstanceType<ConfiguredDocumentClassForName<'Card'>> | undefined>;\n\n    /**\n     * Play a specific card to some other Cards document.\n     * This method is currently a more semantic alias for Card#pass.\n     * @see Card#pass\n     */\n    play(\n      to: InstanceType<ConfiguredDocumentClassForName<'Cards'>>,\n      options?: Cards.PassOptions | undefined\n    ): Promise<InstanceType<ConfiguredDocumentClassForName<'Card'>> | undefined>;\n\n    /**\n     * Discard a specific card to some other Cards document.\n     * This method is currently a more semantic alias for Card#pass.\n     * @see Card#pass\n     */\n    discard(\n      to: InstanceType<ConfiguredDocumentClassForName<'Cards'>>,\n      options?: Cards.PassOptions | undefined\n    ): Promise<InstanceType<ConfiguredDocumentClassForName<'Card'>> | undefined>;\n\n    /**\n     * Reset this Card to its original Cards parent.\n     * @param options - Options which modify the reset operation\n     *                  (default: `{}`)\n     * @returns A reference to the reset card belonging to its original parent\n     */\n    reset(options?: Cards.ResetOptions | undefined): Promise<InstanceType<ConfiguredDocumentClassForName<'Card'>>>;\n\n    /**\n     * Create a chat message which displays this Card.\n     * @param messageData - Additional data which becomes part of the created ChatMessageData\n     *                      (default: `{}`)\n     * @param options     - Options which modify the message creation operation\n     *                      (default: `{}`)\n     * @returns The created chat message\n     */\n    toMessage(\n      messageData?: ConstructorDataType<foundry.data.ChatMessageData> | undefined,\n      options?: DocumentModificationContext | undefined\n    ): Promise<InstanceType<ConfiguredDocumentClassForName<'ChatMessage'>> | undefined>;\n  }\n}\n"
    ]
  