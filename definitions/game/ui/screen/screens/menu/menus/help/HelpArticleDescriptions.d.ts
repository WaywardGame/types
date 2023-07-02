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
import type { BasicText, BasicTextLink } from "ui/component/Text";
import type { IHelpArticle } from "ui/screen/screens/menu/menus/help/IHelpArticle";
import { HelpArticle, HelpArticleSection } from "ui/screen/screens/menu/menus/help/IHelpArticle";
export { HelpArticle, HelpArticleSection };
declare const descriptions: Descriptions<HelpArticle, IHelpArticle>;
export default descriptions;
export declare function HelpArticleLinkHandler(text: BasicText, link: BasicTextLink): true | void;
