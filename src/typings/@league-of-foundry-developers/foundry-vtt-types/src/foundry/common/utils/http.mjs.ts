
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\common\\utils\\http.mjs.d.ts",
      "/**\n * A wrapper method around `fetch` that attaches an AbortController signal to the `fetch` call for clean timeouts\n * @see https://www.npmjs.com/package/node-fetch#request-cancellation-with-abortsignal\n * @param url            - The URL to make the Request to\n * @param data           - The data of the Request\n *                         (defalt: `{}`)\n * @param timeoutOptions - (default: `{}`)\n * @throws {@link HttpError}\n */\nexport function fetchWithTimeout(\n  url: string,\n  data?: RequestInit | undefined,\n  { timeoutMs, onTimeout }?: TimeoutOptions | undefined\n): Promise<Response>;\n\n/**\n * A small wrapper that automatically asks for JSON\n * @param url            - The URL to make the Request to\n * @param data           - The data of the Request\n *                         (defalt: `{}`)\n * @param timeoutOptions - (default: `{}`)\n */\nexport function fetchJsonWithTimeout(\n  url: string,\n  data?: RequestInit | undefined,\n  { timeoutMs, onTimeout }?: TimeoutOptions | undefined\n): Promise<unknown>;\n\n/**\n * Represents an HTTP Error when a non-OK response is returned by Fetch\n */\nexport class HttpError extends Error {\n  constructor(statusText: string, code: number, displayMessage?: string | undefined);\n\n  code: number;\n\n  displayMessage: string;\n}\n\ninterface TimeoutOptions {\n  /**\n   * How long to wait for a Response before cleanly aborting\n   * @defaultValue `30000`\n   */\n  timeoutMs?: number | undefined;\n\n  /**\n   * A method to invoke if and when the timeout is reached\n   * @defaultValue `() => {}`\n   */\n  onTimeout?: (() => void) | undefined;\n}\n"
    ]
  