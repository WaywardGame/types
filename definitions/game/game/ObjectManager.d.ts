/*!
 * Copyright 2011-2023 Unlok
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
export declare abstract class ObjectManager<ObjectType extends StringableObject & {
    addReferenceId(): void;
}, EventsType> extends EventEmitter.Host<EventsType> implements IUnserializedCallback {
    protected readonly island: Island;
    protected readonly objects: SaferArray<ObjectType>;
    private lastUsedId;
    private sparseIds;
    constructor(island: Island, objects?: SaferArray<ObjectType>);
    get game(): import("./Game").Game;
    /**
     * Called when this object manager is not used anymore (after it was saved!)
     */
    delete(): void;
    onUnserialized(): void;
    [Symbol.iterator](): IterableIterator<ObjectType | undefined>;
    get length(): number;
    get(id: number): ObjectType | undefined;
    set(id: number, value: ObjectType | undefined): void;
    getObjects(): SaferArray<ObjectType>;
    findUnusedId(): number;
    protected removeNulls(): void;
    protected registerForMemoryLeakDetection(object: SaferArray<ObjectType>): void;
}
