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
import { StatusType } from "@wayward/game/game/entity/status/IStatus";
import type { ItemType } from "@wayward/game/game/item/IItem";
export declare enum DoctorCureMethod {
    FrostbittenGoldilocksWarmth = 0,
    BurnedSootheInWater = 1,
    BurnedSoothePour = 2
}
export declare enum DoctorCureType {
    Soothe = 0,
    Cure = 1,
    Stem = 2
}
export declare const DOCTOR_CURE_TYPES: PartialRecord<StatusType, DoctorCureType>;
export declare const DOCTOR_CURE_METHOD_STATUSES: Record<DoctorCureMethod, StatusType>;
export interface IDoctorId {
    item: [ItemType, StatusType];
    method: [DoctorCureMethod];
}
export type DoctorType = keyof IDoctorId;
export type DoctorId = `${DoctorType}:${string}`;
