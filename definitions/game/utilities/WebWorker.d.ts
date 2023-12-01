/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
export type WorkerFunction<RequestType, ResultType> = (data: RequestType) => ({
    message: ResultType;
    transfer?: Transferable[];
} | undefined);
export declare class WebWorker<RequestType, ResultType> {
    private worker;
    private blobUrl;
    private postMessagePromise;
    constructor(workerFunction: WorkerFunction<RequestType, ResultType>);
    free(): void;
    postMessage(message: RequestType): Promise<ResultType>;
    private normalizeFunction;
    private definitionPropertiesToBoolean;
    private enumToString;
    private functionOrClassToString;
    private moduleToString;
    private biomesToString;
}
