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
import type { ItemType } from "game/item/IItem";
import ItemOutput from "game/item/recipe/output/ItemOutput";
import type Recipe from "game/item/recipe/Recipe";
export declare enum RecipeSort {
    Name = 0
}
export declare class Craftable {
    readonly recipe: Recipe;
    readonly output: ItemOutput;
    static allFromRecipe(recipe: Recipe): import("@wayward/goodstream").default<Craftable>;
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
