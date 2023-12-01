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
import { InfoDisplayLevel } from "@wayward/game/game/inspection/IInfoProvider";
import { InspectType } from "@wayward/game/game/inspection/IInspection";
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import Inspection from "@wayward/game/game/inspection/Inspection";
import ListInspection from "@wayward/game/game/inspection/inspections/ListInspection";
import type Tile from "@wayward/game/game/tile/Tile";
import TileEvent from "@wayward/game/game/tile/TileEvent";
import Translation from "@wayward/game/language/Translation";
import type { TranslationGenerator } from "@wayward/game/ui/component/IComponent";
import Text from "@wayward/game/ui/component/Text";
declare class TileEventInspection extends Inspection<TileEvent> {
    static getFromTile(tile: Tile): TileEventInspection[];
    static getFromTileFiltered(tile: Tile, minorEvents: boolean): TileEventInspection[];
    static handles(type: InspectType, tileEvent: unknown): boolean;
    constructor(tileEvent: TileEvent, inspectType?: InspectType);
    getId(): string;
    get(context: InfoProviderContext): Array<Translation | InfoProvider>;
    onRemove(_: any, event: TileEvent): void;
}
declare namespace TileEventInspection {
    class Minors extends ListInspection<TileEventInspection> {
        static getFromTile(tile: Tile): never[] | Minors;
        constructor(...inspections: TileEventInspection[]);
        get(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider>;
        getDefaultDisplayLevel(): InfoDisplayLevel;
        protected initChildTextComponent(text: TranslationGenerator): Text;
    }
}
export default TileEventInspection;
