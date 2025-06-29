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
declare global {
    /**
     * An object of descriptions. Each key in E *may* map to a valid description.
     * @param E The enum with which to index these descriptions.
     * @param V The description type.
     */
    type OptionalDescriptions<E extends string | number, V> = Partial<Record<E, V>> & Record<number, V | undefined>;
    /**
     * An object of descriptions. Each key in E *will* map to a valid description.
     * @param E The enum with which to index these descriptions.
     * @param V The description type.
     */
    type Descriptions<E extends string | number, V> = Record<E, V> & Record<number, V | undefined>;
}
declare const _default: {};
export default _default;
