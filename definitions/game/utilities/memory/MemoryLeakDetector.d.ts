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
import { ExpectedLifetime } from "utilities/memory/IMemoryLeakDetector";
declare class MemoryLeakDetector {
    private surpressLogs;
    private nextObjectId;
    private objectsCollected;
    private readonly objects;
    private activeTask;
    get isReportingErrors(): boolean;
    get isMonitoring(): boolean;
    waitForIdle(): Promise<void>;
    register(object: object, objectName: string, expectedLifetime: ExpectedLifetime, parentObjectIdentifier?: string): void;
    registerMultiple<T extends object>(prefix: string, objects: SaferArray<T>, objectNamer: (object: T) => string, expectedLifetime: ExpectedLifetime): void;
    onStopPlay(): Promise<void>;
    private runCheck;
    private garbageCollect;
    private checkObjects;
}
export declare const memoryLeakDetector: MemoryLeakDetector;
export {};
