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
import type { Events, IEventEmitter } from "event/EventEmitter";
import { SortDirection } from "save/ISaveManager";
import Button from "ui/component/Button";
import { LabelledRow } from "ui/component/LabelledRow";
import type { IRefreshableValue } from "ui/component/Refreshable";
export interface SortRowData<Sort> {
    sortEnum: any;
    defaultSort: Sort;
    defaultDirection?: SortDirection;
    filter?(name: string, sort: Sort): boolean;
    initializeOption(button: Button, sort: [string, Sort]): any;
}
interface ISortRowEvents<S extends number> extends Events<LabelledRow> {
    /**
     * @param sort The sort type (value in the sort enum)
     * @param direction a SortDirection
     */
    sort(sort: S, direction: SortDirection): any;
}
export default class SortRow<S extends number> extends LabelledRow implements IRefreshableValue<SortRowData<S>> {
    event: IEventEmitter<this, ISortRowEvents<S>>;
    private _sort;
    private _sortDirection;
    private disabledSorts;
    private readonly dropdown;
    private readonly sortDirectionButton;
    private refreshMethod;
    private ignoreNextSelection;
    get sort(): S;
    get sortDirection(): SortDirection;
    constructor();
    setDisabledSorts(val: S[], refresh?: boolean): this;
    setRefreshMethod(refresh: () => SortRowData<S>): this;
    refresh(): this;
    toggleSortDirection(sortDirection?: SortDirection): void;
    triggerSort(): void;
    triggerSortAsync(): Promise<any[]>;
}
export {};
