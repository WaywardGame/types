/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import ActionExecutor from "entity/action/ActionExecutor";
import Player from "entity/player/Player";
import Game from "game/Game";
import ItemManager from "item/ItemManager";
import LanguageManager from "language/LanguageManager";
import ModManager from "mod/ModManager";
import Multiplayer from "multiplayer/Multiplayer";
import NewUi from "newui/NewUi";
import SaveManager from "save/SaveManager";
import Steamworks from "steamworks/Steamworks";
export declare enum EventBus {
    Actions = 0,
    Game = 1,
    Items = 2,
    Language = 3,
    LocalPlayer = 4,
    Mods = 5,
    Multiplayer = 6,
    Players = 7,
    SaveManager = 8,
    Steamworks = 9,
    Ui = 10
}
declare const eventBuses: {
    [EventBus.Actions](): typeof ActionExecutor;
    [EventBus.Game](): typeof Game;
    [EventBus.Items](): typeof ItemManager;
    [EventBus.Language](): typeof LanguageManager;
    [EventBus.LocalPlayer](): Player;
    [EventBus.Mods](): typeof ModManager;
    [EventBus.Multiplayer](): typeof Multiplayer;
    [EventBus.Players](): typeof Player;
    [EventBus.SaveManager](): typeof SaveManager;
    [EventBus.Steamworks](): typeof Steamworks;
    [EventBus.Ui](): typeof NewUi;
};
export default eventBuses;
export declare module EventBus {
    function register<E extends EventBus>(eventBus: E, classOrHost: ReturnType<(typeof eventBuses)[E]>): void;
    function register(eventBus: EventBus): (constructor: NullaryClass<any>) => void;
    function onEventBusRegistration(eventBus: EventBus, handler: NullaryFunction): void;
}
export declare type EventBusHost<E extends EventBus> = ReturnType<(typeof eventBuses)[E]>;
