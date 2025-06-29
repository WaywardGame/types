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
import type Version from "@wayward/utilities/Version";
import type { IEventSubscriberEvents } from "@wayward/utilities/event/EventEmitter";
export declare enum MultiplayerCompatibility {
    Clientside = "clientside",
    Serverside = "serverside",
    Compatible = "compatible",
    Incompatible = "incompatible"
}
export interface IModConfig {
    readonly name: string;
    readonly description: string;
    readonly version: string;
    readonly author: string;
    readonly file?: string;
    readonly unloadable?: boolean;
    readonly tags?: string[];
    readonly dependencies?: string[];
    readonly waywardVersion?: Version.StringSemVer;
    readonly multiplayer?: MultiplayerCompatibility;
    readonly languages?: string[];
    readonly stylesheets?: string[];
    readonly imageOverrides?: boolean;
    readonly customizations?: boolean;
    readonly publishedFileId?: string;
    readonly allowUnlockingMilestones?: boolean;
    readonly github?: string;
    readonly saveGameData?: boolean;
}
export interface IModEvents extends IEventSubscriberEvents {
    unload(): any;
    initialize(): any;
    uninitialize(): any;
    /**
     * Asynchronously triggered before a mod is initialized.
     *
     * Internally, this is used for mod registrations.
     */
    preInitialize(): any;
    /**
     * Asynchronously triggered before a mod is loaded (when a world is loaded).
     *
     * Internally, this is used for mod registrations.
     */
    preLoad(): any;
    /**
     * Called after a mod is unloaded. (A world is exited)
     *
     * Internally, this is used to clean up some mod registrations.
     */
    unallocate(): any;
    /**
     * Called when a mod is reinitialized. (A world has been exited)
     *
     * Internally, this is used to reset enums to their global values.
     */
    reinitialize(): any;
    /**
     * Called when a mod is setup. (Modders — Don't use this, just run code in your constructor.)
     *
     * Internally, this is used for some mod registrations.
     */
    setup(): any;
}
