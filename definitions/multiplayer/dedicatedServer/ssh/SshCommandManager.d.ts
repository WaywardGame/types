/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import GenericManager from "game/GenericManager";
import { IGenericManager } from "game/IGenericManager";
import { LogSource } from "utilities/Log";
import { ISshCommand, SshCommandResult, SshCommandType } from "./ISshCommand";
import { ISshCommandManager } from "./ISshCommandManager";
import ISshShell from "./ISshShell";
export default class SshCommandManager extends GenericManager<ISshCommand> implements ISshCommandManager {
    setup(instance: IGenericManager<ISshCommand>): void;
    execute(shell: ISshShell, sshCommand: SshCommandType, args?: string): Promise<SshCommandResult>;
    protected getSource(): LogSource;
    protected getEnumObject(): any;
}
