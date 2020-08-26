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
import EntityManager from "entity/EntityManager";
import Player from "entity/player/Player";
import { IPlayerOptions, IPlayOptions } from "game/IGame";
export default class PlayerManager extends EntityManager<Player> {
    static readonly INSTANCE: PlayerManager;
    getEntities(): Player[];
    setLocal(player: Player): void;
    add(playerOptions?: Partial<IPlayerOptions>, allowSetup?: boolean): Player;
    remove(player: Player): void;
    remove(pid: number): void;
    /**
     * Support loading dedicated server saves & backups in single player games
     * Support loading single player saves in dedicated servers
     * All while not losing data for any players - regardless of if the player was in the server or not at the time of the backup
     */
    repair(options: Partial<IPlayOptions>): void;
    private delete;
    private removeAndFixIds;
}
