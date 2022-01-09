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
import { InfoDisplayLevel } from "game/inspection/IInfoProvider";
import type { InfoProviderContext } from "game/inspection/InfoProviderContext";
import CorpseInspection from "game/inspection/inspections/CorpseInspection";
import ListInspection from "game/inspection/inspections/ListInspection";
import type { TranslationGenerator } from "ui/component/IComponent";
import Text from "ui/component/Text";
import type { IVector3 } from "utilities/math/IVector";
export default class CorpsesInspection extends ListInspection<CorpseInspection> {
    static getFromTile(position: IVector3): never[] | CorpsesInspection;
    constructor(...corpseInspections: CorpseInspection[]);
    get(context: InfoProviderContext): import("../../../language/impl/TranslationImpl").default;
    getDefaultDisplayLevel(): InfoDisplayLevel;
    protected initChildTextComponent(text: TranslationGenerator): Text;
}
