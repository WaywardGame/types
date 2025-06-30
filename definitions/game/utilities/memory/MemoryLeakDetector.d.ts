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
import type Screen from "@wayward/game/ui/screen/Screen";
import { ExpectedLifetime } from "@wayward/utilities/memory/ILifetime";
declare class MemoryLeakDetector {
    private surpressLogs;
    private nextObjectId;
    private objectsCollected;
    private readonly objects;
    private activeTask;
    private queuedGarbageCollectionTimeoutId;
    get isReportingErrors(): boolean;
    get isMonitoring(): boolean;
    getCount(prefix: string): number;
    /**
     * Queues a garbage collection to run after a delay
     * @param delay Delay in milliseconds
     */
    queueNextGarbageCollection(delay?: number): void;
    waitForIdle(): Promise<void>;
    register(object: object, objectName: string, expectedLifetime: ExpectedLifetime, parentObjectIdentifier?: string, includeStackTrace?: boolean): void;
    registerMultiple<T extends object>(prefix: string, objects: SaferArray<T>, objectNamer: (object: T) => string, expectedLifetime: ExpectedLifetime): void;
    onStopPlay(): void;
    onScreenShow(_: any, screen: Screen): Promise<any>;
    private onReset;
    private runCheck;
    garbageCollect(source: string): Promise<void>;
    private checkObjects;
}
export declare const memoryLeakDetector: MemoryLeakDetector;
export {};
