
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\types\\augments\\pixiGraphicsSmooth.d.ts",
      "import * as graphicsSmooth from '@pixi/graphics-smooth';\n\ndeclare global {\n  namespace PIXI {\n    export import smooth = graphicsSmooth; // eslint-disable-line @typescript-eslint/no-unused-vars\n  }\n}\n"
    ]
  