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
import Translation from "language/Translation";
export default class ItemDurabilityInfoProvider extends InfoProvider {
    private readonly item;
    private minDur;
    private decay;
    private decayRate;
    constructor(item: Item);
    getClass(): string[];
    initComponent(): {
        component: import("../../../../newui/component/Component").default<HTMLElement>;
        fullInit(): void;
    };
    get(): (0 | Translation | LabelledValue)[];
    protected onTickEnd(): void;
    private getDurability;
    private getMagicalItemDamageReduction;
    private getDecay;
}
