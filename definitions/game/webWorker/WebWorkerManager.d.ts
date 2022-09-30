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
import { WebWorkerClient } from "webWorker/WebWorkerClient";
import type { HostWebWorkerMessage } from "webWorker/WebWorkerMessages";
/**
 * Manager WebWorker interactions between the parent (host) & webworker's (clients)
 */
declare class WebWorkerManager {
    readonly workers: Map<string, WebWorkerClient>;
    multiplayerDataCallback: ((data: ArrayBuffer) => void) | undefined;
    get workerId(): string | undefined;
    /**
     * Called from a webworker when it's ready
     */
    ready(): void;
    /**
     * Creates a worker and connects them to the game
     */
    create(identifier?: string): Promise<WebWorkerClient>;
    /**
     * Deletes a webworker
     */
    delete(identifier: string): Promise<void>;
    findMultiplayerClient(matchmakingIdentifier: string): WebWorkerClient | undefined;
    sendToHost(message: HostWebWorkerMessage, options?: WindowPostMessageOptions): void;
    onPlay(): void;
    onStopPlay(): void;
    private throwIfHost;
    private throwIfWorker;
}
export declare const webWorkerManager: WebWorkerManager;
export {};
