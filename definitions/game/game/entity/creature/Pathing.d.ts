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
import type Human from "game/entity/Human";
import type Island from "game/island/Island";
import type { ITile } from "game/tile/ITerrain";
import type { IVector2 } from "utilities/math/IVector";
export interface IPathingEvents {
    /**
     * Called when checking if a tile is blocked, used for pathing.
     * @param tile The tile to check
     */
    isTileBlocked?(tile: ITile): true | undefined;
}
declare const _default: {
    findPath(island: Island, start: IVector2, end: IVector2, z: number, isTileBlocked: (tile: ITile, pos: IVector2) => boolean, getTilePenalty?: ((tile: ITile, pos: IVector2) => number) | undefined, maxNodesChecked?: number): IVector2[] | undefined;
    /**
     * Returns whether the tile is blocked (completely impassible)
     */
    isWalkToTileBlocked(human: Human, tile: ITile, pos: IVector2, clientSide: boolean): boolean;
    readonly event: import("event/EventEmitter").IEventEmitter<any, IPathingEvents>;
};
export default _default;
