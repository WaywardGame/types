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
import { InfoProviderContext } from "game/inspection/InfoProviderContext";
import CollapsableInfoProvider from "game/inspection/infoProviders/CollapsableInfoProvider";
import UnlockableRowInfoProvider from "game/inspection/infoProviders/UnlockableRowInfoProvider";
import Inspection from "game/inspection/Inspection";
import { Milestone, MilestoneVisibility } from "game/milestones/IMilestone";
import UiTranslation from "language/dictionary/UiTranslation";
import Translation from "language/Translation";
export default class MilestoneInspection extends Inspection<Milestone> {
    static handles: (value: unknown, context?: InfoProviderContext | undefined) => any;
    static getMilestoneName(milestone: Milestone, visibility?: MilestoneVisibility): Translation;
    static getMilestoneReadout(milestone: Milestone, name?: Translation): () => Translation;
    static getDescription(milestone: Milestone): Translation | UiTranslation.GameDialogMilestonesTooltipHidden | UiTranslation.GameDialogMilestonesTooltipInvisible;
    constructor([, milestone]: [any, Milestone], context?: InfoProviderContext);
    getId(): string;
    getBorder(): string;
    get(context: InfoProviderContext): (Translation | UiTranslation | import("game/inspection/InfoProvider").SimpleInfoProvider | CollapsableInfoProvider | UnlockableRowInfoProvider)[];
    private getDiscovered;
    private getDiscoveredTranslations;
}
