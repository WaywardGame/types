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
import type Human from "@wayward/game/game/entity/Human";
import type Player from "@wayward/game/game/entity/player/Player";
import type Island from "@wayward/game/game/island/Island";
import type { IVector4 } from "@wayward/game/utilities/math/Vector4";
export interface IFieldOfViewEvents {
    getPlayerFieldOfViewRadius(radius: number, player: Player): number;
}
export interface IFieldOfViewOrigin extends Readonly<IVector4> {
    readonly island: Island;
    readonly asHuman?: Human;
}
export declare enum CanASeeBType {
    ClientSide = 0,
    CreatureInSightAttacking = 1,
    CreatureIslandTravel = 2,
    CreatureRandomSpawn = 3,
    CreatureScarecrow = 4,
    CreatureTrapping = 5,
    EntityHumansVisible = 6,
    FieldOfView = 7,
    GetNearestPlayer = 8,
    GetPlayersThatSeePosition = 9,
    Shipper = 10,
    SkeletalMage = 11,
    ZombieHorde = 12,
    TileIsInRange = 13,
    CurseDespawning = 14,
    CreatureDespawning = 15,
    CreatureOfferFromGround = 16,
    CursePositionRandom = 17,
    CurseSpawning = 18,
    CurseWitness = 19
}
