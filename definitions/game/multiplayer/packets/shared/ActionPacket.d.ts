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
import type { ActionArgumentArray, IActionDescription } from "@wayward/game/game/entity/action/IAction";
import { ActionType } from "@wayward/game/game/entity/action/IAction";
import type Entity from "@wayward/game/game/entity/Entity";
import type Player from "@wayward/game/game/entity/player/Player";
import type Item from "@wayward/game/game/item/Item";
import type Tile from "@wayward/game/game/tile/Tile";
import { PacketType } from "@wayward/game/multiplayer/packets/IPacket";
import ActionPacketBase from "@wayward/game/multiplayer/packets/shared/ActionPacketBase";
export default class ActionPacket extends ActionPacketBase {
    entity: Entity | undefined;
    actionType: ActionType;
    arguments: any[];
    items: Item[];
    argumentTypes: ActionArgumentArray;
    targetTile?: Tile;
    connectionPlayer: Player | undefined;
    getType(): PacketType;
    get action(): IActionDescription;
    getDebugInfo(): string;
    preProcess(): void;
    process(): unknown;
    protected preWriteData(): void;
    protected writeData(): void;
    protected preReadData(): void;
    protected readData(): void;
}
