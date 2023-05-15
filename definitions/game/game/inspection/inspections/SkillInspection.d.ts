/*!
 * Copyright 2011-2023 Unlok
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
import { InfoProvider } from "game/inspection/InfoProvider";
import type { InfoProviderContext } from "game/inspection/InfoProviderContext";
import Inspection from "game/inspection/Inspection";
import Message from "language/dictionary/Message";
import type { TranslationGenerator } from "ui/component/IComponent";
export default class SkillInspection extends Inspection<SkillType> {
    static getSkillAttributeMessage(skill: SkillType): Message.Dexterity | Message.Metabolism | Message.Strength | undefined;
    static handles: (type: InspectType, value: unknown, context?: InfoProviderContext | undefined) => boolean;
    private readonly human?;
    constructor([, skill]: [any, SkillType], context?: InfoProviderContext);
    getId(): string;
    getBorder(): string;
    get(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider>;
    private getCurrentValue;
    private getDescription;
    private getReputationImpact;
    private getCanIncrease;
}
