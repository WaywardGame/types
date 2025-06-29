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
import type { IGameOptionsPartial } from "@wayward/game/game/options/IGameOptions";
import MilestoneModifier, { MilestoneModifierGroup } from "@wayward/game/game/options/modifiers/milestone/MilestoneModifier";
import type { TranslationArg } from "@wayward/game/language/ITranslation";
export default class Gatherer extends MilestoneModifier {
    readonly initial = 20;
    readonly gainMultiplier = 0.75;
    getOptions(): IGameOptionsPartial;
    protected getTranslationArgs(): TranslationArg[] | undefined;
    getGroup(): MilestoneModifierGroup;
}
