
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\client\\pixi\\core\\shapes\\ray.d.ts",
      "import type { LineIntersection } from '../../../../common/utils/geometry.mjs.js';\n\ndeclare global {\n  interface RayIntersection {\n    /** The x-coordinate of intersection */\n    x: number;\n\n    /** The y-coordinate of intersection */\n    y: number;\n\n    /** The proximity to the Ray origin, as a ratio of distance */\n    t0: number;\n\n    /** The proximity to the Ray destination, as a ratio of distance */\n    t1: number;\n  }\n\n  /**\n   * A ray for the purposes of computing sight and collision\n   * Given points A[x,y] and B[x,y]\n   *\n   * Slope-Intercept form:\n   * y = a + bx\n   * y = A.y + ((B.y - A.Y) / (B.x - A.x))x\n   *\n   * Parametric form:\n   * R(t) = (1-t)A + tB\n   */\n  class Ray {\n    /**\n     * @param A - The origin of the Ray\n     * @param B - The destination of the Ray\n     */\n    constructor(A: Point, B: Point);\n\n    /**\n     * The origin point, `{x, y}`\n     */\n    A: Point;\n\n    /**\n     * The destination point, `{x, y}`\n     */\n    B: Point;\n\n    /**\n     * The origin y-coordinate\n     */\n    y0: number;\n\n    /**\n     * The origin x-coordinate\n     */\n    x0: number;\n\n    /**\n     * The horizontal distance of the ray, x1 - x0\n     */\n    dx: number;\n\n    /**\n     * The vertical distance of the ray, y1 - y0\n     */\n    dy: number;\n\n    /**\n     * The slope of the ray, dy over dx\n     */\n    slope: number;\n\n    /**\n     * The cached angle, computed lazily in Ray#angle\n     * @defaultValue `undefined`\n     * @internal\n     */\n    protected _angle: number | undefined;\n\n    /**\n     * The cached distance, computed lazily in Ray#distance\n     * @defaultValue `undefined`\n     * @internal\n     */\n    protected _distance: number | undefined;\n\n    /**\n     * The normalized angle of the ray in radians on the range (-PI, PI).\n     * The angle is computed lazily (only if required) and cached.\n     */\n    get angle(): number;\n    set angle(value: number);\n\n    /**\n     * A bounding rectangle that encompasses the Ray\n     */\n    get bounds(): NormalizedRectangle;\n\n    /**\n     * The distance (length) of the Ray in pixels.\n     * The distance is computed lazily (only if required) and cached.\n     */\n    get distance(): number;\n    set distance(value: number);\n\n    /**\n     * A factory method to construct a Ray from an origin point, an angle, and a distance\n     * @param x        - The origin x-coordinate\n     * @param y        - The origin y-coordinate\n     * @param radians  - The ray angle in radians\n     * @param distance - The distance of the ray in pixels\n     * @returns The constructed Ray instance\n     */\n    static fromAngle(x: number, y: number, radians: number, distance: number): Ray;\n\n    /**\n     * A factory method to construct a Ray from points in array format.\n     * @param A - The origin point [x,y]\n     * @param B - The destination point [x,y]\n     * @returns The constructed Ray instance\n     */\n    static fromArrays(A: PointArray, B: PointArray): Ray;\n\n    /**\n     * Project the Array by some proportion of it's initial distance.\n     * Return the coordinates of that point along the path.\n     * @param t - The distance along the Ray\n     * @returns The coordinates of the projected point\n     */\n    project(t: number): { x: number; y: number };\n\n    /**\n     * Create a Ray by projecting a certain distance towards a known point.\n     * @param origin   - The origin of the Ray\n     * @param point    - The point towards which to project\n     * @param distance - The distance of projection\n     */\n    static towardsPoint(origin: Point, point: Point, distance: number): Ray;\n\n    /**\n     * Create a Ray by projecting a certain squared-distance towards a known point.\n     * @param origin    - The origin of the Ray\n     * @param point     - The point towards which to project\n     * @param distance2 - The squared distance of projection\n     */\n    static towardsPointSquared(origin: Point, point: Point, distance2: number): Ray;\n\n    /**\n     * Reverse the direction of the Ray, returning a second Ray\n     */\n    reverse(): Ray;\n\n    /**\n     * Create a new ray which uses the same origin point, but a slightly offset angle and distance\n     * @param offset   - An offset in radians which modifies the angle of the original Ray\n     * @param distance - A distance the new ray should project, otherwise uses the same distance.\n     * @returns A new Ray with an offset angle\n     */\n    shiftAngle(angleOffset: number, distance?: number): Ray;\n\n    /**\n     * Find the point I[x,y] and distance t* on ray R(t) which intersects another ray\n     * @see foundry.utils.lineLineIntersection\n     */\n    intersectSegment(coords: [x0: number, y0: number, x1: number, y1: number]): LineIntersection | null;\n  }\n\n  /**\n   * A subclass of Ray that is used specifically for computing source polygons\n   *\n   * This was used for the RadialSweepPolygon but can now be deleted once that is\n   * @deprecated since v9d2\n   */\n  class SightRay extends Ray {\n    /**\n     * The array of sorted collision points which apply for this Ray.\n     */\n    collisions: WallEndpoint[];\n\n    /**\n     * The target endpoint at which this Ray was fired\n     */\n    endpoint: WallEndpoint | null;\n\n    /**\n     * The result objects which records the outcome of this Ray\n     */\n    result: {\n      collisions: unknown[];\n      continuation: unknown | undefined;\n      limitation: number;\n      superfluous: boolean;\n      stopped: boolean;\n      activeWalls: unknown | undefined;\n    };\n\n    /**\n     * The final collision point that this SightRay encountered.\n     */\n    get lastCollision(): WallEndpoint | null;\n  }\n}\n"
    ]
  