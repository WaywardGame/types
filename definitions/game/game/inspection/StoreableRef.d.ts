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
import type { Reference, Referenceable } from "@wayward/game/game/reference/IReferenceManager";
export interface IStoreableDefinition<T extends WeakKey, JSON extends object> {
    make(value: T): JSON | undefined;
    resolve(storeable: JSON): T | undefined;
}
export default class Storeable<T extends WeakKey, JSON extends object> {
    private readonly definition;
    static ref: Storeable<Referenceable, Reference>;
    private readonly map;
    constructor(definition: IStoreableDefinition<T, JSON>);
    make<JSON2 extends JSON>(value?: T): JSON2 | undefined;
    resolve<T2 extends T>(storeable?: JSON): T2 | undefined;
}
