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
import RecipeRequirement, { RecipeRequirementType } from "@wayward/game/game/item/recipe/RecipeRequirement";
import type Tile from "@wayward/game/game/tile/Tile";
export default class FireRequirement extends RecipeRequirement<RecipeRequirementType.Fire> {
    static readonly BASE: FireRequirement;
    constructor();
    getUsable(api: Crafter): Tile[];
    isMet(api: Crafter): boolean;
    private onCraft;
}
