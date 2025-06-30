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
import type { IPlayOptions } from "@wayward/game/game/IGame";
import { ModState, ModType } from "@wayward/game/mod/IModInformation";
import type { ICanLoadInfo, IModManagerEvents } from "@wayward/game/mod/IModManager";
import { ModLoadFailureReason } from "@wayward/game/mod/IModManager";
import { ModInformation } from "@wayward/game/mod/ModInformation";
import type { IServerMod } from "@wayward/hosts/shared/interfaces";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
export default class ModManager extends EventEmitter.Host<IModManagerEvents> {
    private readonly game;
    private readonly _mods;
    private _setup;
    private _hasLoadedMods;
    private _canUnlockMilestones?;
    constructor(game: Game);
    get mods(): ReadonlySet<ModInformation>;
    get modsArray(): readonly ModInformation[];
    get enabledMods(): readonly ModInformation[];
    get loadedMods(): readonly ModInformation[];
    get hasLoadedMods(): boolean;
    waitForSetup(showLoad: boolean): Promise<void>;
    loadAll(options: Partial<IPlayOptions>): Promise<Array<[ModLoadFailureReason, ...any[]]>>;
    reinitializeAll(): void;
    unloadAll(resetState?: boolean): Promise<void>;
    protected setupMods(): Promise<void>;
    saveAll(): void;
    setupMod(folderName: string, modType: ModType, initialModState?: ModState): Promise<ModInformation | undefined>;
    removeMod(mod: ModInformation, uninstall?: boolean): void;
    /**
     * Used by pro developers
     */
    reloadByName(name: string): Promise<boolean>;
    getLoadabilityInfo(publishFileIdOrServerModOrMod: string | IServerMod | ModInformation): ICanLoadInfo;
    getModsByIdentifier(identifier: string): ModInformation[];
    getModByPath(path: string): ModInformation | undefined;
    getModsByName(name: string): ModInformation[];
    getModsByPublishId(publishedFileId: string): ModInformation[];
    /**
     * Returns a list of every enabled mod that doesn't allow unlocking milestones and provides scripts.
     */
    getEnabledModsThatDisallowMilestoneUnlocks(): ModInformation[];
    /**
     * Returns whether every mod that's enabled either allows unlocking milestones or doesn't provide scripts.
     */
    canUnlockMilestones(): boolean;
    protected onGlobalSlotLoaded(): void;
}
