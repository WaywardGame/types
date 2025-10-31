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
import type { IOverlayInfo } from "@wayward/game/game/tile/ITerrain";
import type Tile from "@wayward/game/game/tile/Tile";
import UniversalOverlay from "@wayward/game/renderer/overlay/UniversalOverlay";
import { DistanceType } from "@wayward/game/utilities/math/Vector2";
import Vector2 from "@wayward/game/utilities/math/Vector2";
import type { IColorFul } from "@wayward/utilities/Color";
export interface IEffectRadiusOverlayColor extends Partial<IColorFul> {
    alpha?: number;
}
export declare namespace IEffectRadiusOverlayColor {
    function equals(a: IEffectRadiusOverlayColor | undefined, b: IEffectRadiusOverlayColor | undefined): boolean;
}
export default class EffectRadiusOverlay extends UniversalOverlay {
    static readonly INSTANCE: EffectRadiusOverlay;
    private readonly tilesInRange;
    private readonly topLeft;
    private readonly bottomRight;
    type: DistanceType;
    center: Tile | undefined;
    range: number;
    color?: IEffectRadiusOverlayColor;
    constructor();
    get minVector(): Vector2;
    get maxVector(): Vector2;
    set(type: DistanceType, center: Tile, range: number, color?: IEffectRadiusOverlayColor): void;
    unset(center: Tile): void;
    protected generateOverlayInfo(tile: Tile, existingOverlay: IOverlayInfo | undefined): IOverlayInfo | undefined;
    protected onGameReset(): void;
}
