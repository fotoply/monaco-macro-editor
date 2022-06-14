import { ConfiguredDocumentClass, ConfiguredDocumentClassForName } from "@league-of-foundry-developers/foundry-vtt-types/src/types/helperTypes";
import { attachMonacoEditor, registerTypes, setupMonaco } from "./editor";
import { furnaceFix } from "./fixes/furnace";
import { bailOnMacroEditor } from "./fixes/macroeditor";
import { registerSettings, settings } from "./settings";
import { MacroFormApplication } from "./types";


Hooks.once("init", async function () {
  registerSettings();
  if (settings.enableMonacoEditor) {
    if(!settings.delayedLoading)
      await setupMonaco()
  }
});

Hooks.on("monaco-editor.ready", async (register: typeof registerTypes) => {
  console.log("Monaco Editor | Load types")
  // Load in definitions from @league-of-foundry-developers/foundry-vtt-types
  const context = require.context("./typings", true, /\.ts$/i, "lazy-once");
  const results = await Promise.allSettled(
    context.keys().map(async (item) => {
      const {
        default: [path, content],
      } = await context(item);
      return register(path, content);
    })
  );

  const failed = results.filter(({ status }) => status === "rejected");
  if (failed.length) {
    throw new Error(`Monaco Editor: Failed to get ${failed.length} types`);
  }
});


Hooks.on("renderMacroConfig", (app: MacroFormApplication) => {
  if (settings.enableMonacoEditor) {
    bailOnMacroEditor()
    furnaceFix(app.form!);
    attachMonacoEditor(app.object.id!, app.form!)
  }
});

Hooks.on<Hooks.CloseApplication<MacroFormApplication>>("closeMacroConfig", (app, html) => {
  console.log(`Closed macro editor ${app.object.data._id}`)
})