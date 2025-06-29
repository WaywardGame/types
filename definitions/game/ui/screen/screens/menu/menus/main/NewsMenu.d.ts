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
import Menu from "@wayward/game/ui/screen/screens/menu/component/Menu";
export default class NewsMenu extends Menu {
    private static newsTime;
    private static news?;
    static getNews(): Promise<NewsArticle[]>;
    private static fetchSteamRSS;
    private static fetchNews;
    private static needsNewsFetch;
    private static hasCachedNews;
    private readonly unableToLoad;
    constructor();
    protected preShow(): Promise<void>;
    private refreshNews;
    private initialiseArticle;
}
interface NewsArticle {
    title: string;
    body: string;
    link: string;
    date: Date;
}
export {};
