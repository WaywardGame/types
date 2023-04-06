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
import type Audio from "audio/Audio";
import type Doodad from "game/doodad/Doodad";
import type DoodadManager from "game/doodad/DoodadManager";
import type ActionExecutor from "game/entity/action/ActionExecutor";
import type Corpse from "game/entity/creature/corpse/Corpse";
import type CorpseManager from "game/entity/creature/corpse/CorpseManager";
import type Creature from "game/entity/creature/Creature";
import type CreatureManager from "game/entity/creature/CreatureManager";
import type Entity from "game/entity/Entity";
import type EntityManager from "game/entity/EntityManager";
import type EntityMovable from "game/entity/EntityMovable";
import type Human from "game/entity/Human";
import type NPC from "game/entity/npc/NPC";
import type NPCManager from "game/entity/npc/NPCManager";
import type Player from "game/entity/player/Player";
import type PlayerManager from "game/entity/player/PlayerManager";
import type { Game } from "game/Game";
import type Island from "game/island/Island";
import type Item from "game/item/Item";
import type ItemManager from "game/item/ItemManager";
import type Loading from "game/meta/Loading";
import type Prompts from "game/meta/prompt/Prompts";
import type { MilestoneManager } from "game/milestones/MilestoneManager";
import type TileEvent from "game/tile/TileEvent";
import type TileEventManager from "game/tile/TileEventManager";
import type LanguageManager from "language/LanguageManager";
import type ModManager from "mod/ModManager";
import type Multiplayer from "multiplayer/Multiplayer";
import type WorldRenderer from "renderer/world/WorldRenderer";
import type SaveManager from "save/SaveManager";
import type Steamworks from "steamworks/Steamworks";
import type ScreenManager from "ui/screen/ScreenManager";
import type ActionBar from "ui/screen/screens/game/static/ActionBar";
import type MovementHandler from "ui/screen/screens/game/util/movement/MovementHandler";
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
    Mods = 20,
    Multiplayer = 21,
    NPCManager = 22,
    NPCs = 23,
    PlayerManager = 24,
    Players = 25,
    Prompt = 26,
    SaveManager = 27,
    ScreenManager = 28,
    Steamworks = 29,
    TileEventManager = 30,
    TileEvents = 31,
    Ui = 32,
    UiActionBar = 33,
    UiMovementHandler = 34,
    WorldRenderer = 35,
    Milestones = 36
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
    [EventBus.Mods](): ModManager;
    [EventBus.Multiplayer](): Multiplayer;
    [EventBus.NPCManager](): NPCManager;
    [EventBus.NPCs](): NPC;
    [EventBus.PlayerManager](): PlayerManager;
    [EventBus.Players](): Player;
    [EventBus.Prompt](): Prompts.Events;
    [EventBus.SaveManager](): SaveManager;
    [EventBus.ScreenManager](): ScreenManager;
    [EventBus.Steamworks](): Steamworks;
    [EventBus.TileEventManager](): TileEventManager;
    [EventBus.TileEvents](): TileEvent;
    [EventBus.Ui](): typeof ui;
    [EventBus.UiActionBar](): ActionBar;
    [EventBus.UiMovementHandler](): MovementHandler;
    [EventBus.WorldRenderer](): WorldRenderer;
    [EventBus.Milestones](): MilestoneManager;
};
export interface IEventBusRegistration {
    subscribe: NullaryFunction;
    unsubscribe: NullaryFunction;
}
export default eventBuses;
export declare module EventBus {
    function register<E extends EventBus>(eventBus: E, classOrHost: ReturnType<(typeof eventBuses)[E]>): void;
    function register(eventBus: EventBus): (constructor: AbstractNullaryClass<any>) => void;
    function unregister(eventBus: EventBus): void;
    function onEventBusRegistration(eventBus: EventBus, registration: IEventBusRegistration): void;
}
export type EventBusHost<E extends EventBus> = ReturnType<(typeof eventBuses)[E]>;
