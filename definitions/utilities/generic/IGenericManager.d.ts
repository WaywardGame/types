/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
export interface IGenericRegistration {
    type: number;
}
export interface IGenericManager<T> {
    has(type: number): boolean;
    add(registration: T): void;
    get(type: number): T | undefined;
    remove(type: number): void;
}
