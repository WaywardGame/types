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
import type { Events, IEventEmitter } from "event/EventEmitter";
import EntityManager from "game/entity/EntityManager";
import Player from "game/entity/player/Player";
import type { IPlayerOptions, IPlayOptions } from "game/IGame";
export interface IPlayerManagerEvents extends Events<EntityManager<Player>> {
    /**
     * Called when a player is about to be removed
     * The player is going to be added into absentPlayers
     * @param player The player object
     */
    preRemove?(player: Player): void;
    /**
     * Called when a player joins the server
     * @param player The player object
     */
    join?(player: Player): void;
    /**
     * Called when a player leaves the server
     * Note: This hook is not called for the player who left the server (player will never be localPlayer)
     * @param player The player object
     */
    leave?(player: Player): void;
}
export default class PlayerManager extends EntityManager<Player> {
    event: IEventEmitter<this, IPlayerManagerEvents>;
    constructor();
    getAll(includeGhosts?: boolean, includeConnecting?: boolean): Player[];
    getByPid(pid: number): Player | undefined;
    getByIdentifier(identifier: string, includeAbsent?: boolean): Player | undefined;
    getByName(name: string): Player | undefined;
    getValidName(name: string | undefined): string;
    setLocal(player: Player, setLocalIsland?: boolean): void;
    add(playerOptions?: Partial<IPlayerOptions>, allowSetup?: boolean): Player;
    remove(player: Player): void;
    remove(pid: number): void;
    /**
     * Support loading dedicated server saves & backups in single player games
     * Support loading single player saves in dedicated servers
     * All while not losing data for any players - regardless of if the player was in the server or not at the time of the backup
     */
    repair(options: Partial<IPlayOptions>): void;
    /**
     * Removes and deletes a player.
     * Use with caution!
     */
    permanentlyDelete(player: Player): void;
    private removeAndFixIds;
}
