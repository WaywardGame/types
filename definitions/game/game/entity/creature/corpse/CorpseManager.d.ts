/*!
 * Copyright 2011-2025 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import EntityManager from "@wayward/game/game/entity/EntityManager";
import type { CreatureType } from "@wayward/game/game/entity/creature/ICreature";
import Corpse from "@wayward/game/game/entity/creature/corpse/Corpse";
import type Tile from "@wayward/game/game/tile/Tile";
import type { TextContext } from "@wayward/game/language/ITranslation";
import { Article } from "@wayward/game/language/ITranslation";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
export default class CorpseManager extends EntityManager<Corpse> {
    protected readonly name = "CorpseManager";
    loadEntity(corpse: Corpse): void;
    create(type: CreatureType, tile: Tile, decay?: number, aberrant?: boolean, name?: string, qualityBonus?: number, respawned?: number): Corpse | undefined;
    protected onRemove(corpse: Corpse): boolean;
    updateAll(): void;
    getName(typeOrCorpse: CreatureType | Corpse, article?: Article, count?: number, showCount?: boolean): TranslationImpl;
    getCorpseTranslations(corpses: Corpse[], article?: Article, context?: TextContext): TranslationImpl[];
    getCorpseListTranslation(corpses: Corpse[], article?: Article, context?: TextContext): TranslationImpl;
}
