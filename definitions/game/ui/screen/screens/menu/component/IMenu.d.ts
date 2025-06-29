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
import type { Events } from "@wayward/utilities/event/EventEmitter";
export declare enum MenuId {
    Bindings = 0,
    Changelog = 1,
    CharacterSelection = 2,
    GameEnd = 3,
    Help = 4,
    Highscores = 5,
    Interrupt = 6,
    JoinServer = 7,
    JoinServerChooseModifiersMenu = 8,
    LoadGame = 9,
    Main = 10,
    Mods = 11,
    Multiplayer = 12,
    NewGame = 13,
    Options = 14,
    Pause = 15
}
export interface IMenuEvents extends Events<Component> {
    tab(): any;
    goBackFrom(): any;
    cancelBind(): false | void;
    enterBind(): any;
}
