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
import { InfoDisplayLevel } from "@wayward/game/game/inspection/IInfoProvider";
import { InspectType } from "@wayward/game/game/inspection/IInspection";
import type { SimpleInfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import Inspection from "@wayward/game/game/inspection/Inspection";
import { ItemType, ItemTypeExtra } from "@wayward/game/game/item/IItem";
import Item from "@wayward/game/game/item/Item";
import { ReferenceType } from "@wayward/game/game/reference/IReferenceManager";
import type Tile from "@wayward/game/game/tile/Tile";
import Translation from "@wayward/game/language/Translation";
export default class ItemInspection extends Inspection<ItemType | ItemTypeExtra> {
    static getFromTile(tile: Tile, context: InfoProviderContext | undefined, inspectType: InspectType): ItemInspection[];
    static isWorldInspection(type: InspectType): boolean;
    static handles(type: InspectType, item: unknown): boolean;
    private static readonly itemTypeHandles;
    private static readonly dismantleHandles;
    private readonly itemRef?;
    get item(): Item | undefined;
    private readonly description?;
    private readonly isDismantle;
    private inspectorPosition;
    private itemPosition;
    private isItemVisible;
    constructor(item: Item | [ReferenceType, ItemType | ItemTypeExtra], context?: InfoProviderContext);
    getId(): string;
    getBorder(): string | undefined;
    getDefaultDisplayLevel(): InfoDisplayLevel;
    hasContent(context: InfoProviderContext): boolean;
    private getName;
    protected getTitle(context: InfoProviderContext): Translation;
    protected getSubtitle(context: InfoProviderContext): Translation | SimpleInfoProvider | undefined;
    protected getColorContext(context: InfoProviderContext): Translation | SimpleInfoProvider | undefined;
    protected getContent(context: InfoProviderContext): ArrayOr<Translation | InfoProvider | undefined>;
    protected onItemRemove(_: any, item: Item): void;
    protected onTickEnd(): void;
    private updatePosition;
    private getDescription;
    private getCapacity;
    private getDoodadUses;
    private getMapIsland;
}
