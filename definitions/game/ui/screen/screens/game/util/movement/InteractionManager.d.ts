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
import HoveredTileTracker from "@wayward/game/ui/screen/screens/game/util/HoveredTileTracker";
import ActionMenuHandler from "@wayward/game/ui/screen/screens/game/util/movement/ActionMenuHandler";
import type { IInteractionHandlerHost } from "@wayward/game/ui/screen/screens/game/util/movement/InteractionHandler";
import MovementHandler from "@wayward/game/ui/screen/screens/game/util/movement/MovementHandler";
import PathingHandler from "@wayward/game/ui/screen/screens/game/util/movement/PathingHandler";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
export interface IInteractionManagerEvents {
}
export default class InteractionManager extends EventEmitter.Host<IInteractionManagerEvents> implements IInteractionHandlerHost {
    readonly hoveredTile: HoveredTileTracker;
    readonly pathing: PathingHandler;
    readonly movement: MovementHandler;
    readonly actionMenu: ActionMenuHandler;
    private readonly surfaceRef;
    get surface(): Component;
    constructor(surface: Component);
    register(): this;
    deregister(): this;
}
