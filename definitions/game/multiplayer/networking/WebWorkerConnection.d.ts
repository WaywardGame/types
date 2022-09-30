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
import type { IMatchmakingInfo, MatchmakingMessageData } from "multiplayer/matchmaking/IMatchmaking";
import { Connection } from "multiplayer/networking/Connection";
import type { WebWorkerClient } from "webWorker/WebWorkerClient";
export declare class WebWorkerConnection extends Connection {
    private readonly onData;
    private readonly onConnected?;
    private webWorkerClient?;
    name: string;
    get maxMessageSize(): number;
    constructor(matchmakingInfo: IMatchmakingInfo | undefined, matchmakingIdentifier: string, onData: (data: ArrayBuffer) => void, onConnected?: ((matchmakingInfo: IMatchmakingInfo) => void) | undefined, webWorkerClient?: WebWorkerClient | undefined);
    isConnected(): boolean;
    protected onClosing(): void;
    protected onClosed(): void;
    /**
     * Sends data by posting a message
     * note: buffer cannot be transfered to the workers because there could be multiple clients and it wouldn't work out
     */
    send(data: Uint8Array, byteOffset: number, length?: number): boolean;
    processMatchmakingMessage(message: MatchmakingMessageData): Promise<boolean>;
}
