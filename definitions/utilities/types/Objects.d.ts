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
    type Empty = Record<string, never>;
    type PartialRecord<K extends string | number | symbol, V> = Partial<Record<K, V>>;
    type Entry<O> = {
        [K in keyof O]: [K, O[K]];
    }[keyof O];
    type Key<O> = keyof O;
    type Value<O> = O[keyof O];
    type ExcludeKeys<O, K extends string | number | symbol> = {
        [KN in Exclude<keyof O, K>]: O[KN];
    };
    type PartialValues<O> = UnionToIntersection<{
        [K in keyof O]: Partial<O[K]>;
    }[keyof O]>;
    type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
    type PickRequired<T, K extends keyof T> = (Omit<T, K> & Required<Pick<T, K>>) extends infer O ? {
        [K in keyof O]: O[K] | undefined;
    } : never;
    /**
     * Given `FROM`, returns a type matching all keys that point to `VALUES`.
     *
     * Matched with: `FROM[keyof FROM] extends VALUES ? ..`
     */
    type PickValueKeys<FROM, VALUES> = {
        [FROM_KEY in keyof FROM]: FROM[FROM_KEY] extends VALUES ? FROM_KEY : never;
    }[keyof FROM];
    /**
     * Given `FROM`, returns a type matching all keys that point to `VALUES`.
     *
     * Matched with: `VALUES extends FROM[keyof FROM] ? ..`
     */
    type PickValueKeysInverse<FROM, VALUES> = {
        [FROM_KEY in keyof FROM]: VALUES extends FROM[FROM_KEY] ? FROM_KEY : never;
    }[keyof FROM];
    type PickValues<FROM, VALUES> = Pick<FROM, PickValueKeys<FROM, VALUES>>;
    type EnumKey<E> = keyof {
        [K in keyof E as E[K] extends number ? K : never]: true;
    };
    /**
     * Merges T1 and T2, favouring properties from T2
     */
    type Merge<T1, T2> = {
        [KEY in keyof T1 | keyof T2]: T2 extends Partial<Record<KEY, any>> ? T2[KEY] : T1 extends Partial<Record<KEY, any>> ? T1[KEY] : never;
    };
}
declare const _default: {};
export default _default;
