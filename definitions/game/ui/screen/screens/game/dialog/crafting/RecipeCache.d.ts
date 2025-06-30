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
import type { ItemType } from "@wayward/game/game/item/IItem";
import type Recipe from "@wayward/game/game/item/recipe/Recipe";
import ItemOutput from "@wayward/game/game/item/recipe/output/ItemOutput";
import type Stream from "@wayward/goodstream";
export declare enum RecipeSort {
    Name = 0
}
export declare class Craftable {
    readonly recipe: Recipe;
    readonly output: ItemOutput;
    static allFromRecipe(recipe: Recipe): Stream<Craftable>;
    private static getFromRecipeAndOutput;
    private static readonly cache;
    private constructor();
}
declare class RecipeCache {
    recipesByItemType: Map<ItemType, Recipe[]>;
    private sortedRecipes;
    getSortedRecipes(sort: RecipeSort): Craftable[];
    protected onPlay(): void;
}
declare const _default: RecipeCache;
export default _default;
