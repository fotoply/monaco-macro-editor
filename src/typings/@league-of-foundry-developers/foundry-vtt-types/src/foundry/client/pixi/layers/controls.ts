
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\client\\pixi\\layers\\controls.d.ts",
      "import { ConfiguredDocumentClass } from '../../../../types/helperTypes';\n\ndeclare global {\n  /**\n   * A CanvasLayer for displaying UI controls which are overlayed on top of other layers.\n   *\n   * We track three types of events:\n   * 1) Cursor movement\n   * 2) Ruler measurement\n   * 3) Map pings\n   */\n  class ControlsLayer extends CanvasLayer<ControlsLayer.LayerOptions> {\n    constructor();\n\n    /**\n     * A container of DoorControl instances\n     * @defaultValue `this.addChild(new PIXI.Container())`\n     */\n    doors: PIXI.Container;\n\n    /**\n     * A container of HUD interface elements\n     * @defaultValue `this.addChild(new PIXI.Container())`\n     */\n    hud: PIXI.Container;\n\n    /**\n     * A container of cursor interaction elements.\n     * Contains cursors, rulers, interaction rectangles, and pings\n     * @defaultValue `this.addChild(new PIXI.Container())`\n     */\n    cursors: PIXI.Container;\n\n    /**\n     * Ruler tools, one per connected user\n     * @defaultValue `this.addChild(new PIXI.Container())`\n     */\n    rulers: PIXI.Container;\n\n    /**\n     * A graphics instance used for drawing debugging visualization\n     * @defaultValue `this.addChild(new PIXI.Graphics())`\n     */\n    debug: PIXI.Graphics;\n\n    /**\n     * Canvas selection rectangle\n     * @defaultValue `undefined`\n     */\n    select: PIXI.Graphics | undefined;\n\n    /**\n     * A mapping of user IDs to Cursor instances for quick access\n     * @defaultValue `{}`\n     */\n    protected _cursors: Record<string, Cursor>;\n\n    /**\n     * A convenience mapping of user IDs to Ruler instances for quick access\n     * @internal\n     * @defaultValue `{}`\n     */\n    protected _rulers: Record<string, Ruler>;\n\n    /**\n     * @defaultValue\n     * ```typescript\n     * foundry.utils.mergeObject(super.layerOptions, {\n     *   name: \"controls\",\n     *   zIndex: 1000\n     * })\n     * ```\n     */\n    static override get layerOptions(): ControlsLayer.LayerOptions;\n\n    /**\n     * A convenience accessor to the Ruler for the active game user\n     */\n    get ruler(): ReturnType<ControlsLayer['getRulerForUser']>;\n\n    /**\n     * Get the Ruler display for a specific User ID\n     */\n    getRulerForUser(userId: string): Ruler | null;\n\n    override draw(): Promise<this>;\n\n    /**\n     * @remarks This breaks polymorphism. See https://gitlab.com/foundrynet/foundryvtt/-/issues/6939\n     */\n    override tearDown(): Promise<void>;\n\n    /**\n     * Draw the cursors container\n     */\n    drawCursors(): void;\n\n    /**\n     * Draw Ruler tools\n     */\n    drawRulers(): void;\n\n    /**\n     * Draw the select rectangle given an event originated within the base canvas layer\n     * @param coords - The rectangle coordinates of the form `{x, y, width, height}`\n     */\n    drawSelect({ x, y, width, height }: { x: number; y: number; width: number; height: number }): void;\n\n    override deactivate(): void;\n\n    /**\n     * Handle mousemove events on the game canvas to broadcast activity of the user's cursor position\n     */\n    protected _onMoveCursor(event: PIXI.InteractionEvent): void;\n\n    /**\n     * Create and draw the Cursor object for a given User\n     * @param user - The User document for whom to draw the cursor Container\n     */\n    drawCursor(user: InstanceType<ConfiguredDocumentClass<typeof User>>): Cursor;\n\n    /**\n     * Update the cursor when the user moves to a new position\n     * @param user     - The User for whom to update the cursor\n     * @param position - The new cursor position\n     */\n    updateCursor(user: InstanceType<ConfiguredDocumentClass<typeof User>>, position: Point | null): void;\n\n    /**\n     * Update display of an active Ruler object for a user given provided data\n     */\n    updateRuler(\n      user: InstanceType<ConfiguredDocumentClass<typeof User>>,\n      rulerData: Parameters<Ruler['update']>[0] | null\n    ): void;\n  }\n\n  namespace ControlsLayer {\n    interface LayerOptions extends CanvasLayer.LayerOptions {\n      name: 'controls';\n      zIndex: 1000;\n    }\n  }\n}\n"
    ]
  