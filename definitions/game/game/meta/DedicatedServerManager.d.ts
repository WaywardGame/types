/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { IDedicatedServerInfo } from "@wayward/game/steamworks/ISteamworks";
declare namespace DedicatedServerManager {
    function restart(): boolean;
    function initialize(info: IDedicatedServerInfo): Promise<void>;
    function exit(reason: string): void;
    function newGame(info: IDedicatedServerInfo): Promise<boolean>;
}
export default DedicatedServerManager;
