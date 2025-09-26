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
import type { TextWrapperLink } from "@wayward/game/ui/component/Text";
import { TextWrapper } from "@wayward/game/ui/component/Text";
import Menu from "@wayward/game/ui/screen/screens/menu/component/Menu";
import { HelpArticle } from "@wayward/game/ui/screen/screens/menu/menus/help/IHelpArticle";
export declare function HelpArticleLinkHandler(text: TextWrapper, link: TextWrapperLink): true | void;
export default class HelpArticleMenu extends Menu {
    constructor(article: HelpArticle);
    protected onGoBackFrom(): Promise<void>;
}
