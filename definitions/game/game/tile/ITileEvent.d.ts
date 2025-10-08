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
import type { ICausesStatus } from "@wayward/game/game/entity/IEntity";
import type { IDecayTemperatureRange } from "@wayward/game/game/IGame";
import type { ILootItem } from "@wayward/game/game/ILoot";
import type { IObjectDescription } from "@wayward/game/game/IObject";
import type Island from "@wayward/game/game/island/Island";
import type { ItemType } from "@wayward/game/game/item/IItem";
import type { ITemperatureSource } from "@wayward/game/game/temperature/ITemperature";
import { TerrainType } from "@wayward/game/game/tile/ITerrain";
import type Tile from "@wayward/game/game/tile/Tile";
import type TileEvent from "@wayward/game/game/tile/TileEvent";
import type { IModdable } from "@wayward/game/mod/ModRegistry";
import type { IRGB } from "@wayward/utilities/Color";
export interface ITileEventDescription extends IObjectDescription, IModdable, ICausesStatus, ITemperatureSource {
    spreadMax?: number;
    decayMax?: number;
    animated?: boolean;
    items?: ILootItem[];
    particles?: IRGB;
    graphicVariation?: boolean;
    isFlammable?: boolean;
    pickUp?: ItemType;
    lightSource?: boolean;
    lightColor?: IRGB;
    damage?: number;
    durability?: number;
    isWaste?: boolean;
    renderBelowItems?: boolean;
    renderBelowDoodads?: boolean;
    renderAbovePlayers?: boolean;
    isTall?: boolean;
    providesFire?: boolean;
    /**
     * Prevents the event from being created on these types
     */
    excludedTerrains?: TerrainType[];
    /**
     * Whether the tile event prevents things such as carving, digging, movement, etc.
     */
    blocksTile?: boolean;
    /**
     * Whether this is a "minor" tile event. Minor tile events are rendered as faded, small text in tooltips rather than large headings.
     */
    isMinor?: boolean;
    /**
     * Set to true when we don't want to load a graphic or show tooltips for the event.
     */
    internal?: boolean;
    /**
     * Allow multiple of the same type of tile event to be placed on top of each other.
     */
    allowMultiple?: boolean;
    /**
     * Is the event made of water or is liquidy? These can put out fires if they are on the same tile as them. Defaulted to false.
     */
    liquid?: boolean;
    /**
     * When more than three puddles of water exist on a tile, they create the this terrain type.
     */
    meltsInto?: TerrainType;
    /**
     * When more than three puddles of water exist on a tile, they create the this terrain type when it is lower than "Cold" on the tile.
     */
    freezesInto?: TerrainType;
    /**
     * Can the tile event burn when fire is on the same tile as it?
     */
    canBurn?: boolean;
    decayTemperatureRange?: IDecayTemperatureRange;
    canCreate?(island: Island, type: TileEventType, tile: Tile, tileType: TerrainType): boolean;
    create?(tileEvent: TileEvent): void;
    remove?(tileEvent: TileEvent): void;
    update?(tileEvent: TileEvent, ticks: number): void;
    /**
     * Gets the temperature produced by this tile event. Positive values are "heat", negative values are "cold".
     * Refer to the values of the `Temperature` enum to see the possible range.
     * If this method is not implemented, or it returns `undefined`, `Temperature.Neutral` is used.
     */
    getProducedTemperature?(tileEvent?: TileEvent): number | undefined;
    /**
     * If set to true, tile items will appear in a circle around the tile event instead of over top of it.
     */
    tileItemOffset?: boolean;
    /**
     * If set to true, players will be slowed in movement speed, skip and turn, and reduce 1 point of stamina when moving over this tile event. Creatures and NPPs will simply skip a turn.
     * If the tile event is a liquid and slowsEntities is set to true, then no slipping can occur.
     */
    slowsEntities?: boolean;
    /**
     * If set to true, picking up (or gathering) this tile event will cause the player to skip their turn and lose 1 stamina.
     */
    pickUpSlowsPlayer?: boolean;
    /**
     * If true, when jumping onto a tile with this event, the event will be destroyed and all items will fall to the ground.
     */
    jumpingOntoDestroysAndDropsItems?: boolean;
}
export declare const TILE_EVENTS_WATER_UNPASSABLE_TERRAIN_EXCLUSIONS: TerrainType[];
export declare enum TileEventType {
    None = 0,
    Fire = 1,
    HoneyFungus = 2,
    TumblingTumbleweed = 3,
    AnimalDroppings = 4,
    BirdDroppings = 5,
    AnimalDung = 6,
    Guano = 7,
    WispDust = 8,
    Blood = 9,
    BloodWater = 10,
    Acid = 11,
    PuddleOfFreshWater = 12,
    MeltingTile = 13,
    PuddleOfPurifiedFreshWater = 14,
    PuddleOfUnpurifiedFreshWater = 15,
    PuddleOfSeawater = 16,
    PuddleOfDesalinatedWater = 17,
    PuddleOfMedicinalWater = 18,
    PuddleOfGoatMilk = 19,
    PuddleOfCoconutWater = 20,
    PuddleOfSwampWater = 21,
    PuddleOfFilteredWater = 22,
    SlimePatch = 23,
    Cobweb = 24,
    PileOfLeaves = 25
}
export declare const TILE_EVENTS_LIQUID_TERRAIN_EXCLUSIONS: TerrainType[];
export declare enum TileEventTag {
    None = 0
}
