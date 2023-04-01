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
import { SfxType } from "audio/IAudio";
import type Doodad from "game/doodad/Doodad";
import type Corpse from "game/entity/creature/corpse/Corpse";
import type Creature from "game/entity/creature/Creature";
import type Human from "game/entity/Human";
import type NPC from "game/entity/npc/NPC";
import type { IMessageManager } from "game/entity/player/IMessageManager";
import { FireType } from "game/IGame";
import { Quality } from "game/IObject";
import type { IslandId } from "game/island/IIsland";
import type Item from "game/item/Item";
import type { IMaybeTileContainer, IOverlayInfo, ITerrainDescription, ITileContainer, ITileData } from "game/tile/ITerrain";
import { TerrainType } from "game/tile/ITerrain";
import type TileEvent from "game/tile/TileEvent";
import { WorldZ } from "game/WorldZ";
import Message from "language/dictionary/Message";
import Translation from "language/Translation";
import FieldOfView from "renderer/fieldOfView/FieldOfView";
import type { IFieldOfViewOrigin } from "renderer/fieldOfView/IFieldOfView";
import { CanASeeBType } from "renderer/fieldOfView/IFieldOfView";
import type { IRGB } from "utilities/Color";
import type { IVector2, IVector3 } from "utilities/math/IVector";
import type { IVector4 } from "utilities/math/Vector4";
import type Stream from "@wayward/goodstream";
import type Island from "game/island/Island";
export interface ICanSailAwayResult {
    canSailAway: boolean;
    distanceFromEdge?: number;
    blockedTilesChecked?: Set<Tile>;
    path?: IVector2[];
}
/**
 * Tile class
 */
