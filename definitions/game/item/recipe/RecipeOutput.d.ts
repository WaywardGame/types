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
import Crafter from "game/item/recipe/Crafter";
export declare enum RecipeOutputType {
    Item = 0
}
export default abstract class RecipeOutput<T> {
    readonly type: RecipeOutputType;
    constructor(type: RecipeOutputType);
    abstract get(api: Crafter): T;
}
