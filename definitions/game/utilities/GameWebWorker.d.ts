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
import type { WorkerFunction } from "@wayward/utilities/WebWorker";
import { WebWorker } from "@wayward/utilities/WebWorker";
export declare class GameWebWorker<RequestType, ResultType> extends WebWorker<RequestType, ResultType> {
    constructor(workerFunction: WorkerFunction<RequestType, ResultType>);
    private static biomesToString;
}
