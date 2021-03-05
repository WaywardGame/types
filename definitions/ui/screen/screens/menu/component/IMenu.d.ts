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
