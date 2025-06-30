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
import type { TranslationGenerator } from "@wayward/game/ui/component/IComponent";
import type Component from "@wayward/game/ui/component/Component";
type ContentHandler = (context: InfoProviderContext, provider: UnlockableRowInfoProvider) => ArrayOr<TranslationGenerator | InfoProvider>;
export default class UnlockableRowInfoProvider extends InfoProvider {
    private readonly getter;
    private contentHandler?;
    constructor(getter: () => number);
    setContent(handler?: ContentHandler | InfoProvider | Translation): this;
    get(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider>;
    getClass(): string[];
    initComponent(context: InfoProviderContext): {
        component: Component;
        fullInit(): void;
    };
    protected onRefresh(): void;
}
export {};
