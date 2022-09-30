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
import { ActionArgument } from "game/entity/action/IAction";
import type Entity from "game/entity/Entity";
import { Packet } from "multiplayer/packets/Packet";
export default abstract class ActionPacketBase extends Packet {
    abstract entity: Entity | undefined;
    protected writeArgument(expectedType: ActionArgument, value: any): void;
    protected readArgument(expectedType: ActionArgument): any;
}
