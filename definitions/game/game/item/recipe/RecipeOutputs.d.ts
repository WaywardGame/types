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
import ItemOutput from "game/item/recipe/output/ItemOutput";
import { RecipeOutputType } from "game/item/recipe/RecipeOutput";
declare const outputs: {
    0: typeof ItemOutput;
};
export default outputs;
export declare type RecipeOutputClass<R extends RecipeOutputType> = (typeof outputs)[R];
