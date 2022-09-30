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
import type { IActionDescription } from "game/entity/action/IAction";
import { ActionArgument, ActionType } from "game/entity/action/IAction";
import type Entity from "game/entity/Entity";
import type Player from "game/entity/player/Player";
import type Item from "game/item/Item";
import { PacketType } from "multiplayer/packets/IPacket";
import ActionPacketBase from "multiplayer/packets/shared/ActionPacketBase";
export default class ActionPacket extends ActionPacketBase {
    entity: Entity | undefined;
    actionType: ActionType;
    arguments: any[];
    items: Item[];
    argumentTypes: ActionArgument[];
    connectionPlayer: Player | undefined;
    getType(): PacketType;
    get action(): IActionDescription;
    getDebugInfo(): string;
    preProcess(): void;
    process(): void;
    protected preWriteData(): void;
    protected writeData(): void;
    protected preReadData(): void;
    protected readData(): void;
}
