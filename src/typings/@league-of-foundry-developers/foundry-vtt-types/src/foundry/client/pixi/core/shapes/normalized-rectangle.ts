
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\client\\pixi\\core\\shapes\\normalized-rectangle.d.ts",
      "/**\n * A PIXI.Rectangle where the width and height are always positive and the x and y are always the top-left\n */\ndeclare class NormalizedRectangle extends PIXI.Rectangle {\n  constructor(x: number, y: number, width: number, height: number);\n\n  /**\n   * Determine whether some other Rectangle intersects with this one.\n   * @param other - Some other rectangle against which to compare\n   * @returns Do the rectangles intersect?\n   */\n  intersects(other: PIXI.Rectangle): boolean;\n\n  /**\n   * Generate a new rectangle by rotating this one clockwise about its center by a certain number of radians\n   * @param radians - The angle of rotation\n   * @returns A new rotated rectangle\n   */\n  rotate(radians: number): NormalizedRectangle;\n\n  /**\n   * Create normalized rectangular bounds given a rectangle shape and an angle of central rotation.\n   * @param x       - The top-left x-coordinate of the un-rotated rectangle\n   * @param y       - The top-left y-coordinate of the un-rotated rectangle\n   * @param width   - The width of the un-rotated rectangle\n   * @param height  - The height of the un-rotated rectangle\n   * @param radians - The angle of rotation about the center\n   * @returns The constructed rotated rectangle bounds\n   */\n  static fromRotation(x: number, y: number, width: number, height: number, radians: number): NormalizedRectangle;\n}\n"
    ]
  