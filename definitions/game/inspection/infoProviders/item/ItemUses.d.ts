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
import { InfoProvider } from "game/inspection/InfoProvider";
import LabelledValue from "game/inspection/infoProviders/LabelledValue";
import Item from "item/Item";
export default class ItemUses extends InfoProvider {
    private readonly item;
    constructor(item: Item);
    getClass(): string[];
    get(): never[] | LabelledValue;
    private getUseExtraInfo;
    private getThrowDamageType;
    private getUse;
    private generateUseTooltip;
}
