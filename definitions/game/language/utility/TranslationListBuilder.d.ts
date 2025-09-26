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
import type { ListEnder } from "@wayward/game/language/ITranslation";
import type Translation from "@wayward/game/language/Translation";
import TranslationUtility from "@wayward/game/language/utility/TranslationUtility";
export interface TranslationListBuilderDefinition<T, GROUP, AFFIX> {
    getGroup(item: T): GROUP;
    onGroups?(groups: Array<[GROUP, T[]]>): void;
    getAffix(item: T): AFFIX;
    translateAffix(affix: AFFIX, item: T, items: T[]): Translation | undefined;
    onAffixes?(affixes: Array<[AFFIX, T[]]>): void;
    translateItem(group: GROUP, lastAffix: Translation | undefined, items: T[]): Translation;
    translateItemSingleAffix?(group: GROUP, affix: AFFIX, items: T[]): Translation | undefined;
}
export declare class TranslationListBuilder<T, GROUP, AFFIX> extends TranslationUtility {
    protected readonly definition: TranslationListBuilderDefinition<T, GROUP, AFFIX>;
    constructor(definition: TranslationListBuilderDefinition<T, GROUP, AFFIX>);
    translate(items: T[], listEnder?: ListEnder | false): Translation;
}
export default function <T, GROUP, AFFIX>(definition: TranslationListBuilderDefinition<T, GROUP, AFFIX>): TranslationListBuilder<T, GROUP, AFFIX>;
