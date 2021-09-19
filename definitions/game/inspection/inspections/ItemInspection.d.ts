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
import { InfoDisplayLevel } from "game/inspection/IInfoProvider";
import { InspectType } from "game/inspection/IInspection";
import { InfoProviderContext } from "game/inspection/InfoProviderContext";
import DoodadUses from "game/inspection/infoProviders/doodad/DoodadUses";
import ItemDetailsInfoProvider from "game/inspection/infoProviders/item/ItemDetails";
import ItemDurabilityInfoProvider from "game/inspection/infoProviders/item/ItemDurability";
import ItemProtectedInfoProvider from "game/inspection/infoProviders/item/ItemProtected";
import ItemUses from "game/inspection/infoProviders/item/ItemUses";
import ItemWeightInfoProvider from "game/inspection/infoProviders/item/ItemWeight";
import ItemWorthInfoProvider from "game/inspection/infoProviders/item/ItemWorth";
import LabelledValue from "game/inspection/infoProviders/LabelledValue";
import MagicalPropertiesInfoProvider from "game/inspection/infoProviders/MagicalProperties";
import QualityInfoProvider from "game/inspection/infoProviders/Quality";
import Inspection from "game/inspection/Inspection";
import { ItemType } from "game/item/IItem";
import Item from "game/item/Item";
import { ReferenceType } from "game/reference/IReferenceManager";
import Translation from "language/Translation";
import { IVector3 } from "utilities/math/IVector";
export default class ItemInspection extends Inspection<ItemType> {
    static getFromTile(position: IVector3, _: any, inspectType: InspectType): ItemInspection[];
    static isWorldInspection(type: InspectType): boolean;
    static handles(type: InspectType, item: unknown): any;
    private static readonly itemTypeHandles;
    private static readonly dismantleHandles;
    readonly item?: Item;
    private readonly description?;
    private readonly isDismantle;
    private inspectorPosition;
    private itemPosition;
    private isItemVisible;
    constructor(item: Item | [ReferenceType, ItemType]);
    getId(): string;
    getBorder(): string | undefined;
    getDefaultDisplayLevel(): InfoDisplayLevel;
    hasContent(context: InfoProviderContext): boolean;
    private getName;
    get(context: InfoProviderContext): Translation | (Translation | import("game/inspection/InfoProvider").SimpleInfoProvider | LabelledValue | MagicalPropertiesInfoProvider | QualityInfoProvider | DoodadUses | ItemWorthInfoProvider | ItemDetailsInfoProvider | ItemDurabilityInfoProvider | ItemProtectedInfoProvider | ItemUses | ItemWeightInfoProvider)[];
    protected onItemRemove(_: any, item: Item): void;
    protected onTickEnd(): void;
    private updatePosition;
    private getDescription;
    private getCapacity;
    private getDoodadUses;
}
