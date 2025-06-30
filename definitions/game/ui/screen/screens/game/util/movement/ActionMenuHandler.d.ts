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
import type { IBindHandlerApi } from "@wayward/game/ui/input/Bind";
import type { IInteractionHandlerEvents } from "@wayward/game/ui/screen/screens/game/util/movement/InteractionHandler";
import InteractionHandler from "@wayward/game/ui/screen/screens/game/util/movement/InteractionHandler";
import type { IVector2 } from "@wayward/game/utilities/math/IVector";
import type { IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export interface IActionMenuHandlerEvents extends IInteractionHandlerEvents {
    set(targetTile: Tile, path: IVector2[]): any;
    reset(targetTile?: Tile, path?: IVector2[]): any;
}
export default class ActionMenuHandler extends InteractionHandler {
    event: IEventEmitter<this, IActionMenuHandlerEvents>;
    private targetTile?;
    private overlay?;
    private path?;
    private contextMenu?;
    private previewDistance;
    protected onActionsInFront(api: IBindHandlerApi): boolean;
    protected onActions(api: IBindHandlerApi): boolean;
    private reset;
    private queueActionsAt;
    private onHide;
    private onContextMenuOptionHovered;
    private updatePath;
    private getInitialPath;
}
