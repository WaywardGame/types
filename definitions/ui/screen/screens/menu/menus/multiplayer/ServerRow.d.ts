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
import { ISteamFriend } from "electron/interfaces";
import Translation from "language/Translation";
import { IServer } from "multiplayer/matchmaking/IMatchmaking";
import Button from "ui/component/Button";
import { IRefreshable } from "ui/component/Refreshable";
import { IGameIconsHost } from "ui/screen/screens/menu/component/GameIcons";
import { ModLoadability } from "ui/util/Misc";
export declare class ServerRow extends Button implements IRefreshable, IGameIconsHost {
    private readonly getFriend;
    get server(): IServer;
    set server(val: IServer);
    get place(): number;
    set place(place: number);
    get difficulty(): number;
    get pvp(): boolean;
    get mods(): [string, ModLoadability][];
    get friends(): ISteamFriend[];
    private readonly headingPlace;
    private readonly gameIcons;
    private _server;
    private _place;
    constructor(server: IServer, getFriend: (player: string) => ISteamFriend | undefined);
    refresh(): this;
    protected onActivate(): void;
    /**
     * Check if the client can join the server
     */
    static getUnableToJoinTranslation(server: IServer, getFriend: (player: string) => ISteamFriend | undefined): Translation | undefined;
}
