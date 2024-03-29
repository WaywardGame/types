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
import type { IServerMod } from "@hosts/shared/interfaces";
import EventEmitter from "event/EventEmitter";
import type { Game } from "game/Game";
import type { IPlayOptions } from "game/IGame";
import type { IModConfig } from "mod/IMod";
import { MultiplayerCompatibility } from "mod/IMod";
import type { IModInfo, IModProvides } from "mod/IModInfo";
import { ModState, ModType } from "mod/IModInfo";
import type { ICanLoadInfo, IModManagerEvents } from "mod/IModManager";
import { CanLoadState, ModLoadFailureReason } from "mod/IModManager";
import Log from "utilities/Log";
export default class ModManager extends EventEmitter.Host<IModManagerEvents> {
    private readonly game;
    private setup;
    private readonly mods;
    private readonly onModInitializedCallbacks;
    private loadedMods;
    private _canUnlockMilestones?;
    constructor(game: Game);
    get areModsLoaded(): boolean;
    waitForSetup(showLoad: boolean): Promise<void>;
    loadAll(options: Partial<IPlayOptions>): Promise<Array<[ModLoadFailureReason, ...any[]]>>;
    getMultiplayerCompatibility(index: number): MultiplayerCompatibility;
    isMultiplayerCompatible(index: number): boolean;
    isMultiplayerClientSide(index: number): boolean;
    isMultiplayerServerSide(index: number): boolean;
    isUnloadable(index: number): boolean;
    unloadAll(resetState?: boolean): Promise<void>;
    setupMods(): Promise<void>;
    saveAll(): void;
    getFile(modIndex: number, file: string): Promise<string | undefined>;
    setupMod(folderName: string, modType: ModType, initialModState?: ModState): Promise<number | undefined>;
    removeMod(id: number, uninstall?: boolean): void;
    getMods(): IModInfo[];
    getLoadedMods(): IModInfo[];
    getLoadedModByName(name: string): IModInfo | undefined;
    getModFromIndex(i: number): IModInfo;
    getEnabledMods(): number[];
    load(index: number, loadOrder: number): Promise<void>;
    unload(index: number, cacheHooks?: boolean): Promise<void>;
    save(index: number): void;
    /**
     * Used by pro developers
     */
    reloadByName(name: string): Promise<boolean>;
    /**
     * Used by pro developers
     */
    reload(index: number, cacheHooks?: boolean): Promise<boolean>;
    isValid(index: number): boolean;
    isEnabled(index: number): boolean;
    isLoaded(index: number): boolean;
    getIdentifier(index: number): string;
    getConfig(mod: number | IModInfo): IModConfig | undefined;
    getName(index: number): string;
    getLog(index: number): Log;
    getDescription(index: number): string;
    getReadme(index: number): Promise<string | false>;
    getIcon(index: number): Promise<string | false | undefined>;
    getTags(index: number): Set<string>;
    getVersion(index: number): string;
    getLastUpdatedDate(index: number): number | undefined;
    getInstallDate(index: number): number | undefined;
    getCreatedDate(index: number): number | undefined;
    getAuthor(index: number): string;
    getType(index: number): ModType;
    getRequiredMods(index: number): string[];
    getPath(index: number): string;
    getFolderName(index: number): string;
    getPublishFileId(index: number): string | undefined;
    getSteamIdOwner(index: number): string | undefined;
    getProvided(index: number): IModProvides;
    canPublish(index: number): boolean;
    canLoad(index: number, fromModsMenu?: boolean, count?: number): CanLoadState;
    getLoadabilityInfo(publishFileIdOrModOrIndex: string | IServerMod | number): ICanLoadInfo;
    getIndicesFromIdentifier(identifier: string): number[];
    getIndexFromName(name: string): number[];
    getIndexFromPublishId(publishFileId: string): number[];
    getIndexFromPath(path: string): number | undefined;
    isEnabledByName(name: string): boolean;
    isLoadedByName(name: string): boolean;
    setPublishId(index: number, publishedFileId: string): void;
    setSteamIdOwner(index: number, steamIdOwner: string): void;
    setLastUpdated(index: number, lastUpdated: number): void;
    setInstallDate(index: number, installDate: number): void;
    setCreatedDate(index: number, createdDate: number): void;
    getState(index: number): ModState;
    isInitializing(index: number): ModState;
    setState(index: number, state: ModState, force?: boolean, cacheHooks?: boolean, callback?: NullaryFunction, unloaded?: boolean): Promise<boolean>;
    uninitialize(index: number): boolean;
    uninitializeAll(): void;
    /**
     * Returns whether every mod that's enabled either allows unlocking milestones or doesn't provide scripts.
     */
    canUnlockMilestones(): boolean;
    /**
     * Returns whether the given mod allows unlocking milestones
     */
    canUnlockMilestones(mod: number | IModInfo): boolean;
    /**
     * Returns a list of every enabled mod that doesn't allow unlocking milestones and provides scripts.
     */
    getEnabledModsThatDisallowMilestoneUnlocks(): IModInfo[];
    protected onGlobalSlotLoaded(): void;
    /**
     * Loads all of the stylesheets from the given mod.
     */
    private initializeStylesheets;
    /**
     * Initializes the languages for the given mod.
     */
    private initializeLanguages;
    private initializeSaveData;
    /**
     * Initializes the customizations for the given mod.
     */
    private initializeCustomizations;
}
