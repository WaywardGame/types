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
import { InfoDisplayLevel } from "game/inspection/IInfoProvider";
import { InfoProvider } from "game/inspection/InfoProvider";
import LabelledValue from "game/inspection/infoProviders/LabelledValue";
import type Item from "game/item/Item";
export default class ItemWorthInfoProvider extends InfoProvider {
    private readonly item;
    static isTrading(): boolean;
    constructor(item: Item);
    getClass(): string[];
    getDefaultDisplayLevel(): InfoDisplayLevel.Always | InfoDisplayLevel.Extra;
    get(): LabelledValue;
    private minDur;
    private shouldRefresh;
}
