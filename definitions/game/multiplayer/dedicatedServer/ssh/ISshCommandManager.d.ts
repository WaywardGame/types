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
import type { ISshCommand, SshCommandResult, SshCommandType } from "multiplayer/dedicatedServer/ssh/ISshCommand";
import type ISshShell from "multiplayer/dedicatedServer/ssh/ISshShell";
import type { IGenericManager } from "utilities/generic/IGenericManager";
export interface ISshCommandManager extends IGenericManager<ISshCommand> {
    execute(shell: ISshShell, sshCommand: SshCommandType, args?: string): Promise<SshCommandResult>;
}