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
import { InfoDisplayLevel, InfoProviderContext } from "game/inspection/InfoProvider";
import Inspection from "game/inspection/Inspection";
import Item from "item/Item";
import { IVector3 } from "utilities/math/IVector";
export default class ItemInspection extends Inspection<Item> {
    static getFromTile(position: IVector3): ItemInspection[];
    constructor(item: Item);
    get(context: InfoProviderContext): never[];
    getId(): string;
    getDisplayLevel(): InfoDisplayLevel;
    protected onItemRemove(_: any, item: Item): void;
}
