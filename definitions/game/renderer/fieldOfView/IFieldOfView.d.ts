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
    CreatureIslandTravel = 4,
    FieldOfView = 5,
    GetNearestPlayer = 6,
    GetPlayersThatSeePosition = 7,
    SkeletalMage = 8,
    ZombieHorde = 9
}
