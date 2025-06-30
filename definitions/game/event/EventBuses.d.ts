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
import type Audio from "@wayward/game/audio/Audio";
import type { Game } from "@wayward/game/game/Game";
import type Doodad from "@wayward/game/game/doodad/Doodad";
import type DoodadManager from "@wayward/game/game/doodad/DoodadManager";
import type Entity from "@wayward/game/game/entity/Entity";
import type EntityManager from "@wayward/game/game/entity/EntityManager";
import type EntityMovable from "@wayward/game/game/entity/EntityMovable";
import type Human from "@wayward/game/game/entity/Human";
import type ActionExecutor from "@wayward/game/game/entity/action/ActionExecutor";
import type UsableAction from "@wayward/game/game/entity/action/usable/UsableAction";
import type Creature from "@wayward/game/game/entity/creature/Creature";
import type CreatureManager from "@wayward/game/game/entity/creature/CreatureManager";
import type Corpse from "@wayward/game/game/entity/creature/corpse/Corpse";
import type CorpseManager from "@wayward/game/game/entity/creature/corpse/CorpseManager";
import type NPC from "@wayward/game/game/entity/npc/NPC";
import type NPCManager from "@wayward/game/game/entity/npc/NPCManager";
import type MerchantNPC from "@wayward/game/game/entity/npc/npcs/Merchant";
import type Player from "@wayward/game/game/entity/player/Player";
import type PlayerManager from "@wayward/game/game/entity/player/PlayerManager";
import type Island from "@wayward/game/game/island/Island";
import type Item from "@wayward/game/game/item/Item";
import type ItemManager from "@wayward/game/game/item/ItemManager";
import type Loading from "@wayward/game/game/meta/Loading";
import type Prompts from "@wayward/game/game/meta/prompt/Prompts";
import type { MilestoneManager } from "@wayward/game/game/milestones/MilestoneManager";
import type TileEvent from "@wayward/game/game/tile/TileEvent";
import type TileEventManager from "@wayward/game/game/tile/TileEventManager";
import type LanguageManager from "@wayward/game/language/LanguageManager";
import type ModManager from "@wayward/game/mod/ModManager";
import type Multiplayer from "@wayward/game/multiplayer/Multiplayer";
import type { Renderer } from "@wayward/game/renderer/Renderer";
import type { WorldRenderer } from "@wayward/game/renderer/world/WorldRenderer";
import type SaveManager from "@wayward/game/save/SaveManager";
import type Steamworks from "@wayward/game/steamworks/Steamworks";
import type { GlobalMouseInfo } from "@wayward/game/ui/input/InputManager";
import type ScreenManager from "@wayward/game/ui/screen/ScreenManager";
import type GameScreen from "@wayward/game/ui/screen/screens/GameScreen";
import type ItemComponentEventBus from "@wayward/game/ui/screen/screens/game/component/item/ItemComponentEventBus";
import type ActionBar from "@wayward/game/ui/screen/screens/game/static/ActionBar";
import type HoveredTileTracker from "@wayward/game/ui/screen/screens/game/util/HoveredTileTracker";
import type ActionMenuHandler from "@wayward/game/ui/screen/screens/game/util/movement/ActionMenuHandler";
import type InteractionManager from "@wayward/game/ui/screen/screens/game/util/movement/InteractionManager";
import type MovementHandler from "@wayward/game/ui/screen/screens/game/util/movement/MovementHandler";
import type PathingHandler from "@wayward/game/ui/screen/screens/game/util/movement/PathingHandler";
import { EventBusManager } from "@wayward/utilities/event/EventBusManager";
export declare enum EventBus {
    Actions = 0,
    Audio = 1,
    CorpseManager = 2,
    Corpses = 3,
    CreatureManager = 4,
    Creatures = 5,
    DoodadManager = 6,
    Doodads = 7,
    Entities = 8,
    EntitiesMovable = 9,
    EntityManager = 10,
    Game = 11,
    Humans = 12,
    Island = 13,
    ItemManager = 14,
    Items = 15,
    Language = 16,
    Loading = 17,
    LocalIsland = 18,
    LocalPlayer = 19,
    MerchantNPCs = 20,
    Milestones = 21,
    Mods = 22,
    Multiplayer = 23,
    NPCManager = 24,
    NPCs = 25,
    PlayerManager = 26,
    Players = 27,
    Prompt = 28,
    Renderer = 29,
    SaveManager = 30,
    ScreenManager = 31,
    Steamworks = 32,
    TileEventManager = 33,
    TileEvents = 34,
    Ui = 35,
    UiActionBar = 36,
    UiActionMenuHandler = 37,
    UiGameScreen = 38,
    UiHoveredTileTracker = 39,
    UiInputManagerMouse = 40,
    UiInteractionManager = 41,
    UiItemComponentStatic = 42,
    UiMovementHandler = 43,
    UiPathingHandler = 44,
    UsableActions = 45,
    WorldRenderer = 46
}
declare const eventBuses: {
    [EventBus.Actions](): ActionExecutor<any, any, any, any, any>;
    [EventBus.Audio](): Audio;
    [EventBus.CorpseManager](): CorpseManager;
    [EventBus.Corpses](): Corpse;
    [EventBus.CreatureManager](): CreatureManager;
    [EventBus.Creatures](): Creature;
    [EventBus.DoodadManager](): DoodadManager;
    [EventBus.Doodads](): Doodad;
    [EventBus.Entities](): Entity;
    [EventBus.EntitiesMovable](): EntityMovable;
    [EventBus.EntityManager](): EntityManager<any>;
    [EventBus.Game](): Game;
    [EventBus.Humans](): Human;
    [EventBus.Island](): Island;
    [EventBus.ItemManager](): ItemManager;
    [EventBus.Items](): Item;
    [EventBus.Language](): LanguageManager;
    [EventBus.Loading](): Loading.Events;
    [EventBus.LocalIsland](): Island;
    [EventBus.LocalPlayer](): Player;
    [EventBus.MerchantNPCs](): MerchantNPC;
    [EventBus.Milestones](): MilestoneManager;
    [EventBus.Mods](): ModManager;
    [EventBus.Multiplayer](): Multiplayer;
    [EventBus.NPCManager](): NPCManager;
    [EventBus.NPCs](): NPC;
    [EventBus.PlayerManager](): PlayerManager;
    [EventBus.Players](): Player;
    [EventBus.Prompt](): Prompts.Events;
    [EventBus.Renderer](): Renderer;
    [EventBus.SaveManager](): SaveManager;
    [EventBus.ScreenManager](): ScreenManager;
    [EventBus.Steamworks](): Steamworks;
    [EventBus.TileEventManager](): TileEventManager;
    [EventBus.TileEvents](): TileEvent;
    [EventBus.Ui](): typeof ui;
    [EventBus.UiActionBar](): ActionBar;
    [EventBus.UiActionMenuHandler](): ActionMenuHandler;
    [EventBus.UiGameScreen](): GameScreen;
    [EventBus.UiHoveredTileTracker](): HoveredTileTracker;
    [EventBus.UiInputManagerMouse](): GlobalMouseInfo;
    [EventBus.UiInteractionManager](): InteractionManager;
    [EventBus.UiItemComponentStatic](): ItemComponentEventBus;
    [EventBus.UiMovementHandler](): MovementHandler;
    [EventBus.UiPathingHandler](): PathingHandler;
    [EventBus.UsableActions](): UsableAction;
    [EventBus.WorldRenderer](): WorldRenderer;
};
export type EventBuses = typeof eventBuses;
export declare const eventBusManager: EventBusManager<EventBus, {
    0(): ActionExecutor<any, any, any, any, any>;
    1(): Audio;
    2(): CorpseManager;
    3(): Corpse;
    4(): CreatureManager;
    5(): Creature;
    6(): DoodadManager;
    7(): Doodad;
    8(): Entity;
    9(): EntityMovable;
    10(): EntityManager<any>;
    11(): Game;
    12(): Human;
    13(): Island;
    14(): ItemManager;
    15(): Item;
    16(): LanguageManager;
    17(): Loading.Events;
    18(): Island;
    19(): Player;
    20(): MerchantNPC;
    21(): MilestoneManager;
    22(): ModManager;
    23(): Multiplayer;
    24(): NPCManager;
    25(): NPC;
    26(): PlayerManager;
    27(): Player;
    28(): Prompts.Events;
    29(): Renderer;
    30(): SaveManager;
    31(): ScreenManager;
    32(): Steamworks;
    33(): TileEventManager;
    34(): TileEvent;
    35(): typeof ui;
    36(): ActionBar;
    37(): ActionMenuHandler;
    38(): GameScreen;
    39(): HoveredTileTracker;
    40(): GlobalMouseInfo;
    41(): InteractionManager;
    42(): ItemComponentEventBus;
    43(): MovementHandler;
    44(): PathingHandler;
    45(): UsableAction;
    46(): WorldRenderer;
}>;
/**
 * For backwards compat / ease of use
 */
export declare namespace EventBus {
    function register<E extends EventBus>(eventBus: E, classOrHost: ReturnType<EventBuses[E]>): void;
    function register(eventBus: EventBus): (constructor: AbstractNullaryClass<any>) => any;
    function unregister(eventBus: EventBus): boolean;
}
export {};
