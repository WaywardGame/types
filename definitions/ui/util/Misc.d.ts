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
import { IPlayOptions } from "game/IGame";
import { ServerInfo } from "multiplayer/IMultiplayer";
import { IServer } from "multiplayer/matchmaking/IMatchmaking";
import { MenuId } from "ui/screen/screens/menu/component/IMenu";
import Menu from "ui/screen/screens/menu/component/Menu";
import MenuScreen from "ui/screen/screens/menu/component/MenuScreen";
export declare function startGame(gameOptions: () => IPlayOptions): () => void;
export declare function startGame(gameOptions: IPlayOptions): void;
export declare function menuSwitcher<M extends Menu = Menu>(menu: MenuId | M | (() => M), then?: (menu: M, ...args: any[]) => any): (...args: any[]) => void;
export declare function switchMenu<M extends Menu = Menu>(menu: MenuId | M | (() => M), then?: (menu: M, ...args: any[]) => any, ...args: any[]): void;
export declare function joinServerSwitcher(serverToJoin: ServerInfo, server?: IServer): (screen: MenuScreen) => void;
export declare function switchToJoinServer(serverToJoin: ServerInfo, server?: IServer, screen?: MenuScreen): void;
export declare enum ModLoadability {
    NotEnabled = "notenabled",
    Enabled = "enabled",
    Error = "error"
}
export declare function isModLoadable(publishId?: string): [string, ModLoadability];
export declare function isModLoadable(index?: number): [string, ModLoadability];
