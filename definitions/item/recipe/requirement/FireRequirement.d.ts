/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import Crafter from "item/recipe/Crafter";
import RecipeRequirement, { RecipeRequirementType } from "item/recipe/RecipeRequirement";
import { ITile } from "tile/ITerrain";
export default class FireRequirement extends RecipeRequirement<RecipeRequirementType.Fire> {
    static readonly BASE: FireRequirement;
    constructor();
    getUsable(api: Crafter): import("@wayward/goodstream/Stream").default<ITile>;
    isMet(api: Crafter): boolean;
    private onCraft;
}
