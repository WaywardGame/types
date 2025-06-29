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
import type { ClientWebWorkerMessage } from "@wayward/game/webWorker/WebWorkerMessages";
import { WebWorkerStatus } from "@wayward/game/webWorker/WebWorkerMessages";
/**
 * Wrapper around a WebWorker that provides useful functionality
 */
export declare class WebWorkerClient {
    readonly identifier: string;
    multiplayerDataCallback: ((data: ArrayBufferLike) => void) | undefined;
    private readonly log;
    private readonly worker;
    private readonly readyPromise;
    private readonly deletePromise;
    private _status;
    matchmakingIdentifier: string | undefined;
    get status(): WebWorkerStatus | undefined;
    constructor(identifier: string);
    delete(): Promise<void>;
    waitUntilReady(): Promise<void>;
    joinServer(): Promise<void>;
    sendMessage(message: ClientWebWorkerMessage, options?: StructuredSerializeOptions): void;
    private setStatus;
}
