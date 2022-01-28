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
import type Entity from "game/entity/Entity";
import type Player from "game/entity/player/Player";
import type { IBound3 } from "utilities/math/Bound3";
export interface IEntityManager<T extends Entity> {
    remove(entity: T): void;
    updateFov(playerBounds: IPlayerBound[]): void;
}
export default IEntityManager;
export interface IPlayerBound {
    player: Player;
    bound: IBound3;
}
