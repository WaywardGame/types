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
import type { SfxType, SfxUi } from "@wayward/game/audio/IAudio";
import Translation from "@wayward/game/language/Translation";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import { SortDirection } from "@wayward/game/save/ISaveManager";
import Button from "@wayward/game/ui/component/Button";
import Dropdown from "@wayward/game/ui/component/Dropdown";
import { LabelledRow } from "@wayward/game/ui/component/LabelledRow";
import type { IRefreshableValue } from "@wayward/game/ui/component/Refreshable";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export interface SortRowData<SORT> {
    sortEnum: any;
    defaultSort: SORT;
    defaultDirection?: SortDirection;
    includeCustomSort?: boolean;
    filter?(name: string, sort: SORT): boolean;
    translate(sort: SORT): Translation;
    initializeOption?(button: Button, sort: [string, SORT]): any;
}
interface ISortRowEvents<S extends number | "custom"> extends Events<LabelledRow> {
    /**
     * @param sort The sort type (value in the sort enum)
     * @param direction a SortDirection
     */
    sort(sort: S, direction: SortDirection): any;
    openDropdown(): any;
    closeDropdown(): any;
}
export default class SortRow<S extends number | "custom" = number> extends LabelledRow implements IRefreshableValue<SortRowData<S>> {
    event: IEventEmitter<this, ISortRowEvents<S>>;
    private _sort;
    private _sortDirection;
    private disabledSorts;
    readonly dropdown: Dropdown<S>;
    readonly sortDirectionButton: Button;
    private refreshMethod;
    private ignoreNextSelection;
    get sort(): S;
    get sortDirection(): SortDirection;
    constructor();
    setSound(sound?: SfxType | SfxUi): this;
    getDefaultSort(): S;
    getDefaultSortDirection(): SortDirection;
    translateSort(sort?: S): TranslationImpl;
    setDisabledSorts(val: S[], refresh?: boolean): this;
    setRefreshMethod(refresh: () => SortRowData<S>): this;
    refresh(): this;
    setSort(sort: S, direction: SortDirection, triggerSelect?: boolean): void;
    toggleSortDirection(sortDirection?: SortDirection): void;
    triggerSort(): void;
    triggerSortAsync(): Promise<void>;
}
export {};
