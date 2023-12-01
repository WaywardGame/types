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
import type { BiomeType } from "@wayward/game/game/biome/IBiome";
import type { SkillType } from "@wayward/game/game/entity/IHuman";
import type { TerrainType } from "@wayward/game/game/tile/ITerrain";
import type { ISerializedTranslation } from "@wayward/game/language/ITranslation";
import type { WorldZ } from "@wayward/utilities/game/WorldZ";
export interface IObject<T> {
    type: T;
    id: number;
    renamed?: string | ISerializedTranslation;
}
export interface IObjectDescription extends IHasImagePath {
    /**
     * Set to true if we want to store decay, but not have it active (in the case of torches)
     */
    storeDecay?: boolean;
    /**
     * number of game ticks until decay
     */
    decayMax?: number;
    skillUse?: SkillType;
    /**
     * container maximum weight
     */
    weightCapacity?: number;
    /**
     * Chance that things will decay inside it
     */
    preservationChance?: number;
    spawnOnWorldGen?: OptionalDescriptions<BiomeType, OptionalDescriptions<WorldZ, OptionalDescriptions<TerrainType, number>>>;
}
export interface IHasImagePath<ImagePathType = string> {
    /**
     * A replacement image to use. Used in modding.
     */
    imagePath?: ImagePathType;
    /**
     * The number of alternate textures that this image has. Not supported for most things.
     */
    imageCount?: number;
}
export interface IObjectOptions {
    durability?: number;
    durabilityMax?: number;
    quality?: Quality;
}
export declare enum Quality {
    None = 0,
    Random = 1,
    Superior = 2,
    Remarkable = 3,
    Exceptional = 4,
    Mastercrafted = 5,
    Relic = 6
}
