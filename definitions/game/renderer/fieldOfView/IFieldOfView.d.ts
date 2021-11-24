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
import type Player from "game/entity/player/Player";
export interface IFieldOfViewEvents {
    getPlayerFieldOfViewRadius(radius: number, player: Player): number;
}
export declare enum CanASeeBType {
    ClientSide = 0,
    CreatureRandomSpawn = 1,
    CreatureScarecrow = 2,
    CreatureTrapping = 3,
    FieldOfView = 4,
    GetNearestPlayer = 5,
    GetPlayersThatSeePosition = 6,
    SkeletalMage = 7,
    ZombieHorde = 8
}
