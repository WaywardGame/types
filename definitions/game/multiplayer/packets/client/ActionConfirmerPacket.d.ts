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
import type { AnyActionDescription } from "game/entity/action/IAction";
import { ActionArgument, ActionType } from "game/entity/action/IAction";
import type Entity from "game/entity/Entity";
import { PacketType } from "multiplayer/packets/IPacket";
import ActionPacketBase from "multiplayer/packets/shared/ActionPacketBase";
export default class ActionConfirmerPacket extends ActionPacketBase {
    entity: Entity;
    actionType: ActionType;
    arguments: any[];
    argumentTypes: ActionArgument[];
    getType(): PacketType;
    get action(): AnyActionDescription;
    getDebugInfo(): string;
    process(): void;
    protected writeData(): void;
    protected readData(): void;
}
