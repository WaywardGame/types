/*!
 * Copyright 2011-2021 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { InfoProvider } from "game/inspection/InfoProvider";
import ItemWorthInfoProvider from "game/inspection/infoProviders/item/ItemWorth";
import LabelledValue from "game/inspection/infoProviders/LabelledValue";
import type { ItemType } from "game/item/IItem";
import type Item from "game/item/Item";
export default class ItemDetailsInfoProvider extends InfoProvider {
    private readonly type;
    private readonly item?;
    private readonly description;
    constructor(item: Item | ItemType);
    getClass(): string[];
    get(): (0 | LabelledValue | import("game/inspection/InfoProvider").SimpleInfoProvider | ItemWorthInfoProvider)[];
    private getInsulation;
    private getPreservation;
    private getGroupings;
    static getGroups(itemOrType: Item | ItemType): import("game/item/IItem").ItemTypeGroup[];
}
