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
import Component from "@wayward/launcher/ui/component/Component";
export declare enum ArticleClasses {
    Main = "launcher-article",
    Title = "launcher-article-title",
    ScrollableContent = "launcher-article-scrollable-content"
}
export default class Article extends Component<HTMLElement> {
    readonly title: Component<HTMLHeadingElement>;
    private _scrollableContent?;
    constructor(headingLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6");
    get scrollableContent(): Component<HTMLDivElement>;
}
