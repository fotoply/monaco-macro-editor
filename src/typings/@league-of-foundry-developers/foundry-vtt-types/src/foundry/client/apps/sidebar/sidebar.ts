
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\client\\apps\\sidebar\\sidebar.d.ts",
      "/**\n * Render the Sidebar container, and after rendering insert Sidebar tabs.\n * @typeParam Options - the type of the options object\n */\ndeclare class Sidebar<Options extends ApplicationOptions = ApplicationOptions> extends Application<Options> {\n  /**\n   * Singleton application instances for each sidebar tab\n   * @defaultValue `{}`\n   */\n  tabs: Partial<Record<string, SidebarTab>>;\n\n  /**\n   * Track whether the sidebar container is currently collapsed\n   * @defaultValue `false`\n   * @internal\n   */\n  protected _collapsed: boolean;\n\n  /**\n   * @defaultValue\n   * ```ts\n   * foundry.utils.mergeObject(super.defaultOptions, {\n   *   id: \"sidebar\",\n   *   template: \"templates/sidebar/sidebar.html\",\n   *   popOut: false,\n   *   width: 300,\n   *   tabs: [{navSelector: \".tabs\", contentSelector: \"#sidebar\", initial: \"chat\"}]\n   * }\n   * ```\n   */\n  static override get defaultOptions(): ApplicationOptions;\n\n  /**\n   * Return the name of the active Sidebar tab\n   */\n  get activeTab(): string;\n\n  /**\n   * Singleton application instances for each popout tab\n   */\n  get popouts(): Partial<Record<string, SidebarTab>>;\n\n  override getData(options?: Partial<Options>): Sidebar.Data;\n\n  /**\n   * @internal\n   */\n  protected override _render(force?: boolean, options?: Application.RenderOptions<Options>): Promise<void>;\n\n  /**\n   * Activate a Sidebar tab by it's name\n   * @param tabName - The tab name corresponding to it's \"data-tab\" attribute\n   */\n  activateTab(tabName: string): void;\n\n  /**\n   * Expand the Sidebar container from a collapsed state.\n   * Take no action if the sidebar is already expanded.\n   */\n  expand(): void;\n\n  /**\n   * Collapse the sidebar to a minimized state.\n   * Take no action if the sidebar is already collapsed.\n   */\n  collapse(): void;\n\n  override activateListeners(html: JQuery): void;\n\n  /**\n   * @internal\n   */\n  protected override _onChangeTab(event: MouseEvent | null, tabs: Tabs, active: string): void;\n\n  /**\n   * Handle the special case of left-clicking a tab when the sidebar is collapsed.\n   * @param event - The originating click event\n   * @internal\n   */\n  protected _onLeftClickTab(event: MouseEvent): void;\n\n  /**\n   * Handle right-click events on tab controls to trigger pop-out containers for each tab\n   * @param event - The originating contextmenu event\n   * @internal\n   */\n  protected _onRightClickTab(event: MouseEvent): void;\n\n  /**\n   * Handle toggling of the Sidebar container's collapsed or expanded state\n   * @internal\n   */\n  protected _onToggleCollapse(event: MouseEvent): void;\n}\n\ndeclare namespace Sidebar {\n  interface Data {\n    coreUpdate: string | false;\n    systemUpdate: string | false;\n    user: Game['user'];\n  }\n}\n"
    ]
  