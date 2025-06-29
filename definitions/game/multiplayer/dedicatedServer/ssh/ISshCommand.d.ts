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
import type ISshShell from "@wayward/game/multiplayer/dedicatedServer/ssh/ISshShell";
import type CommandLine from "@wayward/game/utilities/CommandLine";
export interface ISshCommand {
    type: SshCommandType;
    category: SshCommandCategory;
    helpText: string;
    requirements: SshCommandRequirement;
    callback: SshCommandCallback;
}
export type SshCommandCallback = (shell: ISshShell, args: CommandLine.Args) => Promise<SshCommandResult>;
export type SshCommandResult = ISshShell | false | undefined | void;
export declare enum SshCommandType {
    Help = 0,
    Status = 1,
    Ls = 2,
    Motd = 3,
    End = 4,
    New = 5,
    Load = 6,
    Backup = 7,
    Save = 8,
    Sync = 9,
    Send = 10,
    Chat = 11,
    Kick = 12,
    Ban = 13,
    Unban = 14,
    Shutdown = 15,
    Exit = 16
}
export declare enum SshCommandCategory {
    Server = 0,
    Game = 1,
    Chat = 2,
    Admin = 3,
    Ssh = 4,
    Uncategorized = 5
}
export declare enum SshCommandRequirement {
    None = 0,
    InGame = 1,
    NotInGame = 2
}
