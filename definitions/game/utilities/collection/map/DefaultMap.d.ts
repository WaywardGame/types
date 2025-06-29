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
import type { ISerializable, ISerializer } from "@wayward/game/save/serializer/ISerializer";
import type { RecursivePartial } from "@wayward/game/utilities/types/Recursive";
import Objects from "@wayward/utilities/object/Objects";
export default class DefaultMap<K, V> extends Map<K, V> implements ISerializable, Objects.ICloneable {
    readonly defaultValue: V;
    constructor(defaultValue: V, entries?: Iterable<readonly [K, RecursivePartial<V>]>);
    valuesAndDefault(): Generator<V>;
    initialize(key: K): V;
    serializeObject(serializer: ISerializer): undefined;
    deserializeObject(serializer: ISerializer): boolean;
    [Objects.SYMBOL_CLONE](clone: typeof Objects.deepClone): this;
}
