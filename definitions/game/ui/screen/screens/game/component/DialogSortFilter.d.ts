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
import { SortDirection } from "@wayward/game/save/ISaveManager";
import Component from "@wayward/game/ui/component/Component";
import Input from "@wayward/game/ui/component/Input";
import SortRow from "@wayward/game/ui/component/SortRow";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export declare enum DialogSortFilterClasses {
    Main = "dialog-sort-filter",
    Active = "dialog-sort-filter-active",
    WrapperWrapper = "dialog-sort-filter-wrapper",
    TextWrapper = "dialog-sort-filter-text-wrapper",
    Text = "dialog-sort-filter-text",
    TextLabel = "dialog-sort-filter-text-label",
    TextContent = "dialog-sort-filter-text-content",
    TextFilter = "dialog-sort-filter-text-filter",
    TextFilterActive = "dialog-sort-filter-text-filter-active",
    TextSort = "dialog-sort-filter-text-sort",
    TextSortReverse = "dialog-sort-filter-text-sort-reverse",
    TextSortCustom = "dialog-sort-filter-text-sort-custom",
    ConfigurationWrapper = "dialog-sort-filter-configuration-wrapper",
    Filter = "dialog-sort-filter-configuration-filter",
    Sort = "dialog-sort-filter-configuration-sort"
}
export interface IDialogSortFilterEvents<SORT extends number | "custom"> extends Events<Component> {
    filter(text: string): any;
    sort(sort: SORT, direction: SortDirection): any;
}
export default class DialogSortFilter<SORT extends number | "custom"> extends Component {
    private readonly defaultSort;
    private readonly translate;
    static create<SORT extends number>(enumObject: Record<PropertyKey, SORT | string>, defaultSort: SORT, translate: (sort: SORT, simple: boolean) => Translation, includeCustomSort: true): DialogSortFilter<SORT | "custom">;
    static create<SORT extends number>(enumObject: Record<PropertyKey, SORT | string>, defaultSort: SORT, translate: (sort: SORT, simple: boolean) => Translation, includeCustomSort?: false): DialogSortFilter<SORT>;
    event: IEventEmitter<this, IDialogSortFilterEvents<SORT>>;
    private sort?;
    private sortDirection;
    readonly textWrapper: Component<HTMLElement>;
    readonly filterText: Component<HTMLElement>;
    readonly sortText: Component<HTMLElement>;
    readonly configurationWrapper: Component<HTMLElement>;
    readonly filterInput: Input;
    readonly sortRow: SortRow<SORT>;
    private constructor();
    setSound(sound?: SfxType | SfxUi): this;
    setDisabledHidden(hidden?: boolean): this;
    setCustomSort(): void;
    setSort(sort: SORT, direction?: SortDirection, triggerSelect?: boolean): void;
    refresh(): void;
    registerDataHost(id: string): this;
    private readonly activeReasons;
    setActive(reason: string): this;
    setInactive(reason: string): this;
    isActive(): boolean;
}
