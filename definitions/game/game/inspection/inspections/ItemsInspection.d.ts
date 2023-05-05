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
import ItemInspection from "game/inspection/inspections/ItemInspection";
import ListInspection from "game/inspection/inspections/ListInspection";
import type Tile from "game/tile/Tile";
import type { TranslationGenerator } from "ui/component/IComponent";
import Text from "ui/component/Text";
export default class ItemsInspection extends ListInspection<ItemInspection> {
    static getFromTile(tile: Tile): never[] | ItemsInspection;
    private inspector;
    private inspectorPosition;
    private itemPositions;
    constructor(...itemInspections: ItemInspection[]);
    get(): import("../../../language/impl/TranslationImpl").default;
    getDefaultDisplayLevel(context: InfoProviderContext): InfoDisplayLevel.NonVerbose | InfoDisplayLevel.Always;
    protected initChildTextComponent(text: TranslationGenerator): Text;
    protected onTickEnd(): void;
    private updatePosition;
}
