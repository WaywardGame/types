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
export default class Queue<T> {
    private queue;
    private offset;
    constructor(initial?: T[]);
    getLength(): number;
    isEmpty(): boolean;
    enqueue(value: T): void;
    dequeue(): T | undefined;
    isInQueue(item: T, equals?: (item1: T, item2: T) => boolean): boolean;
}
