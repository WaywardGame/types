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
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import LabelledValue from "@wayward/game/game/inspection/infoProviders/LabelledValue";
import type Item from "@wayward/game/game/item/Item";
export default class ItemVehicleInfoProvider extends InfoProvider {
    private readonly item;
    constructor(item: Item);
    getClass(): string[];
    hasContent(): boolean;
    get(): LabelledValue;
}
