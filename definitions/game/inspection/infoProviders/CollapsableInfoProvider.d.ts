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
import EventEmitter from "event/EventEmitter";
import { InfoProvider } from "game/inspection/InfoProvider";
import { InfoProviderContext } from "game/inspection/InfoProviderContext";
import Translation from "language/Translation";
import Button from "ui/component/Button";
import { TranslationGenerator } from "ui/component/IComponent";
declare type ContentHandler = (context: InfoProviderContext, provider: UnlockableRowInfoProvider) => ArrayOr<TranslationGenerator | InfoProvider>;
export default class UnlockableRowInfoProvider extends InfoProvider {
    private contentHandler?;
    private summaryInitializer?;
    private isOpen?;
    private hasContentHandler?;
    private refreshEvent?;
    setSummary(initializer?: (summary: Button) => any): this;
    setContent(handler?: ContentHandler | InfoProvider | Translation): this;
    setHasContent(handler?: () => boolean): this;
    setOpen(isOpen?: () => boolean): this;
    setRefresh<E>(host: EventEmitter.Host<E>, event: keyof E): this;
    hasContent(): boolean;
    get(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider>;
    getClass(): never[];
    initComponent(): {
        component: import("../../../ui/component/Component").default<HTMLElement>;
        fullInit(): void;
    };
}
export {};
