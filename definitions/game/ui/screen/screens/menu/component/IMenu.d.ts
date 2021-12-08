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
import type { Events } from "event/EventEmitter";
import type Component from "ui/component/Component";
export declare enum MenuId {
    Changelog = 0,
    CharacterSelection = 1,
    GameEnd = 2,
    Help = 3,
    Highscores = 4,
    Interrupt = 5,
    JoinServer = 6,
    JoinServerChooseModifiersMenu = 7,
    LoadGame = 8,
    Main = 9,
    Mods = 10,
    Multiplayer = 11,
    NewGame = 12,
    Options = 13,
    Pause = 14
}
export interface IMenuEvents extends Events<Component> {
    tab(): any;
    goBackFrom(): any;
    cancelBind(): false | void;
    enterBind(): any;
}
