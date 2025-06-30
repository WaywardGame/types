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
import { InspectType } from "@wayward/game/game/inspection/IInspection";
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import Inspection from "@wayward/game/game/inspection/Inspection";
import ListInspection from "@wayward/game/game/inspection/ListInspection";
import type Tile from "@wayward/game/game/tile/Tile";
import TileEvent from "@wayward/game/game/tile/TileEvent";
import Translation from "@wayward/game/language/Translation";
import type { TranslationGenerator } from "@wayward/game/ui/component/IComponent";
import Text from "@wayward/game/ui/component/Text";
declare class TileEventInspection extends Inspection<TileEvent> {
    static getFromTile(tile: Tile, context?: InfoProviderContext): TileEventInspection[];
    static getFromTileFiltered(tile: Tile, minorEvents: boolean, context?: InfoProviderContext): TileEventInspection[];
    static handles(type: InspectType, tileEvent: unknown): boolean;
    constructor(tileEvent: TileEvent, context?: InfoProviderContext);
    getId(): string;
    protected getTitle(context: InfoProviderContext): Translation | undefined;
    protected getSubtitle(context: InfoProviderContext): Translation | undefined;
    protected getContent(context: InfoProviderContext): ArrayOr<Translation | InfoProvider | undefined>;
    onRemove(_: any, event: TileEvent): void;
}
declare namespace TileEventInspection {
    class Minors extends ListInspection<TileEventInspection> {
        static getFromTile(tile: Tile, context?: InfoProviderContext): never[] | Minors;
        constructor(inspections: TileEventInspection[], context?: InfoProviderContext);
        get(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider>;
        getDefaultDisplayLevel(): InfoDisplayLevel;
        protected initChildTextComponent(text: TranslationGenerator): Text;
    }
}
export default TileEventInspection;
