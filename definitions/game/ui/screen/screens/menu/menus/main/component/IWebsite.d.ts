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
export declare enum Website {
    Twitter = 0,
    GitHubUser = 1,
    GitHubProject = 2,
    DiscordServer = 3,
    Subreddit = 4,
    RedditUser = 5,
    Facebook = 6,
    Generic = 7,
    SteamStorePage = 8,
    Unlok = 9,
    Wayward = 10,
    Bsky = 11
}
export declare const websiteLinks: Readonly<Record<Website, string>>;
