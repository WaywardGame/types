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
import type Doodad from "@wayward/game/game/doodad/Doodad";
import type Item from "@wayward/game/game/item/Item";
import type Crafter from "@wayward/game/game/item/recipe/Crafter";
import type Tile from "@wayward/game/game/tile/Tile";
export declare enum RecipeRequirementType {
    Item = 0,
    Tool = 1,
    Doodad = 2,
    Fire = 3
}
export interface RecipeInputTypeMap {
    [RecipeRequirementType.Item]: Item;
    [RecipeRequirementType.Tool]: Item;
    [RecipeRequirementType.Doodad]: Doodad;
    [RecipeRequirementType.Fire]: Tile;
}
export type RecipeInputType<R extends RecipeRequirementType = RecipeRequirementType> = RecipeInputTypeMap[R];
export interface IRecipeInputUseStrategy<R extends RecipeRequirementType> {
    inputs: Array<RecipeInputType<R>>;
    freeUsedInput?(api: Crafter, inputs: Array<RecipeInputType<R>>): boolean;
    onAttemptCraft?(api: Crafter, inputs: Array<RecipeInputType<R>>): any;
    onCraft?(api: Crafter, inputs: Array<RecipeInputType<R>>): any;
    onFail?(api: Crafter, inputs: Array<RecipeInputType<R>>): any;
    getQualityBonus?(api: Crafter, input: RecipeInputType<R>): number;
    getQualityBonusType?(api: Crafter): RecipeRequirementType;
    getBestPossibleQualityBonus?(api: Crafter): number;
}
export declare const MAX_QUALITY_BONUSES: Readonly<Descriptions<RecipeRequirementType, number>>;
export default abstract class RecipeRequirement<R extends RecipeRequirementType> {
    readonly type: R;
    constructor(type: R);
    abstract isMet(api: Crafter): boolean;
    abstract getUsable(api: Crafter): Iterable<RecipeInputType<R>>;
}
