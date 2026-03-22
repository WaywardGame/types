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
import { type InteractionDistance as InteractionDistanceTypeOrRange } from "@wayward/game/game/entity/action/usable/IUsableAction";
import { MoveFlag } from "@wayward/game/game/entity/IEntity";
import type Tile from "@wayward/game/game/tile/Tile";
import InteractionHandler from "@wayward/game/ui/screen/screens/game/util/movement/InteractionHandler";
export default class PathQueryCache extends InteractionHandler {
    private target?;
    private readonly paths;
    deregister(): this;
    getPath(targetTile: Tile, distance?: InteractionDistanceTypeOrRange): Tile[] | undefined;
    reset(targetTile?: Tile): void;
    protected onPlayerStateChange(): void;
    protected onPlayerPostMove(_player: typeof localPlayer, _lastTile: Tile, _tile: Tile, moveFlag: MoveFlag): void;
    protected onTickEnd(): void;
    private getKey;
}
