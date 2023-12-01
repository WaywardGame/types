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
import type { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import Inspection from "@wayward/game/game/inspection/Inspection";
import type Tile from "@wayward/game/game/tile/Tile";
import type { TranslationGenerator } from "@wayward/game/ui/component/IComponent";
import Text from "@wayward/game/ui/component/Text";
export default class TileInspection extends Inspection<Tile> {
    static getFromTile(tile: Tile): TileInspection;
    constructor(tile: Tile);
    getId(): string;
    getBorder(): string | undefined;
    get(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider>;
    onUpdateTile(_: any, tile: Tile): void;
    protected initChildTextComponent(text: TranslationGenerator): Text;
    private getQualityColorName;
    private getQuality;
}
