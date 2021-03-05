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
import { ActionType } from "game/entity/action/IAction";
import { ItemUseInfo } from "game/inspection/infoProviders/item/ItemUseInfo";
import LabelledValue from "game/inspection/infoProviders/LabelledValue";
import Item from "game/item/Item";
export default class ItemBuildInfo extends ItemUseInfo {
    private readonly doodadDescription;
    static get(item: Item, action: ActionType): ItemBuildInfo | undefined;
    private constructor();
    getClass(): string[];
    hasContent(): boolean;
    protected getDetails(): (LabelledValue | undefined)[];
    private getWeightCapacity;
    private getInsulation;
    private getPreservationChance;
}
