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
export declare class LogFile {
    private fileStreamInfoPromise;
    private fileStreamInfo;
    private readonly buffer;
    private closed;
    logsPath: string | undefined;
    append(message: string): Promise<void>;
    close(): Promise<void>;
    private createFileStream;
    private createFileStreamInfo;
    private writeBuffer;
}
