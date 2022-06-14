
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\client\\dice\\terms\\string.d.ts",
      "declare global {\n  /**\n   * A type of RollTerm used to represent strings which have not yet been matched.\n   */\n  class StringTerm extends RollTerm {\n    constructor({ term, options }: StringTermConstructorData);\n\n    term: StringTermConstructorData['term'];\n\n    /**\n     * @defaultValue `[\"term\"]`\n     */\n    static SERIALIZE_ATTRIBUTES: string[];\n\n    get expression(): string;\n\n    get total(): string;\n\n    override get isDeterministic(): boolean;\n\n    evaluate(options?: InexactPartial<RollTerm.EvaluationOptions>): never;\n  }\n}\n\ninterface StringTermConstructorData {\n  term: string;\n\n  options?: RollTerm.Options;\n}\n\nexport {};\n"
    ]
  