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
import type { ServerInfo } from "multiplayer/IMultiplayer";
import type { IServer } from "multiplayer/matchmaking/IMatchmaking";
import type Screen from "ui/screen/Screen";
import Menu from "ui/screen/screens/menu/component/Menu";
export default class JoinServerMenu extends Menu {
    static show(screen: Screen, serverToJoin: ServerInfo, server?: IServer): void;
    private readonly serverInput;
    constructor();
    protected onShow(): void;
    private onInputEnter;
    private getServerToJoin;
}
