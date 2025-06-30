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
import type Tile from "@wayward/game/game/tile/Tile";
import { GlobalMouseInfo } from "@wayward/game/ui/input/InputManager";
import InteractionHandler from "@wayward/game/ui/screen/screens/game/util/movement/InteractionHandler";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export interface IHoveredTileTrackerEvents extends Events<InteractionHandler> {
    change(newTile?: Tile, oldTile?: Tile): any;
}
export default class HoveredTileTracker extends InteractionHandler {
    event: IEventEmitter<this, IHoveredTileTrackerEvents>;
    private tile?;
    get(): Tile | undefined;
    protected onMouseMove(mouse: GlobalMouseInfo): void;
    protected onDialogChangeState(): Promise<void>;
    protected onPlayerMove(): void;
    protected onZoom(): void;
    private update;
    private getHoveredTile;
}
