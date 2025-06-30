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
export default class Queue<T> {
    private queue;
    private offset;
    constructor(initial?: T[]);
    getLength(): number;
    isEmpty(): boolean;
    enqueue(value: T): void;
    dequeue(): T | undefined;
    dequeueAmount(amount: number): T[];
    isInQueue(item: T, equals?: (item1: T, item2: T) => boolean): boolean;
}
