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
import { IMapTileRenderApi, IMapTileRenderConfiguration, IMapTileRenderStrategy } from "game/mapping/IMapTile";
import { IVector2 } from "utilities/math/IVector";
declare function random2x2Strategy(chance?: number, offset?: IVector2): IMapTileRenderStrategy;
declare module random2x2Strategy {
    function plot(chance?: number, offset?: IVector2, api?: IMapTileRenderApi): IMapTileRenderConfiguration[] | undefined;
}
export default random2x2Strategy;
