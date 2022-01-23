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
import EventEmitter from "event/EventEmitter";
import type Translation from "language/Translation";
export declare enum Load {
    GameIsland = 0,
    GameIslandMultiplayerTraveling = 1,
    GameFastForwarding = 2,
    GameFastForwardingMultiplayerTraveling = 3,
    GameGeneratingIsland = 4,
    GameGeneratingIslandMultiplayerTraveling = 5,
    GameTraveling = 6,
    GameTravelingMultiplayer = 7,
    GameFinalizingIsland = 8,
    GameAutoSaving = 9,
    GameItems = 10,
    GameLoading = 11,
    GameLostGLContext = 12,
    GameMods = 13,
    GameMultiplayerPlayerConnecting = 14,
    GameMultiplayerSynchronizing = 15,
    GameMultiplayerSyncing = 16,
    GameQuitting = 17,
    GameReloadingWebGl = 18,
    GameResting = 19,
    GameSaving = 20,
    GameSleeping = 21,
    GameSprites = 22,
    MenuChangelogLoading = 23,
    MenuCustomGameOptionsImporting = 24,
    MenuLoadGameExportingSave = 25,
    MenuLoadGameImportingSaves = 26,
    MenuLoadGameLoading = 27,
    MenuLoadGamePublishingSave = 28,
    MenuMainLoadingChangelog = 29,
    MenuMainLoadingNews = 30,
    MenuMilestoneModifiersImporting = 31,
    MenuModsUpdatingMod = 32,
    MenuModsPublishingMod = 33,
    MenuOptionsImportingGlobalData = 34,
    MenuOptionsLoading = 35,
    MultiplayerConnecting = 36,
    MultiplayerDownloadingGameData = 37,
    MultiplayerWaitingForGameData = 38,
    SteamworksRefreshingMods = 39
}
export interface ILoadingDescription<A extends any[]> {
    canCancel?: SupplierOr<boolean | undefined, A>;
    background?: SupplierOr<boolean | undefined, A>;
    type?: SupplierOr<LoadType | undefined, A>;
}
export declare type MultiplayerLoadingDescription = [Translation, Translation, Translation];
export declare class LoadingDescription<A extends any[]> implements ILoadingDescription<A> {
    canCancel?: SupplierOr<boolean | undefined, A>;
    background?: SupplierOr<boolean | undefined, A>;
    type?: SupplierOr<LoadType | undefined, A>;
    constructor(description: ILoadingDescription<A>);
    isCancelable(...args: A): boolean | undefined;
    isBackground(...args: A): boolean | undefined;
    getType(...args: A): LoadType | undefined;
    getTypeName(...args: A): string | undefined;
}
export declare enum LoadType {
    Normal = 0,
    Rest = 1
}
export declare const loadingDescriptions: {
    9: LoadingDescription<[]>;
    6: LoadingDescription<[import("../../language/impl/TranslationImpl").default]>;
    7: LoadingDescription<MultiplayerLoadingDescription>;
    2: LoadingDescription<[]>;
    3: LoadingDescription<MultiplayerLoadingDescription>;
    4: LoadingDescription<[]>;
    5: LoadingDescription<MultiplayerLoadingDescription>;
    0: LoadingDescription<[]>;
    1: LoadingDescription<MultiplayerLoadingDescription>;
    8: LoadingDescription<[]>;
    10: LoadingDescription<[]>;
    11: LoadingDescription<[]>;
    12: LoadingDescription<[]>;
    13: LoadingDescription<[]>;
    14: LoadingDescription<[]>;
    15: LoadingDescription<[]>;
    16: LoadingDescription<[]>;
    17: LoadingDescription<[]>;
    18: LoadingDescription<[]>;
    19: LoadingDescription<[]>;
    20: LoadingDescription<[]>;
    21: LoadingDescription<[]>;
    22: LoadingDescription<[background: boolean]>;
    23: LoadingDescription<[]>;
    24: LoadingDescription<[]>;
    25: LoadingDescription<[]>;
    26: LoadingDescription<[numberOfSaves: number, filenames: string[]]>;
    27: LoadingDescription<[]>;
    28: LoadingDescription<[]>;
    29: LoadingDescription<[]>;
    30: LoadingDescription<[]>;
    31: LoadingDescription<[]>;
    32: LoadingDescription<[]>;
    33: LoadingDescription<[]>;
    34: LoadingDescription<[]>;
    35: LoadingDescription<[]>;
    36: LoadingDescription<[]>;
    37: LoadingDescription<[]>;
    38: LoadingDescription<[]>;
    39: LoadingDescription<[]>;
};
export declare type LoadDescriptionOf<LOAD extends Load> = (typeof loadingDescriptions)[LOAD];
export declare type LoadArgs<LOAD extends Load> = (typeof loadingDescriptions)[LOAD] extends ILoadingDescription<infer A> ? A : never;
declare module Loading {
    interface ILoadingEvents {
        /**
         * Emitted when a new thing has begun to load
         */
        start<LOAD extends Load>(load: LOAD, ...args: LoadArgs<LOAD>): any;
        /**
         * Emitted when a load has had progress.
         * @param progress A decimal number between 0 and 1
         */
        progress(load: Load, progress: number): any;
        /**
         * Emitted when a load has finished loading.
         * Either this or "cancel" will be called when a load is done
         */
        step(...loaded: Load[]): any;
        /**
         * Emitted when a load has been cancelled.
         * Either this or "step"" will be called when a load is done
         */
        cancel(load: Load): any;
        /**
         * Emitted when all things have finished loading
         */
        end(...loaded: Load[]): any;
    }
    const currently: Map<Load, any[]>;
    class Events extends EventEmitter.Host<ILoadingEvents> {
        static INSTANCE: Events;
        get currently(): Map<Load, any[]>;
    }
    function start<LOAD extends Load>(load: LOAD, ...args: LoadArgs<LOAD>): typeof Loading;
    function until(promise: Promise<any>): {
        start<LOAD extends Load>(load: LOAD, ...args: LoadArgs<LOAD>): any;
    };
    function end(...loaded: Load[]): typeof Loading;
    function cancel(load: Load): void;
    /**
     * Ends every load.
     *
     * **Note:** This should only be used in very specific circumstances — IE, when an error happens and the loads don't matter anymore.
     */
    function clear(): void;
    /**
     * Returns a promise that will resolve when the load is complete, and reject if the load is cancelled.
     */
    function waitFor(load: Load): Promise<void>;
    /**
     * Returns a promise that will resolve when all running loads are complete.
     */
    function waitForAll(): Promise<void>;
    function progress(load: Load, progress: number): Promise<void>;
    /**
     * Returns true if the load is running
     */
    function exists(load: Load): boolean;
}
export default Loading;
