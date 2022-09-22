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
import type { BiomeType } from "game/biome/IBiome";
import type { SkillType } from "game/entity/IHuman";
import type { CreationId } from "game/IGame";
import type { TerrainType } from "game/tile/ITerrain";
import type { WorldZ } from "game/WorldZ";
import type { ISerializedTranslation } from "language/ITranslation";
export interface IObject<T> {
    objectType: CreationId;
    type: T;
    id: number;
    renamed?: string | ISerializedTranslation;
}
export interface IObjectDescription extends IHasImagePath {
    storeDecay?: boolean;
    decayMax?: number;
    skillUse?: SkillType;
    weightCapacity?: number;
    preservationChance?: number;
    spawnOnWorldGen?: OptionalDescriptions<BiomeType, OptionalDescriptions<WorldZ, OptionalDescriptions<TerrainType, number>>>;
}
export interface IHasImagePath {
    /**
     * A replacement image to use. Used in modding.
     */
    imagePath?: string;
    /**
     * The number of alternate textures that this image has. Not supported for most things.
     */
    imageCount?: number;
}
export interface IObjectOptions {
    decay?: number;
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
