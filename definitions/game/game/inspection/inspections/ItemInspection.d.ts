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
import { InfoProvider } from "game/inspection/InfoProvider";
import type { InfoProviderContext } from "game/inspection/InfoProviderContext";
import Inspection from "game/inspection/Inspection";
import { ItemType } from "game/item/IItem";
import Item from "game/item/Item";
import { ReferenceType } from "game/reference/IReferenceManager";
import type Tile from "game/tile/Tile";
import type { TranslationGenerator } from "ui/component/IComponent";
export default class ItemInspection extends Inspection<ItemType> {
    static getFromTile(tile: Tile, _: any, inspectType: InspectType): ItemInspection[];
    static isWorldInspection(type: InspectType): boolean;
    static handles(type: InspectType, item: unknown): boolean;
    private static readonly itemTypeHandles;
    private static readonly dismantleHandles;
    readonly item?: WeakRef<Item> | undefined;
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
    get(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider>;
    protected onItemRemove(_: any, item: Item): void;
    protected onTickEnd(): void;
    private updatePosition;
    private getDescription;
    private getCapacity;
    private getDoodadUses;
    private getMapIsland;
}
