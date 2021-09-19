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
import { Quality } from "game/IObject";
import { IContainer, ItemType, ItemTypeGroup } from "game/item/IItem";
import Objects from "utilities/object/Objects";
import { RandomInstance } from "utilities/random/Random";
import RandomValueGenerator from "utilities/random/RandomValueGenerator";
export default class RandomItem extends RandomValueGenerator<Array<ItemType | ItemTypeGroup>> {
    private quality;
    magical: number;
    constructor();
    constructor(random: RandomInstance, ...options: Array<ItemType | ItemTypeGroup>);
    setQuality(quality: Quality): this;
    setMagical(amount: number): this;
    create(container: IContainer): import("../../../game/item/Item").default;
    [Objects.SYMBOL_CLONE](clone: typeof Objects.deepClone): this;
}
