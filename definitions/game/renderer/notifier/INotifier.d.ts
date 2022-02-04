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
import type { SfxType } from "audio/IAudio";
import type { IslandId } from "game/island/IIsland";
import type { IVector2, IVector3 } from "utilities/math/IVector";
export interface INotificationLocation extends IVector3 {
    readonly islandId: IslandId;
    getMovementPoint?(timeStamp: number): IVector2;
    queueSoundEffect?(soundEffect: SfxType): void;
}
export declare enum StatNotificationType {
    EnemyHealth = 0,
    Stat = 1,
    Stamina = 2,
    Metabolism = 3,
    Health = 4,
    Thirst = 5,
    Zero = 6,
    Miss = 7,
    Immune = 8
}
export declare enum ItemNotifierType {
    Neutral = 0,
    Added = 1,
    Removed = 2,
    Broken = 3,
    Offer = 4,
    Damaged = 5
}
export declare enum CreatureNotifierType {
    Neutral = 0,
    Added = 1,
    Removed = 2
}
export declare enum NotifierIconType {
    Tame = 0,
    Untame = 1,
    Water = 2,
    Warning = 3
}
export declare const itemDamageNotifierThreshold = 3;
export declare const doodadDamageNotifierThreshold = 5;
