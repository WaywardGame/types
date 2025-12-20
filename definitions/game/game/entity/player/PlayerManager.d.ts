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
import type { IEntityManagerEvents } from "@wayward/game/game/entity/EntityManager";
import Player from "@wayward/game/game/entity/player/Player";
import type { Game } from "@wayward/game/game/Game";
import type { IPlayerOptions, IPlayOptions } from "@wayward/game/game/IGame";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
export interface IPlayerManagerEvents extends IEntityManagerEvents<Player> {
    /**
     * Called when a player is about to be removed
     * The player is going to be added into absentPlayers
     * @param player The player object
     */
    preRemove(player: Player): void;
    /**
     * Called when a player joins the server
     * @param player The player object
     */
    join(player: Player): void;
    /**
     * Called when a player leaves the server
     * Note: This hook is not called for the player who left the server (player will never be localPlayer)
     * @param player The player object
     */
    leave(player: Player): void;
    /**
     * Called when a player-like human (player / special npc) is spawned
     */
    addPlayingEntity(entity: Player): any;
    /**
     * Called when a player-like human (player / special npc) is removed
     */
    removePlayingEntity(entity: Player): any;
}
export default class PlayerManager extends EventEmitter.Host<IPlayerManagerEvents> {
    private readonly game;
    readonly players: Array<Player | undefined>;
    readonly absentPlayers: Array<Player | undefined>;
    constructor(game: Game);
    reset(): void;
    /**
     * Get players. Parameters include additional players that may not be relevant, such as ghosts, connecting players, absent players, the dedicated server fake player.
     * @param includeGhosts True to include players that are ghosts
     * @param includeConnecting True to include players that are connecting
     * @param includeDedicatedServer True to include the dedicated server fake player
     * @param includeAbsent True to include the absent players
     * @returns Array of Player objects
     */
    getAll(includeGhosts?: boolean, includeConnecting?: boolean, includeDedicatedServer?: boolean, includeAbsent?: boolean): Player[];
    getByIdentifier(identifier: string, includeAbsent?: boolean): Player | undefined;
    getByName(name: string): Player | undefined;
    getValidName(name: string | undefined): string;
    setLocal(player: Player, setLocalIsland?: boolean): void;
    add(playerOptions?: Partial<IPlayerOptions>, allowSetup?: boolean): Player;
    remove(player: Player): void;
    /**
     * Support loading dedicated server saves & backups in single player games
     * Support loading single player saves in dedicated servers
     * All while not losing data for any players - regardless of if the player was in the server or not at the time of the backup
     */
    repair(options: Partial<IPlayOptions>): Promise<void>;
    /**
     * Removes and deletes a player.
     * Use with caution!
     */
    permanentlyDelete(player: Player, delayForKick?: boolean): void;
    private performPermanentDelete;
    /**
     * Moves to the player to the target array
     * @param source Where they are coming from. It's okay if they aren't in this array
     * @param destination Where the player should be added to
     * @param player The player to move
     */
    private movePlayerTo;
    /**
     * Finds the first available player id in the array
     */
    private findAvailablePlayerId;
    /**
     * Clears the existing client secret for the player
     * @param playerIdentifier Player identifier
     */
    clearClientSecret(playerIdentifier: string): void;
}
