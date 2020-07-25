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
import { Context, InfoDisplayLevel } from "game/inspection/InfoProvider";
import CorpseInspection from "game/inspection/inspections/CorpseInspection";
import ListInspection from "game/inspection/inspections/ListInspection";
import { TranslationGenerator } from "newui/component/IComponent";
import Text from "newui/component/Text";
import { IVector3 } from "utilities/math/IVector";
export default class CorpsesInspection extends ListInspection<CorpseInspection> {
    static getFromTile(position: IVector3): never[] | CorpsesInspection;
    constructor(...corpseInspections: CorpseInspection[]);
    get(context: Context): import("../../../language/Translation").default;
    getDisplayLevel(): InfoDisplayLevel;
    protected initChildTextComponent(text: TranslationGenerator): Text;
}
