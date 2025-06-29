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
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import type Translation from "@wayward/game/language/Translation";
import type Button from "@wayward/game/ui/component/Button";
import type Component from "@wayward/game/ui/component/Component";
import type { TranslationGenerator } from "@wayward/game/ui/component/IComponent";
import type { TabContainerTab } from "@wayward/game/ui/component/TabContainer";
type ContentHandler<TAB_ID extends string | number> = (context: InfoProviderContext, provider: CollapsableInfoProvider<TAB_ID>) => ArrayOr<TranslationGenerator | InfoProvider>;
export type CollapsibleInfoProviderTabs<TAB_ID extends string | number = string | number> = Array<[TAB_ID, (tab: TabContainerTab<TAB_ID>) => any]>;
export default class CollapsableInfoProvider<TAB_ID extends string | number = string | number> extends InfoProvider {
    private contentHandler?;
    private tabHandler?;
    private summaryInitializer?;
    private isOpen?;
    private hasContentHandler?;
    private readonly classes;
    private get currentTabContainer();
    setSummary(initializer?: (summary: Button) => any): this;
    setContent(handler?: ContentHandler<TAB_ID> | InfoProvider | Translation): this;
    setTabs(handler?: () => CollapsibleInfoProviderTabs<TAB_ID> | undefined): this;
    setHasContent(handler?: () => boolean): this;
    setOpen(isOpen?: () => boolean): this;
    hasContent(): boolean;
    protected shouldDisplayWhenEmpty(): boolean;
    get(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider>;
    getClass(): string[];
    addClasses(...classes: string[]): this;
    initComponent(context: InfoProviderContext): {
        component: Component;
        fullInit(): void;
    };
}
export {};
