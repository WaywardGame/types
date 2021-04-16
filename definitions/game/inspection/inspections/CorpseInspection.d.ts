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
import Corpse from "game/entity/creature/corpse/Corpse";
import { InfoDisplayLevel } from "game/inspection/IInfoProvider";
import { InfoProviderContext } from "game/inspection/InfoProviderContext";
import Inspection from "game/inspection/Inspection";
import { IVector3 } from "utilities/math/IVector";
export default class CorpseInspection extends Inspection<Corpse> {
    static getFromTile(position: IVector3): CorpseInspection[];
    static handles(corpse: unknown): boolean;
    constructor(corpse: Corpse);
    get(_context: InfoProviderContext): never[];
    getId(): string;
    getDefaultDisplayLevel(): InfoDisplayLevel;
    protected onCorpseRemove(_: any, corpse: Corpse): void;
}
