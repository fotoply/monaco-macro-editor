
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\client\\pixi\\placeables\\token.d.ts",
      "import {\n  ConfiguredDocumentClass,\n  ConfiguredDocumentClassForName,\n  ConfiguredObjectClassForName\n} from '../../../../types/helperTypes';\nimport { DocumentModificationOptions } from '../../../common/abstract/document.mjs';\n\ndeclare global {\n  /**\n   * A Token is an implementation of PlaceableObject which represents an Actor within a viewed Scene on the game canvas.\n   * @see TokenDocument\n   * @see TokenLayer\n   */\n  class Token extends PlaceableObject<InstanceType<ConfiguredDocumentClass<typeof TokenDocument>>> {\n    /**\n     * A Ray which represents the Token's current movement path\n     */\n    protected _movement: Ray | null;\n\n    /**\n     * An Object which records the Token's prior velocity dx and dy\n     * This can be used to determine which direction a Token was previously moving\n     */\n    protected _velocity: Token.Velocity;\n\n    /**\n     * The Token's most recent valid position\n     */\n    protected _validPosition: { x: number; y: number };\n\n    /**\n     * Track the set of User documents which are currently targeting this Token\n     */\n    targeted: Set<User>;\n\n    /**\n     * A reference to the VisionSource object which defines this vision source area of effect\n     */\n    vision: VisionSource;\n\n    /**\n     * A reference to the LightSource object which defines this light source area of effect\n     */\n    light: LightSource;\n\n    /**\n     * A linked ObjectHUD element which is synchronized with the location and visibility of this Token\n     * @defaultValue `new ObjectHUD(this);`\n     */\n    hud: Token.ObjectHUD;\n\n    /** @defaultValue `undefined` */\n    texture?: PIXI.Texture | null;\n\n    /** @defaultValue `undefined` */\n    border?: PIXI.Graphics;\n\n    /** @defaultValue `undefined` */\n    icon?: PIXI.Sprite;\n\n    static override embeddedName: 'Token';\n\n    /**\n     * Establish an initial velocity of the token based on it's direction of facing.\n     * Assume the Token made some prior movement towards the direction that it is currently facing.\n     */\n    protected _getInitialVelocity(): Token.Velocity;\n\n    /**\n     * A convenient reference to the Actor object associated with the Token embedded document.\n     */\n    get actor(): this['document']['actor'];\n\n    /**\n     * A convenient reference for whether the current User has full control over the Token document.\n     */\n    get owner(): boolean;\n\n    get isOwner(): boolean;\n\n    /**\n     * A boolean flag for whether the current game User has observer permission for the Token\n     */\n    get observer(): boolean;\n\n    /**\n     * Is the HUD display active for this token?\n     */\n    get hasActiveHUD(): boolean;\n\n    /**\n     * Convenience access to the token's nameplate string\n     * @remarks\n     * This is actually a getter that returns data.name\n     */\n    readonly name: string;\n\n    override get bounds(): Rectangle;\n\n    /**\n     * Translate the token's grid width into a pixel width based on the canvas size\n     */\n    get w(): number;\n\n    /**\n     * Translate the token's grid height into a pixel height based on the canvas size\n     */\n    get h(): number;\n\n    /**\n     * The Token's current central position\n     */\n    get center(): ReturnType<this['getCenter']>;\n\n    /**\n     * The HTML source element for the primary Tile texture\n     */\n    get sourceElement(): HTMLImageElement | HTMLVideoElement | undefined;\n\n    /**\n     * Does this Tile depict an animated video texture?\n     */\n    get isVideo(): boolean;\n\n    /**\n     * An indicator for whether or not this token is currently involved in the active combat encounter.\n     */\n    get inCombat(): boolean;\n\n    /**\n     * Return a reference to a Combatant that represents this Token, if one is present in the current encounter.\n     */\n    get combatant(): InstanceType<ConfiguredDocumentClass<typeof Combatant>> | null;\n\n    /**\n     * An indicator for whether the Token is currently targeted by the active game User\n     */\n    get isTargeted(): boolean;\n\n    /**\n     * Determine whether the Token is visible to the calling user's perspective.\n     * Hidden Tokens are only displayed to GM Users.\n     * Non-hidden Tokens are always visible if Token Vision is not required.\n     * Controlled tokens are always visible.\n     * All Tokens are visible to a GM user if no Token is controlled.\n     *\n     * @see {@link SightLayer#testVisibility}\n     */\n    get isVisible(): boolean;\n\n    /**\n     * The animation name used for Token movement\n     */\n    get movementAnimationName(): string;\n\n    /**\n     * Test whether the Token has sight (or blindness) at any radius\n     */\n    get hasSight(): boolean;\n\n    /**\n     * Test whether the Token emits light (or darkness) at any radius\n     */\n    get emitsLight(): boolean;\n\n    /**\n     * Test whether the Token has a limited angle of vision or light emission which would require sight to update on Token rotation\n     */\n    get hasLimitedVisionAngle(): boolean;\n\n    /**\n     * Translate the token's sight distance in units into a radius in pixels.\n     * @returns The sight radius in pixels\n     */\n    get dimRadius(): number;\n\n    /**\n     * Translate the token's bright light distance in units into a radius in pixels.\n     * @returns The bright radius in pixels\n     */\n    get brightRadius(): number;\n\n    /**\n     * The named identified for the source object associated with this Token\n     */\n    get sourceId(): string;\n\n    /**\n     * Update the light and vision source objects associated with this Token\n     * @param options - (default: `{}}`)\n     */\n    updateSource(options?: Token.UpdateSourceOptions | undefined): void;\n\n    /**\n     * Update an emitted light source associated with this Token.\n     * @param options - (default `{}`)\n     */\n    updateLightSource(options?: Token.UpdateLightSourceOptions | undefined): void;\n\n    /**\n     * Update an Token vision source associated for this token.\n     * @param options - (default `{}`)\n     */\n    updateVisionSource(options?: Token.UpdateVisionSourceOptions | undefined): void;\n\n    /**\n     * Test whether this Token is a viable vision source for the current User\n     * @internal\n     */\n    protected _isVisionSource(): boolean;\n\n    override clear(): this;\n\n    override draw(): Promise<this>;\n\n    /**\n     * Draw the HUD container which provides an interface for managing this Token\n     * @internal\n     */\n    protected _drawHUD(): Token.InitializedObjectHUD;\n\n    override destroy(options?: Parameters<PlaceableObject['destroy']>[0]): void;\n\n    /**\n     * Apply initial sanitizations to the provided input data to ensure that a Token has valid required attributes.\n     */\n    protected _cleanData(): void;\n\n    /**\n     * Draw resource bars for the Token\n     */\n    protected _drawAttributeBars(): PIXI.Container;\n\n    /**\n     * Draw the Sprite icon for the Token\n     */\n    protected _drawIcon(): Promise<PIXI.Sprite>;\n\n    /**\n     * Play video for this Token (if applicable).\n     * @param playing - Should the Token video be playing?\n     *                  (default: `true`)\n     * @param options - Additional options for modifying video playback\n     *                  (default: `{}`)\n     */\n    play(playing?: boolean | undefined, options?: Token.PlayOptions | undefined): void;\n\n    /**\n     * Unlink the playback of this video token from the playback of other tokens which are using the same base texture.\n     * @param source - The video element source\n     * @internal\n     */\n    protected _unlinkVideoPlayback(source: HTMLVideoElement): Promise<void>;\n\n    /**\n     * Update display of the Token, pulling latest data and re-rendering the display of Token components\n     */\n    refresh(): this;\n\n    /**\n     * Size and display the Token Icon\n     * @internal\n     */\n    protected _refreshIcon(): void;\n\n    /**\n     * Draw the Token border, taking into consideration the grid type and border color\n     * @internal\n     */\n    protected _refreshBorder(): void;\n\n    /**\n     * Get the hex color that should be used to render the Token border\n     * @returns The hex color used to depict the border color\n     * @internal\n     */\n    protected _getBorderColor(): number | null;\n\n    /**\n     * Refresh the display of the Token HUD interface.\n     */\n    refreshHUD(): void;\n\n    /**\n     * Refresh the target indicators for the Token.\n     * Draw both target arrows for the primary User as well as indicator pips for other Users targeting the same Token.\n     * @internal\n     */\n    protected _refreshTarget(): void;\n\n    /**\n     * Refresh the display of Token attribute bars, rendering latest resource data\n     * If the bar attribute is valid (has a value and max), draw the bar. Otherwise hide it.\n     * @internal\n     */\n    drawBars(): void;\n\n    /**\n     * Draw a single resource bar, given provided data\n     * @param number - The Bar number\n     * @param bar    - The Bar container\n     * @param data   - Resource data for this bar\n     */\n    protected _drawBar(number: number, bar: PIXI.Graphics, data: ReturnType<TokenDocument['getBarAttribute']>): void;\n\n    /**\n     * Draw the token's nameplate as a text object\n     * @returns The Text object for the Token nameplate\n     */\n    protected _drawNameplate(): PreciseText;\n\n    /**\n     * Draw a text tooltip for the token which can be used to display Elevation or a resource value\n     * @returns The text object used to render the tooltip\n     * @internal\n     */\n    protected _drawTooltip(): PreciseText;\n\n    /**\n     * Return the text which should be displayed in a token's tooltip field\n     * @internal\n     */\n    protected _getTooltipText(): string;\n\n    /** @internal */\n    protected _getTextStyle(): PIXI.TextStyle;\n\n    /**\n     * Draw the active effects and overlay effect icons which are present upon the Token\n     */\n    drawEffects(): Promise<void>;\n\n    /**\n     * Draw the overlay effect icon\n     * @param options - (default: `{}`)\n     * @internal\n     */\n    protected _drawOverlay(options?: Token.DrawOverlayOptions | undefined): Promise<void>;\n\n    /**\n     * Draw a status effect icon\n     * @internal\n     */\n    protected _drawEffect(src: string, i: number, bg: PIXI.Graphics, w: number, tint: number): Promise<void>;\n\n    /**\n     * Helper method to determine whether a token attribute is viewable under a certain mode\n     * @param mode - The mode from CONST.TOKEN_DISPLAY_MODES\n     * @returns Is the attribute viewable?\n     * @internal\n     */\n    protected _canViewMode(mode: foundry.CONST.TOKEN_DISPLAY_MODES): boolean;\n\n    /**\n     * Animate Token movement along a certain path which is defined by a Ray object\n     * @param ray - The path along which to animate Token movement\n     */\n    animateMovement(ray: Ray): Promise<void>;\n\n    /**\n     * Animate the continual revealing of Token vision during a movement animation\n     * @internal\n     */\n    protected _onMovementFrame(\n      dt: number,\n      anim: Array<{\n        context: unknown;\n        name: string | null;\n        duration: number;\n        ontick: (dt: number, attributes: CanvasAnimation.Attribute[]) => void;\n      }>,\n      config: { fog?: boolean; sound?: boolean; source?: boolean }\n    ): void;\n\n    /**\n     * Update perception each frame depending on the animation configuration\n     * @param source - (default: `false`)\n     * @param sound  - (default: `false`)\n     * @param fog    - (default: `false`)\n     * @internal\n     */\n    protected _animatePerceptionFrame({\n      source,\n      sound,\n      fog\n    }?: {\n      source?: boolean;\n      sound?: boolean;\n      fog?: boolean;\n    }): void;\n\n    /**\n     * Terminate animation of this particular Token\n     */\n    stopAnimation(): void;\n\n    /**\n     * Check for collision when attempting a move to a new position\n     * @param destination - The destination point of the attempted movement\n     * @returns A true/false indicator for whether the attempted movement caused a collision\n     */\n    checkCollision(destination: Point): boolean;\n\n    /**\n     * @param releaseOthers - (default: `true`)\n     * @param pan           - (default: `false`)\n     */\n    protected override _onControl({ releaseOthers, pan }?: { releaseOthers?: boolean; pan?: boolean }): void;\n\n    protected override _onRelease(\n      options: PlaceableObject.ReleaseOptions\n    ): Promise<InstanceType<ConfiguredDocumentClass<typeof TokenDocument>>> | undefined;\n\n    /**\n     * Get the center-point coordinate for a given grid position\n     * @param x - The grid x-coordinate that represents the top-left of the Token\n     * @param y - The grid y-coordinate that represents the top-left of the Token\n     * @returns The coordinate pair which represents the Token's center at position (x, y)\n     */\n    getCenter(\n      x: number,\n      y: number\n    ): {\n      x: number;\n      y: number;\n    };\n\n    /**\n     * Set the token's position by comparing its center position vs the nearest grid vertex\n     * Return a Promise that resolves to the Token once the animation for the movement has been completed\n     * @param x       - The x-coordinate of the token center\n     * @param y       - The y-coordinate of the token center\n     * @param options - Additional options which configure the token movement\n     *                  (defaultValue: `{}`)\n     * @returns The Token after animation has completed\n     */\n    setPosition(x: number, y: number, options?: Token.PositionOptions): Promise<this>;\n\n    /**\n     * Update the Token velocity auto-regressively, shifting increasing weight towards more recent movement\n     * Employ a magic constant chosen to minimize (effectively zero) the likelihood of trigonometric edge cases\n     * @param ray - The proposed movement ray\n     * @returns An updated velocity with directional memory\n     * @internal\n     */\n    protected _updateVelocity(ray: Ray): Token.Velocity;\n\n    /**\n     * Set this Token as an active target for the current game User\n     * @param targeted - Is the Token now targeted?\n     *                   (default: `true`)\n     * @param context  - Additional context options\n     *                   (default `{}`)\n     */\n    setTarget(targeted?: boolean, context?: Token.SetTargetContext | undefined): void;\n\n    /**\n     * Add or remove the currently controlled Tokens from the active combat encounter\n     * @param combat - A specific combat encounter to which this Token should be added\n     * @returns The Token which initiated the toggle\n     */\n    toggleCombat(combat?: InstanceType<ConfiguredDocumentClass<typeof Combat>>): Promise<this>;\n\n    /**\n     * Toggle an active effect by its texture path.\n     * Copy the existing Array in order to ensure the update method detects the data as changed.\n     *\n     * @param effect  - The texture file-path of the effect icon to toggle on the Token.\n     * @param options - Additional optional arguments which configure how the effect is handled.\n     *                  (defaultValue: `{}`)\n     * @returns Was the texture applied (true) or removed (false)\n     */\n    toggleEffect(\n      effect: string | ConstructorParameters<ConfiguredDocumentClassForName<'ActiveEffect'>>[0],\n      options?: Token.EffectToggleOptions | undefined\n    ): Promise<boolean>;\n\n    /**\n     * A helper function to toggle the overlay status icon on the Token\n     * @internal\n     */\n    protected _toggleOverlayEffect(texture: string, { active }?: { active: boolean }): Promise<this>;\n\n    /**\n     * Toggle the visibility state of any Tokens in the currently selected set\n     * @returns A Promise which resolves to the updated Token documents\n     */\n    toggleVisibility(): Promise<InstanceType<ConfiguredDocumentClass<typeof TokenDocument>>[]>;\n\n    /**\n     * Return the token's sight origin, tailored for the direction of their movement velocity to break ties with walls\n     */\n    getSightOrigin(): {\n      x: number;\n      y: number;\n    };\n\n    /**\n     * A generic transformation to turn a certain number of grid units into a radius in canvas pixels.\n     * This function adds additional padding to the light radius equal to half the token width.\n     * This causes light to be measured from the outer token edge, rather than from the center-point.\n     * @param units - The radius in grid units\n     * @returns The radius in canvas units\n     */\n    getLightRadius(units: number): number;\n\n    protected override _getShiftedPosition(dx: number, dy: number): { x: number; y: number };\n\n    override rotate(...args: Parameters<PlaceableObject['rotate']>): Promise<this>;\n\n    protected override _onCreate(\n      options: InstanceType<ConfiguredDocumentClass<typeof TokenDocument>>['data']['_source'],\n      userId: DocumentModificationOptions\n    ): void;\n\n    protected override _onUpdate(\n      data?: DeepPartial<InstanceType<ConfiguredDocumentClass<typeof TokenDocument>>['data']['_source']>,\n      options?: DocumentModificationOptions & { animate?: boolean },\n      userId?: string\n    ): void;\n\n    protected override _onDelete(options?: DocumentModificationOptions, userId?: string): void;\n\n    protected override _canControl(\n      user?: InstanceType<ConfiguredDocumentClass<typeof User>>,\n      event?: PIXI.InteractionEvent\n    ): boolean;\n\n    protected override _canHUD(\n      user: InstanceType<ConfiguredDocumentClass<typeof User>>,\n      event?: PIXI.InteractionEvent\n    ): boolean;\n\n    protected override _canConfigure(\n      user?: InstanceType<ConfiguredDocumentClass<typeof User>>,\n      event?: PIXI.InteractionEvent\n    ): true;\n\n    protected override _canHover(\n      user?: InstanceType<ConfiguredDocumentClass<typeof User>>,\n      event?: PIXI.InteractionEvent\n    ): true;\n\n    protected override _canView(\n      user?: InstanceType<ConfiguredDocumentClass<typeof User>>,\n      event?: PIXI.InteractionEvent\n    ): boolean;\n\n    protected override _canDrag(\n      user: InstanceType<ConfiguredDocumentClass<typeof User>>,\n      event: PIXI.InteractionEvent\n    ): boolean;\n\n    protected override _onHoverIn(event: PIXI.InteractionEvent, options?: { hoverOutOthers?: boolean }): void;\n\n    protected override _onHoverOut(event: PIXI.InteractionEvent): false | void;\n\n    protected override _onClickLeft(event: PIXI.InteractionEvent): void;\n\n    protected override _onClickLeft2(event?: PIXI.InteractionEvent): void;\n\n    protected override _onClickRight2(event: PIXI.InteractionEvent): void;\n\n    protected override _onDragLeftDrop(event: PIXI.InteractionEvent): Promise<any>;\n\n    protected override _onDragLeftMove(event: PIXI.InteractionEvent): void;\n\n    protected override _onDragLeftCancel(event: MouseEvent): void;\n    /**\n     * @remarks This does not exist in foundry. It marks the controlIcon as not used because `Token` does never store a value here.\n     */\n    controlIcon: null;\n  }\n\n  namespace Token {\n    interface Bar {\n      attribute: string;\n    }\n\n    interface Velocity {\n      dx: number;\n      sx: number;\n      dy: number;\n      sy: number;\n    }\n\n    /** The UI frame container which depicts Token metadata and status, displayed in the ControlsLayer. */\n    interface ObjectHUD extends globalThis.ObjectHUD {\n      /** Token health bars */\n      bars?: PIXI.Container;\n\n      /** Token nameplate */\n      nameplate?: PreciseText;\n\n      /** Token elevation tooltip */\n      tooltip?: PreciseText;\n\n      /** Token status effects */\n      effects?: PIXI.Container;\n\n      /** Token target marker */\n      target?: PIXI.Graphics;\n    }\n\n    type InitializedObjectHUD = RequiredProps<ObjectHUD, 'bars' | 'nameplate' | 'tooltip' | 'effects' | 'target'>;\n\n    interface UpdateLightSourceOptions {\n      /**\n       * Defer refreshing the LightingLayer to manually call that refresh later.\n       * @defaultValue `false`\n       */\n      defer?: boolean | undefined;\n\n      /**\n       * Indicate that this light source has been deleted.\n       * @defaultValue `false`\n       */\n      deleted?: boolean | undefined;\n    }\n\n    interface UpdateVisionSourceOptions {\n      /**\n       * Defer refreshing the SightLayer to manually call that refresh later.\n       * @defaultValue `false`\n       */\n      defer?: boolean | undefined;\n\n      /**\n       * Indicate that this vision source has been deleted.\n       * @defaultValue `false`\n       */\n      deleted?: boolean | undefined;\n\n      /**\n       * Never update the Fog exploration progress for this update.\n       * @defaultValue `false`\n       */\n      skipUpdateFog?: boolean | undefined;\n    }\n\n    type UpdateSourceOptions = UpdateLightSourceOptions & UpdateVisionSourceOptions;\n\n    interface PlayOptions {\n      /**\n       * Should the video loop?\n       * @defaultValue `true`\n       */\n      loop?: boolean | undefined;\n\n      /**\n       * A specific timestamp between 0 and the video duration to begin playback\n       * @defaultValue `0`\n       */\n      offset?: number | undefined;\n\n      /**\n       * Desired volume level of the video's audio channel (if any)\n       * @defaultValue `0`\n       */\n      volume?: number | undefined;\n    }\n\n    interface DrawOverlayOptions {\n      src?: string | undefined;\n      tint?: number | undefined;\n    }\n\n    interface PositionOptions {\n      /**\n       * Animate the movement path\n       * @defaultValue `true`\n       */\n      animate?: boolean;\n\n      /**\n       * Automatically re-center the view if token movement goes off-screen\n       * @defaultValue `true`\n       */\n      recenter?: boolean | undefined;\n    }\n\n    interface EffectToggleOptions {\n      /**\n       * Force a certain active state for the effect\n       * @defaultValue `false`\n       */\n      active?: boolean | undefined;\n\n      /**\n       * Whether to set the effect as the overlay effect?\n       * @defaultValue `false`\n       */\n      overlay?: boolean | undefined;\n    }\n\n    interface SetTargetContext {\n      /**\n       * Assign the token as a target for a specific User\n       * @defaultValue `null`\n       */\n      user?: InstanceType<ConfiguredDocumentClass<typeof User>> | null | undefined;\n\n      /**\n       * Release other active targets for the same player?\n       * @defaultValue `true`\n       */\n      releaseOthers?: boolean | undefined;\n\n      /**\n       * Is this target being set as part of a group selection workflow?\n       * @defaultValue `Is this target being set as part of a group selection workflow?`\n       */\n      groupSelection?: boolean | undefined;\n    }\n  }\n\n  /**\n   * A \"secret\" global to help debug attributes of the currently controlled Token.\n   * This is only for debugging, and may be removed in the future, so it's not safe to use.\n   */\n  let _token: InstanceType<ConfiguredObjectClassForName<'Token'>> | null;\n}\n"
    ]
  