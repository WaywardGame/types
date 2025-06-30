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
import type Human from "@wayward/game/game/entity/Human";
import { MoveType } from "@wayward/game/game/entity/IEntity";
import { EquipType } from "@wayward/game/game/entity/IHuman";
import type { IActionHandlerApi, IActionNotUsable, IActionUsable } from "@wayward/game/game/entity/action/IAction";
import { ActionType } from "@wayward/game/game/entity/action/IAction";
import { AiType } from "@wayward/game/game/entity/ai/AI";
import { ShipperNPCInteractType, type INPCConstructorOptions } from "@wayward/game/game/entity/npc/INPC";
import NPC from "@wayward/game/game/entity/npc/NPC";
import type { IIslandPort, IslandId } from "@wayward/game/game/island/IIsland";
import type Island from "@wayward/game/game/island/Island";
import type { IContainer } from "@wayward/game/game/item/IItem";
import { ItemType } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type Tile from "@wayward/game/game/tile/Tile";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import type { IVector2 } from "@wayward/game/utilities/math/IVector";
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
    canSailTo(x: number, y: number): boolean;
    getPublicContainer(): IContainer | undefined;
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
    canMoveToTile(moveType: MoveType, tile: Tile, ignoreHuman?: Human): 0 | -1 | -6 | -2 | -3 | -4 | -5;
    shipToPort(island: Island, port: IIslandPort, pathToEdge: IVector2[]): void;
    private moveToPort;
    private canSeePort;
    protected canNPCAttack(): boolean | undefined;
}
export {};
