
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\client\\core\\gamepad.d.ts",
      "/** Management class for Gamepad events */\ndeclare class GamepadManager {\n  constructor();\n\n  /**\n   * @defaultValue `null`\n   * @internal\n   */\n  protected _gamepadPoller: number | null;\n\n  /**\n   * The connected Gamepads\n   * @internal\n   */\n  protected _connectedGamepads: Map<string, ConnectedGamepad>;\n\n  /**\n   * How often Gamepad polling should check for button presses\n   * @defaultValue `100`\n   */\n  static GAMEPAD_POLLER_INTERVAL_MS: number;\n\n  /**\n   * Handles a Gamepad Connection event, adding its info to the poll list\n   * @param event - The originating Event\n   * @internal\n   */\n  protected _onGamepadConnect(event: GamepadEvent): void;\n\n  /**\n   * Handles a Gamepad Disconnect event, removing it from consideration for polling\n   * @param event - The originating Event\n   * @internal\n   */\n  protected _onGamepadDisconnect(event: GamepadEvent): void;\n\n  /**\n   * Polls all Connected Gamepads for updates. If they have been updated, checks status of Axis and Buttons,\n   * firing off Keybinding Contexts as appropriate\n   * @internal\n   */\n  protected _pollGamepads(): void;\n\n  /**\n   * Converts a Gamepad Input event into a KeyboardEvent, then fires it\n   * @param gamepadId - The string representation of the Gamepad Input\n   * @param up        - True if the Input is pressed or active\n   * @param repeat    - True if the Input is being held\n   *                    (default: `false`)\n   * @internal\n   */\n  protected _handleGamepadInput(gamepadId: string, up: boolean, repeat?: boolean): void;\n}\n"
    ]
  