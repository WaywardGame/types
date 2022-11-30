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
import type TileEvent from "game/tile/TileEvent";
import type TileEventManager from "game/tile/TileEventManager";
import type LanguageManager from "language/LanguageManager";
import type ModManager from "mod/ModManager";
import type Multiplayer from "multiplayer/Multiplayer";
import type WorldRenderer from "renderer/world/WorldRenderer";
import type SaveManager from "save/SaveManager";
import type Steamworks from "steamworks/Steamworks";
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
    EntityManager = 9,
    Game = 10,
    Humans = 11,
    Island = 12,
    ItemManager = 13,
    Items = 14,
    Language = 15,
    Loading = 16,
    LocalIsland = 17,
    LocalPlayer = 18,
    Mods = 19,
    Multiplayer = 20,
    NPCManager = 21,
    NPCs = 22,
    PlayerManager = 23,
    Players = 24,
    Prompt = 25,
    SaveManager = 26,
    Steamworks = 27,
    TileEventManager = 28,
    TileEvents = 29,
    Ui = 30,
    UiActionBar = 31,
    UiMovementHandler = 32,
    WorldRenderer = 33
}
declare const eventBuses: {
    [EventBus.Actions](): typeof ActionExecutor;
    [EventBus.Audio](): typeof Audio;
    [EventBus.CorpseManager](): typeof CorpseManager;
    [EventBus.Corpses](): typeof Corpse;
    [EventBus.CreatureManager](): typeof CreatureManager;
    [EventBus.Creatures](): typeof Creature;
    [EventBus.DoodadManager](): typeof DoodadManager;
    [EventBus.Doodads](): typeof Doodad;
    [EventBus.Entities](): typeof Entity;
    [EventBus.EntityManager](): typeof EntityManager;
    [EventBus.Game](): typeof Game;
    [EventBus.Humans](): typeof Human;
    [EventBus.Island](): typeof Island;
    [EventBus.ItemManager](): typeof ItemManager;
    [EventBus.Items](): typeof Item;
    [EventBus.Language](): typeof LanguageManager;
    [EventBus.Loading](): typeof Loading.Events;
    [EventBus.LocalIsland](): Island;
    [EventBus.LocalPlayer](): Player;
    [EventBus.Mods](): typeof ModManager;
    [EventBus.Multiplayer](): typeof Multiplayer;
    [EventBus.NPCManager](): typeof NPCManager;
    [EventBus.NPCs](): typeof NPC;
    [EventBus.PlayerManager](): typeof PlayerManager;
    [EventBus.Players](): typeof Player;
    [EventBus.Prompt](): typeof Prompts.Events;
    [EventBus.SaveManager](): typeof SaveManager;
    [EventBus.Steamworks](): typeof Steamworks;
    [EventBus.TileEventManager](): typeof TileEventManager;
    [EventBus.TileEvents](): typeof TileEvent;
    [EventBus.Ui](): typeof ui;
    [EventBus.UiActionBar](): typeof ActionBar;
    [EventBus.UiMovementHandler](): typeof MovementHandler;
    [EventBus.WorldRenderer](): typeof WorldRenderer;
};
export default eventBuses;
export declare module EventBus {
    function register<E extends EventBus>(eventBus: E, classOrHost: ReturnType<(typeof eventBuses)[E]>): void;
    function register(eventBus: EventBus): (constructor: AbstractNullaryClass<any>) => void;
    function unregister(eventBus: EventBus): void;
    function onEventBusRegistration(eventBus: EventBus, handler: NullaryFunction): void;
}
export type EventBusHost<E extends EventBus> = ReturnType<(typeof eventBuses)[E]>;
