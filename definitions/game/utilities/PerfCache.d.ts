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
import Observer from "@wayward/game/utilities/Observer";
export default class PerfCache<T> {
    readonly supplier: () => T;
    readonly clearOn: Observer.IRegistrar<this>;
    private value?;
    private dirty;
    constructor(supplier: () => T);
    get(): T;
    clear(): void;
}
