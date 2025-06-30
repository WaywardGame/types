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
export default class UiData {
    private readonly data;
    private readonly updates;
    get<T>(id: string | number, key: string, or?: T): T;
    set(id: string | number, key: string, value: any): void;
    has(id: string | number, key: string): boolean;
    update(id: string | number, key: string): void;
    private sendUpdates;
}
