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
import type { DeityReal } from "@wayward/game/game/deity/Deity";
import type { RuneChance } from "@wayward/game/game/deity/IDeities";
import type Entity from "@wayward/game/game/entity/Entity";
import { SkillType } from "@wayward/game/game/entity/skill/ISkills";
import { RecipeLevel } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import Crafter from "@wayward/game/game/item/recipe/Crafter";
import type RecipeOutput from "@wayward/game/game/item/recipe/RecipeOutput";
import type { RecipeOutputType } from "@wayward/game/game/item/recipe/RecipeOutput";
import type { RecipeOutputClass } from "@wayward/game/game/item/recipe/RecipeOutputs";
import type RecipeRequirement from "@wayward/game/game/item/recipe/RecipeRequirement";
import type { RecipeInputType, RecipeRequirementType } from "@wayward/game/game/item/recipe/RecipeRequirement";
import type { RecipeRequirementClass } from "@wayward/game/game/item/recipe/RecipeRequirements";
import type Stream from "@wayward/goodstream";
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
    private runeChance;
    constructor();
    getRequirements(): Stream<RecipeRequirement<any>>;
    addRequirement<R extends RecipeRequirementType>(requirementType: R, ...args: ConstructorParameters<RecipeRequirementClass<R>>): this;
    setRequirementPredicate<R extends RecipeRequirementType>(requirementType: R, predicate: (input: RecipeInputType<R>, requirement: InstanceType<RecipeRequirementClass<R>>) => boolean): this;
    predicateMatches<R extends RecipeRequirementType>(requirementType: R, input: RecipeInputType<R>, requirement: InstanceType<RecipeRequirementClass<R>>): boolean;
    getOutputs(): Stream<RecipeOutput<any>>;
    addOutput<R extends RecipeOutputType>(outputType: R, ...args: ConstructorParameters<RecipeOutputClass<R>>): this;
    getSkill(): SkillType;
    setSkill(skill: SkillType): this;
    getLevel(): RecipeLevel;
    setLevel(level: RecipeLevel): this;
    getRuneChance(): RuneChance;
    setRuneChance(alignment: ArrayOr<DeityReal>, chance: number): this;
    canCraft(crafter: Crafter): boolean;
    canCraft(entity: Entity, items: Item[]): boolean;
    requirementsStatus(entity: Entity, items: Item[]): Stream<[RecipeRequirement<any>, boolean]>;
    getCrafter(entity: Entity, items: Item[]): Crafter;
}
