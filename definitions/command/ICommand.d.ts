/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki/types/wiki/types/wiki/types/wiki/types/wiki/types/wiki/types/wiki/types/wiki/types/wiki/types/wiki/types/wiki/types/wiki/types/wiki/types/wiki/types/wiki/types/wiki
 */
import Player from "entity/player/Player";
export interface ICommand {
    type: Command;
    callback: CommandCallback;
}
export declare type CommandCallback = (player: Player, args: string) => void;
export declare enum Command {
    Backup = 0,
    Ban = 1,
    Banned = 2,
    Commands = 3,
    Kick = 4,
    Pause = 5,
    Ping = 6,
    Players = 7,
    Save = 8,
    Sync = 9,
    Unban = 10
}
