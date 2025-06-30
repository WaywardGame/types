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
import type { ISshCommand, SshCommandResult } from "@wayward/game/multiplayer/dedicatedServer/ssh/ISshCommand";
import { SshCommandType } from "@wayward/game/multiplayer/dedicatedServer/ssh/ISshCommand";
import type { ISshCommandManager } from "@wayward/game/multiplayer/dedicatedServer/ssh/ISshCommandManager";
import type ISshShell from "@wayward/game/multiplayer/dedicatedServer/ssh/ISshShell";
import GenericManager from "@wayward/game/utilities/generic/GenericManager";
import type { IGenericManager } from "@wayward/game/utilities/generic/IGenericManager";
export default class SshCommandManager extends GenericManager<ISshCommand> implements ISshCommandManager {
    setup(instance: IGenericManager<ISshCommand>): void;
    execute(shell: ISshShell, sshCommand: SshCommandType, args?: string): Promise<SshCommandResult>;
    protected getLogSource(): string;
    protected getEnumObject(): typeof SshCommandType;
}
