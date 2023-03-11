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
import type Entity from "game/entity/Entity";
import type Human from "game/entity/Human";
import type { Milestone } from "game/milestones/IMilestone";
import type { IGameOptionsPartial } from "game/options/IGameOptions";
import GameplayModifier, { GameplayModifierInstance } from "game/options/modifiers/GameplayModifier";
export declare enum MilestoneModifierGroup {
    Creatures = 0,
    Skills = 1,
    Items = 2,
    Equipment = 3,
    Reputation = 4,
    Actions = 5,
    Treasure = 6,
    Metagame = 7,
    Turns = 8,
    Challenge = 9,
    Merchants = 10
}
export declare const milestoneGroupIcons: Record<MilestoneModifierGroup, string>;
export declare class MilestoneModifierInstance extends GameplayModifierInstance<Milestone, [Human?]> {
    protected get player(): Human<number> | undefined;
    isEnabledForPlayer(entity: Entity): boolean;
    protected getDefaultTitle(): import("../../../../language/impl/TranslationImpl").default;
}
export default abstract class MilestoneModifier extends GameplayModifier<Milestone, MilestoneModifierInstance, [Human?]> {
    static isGlobal(modifier: MilestoneModifier): boolean;
    static areOptionsGlobal(gameOptions: IGameOptionsPartial): boolean;
    after?: Milestone[];
    /**
     * Whether this milestone modifier is host-exclusive, IE, clients connecting to a server can't select this modifier.
     *
     * Modifiers with custom `options: IGameOptions` are always host-exclusive.
     */
    isGlobal(): boolean;
    constructor(id?: Milestone);
    instantiate(id: Milestone, human?: Human): MilestoneModifierInstance | undefined;
    abstract getOptions(): IGameOptionsPartial;
    initialize(instance: MilestoneModifierInstance): MilestoneModifierInstance;
    abstract getGroup(): MilestoneModifierGroup;
}
