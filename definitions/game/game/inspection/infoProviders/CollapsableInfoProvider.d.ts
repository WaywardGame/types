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
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import type Translation from "@wayward/game/language/Translation";
import type Button from "@wayward/game/ui/component/Button";
import type Component from "@wayward/game/ui/component/Component";
import type { TranslationGenerator } from "@wayward/game/ui/component/IComponent";
type ContentHandler = (context: InfoProviderContext, provider: CollapsableInfoProvider) => ArrayOr<TranslationGenerator | InfoProvider>;
export default class CollapsableInfoProvider extends InfoProvider {
    private contentHandler?;
    private summaryInitializer?;
    private isOpen?;
    private hasContentHandler?;
    setSummary(initializer?: (summary: Button) => any): this;
    setContent(handler?: ContentHandler | InfoProvider | Translation): this;
    setHasContent(handler?: () => boolean): this;
    setOpen(isOpen?: () => boolean): this;
    hasContent(): boolean;
    get(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider>;
    getClass(): never[];
    initComponent(context: InfoProviderContext): {
        component: Component;
        fullInit(): void;
    };
}
export {};
