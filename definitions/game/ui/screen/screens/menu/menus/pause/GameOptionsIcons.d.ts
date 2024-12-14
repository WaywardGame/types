/*!
 * Copyright 2011-2024 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { IHasImagePath } from "@wayward/game/game/IObject";
import type { IGameOptions, IGameOptionsPlayer } from "@wayward/game/game/options/IGameOptions";
import type { IModdable } from "@wayward/game/mod/ModRegistry";
import type Tooltip from "@wayward/game/ui/tooltip/Tooltip";
export declare enum GameOptionsIcon {
    Peaceful = 0,
    Creatures = 1,
    Respawn = 2,
    EternalDay = 3,
    EternalNight = 4,
    Time = 5,
    Health = 6,
    Stamina = 7,
    Hunger = 8,
    Thirst = 9,
    Bleeding = 10,
    Poisoned = 11,
    Burned = 12,
    Skills = 13,
    NoItems = 14,
    Weight = 15,
    Crafting = 16,
    Items = 17,
    Travel = 18,
    Luck = 19
}
export interface IGameOptionsIcon extends IModdable, IHasImagePath {
    check(options: IGameOptions, localPlayerOption: ImmutableObject<IGameOptionsPlayer>): boolean;
    tooltip?(tooltip: Tooltip, options: IGameOptions, localPlayerOption: ImmutableObject<IGameOptionsPlayer>): any;
}
declare const gameOptionsIcons: Descriptions<GameOptionsIcon, IGameOptionsIcon>;
export default gameOptionsIcons;
