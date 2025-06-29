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
import type { Command, ICommand } from "@wayward/game/command/ICommand";
import type { Game } from "@wayward/game/game/Game";
import type Player from "@wayward/game/game/entity/player/Player";
import type { IGenericManager } from "@wayward/game/utilities/generic/IGenericManager";
export interface ICommandManager extends IGenericManager<ICommand> {
    readonly game: Game;
    execute(player: Player, cmd: Command, args?: string): void;
}
