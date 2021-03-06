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
import Doodad from "game/doodad/Doodad";
import { InfoDisplayLevel } from "game/inspection/IInfoProvider";
import { InfoProvider } from "game/inspection/InfoProvider";
import LabelledValue from "game/inspection/infoProviders/LabelledValue";
import { IContainer } from "game/item/IItem";
import Item from "game/item/Item";
import Translation from "language/Translation";
import Vector3 from "utilities/math/Vector3";
export default class ContainedItemsInfoProvider extends InfoProvider {
    private readonly container;
    static translateItems(max: number, ...items: Item[]): Translation;
    static get(doodad: Doodad): false | ContainedItemsInfoProvider;
    constructor(container: IContainer);
    getClass(): string[];
    getDefaultDisplayLevel(): InfoDisplayLevel;
    hasContent(): boolean;
    get(): LabelledValue;
    protected onItemMove(_: any, item: Item, previousContainer: IContainer | undefined, _previousContainerPosition: Vector3 | undefined, newContainer: IContainer): void;
}
