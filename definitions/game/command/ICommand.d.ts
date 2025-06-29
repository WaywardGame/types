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
import type CommandManager from "@wayward/game/command/CommandManager";
import type Player from "@wayward/game/game/entity/player/Player";
export interface ICommand {
    type: Command;
    callback: CommandCallback;
    canUse?: CommandCanUseCallback;
}
export type CommandCanUseCallback = (commandManager: CommandManager, player: Player, args: string) => boolean;
export type CommandCallback = (commandManager: CommandManager, player: Player, args: string) => void;
export declare enum Command {
    Backup = 0,
    Ban = 1,
    Banned = 2,
    Commands = 3,
    Kick = 4,
    Noclip = 5,
    Pause = 6,
    Ping = 7,
    Players = 8,
    Save = 9,
    Sync = 10,
    Unban = 11
}
