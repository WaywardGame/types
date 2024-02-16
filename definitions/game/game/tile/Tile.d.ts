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
import { SfxType } from "@wayward/game/audio/IAudio";
import { FireType, TileUpdateType } from "@wayward/game/game/IGame";
import { Quality } from "@wayward/game/game/IObject";
import type Doodad from "@wayward/game/game/doodad/Doodad";
import type Entity from "@wayward/game/game/entity/Entity";
import type EntityMovable from "@wayward/game/game/entity/EntityMovable";
import type Human from "@wayward/game/game/entity/Human";
import type { ICastable } from "@wayward/game/game/entity/IEntity";
import type Creature from "@wayward/game/game/entity/creature/Creature";
import type Corpse from "@wayward/game/game/entity/creature/corpse/Corpse";
import type NPC from "@wayward/game/game/entity/npc/NPC";
import type { IMessageManager } from "@wayward/game/game/entity/player/IMessageManager";
import type Player from "@wayward/game/game/entity/player/Player";
import type { IslandId } from "@wayward/game/game/island/IIsland";
import type Island from "@wayward/game/game/island/Island";
import type { IUncastableContainer } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type { IMaybeTileContainer, IOverlayInfo, ITerrainDescription, ITileContainer, ITileData } from "@wayward/game/game/tile/ITerrain";
import { TerrainType } from "@wayward/game/game/tile/ITerrain";
import type TileEvent from "@wayward/game/game/tile/TileEvent";
import Translation from "@wayward/game/language/Translation";
import Message from "@wayward/game/language/dictionary/Message";
import type { IRendererOrigin } from "@wayward/game/renderer/context/RendererOrigin";
import { FieldOfView } from "@wayward/game/renderer/fieldOfView/FieldOfView";
import type { IFieldOfViewOrigin } from "@wayward/game/renderer/fieldOfView/IFieldOfView";
import { CanASeeBType } from "@wayward/game/renderer/fieldOfView/IFieldOfView";
import type { Direction } from "@wayward/game/utilities/math/Direction";
import type { IVector2, IVector3 } from "@wayward/game/utilities/math/IVector";
import type { IVector4 } from "@wayward/game/utilities/math/Vector4";
import type { IRGB } from "@wayward/utilities/Color";
import { WorldZ } from "@wayward/utilities/game/WorldZ";
export interface ICanSailAwayResult {
    canSailAway: boolean;
    message?: Message;
    distanceFromEdge?: number;
    blockedTilesChecked?: Set<Tile>;
    path?: IVector2[];
}
/**
 * Tile class
 */
