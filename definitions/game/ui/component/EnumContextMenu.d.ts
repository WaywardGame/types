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
import Translation from "@wayward/game/language/Translation";
export declare enum EnumSort {
    Name = 0,
    Id = 1
}
export default class EnumContextMenu<E extends number, K extends string> {
    private translator?;
    private readonly enumEntries;
    private _sort;
    constructor(e: Record<K, E>, translator?: ((e: E) => Translation) | undefined);
    setTranslator(translator: (e: E) => Translation): this;
    setSort(sort: EnumSort | ((a: E, b: E) => number)): this;
    waitForChoice(): Promise<E | undefined>;
    private getSort;
}
