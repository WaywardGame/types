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
import { IImageOverrideDescription } from "mod/IModInfo";
import { IResourceContainer, IResourceLoader } from "resource/IResourceLoader";
export interface IResourceLoaderEvents {
    load(): any;
}
export default class ResourceLoader extends EventEmitter.Host<IResourceLoaderEvents> implements IResourceLoader {
    private gl;
    private concurrent;
    private loadingCount;
    private loadingInterval;
    private waitingSlots;
    get isLoading(): boolean;
    private readonly maxConcurrent;
    private spritePacker;
    private tilePacker;
    private imageOverrides;
    private container;
    initialize(gl: WebGL2RenderingContext, container: IResourceContainer): void;
    loadResources(): Promise<void>;
    continueLoading(): void;
    takeLoadingSlot(callback: () => void): void;
    releaseLoadingSlot(): void;
    getImageOverride(src: string): Partial<IImageOverrideDescription> | undefined;
    updateImageOverrides(): void;
    protected onGlobalSlotReady(): Promise<void>;
    private loadSpritePacker;
    private createSpritePacker;
    private createTilePacker;
    private loadResourcesInternal;
    private loadCharacter;
    private loadAttackAnimations;
    private loadAttackAnimation;
    private loadCreatures;
    private loadCreature;
    private loadCorpses;
    private loadCorpse;
    private loadItems;
    private loadItem;
    private loadEquip;
    private loadSleep;
    private loadVehicle;
    private loadTerrains;
    private loadTerrain;
    private loadTerrainDecorations;
    private loadTerrainDecoration;
    private loadDoodads;
    private loadDoodad;
    private loadTileEvents;
    private loadTileEvent;
    private loadHairstyles;
    private loadHairstyle;
    private loadStatuses;
    private loadStatus;
    private loadOverlays;
    private loadOverlay;
    private loadOthers;
    private warnIfTextureOutOfBounds;
}
