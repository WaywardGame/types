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
import { TitleType } from "@wayward/game/game/entity/action/actions/SetTitle";
import type Player from "@wayward/game/game/entity/player/Player";
import type { ReferenceType } from "@wayward/game/game/reference/IReferenceManager";
import Translation from "@wayward/game/language/Translation";
import Button from "@wayward/game/ui/component/Button";
import Component from "@wayward/game/ui/component/Component";
import { Paragraph } from "@wayward/game/ui/component/Text";
import { DialogId } from "@wayward/game/ui/screen/screens/game/Dialogs";
import Dialog from "@wayward/game/ui/screen/screens/game/component/Dialog";
import DialogSortFilter from "@wayward/game/ui/screen/screens/game/component/DialogSortFilter";
import type { HighlightSelector, IHighlight } from "@wayward/game/ui/util/IHighlight";
export declare enum UnlockablesDialogClasses {
    Main = "game-dialog-unlockables",
    Section = "game-dialog-unlockables-section",
    SectionHeading = "game-dialog-unlockables-section-heading",
    Row = "game-dialog-unlockables-row",
    Notice = "game-dialog-unlockables-notice"
}
export declare enum UnlockablesSection {
    Unlocked = 0,
    UnlockableInMode = 1,
    NotUnlockableInMode = 2,
    Hidden = 3
}
export default abstract class UnlockablesDialog<UNLOCKABLE extends number, SORT extends number> extends Dialog {
    readonly rows: Map<UNLOCKABLE, Button>;
    readonly sectionUnlocked: Component;
    readonly sectionUnlockableInMode: Component;
    readonly sectionNotUnlockableInMode: Component;
    readonly sectionHidden: Component;
    readonly noticeNotUnlockable: Paragraph;
    readonly noticeRowsHidden: Paragraph;
    readonly sortFilterRow: DialogSortFilter<SORT>;
    constructor(id: DialogId);
    protected abstract getUnlockablesName(): Translation;
    protected abstract getSortEnum(): any;
    protected abstract getDefaultSort(): SORT;
    protected abstract translateSort(sort: SORT): Translation;
    protected abstract getUnlockables(): readonly UNLOCKABLE[];
    protected abstract getPlayerTitleType(): TitleType;
    protected abstract getUnlockableSection(unlockable: UNLOCKABLE): UnlockablesSection;
    protected abstract getProgress(unlockable: UNLOCKABLE): number;
    protected abstract getReferenceType(): ReferenceType;
    protected abstract getUnlockableTranslator(unlockable: UNLOCKABLE): SupplierOr<Translation>;
    protected abstract sortUnlockables(sort: SORT): ([a]: [UNLOCKABLE, Component], [b]: [UNLOCKABLE, Component]) => number;
    protected abstract getFilterString(unlockable: UNLOCKABLE): string;
    protected getHighlight?(unlockable: UNLOCKABLE): IHighlight | undefined;
    protected getHighlightSelector?(unlockable: UNLOCKABLE): HighlightSelector | undefined;
    protected canSetTitle(unlockable: UNLOCKABLE): boolean;
    protected shouldShowUnlockable(unlockable: UNLOCKABLE, filterText: string): boolean;
    protected getSectionComponent(section: UnlockablesSection): Component;
    protected getHiddenCount(): number;
    onPlayerChangeTitle(player: Player): void;
    private getTitleTypeName;
    private hadUpdate;
    protected refreshUnlockable(unlockable: UNLOCKABLE): void;
    protected onTickEnd(): void;
    private sortHash?;
    private sort;
    private filter;
}
