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
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import LabelledValue from "@wayward/game/game/inspection/infoProviders/LabelledValue";
import type Item from "@wayward/game/game/item/Item";
export default class ItemDurabilityInfoProvider extends InfoProvider {
    private readonly item;
    constructor(item: Item);
    getClass(): string[];
    get(): Array<0 | LabelledValue>;
    private getDurability;
    private getDecay;
    private minDur;
    private shouldRefreshDurability;
    private decay;
    private shouldRefreshDecay;
    private decayRate;
    private shouldRefreshDecayRate;
}
