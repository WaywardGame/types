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
import Recipe from "game/item/recipe/Recipe";
export declare enum RecipeType {
}
declare class RecipeRegistry {
    private readonly recipes;
    private recipeIndex;
    getRecipeDescriptions(): Readonly<Descriptions<RecipeType, Recipe>>;
    stream(): import("@wayward/goodstream/Stream").default<[RecipeType, Recipe]>;
    register(recipe: Recipe): this;
    get(recipe: RecipeType): Recipe;
}
declare const _default: RecipeRegistry;
export default _default;
