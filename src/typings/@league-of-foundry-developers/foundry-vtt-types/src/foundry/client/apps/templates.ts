
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\client\\apps\\templates.d.ts",
      "export {};\n\ndeclare global {\n  let _templateCache: Record<string, Handlebars.TemplateDelegate>;\n\n  /**\n   * Get a template from the server by fetch request and caching the retrieved result\n   * @param path - The web-accessible HTML template URL\n   * @returns A Promise which resolves to the compiled Handlebars template\n   */\n  function getTemplate(path: string): Promise<Handlebars.TemplateDelegate>;\n\n  /**\n   * Load and cache a set of templates by providing an Array of paths\n   * @param paths - An array of template file paths to load\n   */\n  function loadTemplates(paths: string[]): Promise<Handlebars.TemplateDelegate[]>;\n\n  /**\n   * Get and render a template using provided data and handle the returned HTML\n   * Support asynchronous file template file loading with a client-side caching layer\n   *\n   * Allow resolution of prototype methods and properties since this all occurs within the safety of the client.\n   * @see {@link https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access}\n   *\n   * @param path - The file path to the target HTML template\n   * @param data - A data object against which to compile the template\n   *\n   * @returns Returns the rendered HTML\n   */\n  function renderTemplate(path: string, data: object): Promise<string>;\n\n  /**\n   * A collection of Handlebars template helpers which can be used within HTML templates.\n   */\n  class HandlebarsHelpers {\n    /**\n     * For checkboxes, if the value of the checkbox is true, add the \"checked\" property, otherwise add nothing.\n     */\n    static checked(value: unknown): string;\n\n    /**\n     * For use in form inputs. If the supplied value is truthy, add the \"disabled\" property, otherwise add nothing.\n     */\n    static disabled(value: unknown): string;\n\n    /**\n     * Concatenate a number of string terms into a single string.\n     * This is useful for passing arguments with variable names.\n     * @param values - The values to concatenate\n     *\n     * @example <caption>Concatenate several string parts to create a dynamic variable</caption>\n     * ```handlebars\n     * {{filePicker target=(concat \"faces.\" i \".img\") type=\"image\"}}\n     * ```\n     */\n    static concat(...values: string[]): Handlebars.SafeString;\n\n    /**\n     * Render a pair of inputs for selecting a color.\n     * @param options - Helper options\n     */\n    static colorPicker(options: HandlebarsHelpers.ColorPickerOptions): Handlebars.SafeString;\n\n    /**\n     * Construct an editor element for rich text editing with TinyMCE\n     * @param options - Helper options\n     */\n    static editor(options: HandlebarsHelpers.EditorOptions): Handlebars.SafeString;\n\n    /**\n     * Render a file-picker button linked to an `<input>` field\n     * @param options - Helper options\n     */\n    static filePicker(options: HandlebarsHelpers.FilePickerOptions): Handlebars.SafeString | string;\n\n    /**\n     * Translate a provided string key by using the loaded dictionary of localization strings.\n     *\n     * @example <caption>Translate a provided localization string, optionally including formatting parameters</caption>\n     * ```handlebars\n     * <label>{{localize \"ACTOR.Create\"}}</label> <!-- \"Create Actor\" -->\n     * <label>{{localize \"CHAT.InvalidCommand\" command=foo}}</label> <!-- \"foo is not a valid chat message command.\" -->\n     * ```\n     */\n    static localize(value: string, options: HandlebarsHelpers.LocalizeOptions): string;\n\n    /**\n     * @param value   - A numeric value to format\n     * @param options - Additional options which customize the resulting format\n     * @returns The formatted string to be included in a template\n     * A string formatting helper to display a number with a certain fixed number of decimals and an explicit sign.\n     */\n    static numberFormat(value: string, options: HandlebarsHelpers.NumberFormatOptions): string;\n\n    /**\n     * Render a form input field of type number with value appropriately rounded to step size.\n     */\n    static numberInput(value: string, options: HandlebarsHelpers.NumberInputOptions): Handlebars.SafeString;\n\n    /**\n     * A helper to create a set of radio checkbox input elements in a named set.\n     * The provided keys are the possible radio values while the provided values are human readable labels.\n     *\n     * @param name     - The radio checkbox field name\n     * @param choices  - A mapping of radio checkbox values to human readable labels\n     * @param options  - Options which customize the radio boxes creation\n     *\n     * @example <caption>The provided input data</caption>\n     * ```typescript\n     * let groupName = \"importantChoice\";\n     * let choices = {a: \"Choice A\", b: \"Choice B\"};\n     * let chosen = \"a\";\n     * ```\n     *\n     * @example <caption>The template HTML structure</caption>\n     * ```handlebars\n     * <div class=\"form-group\">\n     *   <label>Radio Group Label</label>\n     *   <div class=\"form-fields\">\n     *     {{radioBoxes groupName choices checked=chosen localize=true}}\n     *   </div>\n     * </div>\n     * ```\n     */\n    static radioBoxes(\n      name: string,\n      choices: Record<string, string>,\n      options: HandlebarsHelpers.RadioBoxesOptions\n    ): Handlebars.SafeString;\n\n    /**\n     * Render a pair of inputs for selecting a value in a range.\n     * @param options - Helper options\n     */\n    static rangePicker(options: HandlebarsHelpers.RangePickerOptions): Handlebars.SafeString;\n\n    /**\n     * A helper to assign an `<option>` within a `<select>` block as selected based on its value\n     * Escape the string as handlebars would, then escape any regexp characters in it\n     */\n    static select(selected: string, options: HandlebarsHelpers.SelectOptions): string;\n\n    /**\n     * A helper to create a set of `<option>` elements in a `<select>` block based on a provided dictionary.\n     * The provided keys are the option values while the provided values are human readable labels.\n     * This helper supports both single-select as well as multi-select input fields.\n     *\n     * @param choices - A mapping of radio checkbox values to human readable labels\n     * @param options - Helper options\n     *\n     * @example <caption>The provided input data</caption>\n     * ```typescript\n     * let choices = {a: \"Choice A\", b: \"Choice B\"};\n     * let value = \"a\";\n     * ```\n     *\n     * @example <caption>The template HTML structure</caption>\n     * ```handlebars\n     * <select name=\"importantChoice\">\n     *   {{selectOptions choices selected=value localize=true}}\n     * </select>\n     * ```\n     *\n     * @example <caption>The resulting HTML</caption>\n     * ```handlebars\n     * <select name=\"importantChoice\">\n     *   <option value=\"a\" selected>Choice A</option>\n     *   <option value=\"b\">Choice B</option>\n     * </select>\n     * ```\n     *\n     * @example <caption>Using inverted</caption>\n     * ```typescript\n     * let choices = {\"Choice A\": \"a\", \"Choice B\": \"b\"};\n     * let value = \"a\";\n     * ```\n     *\n     * @example <caption>The template HTML structure</caption>\n     * ```handlebars\n     * <select name=\"importantChoice\">\n     *   {{selectOptions choices selected=value inverted=true}}\n     * </select>\n     * ```\n     *\n     * @example <caption>Using nameAttr and labelAttr with objects</caption>\n     * ```typescript\n     * let choices = {foo: {key: \"a\", label: \"Choice A\"}, bar: {key: \"b\", label: \"Choice B\"}};\n     * let value = \"b\";\n     * ```\n     *\n     * @example <caption>The template HTML structure</caption>\n     * ```handlebars\n     * <select name=\"importantChoice\">\n     *   {{selectOptions choices selected=value nameAttr=\"key\" labelAttr=\"label\"}}\n     * </select>\n     * ```\n     *\n     * @example <caption>Using nameAttr and labelAttr with arrays</caption>\n     * ```typescript\n     * let choices = [{key: \"a\", label: \"Choice A\"}, {key: \"b\", label: \"Choice B\"}];\n     * let value = \"b\";\n     * ```\n     *\n     * @example <caption>The template HTML structure</caption>\n     * ```handlebars\n     * <select name=\"importantChoice\">\n     *   {{selectOptions choices selected=value nameAttr=\"key\" labelAttr=\"label\"}}\n     * </select>\n     * ```\n     */\n    static selectOptions(\n      choices: Record<string, string>,\n      options: HandlebarsHelpers.SelectOptionsOptions\n    ): Handlebars.SafeString;\n  }\n\n  namespace HandlebarsHelpers {\n    interface ColorPickerOptions extends Handlebars.HelperOptions {\n      hash: {\n        /**\n         * The name of the field to create\n         */\n        name?: string;\n\n        /**\n         * The current color value\n         */\n        value?: string;\n\n        /**\n         * A default color string if a value is not provided\n         */\n        default?: string;\n      };\n    }\n\n    interface EditorOptions extends Handlebars.HelperOptions {\n      hash: {\n        /**\n         * The named target data element\n         */\n        target: string;\n\n        /**\n         * Is the current user an owner of the data?\n         */\n        owner?: boolean;\n\n        /**\n         * Include a button used to activate the editor later?\n         */\n        button?: boolean;\n\n        /**\n         * Is the text editor area currently editable?\n         */\n        editable?: boolean;\n\n        /**\n         * Replace dynamic document links?\n         * @defaultValue `true`\n         */\n        documents?: boolean;\n\n        /**\n         * The data object providing context for inline rolls\n         */\n        rollData?: object | (() => object);\n\n        /**\n         * The original HTML content as a string\n         * @defaultValue `\"\"`\n         */\n        content?: string;\n      };\n    }\n\n    interface FilePickerOptions extends Handlebars.HelperOptions {\n      hash: {\n        /**\n         * The type of FilePicker instance to display\n         */\n        type?: FilePicker.Type;\n\n        /**\n         * The field name in the target data\n         */\n        target: string;\n      };\n    }\n\n    interface LocalizeOptions extends Handlebars.HelperOptions {\n      hash: Record<string, unknown>;\n    }\n\n    interface NumberFormatOptions extends Handlebars.HelperOptions {\n      hash: {\n        /**\n         * The number of decimal places to include in the resulting string\n         * @defaultValue `0`\n         */\n        decimals?: number;\n\n        /**\n         * Whether to include an explicit \"+\" sign for positive numbers\n         * @defaultValue `false`\n         */\n        sign?: boolean;\n      };\n    }\n\n    interface NumberInputOptions extends Handlebars.HelperOptions {\n      hash: {\n        /**\n         * @defaultValue `\"\"`\n         */\n        name?: string;\n\n        step?: number;\n\n        /**\n         * @defaultValue `false`\n         */\n        disabled?: boolean;\n\n        /**\n         * @defaultValue `\"\"`\n         */\n        placeholder?: string;\n\n        /**\n         * @defaultValue `\"\"`\n         */\n        class?: string;\n\n        min?: number;\n\n        max?: number;\n      };\n    }\n\n    interface RadioBoxesOptions extends Handlebars.HelperOptions {\n      hash: {\n        /**\n         * Which key is currently checked?\n         * @defaultValue `null`\n         */\n        checked?: string;\n\n        /**\n         * Pass each label through string localization?\n         * @defaultValue `false`\n         */\n        localize?: boolean;\n      };\n    }\n\n    interface RangePickerOptions extends Handlebars.HelperOptions {\n      /**\n       * The name of the field to create\n       * @defaultValue `'range'`\n       */\n      name?: string;\n\n      /**\n       * The current range value\n       */\n      value?: number;\n\n      /**\n       * The minimum allowed value\n       */\n      min?: number;\n\n      /**\n       * The maximum allowed value\n       */\n      max?: number;\n\n      /**\n       * The allowed step size\n       */\n      step?: number;\n    }\n\n    type SelectOptions = Handlebars.HelperOptions;\n\n    interface SelectOptionsOptions extends Handlebars.HelperOptions {\n      hash: {\n        /**\n         * Which key or array of keys that are currently selected?\n         */\n        selected?: string | string[];\n\n        /**\n         * Pass each label through string localization?\n         * @defaultValue `false`\n         */\n        localize?: boolean;\n\n        /**\n         * Add a blank option as the first option with this label\n         */\n        blank?: string;\n\n        /**\n         * Look up a property in the choice object values to use as the option value\n         */\n        nameAttr?: string;\n\n        /**\n         * Look up a property in the choice object values to use as the option label\n         */\n        labelAttr?: string;\n\n        /**\n         * Use the choice object value as the option value, and the key as the label\n         * instead of vice-versa\n         */\n        inverted?: boolean;\n      };\n    }\n  }\n}\n"
    ]
  