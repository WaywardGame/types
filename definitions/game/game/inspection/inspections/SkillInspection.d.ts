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
import { SkillType } from "@wayward/game/game/entity/skill/ISkills";
import { InspectType } from "@wayward/game/game/inspection/IInspection";
import type { SimpleInfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import Inspection from "@wayward/game/game/inspection/Inspection";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import Translation from "@wayward/game/language/Translation";
import type { InspectionTooltipHints } from "@wayward/game/ui/screen/screens/game/InspectionsTooltipHandler";
export default class SkillInspection extends Inspection<SkillType> {
    static getSkillAttributeMessage(skill: SkillType): Translation | undefined;
    static handles: (type: InspectType, value: unknown, context?: InfoProviderContext) => boolean;
    constructor([, skill]: [any, SkillType], context?: InfoProviderContext);
    getId(): string;
    getBorder(): string;
    protected getTitle(context: InfoProviderContext): Translation | SimpleInfoProvider | undefined;
    protected getSubtitle(context: InfoProviderContext): Translation | SimpleInfoProvider | undefined;
    protected getContent(context: InfoProviderContext): ArrayOr<Translation | InfoProvider | undefined>;
    renderHints(hints: InspectionTooltipHints): void;
    private getCurrentValue;
    private getDescription;
    protected getAlignmentImpact(): TranslationImpl | undefined;
    private getCanIncrease;
}