export default class Tile implements IVector4, Partial<ITileContainer>, IFieldOfViewOrigin {
    readonly id: number;
    readonly island: Island;
    /**
     * IVector4
     */
    readonly islandId: IslandId;
    readonly x: number;
    readonly y: number;
    readonly z: WorldZ;
    /**
     * Data associated with the tile
     */
    rendererData: number;
    quality?: Quality;
    /**
     * Entities on the tile
     */
    creature?: Creature;
    doodad?: Doodad;
    npc?: NPC;
    /**
     * Note: corpses must be ordered by id asc
     */
    corpses?: Corpse[];
    /**
     * Note: tile events must be ordered by id asc
     */
    events?: TileEvent[];
    /**
     * ITileContainer
     */
    containedItems?: Item[];
    private _description;
    /**
     * Constructed during map gen
     */
    constructor(island: Island, x: number, y: number, z: number, id: number);
    get point(): IVector3;
    get description(): ITerrainDescription | undefined;
    toString(): string;
    get type(): TerrainType;
    /**
     * Use game.changeTile or game.removeTopTile when modifying tiles.
     * This should only be called if you know what you're doing.
     * Otherwise the game state could get out of sync.
     */
    set type(value: number);
    get isTilled(): boolean;
    /**
     * This should only be called if you know what you're doing
     * Ensure a tile data with tilled is created
     * Otherwise the game state could get out of sync
     */
    get doodadOverHidden(): boolean;
    set doodadOverHidden(value: boolean);
    get doodadAnimationDisabled(): boolean;
    set doodadAnimationDisabled(value: boolean);
    get variation(): number;
    get isMapEdge(): boolean;
    /**
     * Check if this Tile containers some items
     */
    get hasTileContainer(): boolean;
    /**
     * Gets/creates tile container
     */
    get tileContainer(): ITileContainer;
    /**
     * Gets a tile container.
     * It will not create one when called.
     */
    get maybeTileContainer(): IMaybeTileContainer;
    /**
     * Checks for:
     * Passable
     * No doodads
     * No tile items
     * No creatures
     * No corpses
     * No tile events
     * No girls
     */
    get isEmpty(): boolean;
    /**
     * Checks if the tile is full of items
     */
    get isFull(): boolean;
    /**
     * Check if the tile is blocked (impassable terrain / creatures / npcs / players / doodads that cause blocked movement).
     */
    get isTileBlocked(): boolean;
    /**
     * Check is a tile is open
     */
    get isOpenTile(): boolean;
    get isOnFire(): FireType;
    /**
     * Check if the tile can be lit on fire (has terrain/doodad/items that are flammable)
     */
    get isFlammable(): boolean;
    /**
     * Checks if a tile is dangerous for a human
     */
    isDangerous(human: Human): {
        message: Message;
        object: Translation;
    } | false;
    isPlayerOnTile(includeGhosts?: boolean, includeConnecting?: boolean): boolean;
    getPlayersOnTile(includeGhosts?: boolean, includeConnecting?: boolean): Human[];
    getPlayersThatSeeTile(): Human[];
    /**
     * Gets the nearest player based.
     * @param canSee If set to true, check if the player can see the x/y/z coords. Defaults to false.
     */
    getNearestPlayer(canSee?: boolean, includeGhosts?: boolean, includeConnecting?: boolean): {
        player?: Human;
        distance?: number;
    };
    getTileData(): ITileData[] | undefined;
    getOrCreateTileData(): ITileData[];
    changeTile(newTileInfo: TerrainType | ITileData, stackTiles: boolean, dropTiles?: boolean): void;
    /**
     * Removes the top tiledata (index 0) from the tile
     * If there is no remaining tile data, a new tile data will be added with the newTileTypeWhenEmpty type
     */
    removeTopTile(newTileTypeWhenEmpty: TerrainType | ((tile: Tile) => TerrainType)): void;
    /**
     * Pack or set the ground as untilled
     */
    packGround(): void;
    /**
     * Checks if this tile can be used for sailing.
     * Ensures it's connected to the edge of the map.
     */
    canSailAwayFrom(): ICanSailAwayResult;
    /**
     * Used to spawn a random item on the current biome type based on spawnOnWorldGen properties in item descriptions.
     * @param terrainType Optional terrain type for overriding the biome item types
     */
    spawnRandomItem(terrainType?: TerrainType): void;
    /**
     * Used to spawn a random doodad on the current biome type and at a set location (and terrain type) based on spawnOnWorldGen properties in doodad descriptions.
     * @param terrainType Optional terrain type for overriding the biome item types
     */
    spawnRandomDoodad(terrainType?: TerrainType): void;
    /**
     * Plants a random seed at the given coordinates based on what can grow on that tile naturally. This will replace any doodad that is there.
     * @returns True if a seed was planted.
     */
    plantRandomSeed(): boolean;
    /**
     * Possibly collapses or opens up a cave (on both sides) and breaks any doodads.
     * @param checkType TerrainType to check if the tile point equals this before switching.
     */
    switchCave(checkType?: TerrainType): void;
    /**
     * Checks to see if there is a cave and if it can be switched to collapsed from open or vice versa.
     * @param terrainType TerrainType to get the description of.
     * @param checkType TerrainType to check if the tile point equals this before switching.
     * @returns TerrainType that we should switch the tile into.
     */
    private canSwitchCave;
    queueSoundEffect(type: SfxType, delay?: number, speed?: number, noPosition?: boolean, force?: boolean): void;
    createParticles(particle: IRGB | undefined, count?: number, intensity?: number): void;
    /**
     * Finds either lava or water ajacent to either lava or water, and cools the lava down based its findings.
     */
    coolLava(): void;
    /**
     * Cools the tile (such as lava) and reveals to any in-LOS players about it.
     */
    coolTile(): void;
    /**
     * Contaminate water sources when new ones are created based on the surrounding water.
     */
    contaminateWater(): void;
    /**
     * Converts shallow single bodies of fresh/swamp water into seawater
     */
    contaminateNonSeawater(): void;
    clearBlood(executor: Human): boolean;
    /**
     * Clears all the water puddles on the tile.
     * @param executor The player to send the message to.
     */
    clearPuddles(executor: Human): boolean;
    clearWaste(): void;
    checkForHiddenMob(human: Human): void;
    /**
     * Decrease the depth of a water tile if under 6 connected tiles
     */
    consumeWaterTile(): void;
    addOrUpdateOverlay(overlay: IOverlayInfo): void;
    removeOverlay(overlay: IOverlayInfo): void;
    canSeeObject(type: CanASeeBType, object: IVector4 & {
        fromX: number;
        fromY: number;
    }, fieldOfView?: FieldOfView, customRadius?: number): boolean;
    canSeeTile(type: CanASeeBType, tile: Tile, fieldOfView?: FieldOfView, customRadius?: number): boolean;
    canSeePosition(type: CanASeeBType, islandId: IslandId, x: number, y: number, z: number, fieldOfView?: FieldOfView | undefined, customRadius?: number): boolean;
    messageIfVisible(callback: (manager: IMessageManager) => boolean): void;
    /**
     * Check if a tile is a suitable spawn point
     */
    isSuitableSpawnPointTile(): boolean;
    /**
     * Check if a tile is a suitable spawn point
     */
    isSuitableSpawnPointTileForMultiplayer(disallowWater?: boolean): boolean;
    /**
     * Check if a tile is a suitable spawn point for a creature
     */
    isSuitableSpawnPointTileForTamedCreature(): boolean;
    /**
     * Check if a tile is a suitable spawn point
     */
    isSuitableSpawnPointTileForIslandTravel(ensureConnectedToOcean: boolean): boolean;
    isAdjacent(otherTile: Tile): boolean;
    isAround(otherTile: Tile): boolean;
    getVariation(noTileDataOffset?: boolean): number;
    tilesInRange(range: number, includeCurrentTile?: boolean): Stream<Tile>;
    openTileInRange(range: number, includeCurrentTile?: boolean): Tile | undefined;
    /**
     * Array version of tilesAround
     */
    getTilesAround(includeCurrentTile?: boolean, includeCorners?: boolean): Tile[];
    /**
     * IterableIterator version of TileHelpers.getTilesAround
     */
    tilesAround(includeCurrentTile?: boolean, includeCorners?: boolean): Generator<Tile, void, unknown>;
    findMatchingTile(isMatchingTile: (tile: Tile) => boolean, options?: {
        maxTilesChecked?: number;
        canVisitTile?: (tile: Tile) => boolean;
    }): Tile | undefined;
    findMatchingTiles(isMatchingTile: (tile: Tile) => boolean, options?: {
        maxTiles?: number;
        maxTilesChecked?: number;
        canVisitTile?: (tile: Tile) => boolean;
    }): Tile[];
    findPath(target: Tile, isTileBlocked: (tile: Tile) => boolean, getTilePenalty?: (tile: Tile) => number, maxNodesChecked?: number): Tile[] | undefined;
    /**
     * Returns whether the tile is blocked (completely impassible) for the human
     */
    isWalkToTileBlocked(human: Human, clientSide: boolean): boolean;
}
