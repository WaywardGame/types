/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import Corpse from "entity/creature/corpse/Corpse";
import { CreatureType } from "entity/creature/ICreature";
import EventEmitter from "event/EventEmitter";
import Translation, { TextContext } from "language/Translation";
export interface ICorpseManagerEvents {
    create(corpse: Corpse): any;
    remove(corpse: Corpse): any;
}
export default class CorpseManager extends EventEmitter.Host<ICorpseManagerEvents> {
    create(type: CreatureType, x: number, y: number, z: number, decay?: number, aberrant?: boolean, name?: string, qualityBonus?: number): Corpse | undefined;
    updateAll(): void;
    remove(corpse: Corpse): void;
    getName(typeOrCorpse: CreatureType | Corpse, article?: boolean, count?: number, showCount?: boolean): Translation;
    getCorpseTranslations(corpses: Corpse[], article?: boolean, context?: TextContext): import("@wayward/goodstream/Stream").default<Translation>;
    getCorpseListTranslation(corpses: Corpse[], article?: boolean, context?: TextContext): Translation;
}
