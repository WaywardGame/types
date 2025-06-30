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
import type { IMapTileRenderApi, IMapTileRenderConfiguration, IMapTileRenderStrategy } from "@wayward/game/game/mapping/IMapTile";
import type { IVector2 } from "@wayward/game/utilities/math/IVector";
declare function random2x2Strategy(chance?: number, offset?: IVector2): IMapTileRenderStrategy;
declare namespace random2x2Strategy {
    function plot(chance?: number, offset?: IVector2, api?: IMapTileRenderApi): IMapTileRenderConfiguration[] | undefined;
}
export default random2x2Strategy;
