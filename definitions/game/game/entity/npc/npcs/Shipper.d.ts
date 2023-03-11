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
import { ActionType } from "game/entity/action/IAction";
import { AiType, MoveType } from "game/entity/IEntity";
import { EquipType } from "game/entity/IHuman";
import type { INPCConstructorOptions } from "game/entity/npc/INPC";
import NPC from "game/entity/npc/NPC";
import type { IIslandPort } from "game/island/IIsland";
import type Island from "game/island/Island";
import type { IContainer } from "game/item/IItem";
import { ItemType } from "game/item/IItem";
import type Item from "game/item/Item";
import type Tile from "game/tile/Tile";
import type { IVector2 } from "utilities/math/IVector";
export default class ShipperNPC extends NPC {
    private shipTarget;
    private nearbyPortId;
    constructor(options?: INPCConstructorOptions);
    spawn(): void;
    getActions(): ActionType[] | undefined;
    /**
     * Closes container dialogs
     */
    closeContainerDialogs(): void;
    protected getReputationChangeOnDeath(): number;
    protected getDefaultName(): import("../../../../language/impl/TranslationImpl").default;
    protected initializeStats(): void;
    protected getDefaultEquipment(equipType: EquipType): Item | ItemType | undefined;
    protected getDefaultInventory(): Array<Item | ItemType>;
    protected getDefaultAiType(): AiType;
    /**
     * do not despawn the shipper when it's holding items
     */
    protected canDespawn(): boolean;
    protected canUpdateOutsideFov(): boolean;
    protected runActions(): boolean;
    get asMerchant(): undefined;
    get asShipper(): ShipperNPC;
    getShipContainerItem(): (Item & IContainer) | undefined;
    canMoveToTile(moveType: MoveType, tile: Tile): -1 | 0 | -2 | -3 | -4 | -5 | -6;
    shipToPort(island: Island, port: IIslandPort, pathToEdge: IVector2[]): void;
    private moveToPort;
}
