
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\perceptionManager.d.ts",
      "/**\n * A helper class which manages the refresh workflow for perception layers on the canvas.\n * This controls the logic which batches multiple requested updates to minimize the amount of work required.\n * A singleton instance is available as canvas#perception.\n * @see Canvas#perception\n */declare class PerceptionManager{constructor();/**\n * The number of milliseconds by which to throttle non-immediate refreshes\n */protected _throttleMS:number|undefined;/**\n * An internal tracker for the last time that a perception refresh was executed\n */protected _refreshTime:number|undefined;/**\n * An internal tracker for the window timeout that applies a debounce to the refresh\n */protected _timeout:number|undefined;/**\n * Cache a reference to the canvas scene to avoid attempting scheduled refreshes after the scene is changed\n */protected _scene:string|undefined;/**\n * The default values of update parameters.\n * When a refresh occurs, the staged parameters are reset to these initial values.\n */static DEFAULTS:PerceptionManager.Options;/**\n * The configured parameters for the next refresh.\n */\nparams:PerceptionManager.Options;/**\n * Cancel any pending perception refresh.\n */\ncancel():void;/**\n * Schedule a perception update with requested parameters.\n * @param options - (default: `{}`)\n */\nschedule(options?:DeepPartial<PerceptionManager.Options>):void;/**\n * Perform an immediate perception update.\n * @param options - (default: `{}`)\n */\nupdate(options?:DeepPartial<PerceptionManager.Options>):void;/**\n * A helper function to perform an immediate initialization plus incremental refresh.\n */\ninitialize():ReturnType<this['update']>;/**\n * A helper function to perform an incremental refresh only.\n */\nrefresh():ReturnType<this['update']>;/**\n * Set option flags which configure the next perception update\n */protected _set(options:DeepPartial<PerceptionManager.Options>):void;/**\n * Perform the perception update workflow\n * @param immediate - Perform the workflow immediately, otherwise it is throttled\n *                    (default: `false`)\n */protected _update(immediate?:boolean):void;/**\n * Reset the values of a pending refresh back to their default states.\n */protected _reset():void;}declare namespace PerceptionManager{interface Options{lighting:{initialize:boolean;refresh:boolean;};sight:{initialize:boolean;refresh:boolean;noUpdateFog:boolean;forceUpdateFog:boolean;};sounds:{initialize:boolean;refresh:boolean;fade:boolean;};foreground:{refresh:boolean;};}}"
    ]
  