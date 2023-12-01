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
import type { IRefreshable } from "@wayward/game/ui/component/Refreshable";
import { Tab } from "@wayward/game/ui/screen/screens/menu/component/Menu";
export default class CustomGameOptionsTab extends Tab {
    readonly refreshables: IRefreshable[];
    constructor(id: CustomGameOptionsSection);
    protected addRefreshables(...refreshables: IRefreshable[]): this;
}
export declare enum CustomGameOptionsSection {
    General = 0,
    Island = 1,
    Time = 2,
    Alignment = 3,
    Stats = 4,
    StatusEffects = 5,
    Skills = 6,
    Items = 7,
    Creatures = 8
}
