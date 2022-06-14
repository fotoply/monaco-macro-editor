
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\index-lenient.d.ts",
      "import './index';\n\ndeclare global {\n  interface LenientGlobalVariableTypes {\n    canvas: never;\n    game: never;\n    socket: never;\n    ui: never;\n  }\n}\n"
    ]
  