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
import type Translation from "@wayward/game/language/Translation";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
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
    GameInitializingMods = 13,
    GameLoadingMods = 14,
    GameMultiplayerPlayerConnecting = 15,
    GameMultiplayerSynchronizing = 16,
    GameMultiplayerSyncing = 17,
    GameQuitting = 18,
    GameReloadingWebGl = 19,
    GameResting = 20,
    GameSaving = 21,
    GameSleeping = 22,
    GameSprites = 23,
    MenuChangelogLoading = 24,
    MenuCustomGameOptionsImporting = 25,
    MenuLoadGameExportingSave = 26,
    MenuLoadGameImportingSaves = 27,
    MenuLoadGameLoading = 28,
    MenuLoadGamePublishingSave = 29,
    MenuMainLoadingChangelog = 30,
    MenuMainLoadingNews = 31,
    MenuMilestoneModifiersImporting = 32,
    MenuModsUpdatingMod = 33,
    MenuModsPublishingMod = 34,
    MenuOptionsImportingGlobalData = 35,
    MenuOptionsLoading = 36,
    MultiplayerConnecting = 37,
    MultiplayerDownloadingGameData = 38,
    MultiplayerWaitingForGameData = 39,
    SteamworksRefreshingMods = 40
}
export interface ILoadingDescription<A extends any[]> {
    canCancel?: SupplierOr<boolean | undefined, A>;
    background?: SupplierOr<boolean | undefined, A>;
    type?: SupplierOr<LoadType | undefined, A>;
}
export type MultiplayerLoadingDescription = [Translation, Translation, Translation];
export declare class LoadingDescription<A extends any[]> implements ILoadingDescription<A> {
    canCancel?: SupplierOr<boolean | undefined, A>;
    background?: SupplierOr<boolean | undefined, A>;
    type?: SupplierOr<LoadType | undefined, A>;
    constructor(description: ILoadingDescription<A>);
    isCancelable(...args: A): boolean | undefined;
    isBackground(...args: A): boolean | undefined;
    getType(...args: A): LoadType | undefined;
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
    22: LoadingDescription<[]>;
    23: LoadingDescription<[background: boolean]>;
    24: LoadingDescription<[]>;
    25: LoadingDescription<[]>;
    26: LoadingDescription<[]>;
    27: LoadingDescription<[numberOfSaves: number, filenames: string[]]>;
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
    40: LoadingDescription<[]>;
};
export type LoadDescriptionOf<LOAD extends Load> = (typeof loadingDescriptions)[LOAD];
export type LoadArgs<LOAD extends Load> = (typeof loadingDescriptions)[LOAD] extends ILoadingDescription<infer A> ? A : never;
declare namespace Loading {
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
