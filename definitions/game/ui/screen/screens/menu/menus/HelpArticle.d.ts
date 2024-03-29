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
import Menu from "ui/screen/screens/menu/component/Menu";
import { HelpArticle } from "ui/screen/screens/menu/menus/help/HelpArticleDescriptions";
export default class HelpArticleMenu extends Menu {
    constructor(article: HelpArticle);
    protected onGoBackFrom(): Promise<void>;
}
