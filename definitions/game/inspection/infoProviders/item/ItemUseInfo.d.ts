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
import Item from "item/Item";
import UiTranslation from "language/dictionary/UiTranslation";
import Translation from "language/Translation";
import { TranslationGenerator } from "newui/component/IComponent";
export declare abstract class ItemUseInfo extends InfoProvider {
    protected readonly item: Item;
    constructor(item: Item);
    initComponent(): {
        component: import("../../../../newui/component/Component").default<HTMLElement>;
        fullInit(): void;
    };
    get(context: InfoProviderContext): (Translation | import("../../../../language/Translation").ISerializedTranslation | UiTranslation | (() => Translation | import("../../../../language/Translation").ISerializedTranslation | Iterable<import("../../../../utilities/string/Interpolator").IStringSection> | UiTranslation | undefined) | InfoProvider)[];
    protected abstract getDetails(context: InfoProviderContext): Array<ArrayOr<TranslationGenerator | InfoProvider> | undefined>;
}
