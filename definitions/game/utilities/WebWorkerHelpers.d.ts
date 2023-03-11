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
export declare module WebWorkerHelpers {
    class WebWorker {
        private callback?;
        private worker;
        private blobUrl;
        constructor(workerFunction: (data: any) => void, callback?: ((evt: any) => void) | undefined);
        getWorker(): Worker | undefined;
        free(): void;
    }
    export function create(workerFunction: (data: any) => void, messageCallbackFunction: (data: any) => void): Worker;
    export function createReusable(workerFunction: (data: any) => void): WebWorker;
    export {};
}
