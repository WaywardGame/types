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
import type { BiomeType } from "@wayward/game/game/biome/IBiome";
import type { SkillType } from "./entity/skill/ISkills";
import type { ItemType } from "@wayward/game/game/item/IItem";
import type { TerrainType } from "@wayward/game/game/tile/ITerrain";
import type { ISerializedTranslation } from "@wayward/game/language/ITranslation";
import type { IEventEmitter } from "@wayward/utilities/event/EventEmitter";
import type WorldZ from "@wayward/utilities/game/WorldZ";
export interface IObject<T> {
    type: T;
    id: number;
    renamed?: string | ISerializedTranslation;
}
export interface IObjectDescription extends IHasImagePath {
    /**
     * Set to an item type that will derive its decayMax from when its state is changed. This property is set on unlit torches for example where we want to store the decay, but not use it.
     */
    storeDecay?: ItemType;
    /**
     * Number of game ticks until decay. If this is a lit doodad, or tile event, this is the maximum value it can get to while getting fuelled or stoked.
     */
    decayMax?: number;
    /**
     * An associated skill or skills for the item when repairing (as a fallback), refining, reinforcing, dismantling, consuming, etc.
     * If multiple skills are set, it will pick one at random when using
     */
    skillUse?: SkillType | SkillType[];
    /**
     * container maximum weight
     */
    weightCapacity?: number;
    /**
     * Chance that things will decay inside it
     */
    preservationChance?: number;
    spawnOnWorldGen?: OptionalDescriptions<BiomeType, OptionalDescriptions<WorldZ, OptionalDescriptions<TerrainType, number>>>;
    /**
     * If this is a doodad/item container, you can set this to true to make the doodad/item considered one where you can only "place items onto" the doodad/item, rather than storing the items within the doodad/item.
     * - Changes messages when putting items in the container to "placed onto" via `placedOnToMessage`
     * - Prevents using the item as a container when in your inventory via `preventUsingItemAsContainerInInventory`
     * - Prevents picking up the doodad when items are inside via `preventPickingUpDoodadWhenItemsAreInside`
     */
    containerOptions?: IContainerOptions;
    /**
     * If set to true, this item will not tryRestoreCreature() when breaking (the difference between golems and full cages)
     */
    disableRestoreCreature?: boolean;
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
export type QualityNatural = Exclude<Quality, Quality.Random | Quality.Mastercrafted>;
export type QualityReal = Exclude<Quality, Quality.Random>;
export interface IQualityEvents {
    qualityChange(quality: Quality, oldQuality: Quality): any;
}
export interface IHasQuality {
    event: IEventEmitter<this, IQualityEvents>;
    quality?: Quality;
}
export interface IContainerOptions {
    placedOnToMessage?: boolean;
    preventUsingItemAsContainerInInventory?: boolean;
    preventPickingUpDoodadWhenItemsAreInside?: boolean;
}
