/*!
 * Copyright 2011-2021 Unlok
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
export default class HelpMenu extends Menu {
    private readonly searchInput;
    private readonly articles;
    private readonly canShowArticle;
    constructor();
    showArticle(article: HelpArticle): Promise<this>;
    protected onShowHelpMenu(): void;
    protected onHelp(): boolean;
    private filterArticles;
}
