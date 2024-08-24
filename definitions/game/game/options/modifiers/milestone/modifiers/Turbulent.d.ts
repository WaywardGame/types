/*!
 * Copyright 2011-2024 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { IGameOptionsPartial } from "@wayward/game/game/options/IGameOptions";
import DeityInvokeMilestoneModifier, { DeityInvokeMilestoneModifierInstance } from "@wayward/game/game/options/modifiers/milestone/modifiers/shared/DeityInvokeMilestoneModifier";
export default class Turbulent extends DeityInvokeMilestoneModifier {
    getOptions(): IGameOptionsPartial;
    protected getClass(): Class<DeityInvokeMilestoneModifierInstance>;
}