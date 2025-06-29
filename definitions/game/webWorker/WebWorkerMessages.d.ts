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
interface IWebWorkerMessage<Type extends string, DataType> {
    type: Type;
    data: DataType;
}
interface IDatalessWebWorkerMessage<Type extends string> {
    type: Type;
}
export type SharedWebWorkerMessages = IDatalessWebWorkerMessage<"delete"> | IWebWorkerMessage<"multiplayerData", ArrayBufferLike>;
export type HostWebWorkerMessage = SharedWebWorkerMessages | IDatalessWebWorkerMessage<"ready"> | IWebWorkerMessage<"status", {
    status: WebWorkerStatus;
}> | IWebWorkerMessage<"multiplayerConnect", {
    matchmakingIdentifier: string;
}>;
export type ClientWebWorkerMessage = SharedWebWorkerMessages | IWebWorkerMessage<"joinServer", {
    code: string;
}>;
export declare enum WebWorkerStatus {
    Initializing = 0,
    Idle = 1,
    JoiningGame = 2,
    InGame = 3,
    Deleting = 4,
    Deleted = 5
}
export {};
