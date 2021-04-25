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
interface InstantiatedClass<T> extends AnyClass<T> {
    INSTANCE: T;
}
interface NullaryInstantiatedClass<T> extends NullaryClass<T> {
    INSTANCE: T;
}
export default function Instantiate<T>(instantiator: () => T, globalVariable?: string): (constructor: InstantiatedClass<T>) => void;
export default function Instantiate<T>(globalVariable?: string): (constructor: NullaryInstantiatedClass<T>) => void;
export {};
