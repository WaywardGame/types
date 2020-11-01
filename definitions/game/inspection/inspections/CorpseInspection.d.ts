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
import { ICorpse } from "entity/creature/corpse/ICorpse";
import { InfoDisplayLevel, InfoProviderContext } from "game/inspection/InfoProvider";
import Inspection from "game/inspection/Inspection";
import { IVector3 } from "utilities/math/IVector";
export default class CorpseInspection extends Inspection<ICorpse> {
    static getFromTile(position: IVector3): CorpseInspection[];
    constructor(corpse: ICorpse);
    get(context: InfoProviderContext): never[];
    getId(): string;
    getDisplayLevel(): InfoDisplayLevel;
    protected onCorpseRemove(_: any, corpse: ICorpse): void;
}
