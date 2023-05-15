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
import type { ISerializeProperty } from "save/ISaveManager";
declare const propertiesToSerializeObject: Record<string, ISerializeProperty>;
declare const propertiesToSerializeGlobalObject: Record<string, ISerializeProperty>;
export type PropertyToSerialize = keyof typeof propertiesToSerializeObject;
export type PropertyToSerializeGlobal = keyof typeof propertiesToSerializeGlobalObject;
export type AnyPropertyToSerialize = PropertyToSerialize | PropertyToSerializeGlobal;
export declare const propertiesToSerialize: Record<PropertyToSerialize, ISerializeProperty>;
export declare const propertiesToSerializeGlobal: Record<PropertyToSerializeGlobal, ISerializeProperty>;
export {};
