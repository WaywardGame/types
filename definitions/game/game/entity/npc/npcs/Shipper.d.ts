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
import type Human from "game/entity/Human";
import { AiType, MoveType } from "game/entity/IEntity";
import { EquipType } from "game/entity/IHuman";
import type { IActionHandlerApi, IActionNotUsable, IActionUsable } from "game/entity/action/IAction";
import { ActionType } from "game/entity/action/IAction";
import { ShipperNPCInteractType, type INPCConstructorOptions } from "game/entity/npc/INPC";
import NPC from "game/entity/npc/NPC";
import type { IIslandPort, IslandId } from "game/island/IIsland";
import type Island from "game/island/Island";
import type { IContainer } from "game/item/IItem";
import { ItemType } from "game/item/IItem";
import type Item from "game/item/Item";
import type Tile from "game/tile/Tile";
import type TranslationImpl from "language/impl/TranslationImpl";
import type { IVector2 } from "utilities/math/IVector";
interface IShipTarget {
    islandId: IslandId;
    portId: number;
}
export default class ShipperNPC extends NPC {
    shipTarget: IShipTarget | undefined;
    private nearbyPortId;
    constructor(options?: INPCConstructorOptions);
    spawn(): void;
    getActions(): ActionType[] | undefined;
    getGreeting(human: Human, timeSinceLastChat: number | false): TranslationImpl | undefined;
    getDefaultInteraction(): number | undefined;
    canInteract(human: Human, interactType: number): IActionUsable | IActionNotUsable;
    interact(action: IActionHandlerApi<Human>, interactType: ShipperNPCInteractType): void;
    /**
     * Closes container dialogs
     */
    closeContainerDialogs(): void;
    canSailTo(x: number, y: number): boolean;
    getPublicContainer(): IContainer | undefined;
    protected getReputationChangeOnDeath(): number;
    protected getDefaultName(): TranslationImpl;
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
    canMoveToTile(moveType: MoveType, tile: Tile, ignoreHuman?: Human): 0 | -1 | -2 | -5 | -4 | -6 | -3;
    shipToPort(island: Island, port: IIslandPort, pathToEdge: IVector2[]): void;
    private moveToPort;
    private canSeePort;
}
export {};
