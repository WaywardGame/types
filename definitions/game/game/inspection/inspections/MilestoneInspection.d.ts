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
import { InspectType } from "game/inspection/IInspection";
import { InfoProvider } from "game/inspection/InfoProvider";
import type { InfoProviderContext } from "game/inspection/InfoProviderContext";
import Inspection from "game/inspection/Inspection";
import { Milestone, MilestoneVisibility } from "game/milestones/IMilestone";
import UiTranslation from "language/dictionary/UiTranslation";
import Translation from "language/Translation";
import type { TranslationGenerator } from "ui/component/IComponent";
export default class MilestoneInspection extends Inspection<Milestone> {
    static handles: (type: InspectType, value: unknown, context?: InfoProviderContext | undefined) => any;
    static getMilestoneName(milestone: Milestone, visibility?: MilestoneVisibility): import("../../../language/impl/TranslationImpl").default;
    static getMilestoneReadout(milestone: Milestone, name?: Translation): () => import("../../../language/impl/TranslationImpl").default;
    static getDescription(milestone: Milestone): UiTranslation.GameDialogMilestonesTooltipHidden | UiTranslation.GameDialogMilestonesTooltipInvisible | import("../../../language/impl/TranslationImpl").default;
    constructor([, milestone]: [any, Milestone], context?: InfoProviderContext);
    getId(): string;
    getBorder(): string;
    get(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider>;
    private getDiscovered;
    private getDiscoveredTranslations;
}
