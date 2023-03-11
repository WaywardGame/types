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
import type Doodad from "game/doodad/Doodad";
import type { DoodadType, DoodadTypeGroup } from "game/doodad/IDoodad";
import type Crafter from "game/item/recipe/Crafter";
import RecipeRequirement, { RecipeRequirementType } from "game/item/recipe/RecipeRequirement";
export default class DoodadRequirement extends RecipeRequirement<RecipeRequirementType.Doodad> {
    readonly doodad: DoodadType | DoodadTypeGroup;
    static readonly BASE: DoodadRequirement;
    private bestDoodad?;
    constructor(doodad: DoodadType | DoodadTypeGroup);
    /**
     * Sets the "best" doodad to be used for this requirement. Used to display the efficacy of an actual input doodad.
     */
    setBestDoodad(doodad: Doodad): this;
    getUsable(api: Crafter): Set<any>;
    isMet(api: Crafter): boolean;
    private getQualityBonus;
    private getBestPossibleQualityBonus;
}
