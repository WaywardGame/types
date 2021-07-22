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
import { SkillType } from "game/entity/IHuman";
import { InspectType } from "game/inspection/IInspection";
import { InfoProviderContext } from "game/inspection/InfoProviderContext";
import SkillBonusMagicalItemsInfoProvider from "game/inspection/infoProviders/skill/MagicalItemBonuses";
import UnlockableRowInfoProvider from "game/inspection/infoProviders/UnlockableRowInfoProvider";
import Inspection from "game/inspection/Inspection";
import Message from "language/dictionary/Message";
import Translation from "language/Translation";
export default class SkillInspection extends Inspection<SkillType> {
    static getSkillAttributeMessage(skill: SkillType): Message.Dexterity | Message.Metabolism | Message.Strength | undefined;
    static handles: (type: InspectType, value: unknown, context?: InfoProviderContext | undefined) => any;
    private readonly human?;
    constructor([, skill]: [any, SkillType], context?: InfoProviderContext);
    getId(): string;
    getBorder(): string;
    get(context: InfoProviderContext): (0 | Translation | import("game/inspection/InfoProvider").SimpleInfoProvider | UnlockableRowInfoProvider | SkillBonusMagicalItemsInfoProvider)[];
    private getCurrentValue;
    private getDescription;
    private getReputationImpact;
    private getCanIncrease;
}
