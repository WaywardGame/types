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
import type Crafter from "@wayward/game/game/item/recipe/Crafter";
export declare enum RecipeOutputType {
    Item = 0
}
export default abstract class RecipeOutput<T> {
    readonly type: RecipeOutputType;
    constructor(type: RecipeOutputType);
    abstract get(api: Crafter): T;
}
