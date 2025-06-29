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
import Button from "@wayward/game/ui/component/Button";
import Component from "@wayward/game/ui/component/Component";
import Details from "@wayward/game/ui/component/Details";
export declare enum TabContainerClasses {
    Main = "tab-container",
    _HasTabs = "tab-container--has-tabs",
    _TabsAlwaysVisible = "tab-container--tabs-always-visible",
    Summary = "tab-container-summary",
    SummaryText = "tab-container-summary-text",
    Tab = "tab-container-tab",
    Tab_Active = "tab-container-tab--active",
    Content = "tab-container-content"
}
export default class TabContainer<ID extends string | number> extends Details {
    readonly tabs: Array<TabContainerTab<ID>>;
    private activeTabId;
    constructor();
    setTabsAlwaysVisible(alwaysVisible?: boolean): this;
    getTab(id: ID): TabContainerTab<ID> | undefined;
    getActiveTab(): TabContainerTab<ID> | undefined;
    addTab(id: ID, initializer: (tab: TabContainerTab<ID>) => any): this;
    dumpTabs(): this;
    showTab(tab: TabContainerTab<ID>): void;
    protected onToggleOpen(): void;
}
export declare class TabContainerTab<ID extends string | number> extends Button {
    readonly id: ID;
    readonly content: Component<HTMLElement>;
    private contentInitializer?;
    constructor(id: ID);
    showContent(): void;
    setContentInitializer(initializer: (content: Component) => any): this;
}
