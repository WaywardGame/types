/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { ICorpse } from "entity/creature/corpse/ICorpse";
import { Context, InfoDisplayLevel } from "game/inspection/InfoProvider";
import Inspection from "game/inspection/Inspection";
import { IVector3 } from "utilities/math/IVector";
export default class CorpseInspection extends Inspection<ICorpse> {
    static getFromTile(position: IVector3): CorpseInspection[];
    constructor(corpse: ICorpse);
    get(context: Context): never[];
    getId(): string;
    getDisplayLevel(): InfoDisplayLevel;
    protected onCorpseRemove(_: any, corpse: ICorpse): void;
}
