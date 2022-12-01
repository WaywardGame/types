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
import ActionPacket from "multiplayer/packets/shared/ActionPacket";
import type { IReplayLogEntry } from "replay/IReplayLogEntry";
export default class ReplayManager {
    debugMode: boolean;
    private recording;
    private readonly gameVersion;
    private log;
    private readonly playbackState;
    private _recordingStartTime;
    private _skipTicks;
    isRecording(): boolean;
    isReplayMode(): boolean;
    isPlaying(): boolean;
    getPlaybackLogIndex(): number;
    getLogEntriesCount(): number;
    getPlaybackSpeed(): number;
    getPlaybackMaxLogEntryIndex(): number | undefined;
    replayVersionMatches(): boolean;
    restoreLog(logToRestore: IReplayLogEntry[]): void;
    enableRecording(enable: boolean, debugMode?: boolean): void;
    startPlayback(speed?: number): boolean;
    stepPlayback(steps?: number): void;
    stopPlayback(): void;
    setPlaybackMaxLogEntryIndex(maxLogEntryIndex: number | undefined): void;
    setPlaybackSpeed(speed: number): void;
    loadPlayback(autoStartSpeed?: number): Promise<void>;
    tick(timeStamp: number): void;
    convertToSave(): Promise<boolean>;
    recordAction(actionPacket: ActionPacket): void;
    recordRealtimeTick(): void;
    private _createLogEntry;
    private _updatePlayback;
}
