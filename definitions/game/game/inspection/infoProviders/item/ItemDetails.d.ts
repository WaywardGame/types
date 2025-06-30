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
import type { SimpleInfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import ItemWorthInfoProvider from "@wayward/game/game/inspection/infoProviders/item/ItemWorth";
import LabelledValue from "@wayward/game/game/inspection/infoProviders/LabelledValue";
import type { ItemType, ItemTypeGroup } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
export default class ItemDetailsInfoProvider extends InfoProvider {
    private readonly type;
    private readonly item?;
    private readonly description;
    constructor(item: Item | ItemType);
    getClass(): string[];
    get(): Array<0 | LabelledValue | SimpleInfoProvider | ItemWorthInfoProvider>;
    private getInsulation;
    private getPreservation;
    private getGroupings;
    static getGroups(itemOrType: Item | ItemType): ItemTypeGroup[];
}
