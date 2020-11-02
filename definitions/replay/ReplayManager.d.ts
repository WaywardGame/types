/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import ActionPacket from "multiplayer/packets/shared/ActionPacket";
import { IReplayLogEntry } from "replay/IReplayLogEntry";
export default class ReplayManager {
    recording: boolean;
    debugMode: boolean;
    gameVersion: string;
    log: IReplayLogEntry[];
    private _playing;
    private _speed;
    private _recordingStartTime;
    private _playbackLogIndex;
    private _playbackStartTime;
    private _playbackSpeedWarning;
    isRecording(): boolean;
    isReplayMode(): boolean;
    isPlaying(): boolean;
    replayVersionMatches(): boolean;
    enableRecording(enable: boolean, debugMode?: boolean): void;
    startPlayback(): boolean;
    stopPlayback(): void;
    setPlaybackSpeed(speed: number): void;
    loadPlayback(autoStart?: boolean): Promise<void>;
    restoreLog(logToRestore: IReplayLogEntry[]): void;
    tick(timeStamp: number): void;
    convertToSave(): Promise<boolean>;
    recordAction(actionPacket: ActionPacket): void;
    recordRealtimeTick(): void;
    private _createLogEntry;
    private _updatePlayback;
}