export default class Tile implements IVector4, Partial<ITileContainer>, IFieldOfViewOrigin, ICastable {
    readonly id: number;
    static is(value: any): value is Tile;
    readonly island: Island;
    /**
     * IVector4
     */
    readonly islandId: IslandId;
    readonly x: number;
    readonly y: number;
    readonly z: WorldZ;
    /**
     * Entities on the tile
     */
    creature?: Creature;
    npc?: NPC;
    doodad?: Doodad;
    vehicle?: Doodad;
    get vehicleOrDoodad(): Doodad | undefined;
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
    private _tilesInRangeCache?;
    private _tilesAroundCache?;
    /**
     * Data associated with the tile
     */
    private _rendererData;
    /**
     * Tile quality that is linked to map gen / tileData
     */
    private _quality?;
    /**
     * Tile min/max durability
     */
    private _minDur?;
    private _maxDur?;
    /**
     * Creates a fake tile
     */
    static createFake(island: Island, x?: number, y?: number, z?: number): Tile;
    /**
     * Constructed during map gen
     */
    constructor(island: Island, x: number, y: number, z: number, id: number, rendererData: number, quality: Quality);
    get point(): IVector3;
    get description(): ITerrainDescription | undefined;
    toString(): string;
    getName(includeCoordinates?: boolean): Translation;
    get type(): TerrainType;
    private set type(value);
    get quality(): Quality;
    private set quality(value);
    get minDur(): number | undefined;
    private set minDur(value);
    get maxDur(): number | undefined;
    private set maxDur(value);
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
     * Check if this tile is Void type
     */
    get isVoid(): boolean;
    /**
     * Check if this tile contains some items
     */
    get hasTileContainer(): boolean;
    /**
     * Gets/creates tile container
     */
    get tileContainer(): this & ITileContainer;
    /**
     * Gets a tile container.
     * It will not create one when called.
     */
    get maybeTileContainer(): this & IMaybeTileContainer;
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
    get isBlocked(): boolean;
    /**
     * Check if the tile is open.
     * Opposite of isTileBlocked.
     */
    get isOpen(): boolean;
    /**
     * Check if the tile is water or not.
     */
    get isWater(): boolean;
    /**
     * Checks if the tile has terrain that blocks
     */
    get hasBlockingTerrain(): boolean;
    /**
     * Checks if the tile has a blocking doodad
     */
    get hasBlockingDoodad(): boolean;
    /**
     * Checks if the tile has any blocking tile event
     */
    get hasBlockingTileEvent(): boolean;
    /**
     * Gets the fire type of a fire on the tile if there is one
     */
    get isOnFire(): FireType;
    /**
     * Gets the source of a fire on the tile if there is one
     */
    get fireSource(): Doodad | TileEvent | Tile | Creature | undefined;
    /**
     * Check if the tile can be lit on fire (has terrain/doodad/items that are flammable)
     */
    get isFlammable(): boolean;
    isNearby(entity: Entity | Tile, includeCurrentTile?: boolean): boolean;
    /**
     * Checks if a tile is dangerous for a human
     */
    isDangerous(human: Human): {
        message: Message;
        object: Translation;
    } | false;
    isPlayerOnTile(includeGhosts?: boolean, includeConnecting?: boolean, includeZMovement?: boolean): boolean;
    getPlayersOnTile(includeGhosts?: boolean, includeConnecting?: boolean, includeZMovement?: boolean): Human[];
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
    /**
     * Updates the world renderer & flow field state for the tile
     */
    updateWorldTile(tileUpdateType: TileUpdateType, updateNeighbors?: boolean, skipFlowFieldUpdate?: boolean): void;
    /**
     * Updates the flow field state for the tile
     */
    updateFlowField(tileUpdateType: TileUpdateType, updatedRenderer?: boolean): void;
    /**
     * Use game.changeTile or game.removeTopTile when modifying tiles.
     * This should only be called if you know what you're doing.
     * Otherwise the game state could get out of sync.
     */
    forceChangeTile(type: TerrainType, quality: Quality | undefined): void;
    /**
     * Changes the tile
     */
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
    canSailAwayFrom(entity: EntityMovable | undefined): ICanSailAwayResult;
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
    queueSoundEffect(type: SfxType, delay?: number, speed?: number): void;
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
    contaminateWater(count?: number): void;
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
    /**
     * Used to check if lava exists below, then create a passage above
     * @returns True if it created a lava passage
     */
    makeLavaPassage(source: Human | undefined): boolean;
    /**
     * Checks if another cave entrance is nearby.
     * @returns True if it created cave entrances
     */
    isCaveEntranceNearby(): boolean;
    /**
     * Used to genererate and find appropriate cave entrances
     * @returns True if it created cave entrances
     */
    makeCaveEntrance(source: Human | undefined, chance?: number): boolean;
    /**
     * Create puddles around a point and limit them (so they can't expand infinitely)
     */
    createPuddles(): void;
    /**
     * Create particle effects when moving over a puddle and reduce its decay.
     * @param noSound True when no sound should be made when splashing.
     */
    splashPuddles(noSound?: boolean): void;
    addOrUpdateOverlay(overlay: IOverlayInfo): void;
    removeOverlay(overlay: IOverlayInfo): void;
    canSeeObject(type: CanASeeBType, object: IRendererOrigin, fieldOfView?: FieldOfView, customRadius?: number): boolean;
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
    /**
     * Checks things can slip on this tile
     * @param isClientSide When true, it will assume puddles do not cause slipping
     */
    canSlip(entity: EntityMovable | undefined, isClientSide?: boolean): boolean;
    isAdjacent(otherTile: Tile): boolean;
    isAround(otherTile: Tile): boolean;
    /**
     * Gets the direction from this tile to the target tile
     */
    getDirectionToTile(tile: Tile): Direction;
    /**
     * Gets the adjacent tile in the direction
     */
    getTileInDirection(direction: Direction): Tile | undefined;
    getVariation(noTileDataOffset?: boolean): number;
    tilesInRange(range: number, includeCurrentTile?: boolean): Tile[];
    openTileInRange(range: number, includeCurrentTile?: boolean, excludeWater?: boolean): Tile | undefined;
    /**
     * Array version of tilesAround
     */
    getTilesAround(includeCurrentTile?: boolean, includeCorners?: boolean): Tile[];
    /**
     * IterableIterator version of TileHelpers.getTilesAround
     */
    generateTilesAround(includeCurrentTile?: boolean, includeCorners?: boolean): Generator<Tile, void>;
    findMatchingTile(isMatchingTile: (tile: Tile) => boolean, options?: {
        maxTilesChecked?: number;
        canVisitTile?: (tile: Tile) => boolean;
    }): Tile | undefined;
    findMatchingTiles(isMatchingTile: (tile: Tile) => boolean, options?: {
        maxTiles?: number;
        maxTilesChecked?: number;
        canVisitTile?: (tile: Tile) => boolean;
    }): Tile[];
    /**
     * A* path finding
     * @param entity The entity moving
     * @param target The target tile to move to
     * @param isTileBlocked Function for determining if the entity can move onto the tile
     * @param getTilePenalty Function for determining the tile penalty
     * @param maxNodesChecked Maximum number of nodes to pathfind though
     * @returns Tile path or undefined if no path is available
     */
    findPath(entity: EntityMovable | undefined, target: Tile, isTileBlocked: (tile: Tile) => boolean, getTilePenalty?: (tile: Tile) => number, maxNodesChecked?: number): Tile[] | undefined;
    /**
     * Returns whether the tile is blocked (completely impassible) for the human
     */
    isWalkToTileBlocked(human: Human, clientSide: boolean): boolean;
    get asCorpse(): undefined;
    get asCreature(): undefined;
    get asDoodad(): undefined;
    get asHuman(): undefined;
    get asLocalPlayer(): undefined;
    get asNPC(): undefined;
    get asPlayer(): undefined;
    get asTileEvent(): undefined;
    get asItem(): undefined;
    get asTile(): Tile;
    get asUnion(): Tile;
    get asEntity(): undefined;
    get asContainer(): (this & ITileContainer) | undefined;
    isCorpse(): this is Corpse;
    isCreature(): this is Creature;
    isDoodad(): this is Doodad;
    isHuman(): this is Human;
    get isLocalPlayer(): boolean;
    isNPC(): this is NPC;
    isPlayer(): this is Player;
    isTileEvent(): this is TileEvent;
    isItem(): this is Item;
    isTile(): this is Tile;
    isEntity(): this is Entity;
    isContainer(): this is IUncastableContainer;
}
