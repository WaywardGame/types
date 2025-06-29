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
export type WorkerFunction<RequestType, ResultType> = (data: RequestType) => ({
    message: ResultType;
    transfer?: Transferable[];
} | Promise<{
    message: ResultType;
    transfer?: Transferable[];
}> | undefined);
export declare class WebWorker<RequestType, ResultType> {
    private worker;
    private blobUrl;
    private postMessagePromise;
    private static moduleCache;
    constructor(workerFunction: WorkerFunction<RequestType, ResultType>, extraBlobs?: string[]);
    free(): void;
    postMessage(message: RequestType, transfer?: Transferable[]): Promise<ResultType>;
    protected static normalizeFunction(func: any): string;
    protected static definitionPropertiesToBoolean(name: string, values: any): string;
    protected static enumToString(name: string, values: any, withStrings?: boolean): string;
    protected static functionOrClassToString(thing: any): string;
    protected static moduleToString(moduleName: string, name: string | undefined, moduleToConvert: any, globalVariables?: string[]): string;
}
