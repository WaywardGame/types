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
import type { IFilters } from "@wayward/game/ui/screen/screens/game/IMessages";
import Dialog from "@wayward/game/ui/screen/screens/game/component/Dialog";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
interface IMessagesEditFiltersDialogEvents extends Events<Dialog> {
    edit(): any;
    reset(): any;
}
export default class MessagesEditFiltersDialog extends Dialog {
    event: IEventEmitter<this, IMessagesEditFiltersDialogEvents>;
    filters: IFilters;
    private editingFilter;
    private readonly name;
    private readonly sourceButtons;
    private readonly filterContainer;
    constructor();
    initializeFilters(filters: IFilters): this;
    private restoreToFilter?;
    private stylesheet?;
    private editFilter;
    private updateStylesheet;
    private lastDisplayedMessage?;
    private displaySourcesTooltip;
    private getSourceState;
    private deleteFilter;
    private saveFilter;
    private createNewFiltersStateObject;
    private onEditName;
    private resetFilters;
    protected onHide(): void;
}
export {};
