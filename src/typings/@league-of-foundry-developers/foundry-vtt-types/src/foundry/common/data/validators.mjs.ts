
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\common\\data\\validators.mjs.d.ts",
      "/**\n * Test whether a string is a valid 16 character UID\n */\nexport declare function isValidId(id: string | null): boolean;\n\n/**\n * Test whether a file path has an extension in a list of provided extensions\n */\nexport declare function _hasFileExtension(path: string | null, extensions: string[]): boolean;\n\n/**\n * Test whether a file path has a valid image file extension or is base64 PNG data\n * @param path - The image path to test\n * @returns Is the path valid?\n */\nexport function hasImageExtension(path: string | null): boolean;\n/**\n * Test whether a data blob represents a base64 image\n * @param data - A base64 data string\n * @returns Is it a base64 image?\n */\nexport declare function isBase64Image(data: string): boolean;\n\n/**\n * Test whether an input represents a valid 6-character color string\n * @param color - The input string to test\n * @returns Is the string a valid color?\n */\nexport declare function isColorString(color: string): boolean;\n/**\n * Test whether a file path has a valid audio file extension\n * @param path - The image path to test\n * @returns Is the path valid?\n */\nexport declare function hasVideoExtension(path: string | null): boolean;\n\n/**\n * Test whether a file path has a valid video file extension\n * @param path - The image path to test\n * @returns Is the path valid?\n */\nexport declare function hasAudioExtension(path: string | null): boolean;\n/**\n * Assert that the given value is in an array of allowed options\n * @param val   - The value to test\n * @param array - The set of allowed options\n * @returns Is the valid included?\n */\nexport declare function valueInArray<T>(val: T, array: T[]): boolean;\n\n/**\n * Assert that the given value parses as a valid JSON string\n * @param val - The value to test\n * @returns Is the String valid JSON?\n */\nexport declare function isJSON(val: string): boolean;\n"
    ]
  