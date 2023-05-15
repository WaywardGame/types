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
import type { InfoProvider } from "game/inspection/InfoProvider";
import type { InfoProviderContext } from "game/inspection/InfoProviderContext";
import Inspection from "game/inspection/Inspection";
import type Tile from "game/tile/Tile";
import type { TranslationGenerator } from "ui/component/IComponent";
import Text from "ui/component/Text";
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
