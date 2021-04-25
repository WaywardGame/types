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
import { IGameOptionsPartial } from "game/options/IGameOptions";
import MilestoneModifier, { MilestoneModifierGroup } from "game/options/modifiers/milestone/MilestoneModifier";
export default class Treasurer extends MilestoneModifier {
    options: IGameOptionsPartial;
    getGroup(): MilestoneModifierGroup;
}
