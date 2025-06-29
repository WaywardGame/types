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
import { Quality } from "@wayward/game/game/IObject";
import type Island from "@wayward/game/game/island/Island";
import type { IContainer, ItemType } from "@wayward/game/game/item/IItem";
import { ItemTypeGroup } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type { RandomReference } from "@wayward/game/utilities/random/RandomReference";
import RandomValueGenerator from "@wayward/game/utilities/random/RandomValueGenerator";
import Objects from "@wayward/utilities/object/Objects";
import type { RandomInstance } from "@wayward/utilities/random/IRandom";
export default class RandomItem extends RandomValueGenerator<Array<ItemType | ItemTypeGroup>> {
    private quality;
    magical: number;
    exclude: Array<ItemType | ItemTypeGroup>;
    constructor();
    constructor(random: RandomInstance | RandomReference, ...options: Array<ItemType | ItemTypeGroup>);
    setQuality(quality: Quality): this;
    setMagical(amount: number): this;
    setExcluded(...items: Array<ItemType | ItemTypeGroup>): this;
    create(island: Island, container: IContainer): Item | undefined;
    [Objects.SYMBOL_CLONE](clone: typeof Objects.deepClone): this;
}
