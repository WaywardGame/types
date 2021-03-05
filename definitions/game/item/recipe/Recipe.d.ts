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
import Entity from "game/entity/Entity";
import { SkillType } from "game/entity/IHuman";
import { RecipeLevel } from "game/item/IItem";
import Item from "game/item/Item";
import Crafter from "game/item/recipe/Crafter";
import RecipeOutput, { RecipeOutputType } from "game/item/recipe/RecipeOutput";
import { RecipeOutputClass } from "game/item/recipe/RecipeOutputs";
import RecipeRequirement, { RecipeInputType, RecipeRequirementType } from "game/item/recipe/RecipeRequirement";
import { RecipeRequirementClass } from "game/item/recipe/RecipeRequirements";
export default class Recipe {
    /**
     * When `undefined`, this recipe is not registered.
     */
    readonly index: number | undefined;
    private readonly requirements;
    private readonly outputs;
    private readonly predicates;
    private skill;
    private level;
    private reputation;
    constructor();
    getRequirements(): import("@wayward/goodstream/Stream").default<RecipeRequirement<any>>;
    addRequirement<R extends RecipeRequirementType>(requirementType: R, ...args: ConstructorParameters<RecipeRequirementClass<R>>): this;
    setRequirementPredicate<R extends RecipeRequirementType>(requirementType: R, predicate: (input: RecipeInputType<R>, requirement: InstanceType<RecipeRequirementClass<R>>) => boolean): this;
    predicateMatches<R extends RecipeRequirementType>(requirementType: R, input: RecipeInputType<R>, requirement: InstanceType<RecipeRequirementClass<R>>): boolean;
    getOutputs(): import("@wayward/goodstream/Stream").default<RecipeOutput<any>>;
    addOutput<R extends RecipeOutputType>(outputType: R, ...args: ConstructorParameters<RecipeOutputClass<R>>): this;
    getSkill(): SkillType;
    setSkill(skill: SkillType): this;
    getLevel(): RecipeLevel;
    setLevel(level: RecipeLevel): this;
    getReputation(): number;
    setReputation(reputation: number): this;
    canCraft(crafter: Crafter): boolean;
    canCraft(entity: Entity, items: Item[]): boolean;
    requirementsStatus(entity: Entity, items: Item[]): import("@wayward/goodstream/Stream").default<[RecipeRequirement<any>, boolean]>;
    getCrafter(entity: Entity, items: Item[]): Crafter;
}
