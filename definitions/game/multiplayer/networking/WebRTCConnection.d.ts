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
import type { IMultiplayerOnConnected } from "@wayward/game/multiplayer/IMultiplayer";
import type { IMatchmakingInfo, MatchmakingMessageData } from "@wayward/game/multiplayer/matchmaking/IMatchmaking";
import { Connection } from "@wayward/game/multiplayer/networking/Connection";
export declare class WebRTCConnection extends Connection {
    private readonly sendMatchmakingMessage;
    private readonly onData;
    private readonly onConnected?;
    name: string;
    readonly maxMessageSize = 65536;
    private _peerConnection?;
    private _dataChannel?;
    private _matchmakingConnectedMessageData?;
    constructor(matchmakingInfo: IMatchmakingInfo | undefined, matchmakingIdentifier: string, config: RTCConfiguration, sendMatchmakingMessage: (message: MatchmakingMessageData) => void, onData: (data: ArrayBuffer) => void, onConnected?: ((data: IMultiplayerOnConnected) => void) | undefined);
    get isConnected(): boolean;
    protected onClosing(): void;
    protected onClosed(): void;
    send(data: Uint8Array<ArrayBuffer>): boolean;
    processMatchmakingMessage(message: ArrayBuffer | MatchmakingMessageData): Promise<boolean>;
    private _onDataChannelMessage;
    private _onNegotiationNeeded;
    private _createDataChannel;
    private _onDataChannelChanged;
    private _onIceConnectionStateChange;
    private _onDescriptionCreated;
    private _parseIceCandidate;
    private _processConnectedMessage;
}
