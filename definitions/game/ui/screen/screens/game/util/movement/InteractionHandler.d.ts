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
import type Component from "@wayward/game/ui/component/Component";
import type { IBindHandlerApi } from "@wayward/game/ui/input/Bind";
import type HoveredTileTracker from "@wayward/game/ui/screen/screens/game/util/HoveredTileTracker";
import type ActionMenuHandler from "@wayward/game/ui/screen/screens/game/util/movement/ActionMenuHandler";
import type MovementHandler from "@wayward/game/ui/screen/screens/game/util/movement/MovementHandler";
import type PathingHandler from "@wayward/game/ui/screen/screens/game/util/movement/PathingHandler";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
export interface IInteractionHandlerEvents {
    register(): any;
    deregister(): any;
}
export interface IInteractionHandlerHost {
    surface?: Component;
    hoveredTile: HoveredTileTracker;
    movement: MovementHandler;
    pathing: PathingHandler;
    actionMenu: ActionMenuHandler;
}
export type InteractionHandlerRequiredBindHandlerApi = Pick<IBindHandlerApi, "mouse" | "input"> & Partial<IBindHandlerApi>;
export default class InteractionHandler extends EventEmitter.Host<IInteractionHandlerEvents> {
    private readonly hostRef?;
    protected get host(): IInteractionHandlerHost | undefined;
    protected get hoveredTile(): HoveredTileTracker | undefined;
    protected get movement(): MovementHandler | undefined;
    protected get pathing(): PathingHandler | undefined;
    protected get actionMenu(): ActionMenuHandler | undefined;
    constructor(host: IInteractionHandlerHost);
    protected isMouseWithin(api?: InteractionHandlerRequiredBindHandlerApi): boolean;
    protected wasCatalystStartWithin(api: InteractionHandlerRequiredBindHandlerApi): boolean;
    register(): this;
    deregister(): this;
}
