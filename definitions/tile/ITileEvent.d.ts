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
import { ICausesStatusEffect } from "entity/IEntity";
import { ILootItem } from "game/ILoot";
import { IObjectDescription } from "game/IObject";
import { ITemperatureSource } from "game/temperature/ITemperature";
import { ItemType } from "item/IItem";
import { IModdable } from "mod/ModRegistry";
import TileEvent from "tile/TileEvent";
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
    isTall?: boolean;
    providesFire?: boolean;
    /**
     * Whether the tile event prevents things such as carving, digging, movement, etc.
     */
    blocksTile?: boolean;
    /**
     * Whether this is a "minor" tile event. Minor tile events are rendered as faded, small text in tooltips rather than large headings.
     */
    isMinor?: boolean;
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
    AnimalDung = 5,
    Guano = 6,
    WispDust = 7,
    Blood = 8,
    BloodWater = 9,
    Acid = 10
}
