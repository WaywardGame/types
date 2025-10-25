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
import { ActionArgumentCustom } from "@wayward/game/game/entity/action/argument/ActionArgumentCustom";
import { ActionArgument } from "@wayward/game/game/entity/action/IAction";
import type Entity from "@wayward/game/game/entity/Entity";
import { Packet } from "@wayward/game/multiplayer/packets/Packet";
export default abstract class ActionPacketBase extends Packet {
    readonly isActionPacket = true;
    abstract entity: Entity | undefined;
    protected writeArgument(expectedType: ActionArgumentCustom<any> | ActionArgument, value: any): void;
    protected readArgument(expectedType: ActionArgumentCustom<any> | ActionArgument): unknown;
}
