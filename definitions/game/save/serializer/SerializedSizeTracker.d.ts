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
