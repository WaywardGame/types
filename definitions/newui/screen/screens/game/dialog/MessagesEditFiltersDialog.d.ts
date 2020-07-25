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
import { Events, IEventEmitter } from "event/EventEmitter";
import UiTranslation from "language/dictionary/UiTranslation";
import Dialog from "newui/screen/screens/game/component/Dialog";
import { IFilters } from "newui/screen/screens/game/IMessages";
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
    getName(): UiTranslation;
    private editFilter;
    private getSourceState;
    private deleteFilter;
    private saveFilter;
    private onEditName;
    private resetFilters;
}
export {};
