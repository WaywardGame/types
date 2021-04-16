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
import { Events, IEventEmitter } from "event/EventEmitter";
import { IComponent } from "ui/component/IComponent";
export declare enum MenuId {
    BACK = -1,
    NONE = 0,
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
interface IMenuEvents extends Events<IComponent> {
    tab(): any;
    goBackFrom(): any;
    cancelBind(): false | void;
    enterBind(): any;
    preShowAsync(): any;
}
export interface IMenu extends IComponent {
    event: IEventEmitter<this, IMenuEvents>;
    canCancel: boolean | undefined;
    isSubmenu: boolean;
}
export {};
