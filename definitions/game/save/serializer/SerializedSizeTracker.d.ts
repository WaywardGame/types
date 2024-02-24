import type { ISerializer } from "@wayward/game/save/serializer/ISerializer";
import type Log from "@wayward/utilities/Log";
/**
 * Tracks & outputs the size of serialized objects when saving the game while developer mode is enabled
 */
export declare class SerializedSizeTracker {
    private readonly log;
    private readonly object;
    private serializeObjectStats?;
    constructor(object: any, log: Log);
    preSerializeObject(serializer: ISerializer): void;
    postSerializeObject(serializer: ISerializer): void;
    preSerializeProperty(serializer: ISerializer, key: string): void;
    postSerializeProperty(serializer: ISerializer, key: string): void;
}
