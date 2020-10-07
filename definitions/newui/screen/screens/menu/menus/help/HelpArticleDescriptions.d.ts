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
import { IModdable } from "mod/ModRegistry";
export interface IHelpArticle extends IModdable {
    /**
     * Whether this article is "important", which makes it take up the full row (instead of sharing
     * with another article). If the last article doesn't have a partner to share a row with, it appears
     * as though it's an important article as well.
     */
    important?: true;
    image?: true | string;
    section?: string | number;
}
export declare enum HelpArticle {
    Welcome = 0,
    Controls = 1,
    Interface = 2,
    InventoryManagement = 3,
    Quickslots = 4,
    FastPickup = 5,
    Actions = 6,
    Stats = 7,
    Doodads = 8,
    ResourceGathering = 9,
    AttackingDamage = 10,
    Reputation = 11,
    Milestones = 12,
    HeldItems = 13,
    Crafting = 14,
    ItemQualities = 15,
    Death = 16,
    Taming = 17,
    RestingSleeping = 18,
    Overweight = 19,
    Merchants = 20,
    Gardening = 21,
    GameModes = 22,
    Multiplayer = 23,
    Bugs = 24
}
export declare enum HelpArticleSection {
    Interface = 0,
    Gameplay = 1,
    Other = 2
}
declare const descriptions: Descriptions<HelpArticle, IHelpArticle>;
export default descriptions;
