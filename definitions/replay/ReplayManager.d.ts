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
export default class ReplayManager {
    debugMode: boolean;
    private recording;
    private readonly gameVersion;
    private log;
    private playbackState;
    private _recordingStartTime;
    private _skipTicks;
    isRecording(): boolean;
    isReplayMode(): boolean;
    isPlaying(): boolean;
    getLogEntriesCount(): number;
    getPlaybackSpeed(): number;
    replayVersionMatches(): boolean;
    enableRecording(enable: boolean, debugMode?: boolean): void;
    startPlayback(speed?: number): boolean;
    stopPlayback(): void;
    setPlaybackSpeed(speed: number): void;
    loadPlayback(autoStartSpeed?: number): Promise<void>;
    tick(timeStamp: number): void;
    convertToSave(): Promise<boolean>;
    recordAction(actionPacket: ActionPacket): void;
    recordRealtimeTick(): void;
    private _restoreLog;
    private _createLogEntry;
    private _updatePlayback;
}
