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
import TilePositionInspection from "@wayward/game/game/inspection/handlers/TilePositionInspection";
import type Tile from "@wayward/game/game/tile/Tile";
import UiTranslation from "@wayward/game/language/dictionary/UiTranslation";
import InspectionsList from "@wayward/game/ui/screen/screens/game/component/InspectionsList";
export default class TileInspectionsList extends InspectionsList<TilePositionInspection> {
    private tile?;
    getTile(): Tile | undefined;
    setTile(tile: Tile | undefined): this;
    isValid(): boolean;
    protected getInvalidTranslation(): UiTranslation;
    protected initializeInspections(): TilePositionInspection;
    protected onTick(): void;
}
