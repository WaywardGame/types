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
import { Command, ICommand } from "command/ICommand";
import { ICommandManager } from "command/ICommandManager";
import Player from "game/entity/player/Player";
import GenericManager from "utilities/generic/GenericManager";
import { IGenericManager } from "utilities/generic/IGenericManager";
import { LogSource } from "utilities/Log";
export default class CommandManager extends GenericManager<ICommand> implements ICommandManager {
    setup(instance: IGenericManager<ICommand>): void;
    execute(player: Player, cmd: Command, args?: string): void;
    protected getSource(): LogSource;
    protected getEnumObject(): any;
}
export declare const commandManager: CommandManager;
