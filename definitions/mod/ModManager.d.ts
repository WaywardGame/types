/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import EventEmitter from "event/EventEmitter";
import { IPlayOptions } from "game/IGame";
import HookCallFactory from "mod/HookCallFactory";
import { Hook } from "mod/IHookManager";
import { IModConfig, MultiplayerCompatibility } from "mod/IMod";
import { IModInfo, IModProvides, ModState, ModType } from "mod/IModInfo";
import { CanLoadState, ICanLoadInfo, IModManagerEvents, ModLoadFailureReason } from "mod/IModManager";
import Log from "utilities/Log";
export default class ModManager extends EventEmitter.Host<IModManagerEvents> {
    private setup;
    private readonly mods;
    private readonly onModInitializedCallbacks;
    private loadedMods;
    get areModsLoaded(): boolean;
    constructor();
    loadAll(options: Partial<IPlayOptions>): Promise<Array<[ModLoadFailureReason, ...any[]]>>;
    getMultiplayerCompatibility(index: number): MultiplayerCompatibility;
    isMultiplayerCompatible(index: number): boolean;
    isMultiplayerClientSide(index: number): boolean;
    isMultiplayerServerSide(index: number): boolean;
    isUnloadable(index: number): boolean;
    unloadAll(resetState?: boolean): Promise<void>;
    setupMods(): Promise<void>;
    saveAll(): void;
    getFile(modIndex: number, file: string, callback: (data: string, success: boolean) => void): boolean;
    setupMod(folderName: string, modType: ModType, initialModState?: ModState): Promise<number | undefined>;
    removeMod(id: number, uninstall?: boolean): void;
    getMods(): IModInfo[];
    getLoadedMods(): IModInfo[];
    getLoadedModByName(name: string): IModInfo | undefined;
    getModFromIndex(i: number): IModInfo;
    getEnabledMods(): number[];
    /**
     * Returns a `HookCallFactory` for the given hook name.
     * @param hook A hook name.
     * @param defaultValue The default value to return
     * @see `Mod` or `Hook` for a list of valid hook names.
     */
    getHook<H extends Hook, R = any>(hook: H, defaultValue?: R): {
        onBuild: HookCallFactory<Hook.OnBuild, any>;
        onCraft: HookCallFactory<Hook.OnCraft, any>;
        onCreateWorld: HookCallFactory<Hook.OnCreateWorld, any>;
        onCreatureDamage: HookCallFactory<Hook.OnCreatureDamage, any>;
        onCreatureDeath: HookCallFactory<Hook.OnCreatureDeath, any>;
        onCreatureSpawn: HookCallFactory<Hook.OnCreatureSpawn, any>;
        onCreatureTamed: HookCallFactory<Hook.OnCreatureTamed, any>;
        onDisplayMessage: HookCallFactory<Hook.OnDisplayMessage, any>;
        onDoodadSpawn: HookCallFactory<Hook.OnDoodadSpawn, any>;
        onEntityKill: HookCallFactory<Hook.OnEntityKill, any>;
        onGameScreenVisible: HookCallFactory<Hook.OnGameScreenVisible, any>;
        onGameStart: HookCallFactory<Hook.OnGameStart, any>;
        onGameTickEnd: HookCallFactory<Hook.OnGameTickEnd, any>;
        onGameTickStart: HookCallFactory<Hook.OnGameTickStart, any>;
        onItemDamage: HookCallFactory<Hook.OnItemDamage, any>;
        onItemEquip: HookCallFactory<Hook.OnItemEquip, any>;
        onItemQuickslot: HookCallFactory<Hook.OnItemQuickslot, any>;
        onLanguageChange: HookCallFactory<Hook.OnLanguageChange, any>;
        onMove: HookCallFactory<Hook.OnMove, any>;
        onMoveDirectionUpdate: HookCallFactory<Hook.OnMoveDirectionUpdate, any>;
        onNPCDamage: HookCallFactory<Hook.OnNPCDamage, any>;
        onNPCDeath: HookCallFactory<Hook.OnNPCDeath, any>;
        onNPCSpawn: HookCallFactory<Hook.OnNPCSpawn, any>;
        onOpenBook: HookCallFactory<Hook.OnOpenBook, any>;
        onPickupDoodad: HookCallFactory<Hook.OnPickupDoodad, any>;
        onPlayerJoin: HookCallFactory<Hook.OnPlayerJoin, any>;
        onPlayerLeave: HookCallFactory<Hook.OnPlayerLeave, any>;
        onQueueSoundEffect: HookCallFactory<Hook.OnQueueSoundEffect, any>;
        onRenderOverlay: HookCallFactory<Hook.OnRenderOverlay, any>;
        onSailToCivilization: HookCallFactory<Hook.OnSailToCivilization, any>;
        onSpawnCreatureFromGroup: HookCallFactory<Hook.OnSpawnCreatureFromGroup, any>;
        onTurnEnd: HookCallFactory<Hook.OnTurnEnd, any>;
        onTurnStart: HookCallFactory<Hook.OnTurnStart, any>;
        onUpdateWeight: HookCallFactory<Hook.OnUpdateWeight, any>;
        postExecuteAction: HookCallFactory<Hook.PostExecuteAction, any>;
        postFieldOfView: HookCallFactory<Hook.PostFieldOfView, any>;
        postGenerateWorld: HookCallFactory<Hook.PostGenerateWorld, any>;
        postRender: HookCallFactory<Hook.PostRender, any>;
        postRenderPostProcess: HookCallFactory<Hook.PostRenderPostProcess, any>;
        postRenderWorld: HookCallFactory<Hook.PostRenderWorld, any>;
        preExecuteAction: HookCallFactory<Hook.PreExecuteAction, any>;
        preExecuteCommand: HookCallFactory<Hook.PreExecuteCommand, any>;
        preLoadWorldDifferences: HookCallFactory<Hook.PreLoadWorldDifferences, any>;
        preRender: HookCallFactory<Hook.PreRender, any>;
        preRenderPostProcess: HookCallFactory<Hook.PreRenderPostProcess, any>;
        preRenderWorld: HookCallFactory<Hook.PreRenderWorld, any>;
        processInput: HookCallFactory<Hook.ProcessInput, any>;
        shouldCraft: HookCallFactory<Hook.ShouldCraft, any>;
        shouldDisplayMessage: HookCallFactory<Hook.ShouldDisplayMessage, any>;
        shouldRender: HookCallFactory<Hook.ShouldRender, any>;
    }[H] | HookCallFactory<H, R>;
    load(index: number, loadOrder: number): Promise<void>;
    unload(index: number, cacheHooks?: boolean): Promise<void>;
    save(index: number): void;
    /**
     * Used by pro developers
     */
    reloadByName(name: string, cacheHooks?: boolean): Promise<boolean>;
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
    canLoad(index: number, fromModsMenu?: boolean, count?: number): CanLoadState;
    getLoadabilityInfo(publishFileIdOrIndex: string | number): ICanLoadInfo;
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
