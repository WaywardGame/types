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
import { BiomeType } from "game/biome/IBiome";
import { SkillType } from "game/entity/IHuman";
import { CreationId } from "game/IGame";
import { TerrainType } from "game/tile/ITerrain";
import { WorldZ } from "game/WorldZ";
import { ISerializedTranslation } from "language/Translation";
export interface IObject<T> {
    objectType: CreationId;
    type: T;
    id: number;
    renamed?: string | ISerializedTranslation;
}
export interface IObjectDescription extends IHasImagePath {
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
}
export interface IObjectOptions {
    decay?: number;
    minDur?: number;
    maxDur?: number;
    quality?: Quality;
}
export declare enum Quality {
    None = 0,
    Random = 1,
    Superior = 2,
    Remarkable = 3,
    Exceptional = 4,
    Mastercrafted = 5
}
