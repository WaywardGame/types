/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { IRefreshable } from "newui/component/Refreshable";
import { Tab } from "newui/screen/screens/menu/component/Menu";
export default class CustomGameOptionsTab extends Tab {
    readonly refreshables: IRefreshable[];
    constructor(id: CustomGameOptionsSection);
    protected addRefreshables(...refreshables: IRefreshable[]): this;
}
export declare enum CustomGameOptionsSection {
    General = 0,
    Island = 1,
    Time = 2,
    Reputation = 3,
    Stats = 4,
    StatusEffects = 5,
    Skills = 6,
    Inventory = 7,
    Creatures = 8
}
