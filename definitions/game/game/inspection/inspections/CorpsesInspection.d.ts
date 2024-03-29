/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { InfoDisplayLevel } from "game/inspection/IInfoProvider";
import type { InfoProvider } from "game/inspection/InfoProvider";
import type { InfoProviderContext } from "game/inspection/InfoProviderContext";
import CorpseInspection from "game/inspection/inspections/CorpseInspection";
import ListInspection from "game/inspection/inspections/ListInspection";
import type Tile from "game/tile/Tile";
import type { TranslationGenerator } from "ui/component/IComponent";
import Text from "ui/component/Text";
export default class CorpsesInspection extends ListInspection<CorpseInspection> {
    static getFromTile(tile: Tile): never[] | CorpsesInspection;
    constructor(...corpseInspections: CorpseInspection[]);
    get(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider>;
    getDefaultDisplayLevel(): InfoDisplayLevel;
    protected initChildTextComponent(text: TranslationGenerator): Text;
}
