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
import { InfoDisplayLevel } from "game/inspection/IInfoProvider";
import { InfoProviderContext } from "game/inspection/InfoProviderContext";
import ItemDetailsInfoProvider from "game/inspection/infoProviders/item/ItemDetails";
import ItemDurabilityInfoProvider from "game/inspection/infoProviders/item/ItemDurability";
import ItemProtectedInfoProvider from "game/inspection/infoProviders/item/ItemProtected";
import ItemWeightInfoProvider from "game/inspection/infoProviders/item/ItemWeight";
import LabelledValue from "game/inspection/infoProviders/LabelledValue";
import MagicalPropertiesInfoProvider from "game/inspection/infoProviders/MagicalProperties";
import QualityInfoProvider from "game/inspection/infoProviders/Quality";
import Inspection from "game/inspection/Inspection";
import Item from "item/Item";
import Translation from "language/Translation";
import { IVector3 } from "utilities/math/IVector";
export default class ItemInspection extends Inspection<Item> {
    static getFromTile(position: IVector3): ItemInspection[];
    static handles(item: unknown): boolean;
    private inspectorPosition;
    private itemPosition;
    constructor(item: Item);
    getId(): string;
    getBorder(): string | undefined;
    getDefaultDisplayLevel(): InfoDisplayLevel;
    hasContent(context: InfoProviderContext): boolean;
    get(context: InfoProviderContext): (Translation | import("../InfoProvider").SimpleInfoProvider | QualityInfoProvider | MagicalPropertiesInfoProvider | ItemProtectedInfoProvider | ItemDurabilityInfoProvider | ItemWeightInfoProvider | LabelledValue | ItemDetailsInfoProvider)[];
    protected onItemRemove(_: any, item: Item): void;
    protected onTickEnd(): void;
    private updatePosition;
    private getDescription;
    private getCapacity;
}
