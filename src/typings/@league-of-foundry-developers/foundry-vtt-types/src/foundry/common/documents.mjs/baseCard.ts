
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\common\\documents.mjs\\baseCard.d.ts",
      "import { ConfiguredDocumentClass } from '../../../types/helperTypes';\nimport { DocumentMetadata } from '../abstract/document.mjs';\nimport { Document } from '../abstract/module.mjs';\nimport * as data from '../data/data.mjs';\nimport type { CardDataConstructorData, CardDataSource } from '../data/data.mjs/cardData';\nimport { BaseCards } from './baseCards';\nimport { BaseUser } from './baseUser';\n\ntype CardMetadata = Merge<\n  DocumentMetadata,\n  {\n    name: 'Card';\n    collection: 'cards';\n    label: 'DOCUMENT.Card';\n    labelPlural: 'DOCUMENT.Cards';\n    isEmbedded: true;\n    types: string[];\n    hasSystemData: true;\n    permissions: {\n      create: (user: BaseUser, doc: BaseCard, data: CardDataSource) => boolean;\n      update: (user: BaseUser, doc: BaseCard, data: DeepPartial<CardDataConstructorData>) => boolean;\n    };\n  }\n>;\n\n/**\n * The base Card definition which defines common behavior of an embedded Card document shared by both client and server.\n */\nexport declare class BaseCard extends Document<\n  data.CardData,\n  InstanceType<ConfiguredDocumentClass<typeof BaseCards>>,\n  CardMetadata\n> {\n  static override get schema(): typeof data.CardData;\n\n  static override get metadata(): CardMetadata;\n\n  /**\n   * The sub-type of Card.\n   */\n  get type(): data.CardData['type'];\n\n  /**\n   * Is a User able to create a new embedded Card document within this parent?\n   */\n  protected static _canCreate(user: BaseUser, doc: BaseCard, data: CardDataSource): boolean;\n\n  /**\n   * Is a user able to update an existing Card?\n   */\n  protected static _canUpdate(user: BaseUser, doc: BaseCard, data: DeepPartial<CardDataConstructorData>): boolean;\n\n  override testUserPermission(\n    user: BaseUser,\n    permission: keyof typeof foundry.CONST.DOCUMENT_PERMISSION_LEVELS | foundry.CONST.DOCUMENT_PERMISSION_LEVELS,\n    { exact }: { exact?: boolean }\n  ): boolean;\n}\n"
    ]
  