/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import Doodad from "game/doodad/Doodad";
import DoodadManager from "game/doodad/DoodadManager";
import ActionExecutor from "game/entity/action/ActionExecutor";
import Player from "game/entity/player/Player";
import Game from "game/Game";
import Item from "game/item/Item";
import ItemManager from "game/item/ItemManager";
import TileEvent from "game/tile/TileEvent";
import TileEventManager from "game/tile/TileEventManager";
import LanguageManager from "language/LanguageManager";
import ModManager from "mod/ModManager";
import Multiplayer from "multiplayer/Multiplayer";
import SaveManager from "save/SaveManager";
import Steamworks from "steamworks/Steamworks";
export declare enum EventBus {
    Actions = 0,
    DoodadManager = 1,
    Doodads = 2,
    Game = 3,
    ItemManager = 4,
    Items = 5,
    Language = 6,
    LocalPlayer = 7,
    Mods = 8,
    Multiplayer = 9,
    Players = 10,
    SaveManager = 11,
    Steamworks = 12,
    TileEventManager = 13,
    TileEvents = 14,
    Ui = 15
}
declare const eventBuses: {
    [EventBus.Actions](): typeof ActionExecutor;
    [EventBus.DoodadManager](): typeof DoodadManager;
    [EventBus.Doodads](): typeof Doodad;
    [EventBus.Game](): typeof Game;
    [EventBus.ItemManager](): typeof ItemManager;
    [EventBus.Items](): typeof Item;
    [EventBus.Language](): typeof LanguageManager;
    [EventBus.LocalPlayer](): Player;
    [EventBus.Mods](): typeof ModManager;
    [EventBus.Multiplayer](): typeof Multiplayer;
    [EventBus.Players](): typeof Player;
    [EventBus.SaveManager](): typeof SaveManager;
    [EventBus.Steamworks](): typeof Steamworks;
    [EventBus.TileEventManager](): typeof TileEventManager;
    [EventBus.TileEvents](): typeof TileEvent;
    [EventBus.Ui](): typeof ui;
};
export default eventBuses;
export declare module EventBus {
    function register<E extends EventBus>(eventBus: E, classOrHost: ReturnType<(typeof eventBuses)[E]>): void;
    function register(eventBus: EventBus): (constructor: NullaryClass<any>) => void;
    function onEventBusRegistration(eventBus: EventBus, handler: NullaryFunction): void;
}
export declare type EventBusHost<E extends EventBus> = ReturnType<(typeof eventBuses)[E]>;
