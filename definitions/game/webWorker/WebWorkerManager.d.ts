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
import type { Game } from "@wayward/game/game/Game";
import { WebWorkerClient } from "@wayward/game/webWorker/WebWorkerClient";
import type { HostWebWorkerMessage } from "@wayward/game/webWorker/WebWorkerMessages";
/**
 * Manager WebWorker interactions between the parent (host) & webworker's (clients)
 */
export declare class WebWorkerManager {
    private readonly game;
    readonly workers: Map<string, WebWorkerClient>;
    multiplayerDataCallback: ((data: ArrayBufferLike) => void) | undefined;
    constructor(game: Game);
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
