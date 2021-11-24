/*!
 * Copyright 2011-2021 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import EventEmitter from "event/EventEmitter";
import type Island from "game/island/Island";
import type { IUnserializedCallback } from "save/serializer/ISerializer";
import type { StringableObject } from "utilities/object/Objects";
export declare abstract class ObjectManager<ObjectType extends StringableObject, EventsType> extends EventEmitter.Host<EventsType> implements IUnserializedCallback {
    protected readonly island: Island;
    protected readonly objects: SaferArray<ObjectType>;
    constructor(island: Island, objects?: SaferArray<ObjectType>);
    onUnserialized(): void;
    [Symbol.iterator](): IterableIterator<ObjectType | undefined>;
    get length(): number;
    get(id: number): ObjectType | undefined;
    set(id: number, value: ObjectType | undefined): void;
    getObjects(): SaferArray<ObjectType>;
    protected replaceNullsWithUndefined(): void;
    private registerForMemoryLeakDetection;
}
