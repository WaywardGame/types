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
import Log from "@wayward/utilities/Log";
export default class DataCache<T> {
    readonly id: string;
    version: SupplierOr<PromiseOr<string>>;
    private cache;
    private dirty;
    private readonly db;
    readonly log: Log;
    constructor(id: string, version: SupplierOr<PromiseOr<string>>);
    getSize(): Promise<number>;
    get(key: string): Promise<T>;
    set(key: string, value: T, triggerSaveDebounce?: boolean): Promise<void>;
    clear(): Promise<void>;
    private init;
    save(): Promise<void>;
}
