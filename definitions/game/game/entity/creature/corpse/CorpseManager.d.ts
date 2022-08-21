/*!
 * Copyright 2011-2021 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import Stream from "@wayward/goodstream/Stream";
import Corpse from "game/entity/creature/corpse/Corpse";
import type { CreatureType } from "game/entity/creature/ICreature";
import { CreationId } from "game/IGame";
import { ObjectManager } from "game/ObjectManager";
import type { TextContext } from "language/ITranslation";
export interface ICorpseManagerEvents {
    create(corpse: Corpse): any;
    remove(corpse: Corpse): any;
}
export default class CorpseManager extends ObjectManager<Corpse, ICorpseManagerEvents> {
    protected readonly creationId: CreationId;
    load(): void;
    create(type: CreatureType, x: number, y: number, z: number, decay?: number, aberrant?: boolean, name?: string, qualityBonus?: number): Corpse | undefined;
    updateAll(): void;
    remove(corpse: Corpse): void;
    getName(typeOrCorpse: CreatureType | Corpse, article?: false | "definite" | "indefinite", count?: number, showCount?: boolean): import("../../../../language/impl/TranslationImpl").default;
    getCorpseTranslations(corpses: Corpse[], article?: false | "definite" | "indefinite", context?: TextContext): Stream<import("../../../../language/impl/TranslationImpl").default>;
    getCorpseListTranslation(corpses: Corpse[], article?: false | "definite" | "indefinite", context?: TextContext): import("../../../../language/impl/TranslationImpl").default;
}
