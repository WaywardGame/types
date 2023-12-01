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
import { InspectType } from "@wayward/game/game/inspection/IInspection";
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import Inspection from "@wayward/game/game/inspection/Inspection";
import { Milestone, MilestoneVisibility } from "@wayward/game/game/milestones/IMilestone";
import UiTranslation from "@wayward/game/language/dictionary/UiTranslation";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import Translation from "@wayward/game/language/Translation";
import type { TranslationGenerator } from "@wayward/game/ui/component/IComponent";
import type { InspectionTooltipHints } from "@wayward/game/ui/screen/screens/game/InspectionsTooltipHandler";
export default class MilestoneInspection extends Inspection<Milestone> {
    static handles: (type: InspectType, value: unknown, context?: InfoProviderContext | undefined) => boolean;
    static getMilestoneName(milestone: Milestone, visibility?: MilestoneVisibility): TranslationImpl;
    static getMilestoneReadout(milestone: Milestone, name?: Translation): () => TranslationImpl;
    static getDescription(milestone: Milestone): TranslationImpl | UiTranslation.GameDialogMilestonesTooltipMystery | UiTranslation.GameDialogMilestonesTooltipInvisible;
    constructor([, milestone]: [any, Milestone], context?: InfoProviderContext);
    getId(): string;
    getBorder(): string;
    get(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider>;
    renderHints(hints: InspectionTooltipHints): void;
    private getDiscovered;
    private getDiscoveredTranslations;
    private getDiscoveryTranslation;
}
