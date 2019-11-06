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
import { IServer } from "multiplayer/matchmaking/IMatchmaking";
import Button from "newui/component/Button";
import { IRefreshable } from "newui/component/Refreshable";
import { ModLoadability } from "newui/util/Misc";
import { ISteamFriend } from "steamworks/ISteamworks";
export declare class ServerRow extends Button implements IRefreshable {
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
}
