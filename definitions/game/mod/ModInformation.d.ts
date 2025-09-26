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
import type { Game } from "@wayward/game/game/Game";
import { MultiplayerCompatibility, type IModConfig } from "@wayward/game/mod/IMod";
import type { IImageOverrides, IModInformation, IModLanguage, IModProvides } from "@wayward/game/mod/IModInformation";
import { ModState, ModType } from "@wayward/game/mod/IModInformation";
import { CanLoadState } from "@wayward/game/mod/IModManager";
import type Mod from "@wayward/game/mod/Mod";
import type { IModPath } from "@wayward/game/steamworks/ISteamworks";
import type { IWorkshopItem } from "@wayward/hosts/shared/interfaces";
import Log from "@wayward/utilities/Log";
import type { ModuleLoader } from "@wayward/hosts/shared/globalTypes";
export declare class ModInformation implements IModInformation {
    private readonly game;
    readonly config: Readonly<IModConfig>;
    readonly provides: IModProvides;
    readonly log: Log;
    readonly type: ModType;
    readonly path: string;
    readonly folderName: string;
    state: ModState;
    private _instance?;
    private _initialized;
    private _loadOrder;
    publishedFileId?: string;
    steamIdOwner?: string;
    lastUpdated?: number;
    installDate?: number;
    createdDate?: number;
    private _imageOverrides?;
    private _customizations?;
    private _stylesheets?;
    languages?: IModLanguage[];
    private _readme?;
    private _icon?;
    constructor(game: Game, config: IModConfig, extra: {
        type: ModType;
        folderName: string;
        path: string;
    });
    toString(): string;
    get instance(): Mod | undefined;
    get isEnabled(): boolean;
    get isLoaded(): boolean;
    get identifier(): string;
    get name(): string;
    get description(): string;
    get version(): string;
    get author(): string;
    get requiredMods(): string[];
    /**
     * Returns whether the given mod allows unlocking milestones
     */
    get canUnlockMilestones(): boolean;
    get multiplayerCompatibility(): MultiplayerCompatibility;
    get isMultiplayerCompatible(): boolean;
    get isMultiplayerClientSide(): boolean;
    get isMultiplayerServerSide(): boolean;
    get isUnloadable(): boolean;
    get isInitialized(): boolean;
    get loadOrder(): number;
    get scriptFileName(): string | undefined;
    get imageOverrides(): readonly IImageOverrides[];
    get tags(): ReadonlySet<string>;
    getReadme(): Promise<string | false>;
    getIcon(): Promise<string | false | undefined>;
    getFileText(fileName: string): Promise<string | undefined>;
    get canPublish(): boolean;
    canLoad(fromModsMenu?: boolean, forMultiplayer?: boolean, count?: number): CanLoadState;
    save(): void;
    fillOutWorkshopMod(item?: IWorkshopItem): void;
    setState(state: ModState, force?: boolean, unloaded?: boolean): Promise<boolean>;
    load(loadOrder: number): Promise<void>;
    unload(): Promise<void>;
    /**
     * Used by pro developers
     */
    reload(): Promise<boolean>;
    /**
     * Called when the mod is enabled
     */
    private initialize;
    /**
     * Called when the mod is disabled
     */
    private uninitialize;
    /**
     * Initializes stylesheets provided by the mod.
     */
    private initializeStylesheets;
    private uninitializeStylesheets;
    /**
     * Initializes the languages provided by the mod.
     */
    private initializeLanguages;
    private uninitializeLanguages;
    /**
     * Initializes mod save data.
     */
    private initializeSaveData;
    /**
     * Initializes customizations provided by the mod.
     */
    private initializeCustomizations;
    /**
     * Initializes image customizations provided by the mod.
     */
    private initializeImageOverrides;
    getPath(fileName: string | undefined): Promise<IModPath | undefined>;
    /**
     * Called when ModManager setups up the mod
     * @param scriptFileName javascript file name without ".js"
     */
    loadScript(loader: ModuleLoader | undefined, modPath: IModPath, scriptFileName: string, reloading: boolean): Promise<void>;
}
