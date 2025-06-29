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
import type { ServerInfo } from "@wayward/game/multiplayer/IMultiplayer";
import type Steamworks from "@wayward/game/steamworks/Steamworks";
export default class ServerJoinHandler {
    private triedToJoin;
    constructor();
    protected tryToJoinServer(): Promise<void>;
    protected onJoinServer(steamworks: Steamworks, serverInfo: ServerInfo): Promise<void>;
}
