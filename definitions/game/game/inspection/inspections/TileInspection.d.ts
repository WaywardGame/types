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
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import Inspection from "@wayward/game/game/inspection/Inspection";
import type Tile from "@wayward/game/game/tile/Tile";
import type Translation from "@wayward/game/language/Translation";
import type { TranslationGenerator } from "@wayward/game/ui/component/IComponent";
import Text from "@wayward/game/ui/component/Text";
export declare enum TileInspectionClasses {
    Main = "inspection-type-tile",
    Layer = "inspection-type-tile-layer",
    LayerTitle = "inspection-type-tile-layer-title"
}
export default class TileInspection extends Inspection<Tile> {
    static getFromTile(tile: Tile, context?: InfoProviderContext): TileInspection;
    constructor(tile: Tile, context?: InfoProviderContext);
    getId(): string;
    getBorder(): string | undefined;
    protected getTitle(context: InfoProviderContext): Translation | undefined;
    protected getSubtitle(context: InfoProviderContext): Translation | undefined;
    protected getContent(context: InfoProviderContext): ArrayOr<Translation | InfoProvider | undefined>;
    onUpdateTile(_: any, tile: Tile): void;
    protected initChildTextComponent(text: TranslationGenerator): Text;
    private getQualityColorName;
    private getQuality;
    private getTileDescription;
}
