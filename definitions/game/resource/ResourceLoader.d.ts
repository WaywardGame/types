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
import type { IResourceContainer } from "@wayward/game/renderer/resources/IResourceContainer";
import type { ISpritePackerPlatform } from "@wayward/game/renderer/resources/ISpritePacker";
import type SaveManager from "@wayward/game/save/SaveManager";
export default class ResourceLoader {
    private readonly createSpritePackerPlatform;
    private spritePacker;
    private tilePacker;
    private pendingLoads;
    private activeLoad;
    private _resourceContainer;
    private readonly spriteAtlas;
    private readonly tileAtlas;
    constructor(createSpritePackerPlatform: (size: number, addNullSprite: boolean, packLargeToSmall: boolean) => ISpritePackerPlatform);
    delete(): void;
    get resourceContainer(): IResourceContainer | undefined;
    initialize(): Promise<void>;
    loadResources(background?: boolean): Promise<void>;
    protected onGlobalSlotReady(saveManager: SaveManager): Promise<void>;
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
    private loadNotifiers;
    private loadNotifier;
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
    private loadStatusOverlay;
    private loadStatusIcon;
    private loadMarkerIcon;
    private loadOverlays;
    private loadOverlay;
    private loadOthers;
    private loadBiomeOverrides;
    private loadBiomeOverride;
    private warnIfTextureOutOfBounds;
}
