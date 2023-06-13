/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { ICommand } from "command/ICommand";
import { Command } from "command/ICommand";
import type { ICommandManager } from "command/ICommandManager";
import type { IEventEmitter } from "event/EventEmitter";
import type Player from "game/entity/player/Player";
import GenericManager from "utilities/generic/GenericManager";
import type { IGenericManager } from "utilities/generic/IGenericManager";
import { LogSource } from "utilities/Log";
export interface ICommandManagerEvents {
    /**
     * Called before a command is executed
     * @param player The player object
     * @param command The command
     * @param args The arguments
     * @returns False to cancel the command or undefined to use the default logic
     */
    preExecuteCommand?(player: Player, command: Command, args: string | undefined): boolean | undefined;
}
export default class CommandManager extends GenericManager<ICommand> implements ICommandManager {
    event: IEventEmitter<this, ICommandManagerEvents>;
    setup(instance: IGenericManager<ICommand>): void;
    execute(player: Player, cmd: Command, args?: string): void;
    protected getSource(): LogSource;
    protected getEnumObject(): any;
}
