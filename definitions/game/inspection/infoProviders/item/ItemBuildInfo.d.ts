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
import { ActionType } from "entity/action/IAction";
import { ItemUseInfo } from "game/inspection/infoProviders/item/ItemUseInfo";
import Item from "item/Item";
export default class ItemBuildInfo extends ItemUseInfo {
    private readonly doodadDescription;
    static get(item: Item, action: ActionType): ItemBuildInfo | undefined;
    private constructor();
    getClass(): string[];
    hasContent(): boolean;
    protected getDetails(): (import("../../InfoProvider").SimpleInfoProvider[] | undefined)[];
    private getWeightCapacity;
    private getPreservationChance;
}
