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
import Human from "entity/Human";
import { SkillType } from "entity/IHuman";
import { InfoProviderContext } from "game/inspection/InfoProvider";
import SkillBonusMagicalItemsInfoProvider from "game/inspection/infoProviders/skill/MagicalItemBonuses";
import Inspection from "game/inspection/Inspection";
import Message from "language/dictionary/Message";
import Translation from "language/Translation";
export default class SkillInspection extends Inspection<SkillType> {
    private readonly human?;
    static getSkillAttributeMessage(skill: SkillType): Message.Dexterity | Message.Metabolism | Message.Strength | undefined;
    static handles(skill: unknown, human?: unknown): boolean;
    constructor(skill: SkillType, human?: Human | undefined);
    getId(): string;
    getBorder(): string;
    get(context: InfoProviderContext): (0 | Translation | import("../InfoProvider").SimpleInfoProvider | SkillBonusMagicalItemsInfoProvider)[];
    private getCurrentValue;
    private getDescription;
    private getReputationImpact;
    private getCanIncrease;
}
