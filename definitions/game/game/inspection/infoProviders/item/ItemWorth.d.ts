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
import { InfoDisplayLevel } from "@wayward/game/game/inspection/IInfoProvider";
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import LabelledValue from "@wayward/game/game/inspection/infoProviders/LabelledValue";
import type Item from "@wayward/game/game/item/Item";
export default class ItemWorthInfoProvider extends InfoProvider {
    private readonly item;
    static isTrading(): boolean;
    constructor(item: Item);
    getClass(): string[];
    getDefaultDisplayLevel(): InfoDisplayLevel.Always | InfoDisplayLevel.Extra;
    get(): LabelledValue | [];
    private minDur;
    private shouldRefresh;
}
