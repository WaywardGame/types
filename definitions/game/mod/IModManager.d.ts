/*!
 * Copyright 2011-2024 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { ModInformation } from "@wayward/game/mod/ModInformation";
export type ICanLoadInfo = {
    name: string;
    loadable: CanLoadState.Loadable;
    mod: ModInformation;
} | {
    name: string;
    loadable: CanLoadState.NotFound | CanLoadState.ModLoadError;
};
export declare enum CanLoadState {
    Loadable = 0,
    Disabled = 1,
    ModLoadError = 2,
    DependencyIssue = 3,
    ModRequiresItself = 4,
    MissingRequiredMod = 5,
    CannotLoadRequiredMod = 6,
    RequiredModNotLoaded = 7,
    LocalModPrecedence = 8,
    WorkshopModPrecedence = 9,
    IncompatibleVersion = 10,
    DisabledInMultiplayer = 11,
    ServerSideOnNonDedicatedServer = 12,
    NotFound = 13
}
export declare enum ModLoadFailureReason {
    IsDisabled = 0,
    NotInstalled = 1,
    NotMultiplayerCompatible = 2,
    UnableToLoad = 3,
    VersionMismatch = 4
}
export interface IModManagerEvents {
    loadAll(): void;
    unloadAll(): void;
    setup(): void;
}
