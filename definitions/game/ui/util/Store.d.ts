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
import EventEmitter from "@wayward/utilities/event/EventEmitter";
export interface ILocalStorage {
    databases?: IDBDatabaseInfo[];
}
export type IStoreEvents = {
    [KEY in keyof ILocalStorage as `set${Capitalize<KEY>}`]: (value: ILocalStorage[KEY], oldValue: ILocalStorage[KEY]) => any;
} & {
    [KEY in keyof ILocalStorage as `delete${Capitalize<KEY>}`]: (oldValue: ILocalStorage[KEY]) => any;
};
export default class Store {
    static readonly event: EventEmitter<null, IStoreEvents>;
    static get items(): ILocalStorage;
    static has(key: string): boolean;
    static get<T>(key: string): T | null;
    static set(key: string, value: any): boolean;
    static delete(key: string): boolean;
}
