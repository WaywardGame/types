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
import { SkillType } from "@wayward/game/game/entity/IHuman";
import { InspectType } from "@wayward/game/game/inspection/IInspection";
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import Inspection from "@wayward/game/game/inspection/Inspection";
import Message from "@wayward/game/language/dictionary/Message";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import type { TranslationGenerator } from "@wayward/game/ui/component/IComponent";
import type { InspectionTooltipHints } from "@wayward/game/ui/screen/screens/game/InspectionsTooltipHandler";
export default class SkillInspection extends Inspection<SkillType> {
    static getSkillAttributeMessage(skill: SkillType): Message.Dexterity | Message.Metabolism | Message.Strength | undefined;
    static handles: (type: InspectType, value: unknown, context?: InfoProviderContext | undefined) => boolean;
    private readonly human?;
    constructor([, skill]: [any, SkillType], context?: InfoProviderContext);
    getId(): string;
    getBorder(): string;
    get(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider>;
    renderHints(hints: InspectionTooltipHints): void;
    private getCurrentValue;
    private getDescription;
    protected getAlignmentImpact(): TranslationImpl | undefined;
    private getCanIncrease;
}
