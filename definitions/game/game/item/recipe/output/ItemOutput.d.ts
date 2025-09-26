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
import type { Quality } from "@wayward/game/game/IObject";
import type { ItemType } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type Crafter from "@wayward/game/game/item/recipe/Crafter";
import RecipeOutput from "@wayward/game/game/item/recipe/RecipeOutput";
import type { RecipeInputType } from "@wayward/game/game/item/recipe/RecipeRequirement";
import { RecipeRequirementType } from "@wayward/game/game/item/recipe/RecipeRequirement";
import type { RecipeRequirementClass } from "@wayward/game/game/item/recipe/RecipeRequirements";
import type requirementsType from "@wayward/game/game/item/recipe/RecipeRequirements";
import type ItemRequirement from "@wayward/game/game/item/recipe/requirement/ItemRequirement";
declare class ItemOutput extends RecipeOutput<Item> {
    readonly itemType: ItemType;
    readonly quantity: number;
    quality?: Quality;
    private readonly requirements;
    private readonly predicates;
    private intermediate;
    constructor(itemType: ItemType, quantity?: number);
    addRequirement(...args: ConstructorParameters<typeof ItemRequirement>): this;
    setRequirementPredicate<R extends RecipeRequirementType>(requirementType: R, predicate: (input: RecipeInputType<R>, requirement: InstanceType<RecipeRequirementClass<R>>) => boolean): this;
    predicateMatches<R extends RecipeRequirementType>(requirementType: R, input: RecipeInputType<R>, requirement: InstanceType<RecipeRequirementClass<R>>): boolean;
    setQuality(quality: Quality): this;
    get(api: Crafter): Item;
    private getDecay;
    private getOutputInventory;
}
declare namespace ItemOutput {
    function setRequirements(requirementsIn: typeof requirementsType): void;
    class Intermediate {
        private readonly output;
        private readonly decays;
        constructor(output: ItemOutput);
        addDecay(decay: number, weight?: number): this;
        getDecay(): number;
        predicateMatches<R extends RecipeRequirementType>(requirementType: R, input: RecipeInputType<R>, requirement: InstanceType<RecipeRequirementClass<R>>): boolean;
    }
}
export default ItemOutput;
