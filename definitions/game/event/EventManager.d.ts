/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { type EventBus, type EventBuses } from "@wayward/game/event/EventBuses";
import type { Events, IEventEmitterHost } from "@wayward/utilities/event/EventEmitter";
import type { Event, Emitter, EmitterOrBus, Handler, TypedPropertyDescriptorFunctionAnyNOfParams, EventBusHost } from "@wayward/utilities/event/EventManager";
import { EventManager } from "@wayward/utilities/event/EventManager";
export type GameEmitterOrBus = EmitterOrBus<EventBus>;
export type GameEvent<E extends GameEmitterOrBus> = Event<EventBus, EventBuses, E>;
export type GameEventHandler<E, K extends keyof Events<E extends EventBus ? EventBusHost<EventBus, EventBuses, E> : E>> = Handler<EventBus, EventBuses, E, K>;
export declare const eventManager: EventManager<EventBus, {
    0(): import("../game/entity/action/ActionExecutor").default<any, any, any, any, any>;
    1(): import("../audio/Audio").default;
    2(): import("../game/entity/creature/corpse/CorpseManager").default;
    3(): import("../game/entity/creature/corpse/Corpse").default;
    4(): import("../game/entity/creature/CreatureManager").default;
    5(): import("../game/entity/creature/Creature").default;
    6(): import("../game/doodad/DoodadManager").default;
    7(): import("../game/doodad/Doodad").default;
    8(): import("../game/entity/Entity").default<unknown, number, import("../game/reference/IReferenceManager").EntityReferenceTypes, unknown>;
    9(): import("../game/entity/EntityMovable").default<unknown, number, import("../game/reference/IReferenceManager").EntityReferenceTypes, unknown>;
    10(): import("../game/entity/EntityManager").default<any, undefined>;
    11(): import("../game/Game").Game;
    12(): import("../game/entity/Human").default<number, import("../game/reference/IReferenceManager").ReferenceType.NPC | import("../game/reference/IReferenceManager").ReferenceType.Player>;
    13(): import("../game/island/Island").default;
    14(): import("../game/item/ItemManager").default;
    15(): import("../game/item/Item").default;
    16(): import("../language/LanguageManager").default;
    17(): import("../game/meta/Loading").default.Events;
    18(): import("../game/island/Island").default;
    19(): import("../game/entity/player/Player").default;
    20(): import("../game/entity/npc/npcs/Merchant").default;
    21(): import("../game/milestones/MilestoneManager").MilestoneManager;
    22(): import("../mod/ModManager").default;
    23(): import("../multiplayer/Multiplayer").default;
    24(): import("../game/entity/npc/NPCManager").default;
    25(): import("../game/entity/npc/NPC").default;
    26(): import("../game/entity/player/PlayerManager").default;
    27(): import("../game/entity/player/Player").default;
    28(): import("../game/meta/prompt/Prompts").default.Events;
    29(): import("../save/SaveManager").default;
    30(): import("../ui/screen/ScreenManager").default;
    31(): import("../steamworks/Steamworks").default;
    32(): import("../game/tile/TileEventManager").default;
    33(): import("../game/tile/TileEvent").default;
    34(): import("../ui/Ui").Ui;
    35(): import("../ui/screen/screens/game/static/ActionBar").default;
    36(): import("../ui/screen/screens/game/util/movement/MovementHandler").default;
    37(): import("../renderer/world/WorldRenderer").WorldRenderer;
}>;
/**
 * EventHandler that is typed with the games event buses
 */
export declare function EventHandler<E extends GameEmitterOrBus, K extends Event<EventBus, EventBuses, E>>(emitter: E, event: K, priority?: number): (host: any, property2: string | number | symbol, descriptor: TypedPropertyDescriptorFunctionAnyNOfParams<Handler<EventBus, EventBuses, E, K>>) => void;
export declare function EventHandler<E extends Emitter, K extends keyof Events<E>>(emitter: E, event: K, priority?: number): (host: any, property2: string | number | symbol, descriptor: TypedPropertyDescriptorFunctionAnyNOfParams<Handler<EventBus, EventBuses, IEventEmitterHost<Events<E>>, K>>) => void;
/**
 * Marks that this class, whenever instantiated, should be an event subscriber.
 * **Note:** This decorator should only be used on classes with instances that will *always* need to be subscribed. IE don't use this on UI stuff. **Mods should never need this.**
 * **Note:** This is incompatible with `@Bind` decorators.
 */
export declare function EventSubscriber<S extends Class<any>>(constructor: S): S;
