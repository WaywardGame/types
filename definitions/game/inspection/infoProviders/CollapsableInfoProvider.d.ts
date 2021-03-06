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
import { InfoProvider } from "game/inspection/InfoProvider";
import { InfoProviderContext } from "game/inspection/InfoProviderContext";
import Translation from "language/Translation";
import Button from "ui/component/Button";
import { TranslationGenerator } from "ui/component/IComponent";
declare type ContentHandler = (context: InfoProviderContext, provider: CollapsableInfoProvider) => ArrayOr<TranslationGenerator | InfoProvider>;
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
        component: import("../../../ui/component/Component").default<HTMLElement>;
        fullInit(): void;
    };
}
export {};
