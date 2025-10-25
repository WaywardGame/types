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
import type Entity from "@wayward/game/game/entity/Entity";
import type Human from "@wayward/game/game/entity/Human";
import type { Milestone } from "@wayward/game/game/milestones/IMilestone";
import type { IGameOptionsPartial } from "@wayward/game/game/options/IGameOptions";
import GameplayModifier, { GameplayModifierInstance } from "@wayward/game/game/options/modifiers/GameplayModifier";
import { MilestoneModifierGroup } from "@wayward/game/game/options/modifiers/milestone/IMilestoneModifier";
import type { TranslationArg } from "@wayward/game/language/ITranslation";
import Translation from "@wayward/game/language/Translation";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
export declare const milestoneGroupIcons: Record<MilestoneModifierGroup, string>;
export declare class MilestoneModifierInstance<DATA = any> extends GameplayModifierInstance<Milestone, [Human?], DATA> {
    protected get player(): Human | undefined;
    isEnabledForPlayer(entity: Entity): boolean;
    protected getDefaultTitle(): TranslationImpl;
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
    protected getTranslationArgs(): TranslationArg[] | undefined;
    translateDescription(): Translation;
    instantiate(id: Milestone, human?: Human): MilestoneModifierInstance | undefined;
    abstract getOptions(): IGameOptionsPartial;
    initialize(instance: MilestoneModifierInstance): MilestoneModifierInstance;
    abstract getGroup(): MilestoneModifierGroup;
}
