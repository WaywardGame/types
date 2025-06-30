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
import type Recipe from "@wayward/game/game/item/recipe/Recipe";
import type Stream from "@wayward/goodstream";
export declare enum RecipeType {
}
declare class RecipeRegistry {
    private readonly recipes;
    private recipeIndex;
    getRecipeDescriptions(): Readonly<Descriptions<RecipeType, Recipe>>;
    stream(): Stream<[RecipeType, Recipe]>;
    register(recipe: Recipe): this;
    get(recipe: RecipeType): Recipe;
}
declare const _default: RecipeRegistry;
export default _default;
