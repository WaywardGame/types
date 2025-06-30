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
import type { ICommand } from "@wayward/game/command/ICommand";
import { Command } from "@wayward/game/command/ICommand";
import type { ICommandManager } from "@wayward/game/command/ICommandManager";
import type Player from "@wayward/game/game/entity/player/Player";
import GenericManager from "@wayward/game/utilities/generic/GenericManager";
import type { IGenericManager } from "@wayward/game/utilities/generic/IGenericManager";
import type { IEventEmitter } from "@wayward/utilities/event/EventEmitter";
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
    protected getLogSource(): string;
    protected getEnumObject(): typeof Command;
}
