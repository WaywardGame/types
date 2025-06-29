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
import type Entity from "@wayward/game/game/entity/Entity";
import { Quality } from "@wayward/game/game/IObject";
import { CraftResult } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type Recipe from "@wayward/game/game/item/recipe/Recipe";
import type { IRecipeInputUseStrategy, RecipeInputType } from "@wayward/game/game/item/recipe/RecipeRequirement";
import { RecipeRequirementType } from "@wayward/game/game/item/recipe/RecipeRequirement";
import type { RecipeRequirementClass } from "@wayward/game/game/item/recipe/RecipeRequirements";
import type Tile from "@wayward/game/game/tile/Tile";
export declare enum CraftEfficacy {
    Lowest = 0,
    Low = 1,
    Medium = 2,
    High = 3,
    Highest = 4
}
export interface ICraftResult {
    type: CraftResult;
    outputs: any[];
    computeEfficacy(): ICraftEfficacy | undefined;
}
export interface ICraftEfficacy {
    value: number;
    tier: CraftEfficacy;
}
export default class Crafter {
    readonly recipe: Recipe;
    private readonly crafter;
    readonly accessibleItems: Item[];
    private readonly inputs;
    private readonly usedFilter;
    private forcedQuality?;
    private readonly decays;
    private quality?;
    constructor(recipe: Recipe, crafter: Entity, accessibleItems: Item[]);
    /**
     * Gets an array of the tiles around the crafter entity.
     * @param includeCrafterTile Whether the tile the crafter is on should be included. Defaults to `true`.
     */
    tilesAroundCrafter(includeCrafterTile?: boolean): Tile[];
    getCrafter(): Entity;
    getUsable<R extends RecipeRequirementType>(type: R, requirement: InstanceType<RecipeRequirementClass<R>>): Set<RecipeInputType<R>>;
    getUsed<R extends RecipeRequirementType>(type: R, requirement?: InstanceType<RecipeRequirementClass<R>>): IteratorObject<RecipeInputType<R>>;
    /**
     * Returns whether the input could be "freed" (the requirement using it could use sth else instead).
     *
     * ### What is this for?
     *
     * A single input could be used for more than one thing in a recipe. Consider the following example:
     *
     * 1. We have a recipe that takes any rock item, and an item from the "sharpened" group.
     * 2. We have only one sharpened rock and one large rock in our inventory.
     * 3. The recipe requirements are iterated through:
     * 	- For the "any rock item" requirement, the first item that matches is "used". In this case, it's the "sharpened rock".
     * 	- For the "sharpened group" requirement, the only remaining item is the large rock, so it doesn't match.
     * 		- Since there were no items that matched the sharpened group, it looks back to the items already "used", and tries
     * to "free" those items. **That's this function**.
     * 		- Freeing an item means returning back to the requirement that used it, and checking if any other items will
     * fit the requirement.
     * 		- If any other items matched that item, this method returns true, and then the item can be used by the
     * requirement that needed it to be freed.
     * 		- In this example, the large rock also fits the "any rock item" requirement, so the sharpened rock is freed
     * for use by the "sharpened group" requirement.
     */
    freeUsed<R extends RecipeRequirementType>(type: R, input: RecipeInputType<R>): boolean;
    use<R extends RecipeRequirementType>(type: R, useStrategy: IRecipeInputUseStrategy<R>, requirement: InstanceType<RecipeRequirementClass<R>>): this;
    forceResultQuality(quality?: Quality): this;
    getForcedResultQuality(): Quality | undefined;
    addDecay(decay: number, weight?: number): this;
    getDecay(): number;
    attemptCraft(): ICraftResult;
    getQualityBonus(): number;
    /**
     * Returns the quality of the output items. This is randomised for each call if the quality is not forced.
     */
    getQuality(): Quality;
    private getOutputs;
    private runEvent;
    private computeQualityBonus;
    private computeQualityBonusOfInput;
    private getRandomResult;
    private getEfficacy;
}
