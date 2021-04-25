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
import ISshShell from "./ISshShell";
export interface ISshCommand {
    type: SshCommandType;
    category: SshCommandCategory;
    helpText: string;
    requirements: SshCommandRequirement;
    callback: SshCommandCallback;
}
export declare type SshCommandCallback = (shell: ISshShell, args: string) => Promise<SshCommandResult>;
export declare type SshCommandResult = ISshShell | false | undefined | void;
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
