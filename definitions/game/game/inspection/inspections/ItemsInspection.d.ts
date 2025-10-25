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
import { InfoDisplayLevel } from "@wayward/game/game/inspection/IInfoProvider";
import type { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import ItemInspection from "@wayward/game/game/inspection/inspections/ItemInspection";
import ListInspection from "@wayward/game/game/inspection/ListInspection";
import type Tile from "@wayward/game/game/tile/Tile";
import type { TranslationGenerator } from "@wayward/game/ui/component/IComponent";
import Text from "@wayward/game/ui/component/Text";
export default class ItemsInspection extends ListInspection<ItemInspection> {
    static getFromTile(tile: Tile, context?: InfoProviderContext): never[] | ItemsInspection;
    private inspector;
    private inspectorPosition;
    private itemPositions;
    constructor(itemInspections: ItemInspection[], context?: InfoProviderContext);
    get(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider>;
    getDefaultDisplayLevel(context: InfoProviderContext): InfoDisplayLevel;
    protected initChildTextComponent(text: TranslationGenerator): Text;
    protected onTickEnd(): void;
    protected onTransformed(): void;
    private updatePosition;
}
