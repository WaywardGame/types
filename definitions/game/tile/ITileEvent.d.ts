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
import { ICausesStatusEffect } from "game/entity/IEntity";
import { IDecayTemperatureRange } from "game/IGame";
import { ILootItem } from "game/ILoot";
import { IObjectDescription } from "game/IObject";
import { ItemType } from "game/item/IItem";
import { ITemperatureSource } from "game/temperature/ITemperature";
import { ITile, TerrainType } from "game/tile/ITerrain";
import TileEvent from "game/tile/TileEvent";
import { IModdable } from "mod/ModRegistry";
import { IRGB } from "utilities/Color";
export interface ITileEventDescription extends IObjectDescription, IModdable, ICausesStatusEffect, ITemperatureSource {
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
     * Is the event made of water? These can put out fires if they are on the same tile as them.
     */
    water?: boolean;
    /**
     * When more than three puddles of water exist on a tile, they create the this terrain type.
     */
    meltsInto?: TerrainType;
    /**
     * When more than three puddles of water exist on a tile, they create the this terrain type when it lower than "Cold" on the tile.
     */
    freezesInto?: TerrainType;
    /**
     * Can the tile event burn when fire is on the same tile as it?
     */
    canBurn?: boolean;
    decayTemperatureRange?: IDecayTemperatureRange;
    canCreate?(type: TileEventType, tile: ITile, tileType: TerrainType, x: number, y: number, z: number): boolean;
    create?(tileEvent: TileEvent): void;
    remove?(tileEvent: TileEvent): void;
    update?(tileEvent: TileEvent): void;
    /**
     * Gets the temperature produced by this tile event. Positive values are "heat", negative values are "cold".
     * Refer to the values of the `Temperature` enum to see the possible range.
     * If this method is not implemented, or it returns `undefined`, `Temperature.Neutral` is used.
     */
    getProducedTemperature?(tileEvent?: TileEvent): number | undefined;
}
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
    PuddleOfCoconutWater = 20
}
