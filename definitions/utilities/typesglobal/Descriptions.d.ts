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
declare const _default: {};
export default _default;
declare global {
    /**
     * An object of descriptions. Each key in E *may* map to a valid description.
     * @param E The enum with which to index these descriptions.
     * @param V The description type.
     */
    type OptionalDescriptions<E extends string | number, V> = {
        [key in E]?: V;
    } & Record<number, V | undefined>;
    /**
     * An object of descriptions. Each key in E *will* map to a valid description.
     * @param E The enum with which to index these descriptions.
     * @param V The description type.
     */
    type Descriptions<E extends string | number, V> = {
        [key in E]: V;
    } & Record<number, V | undefined>;
}
