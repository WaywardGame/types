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
import { ActionArgument, ActionType, IActionDescription } from "game/entity/action/IAction";
import Item from "game/item/Item";
import EntityTargetedSharedPacket from "multiplayer/packets/EntityTargetedSharedPacket";
export default class ActionPacket extends EntityTargetedSharedPacket {
    actionType: ActionType;
    arguments: any[];
    items: Item[];
    argumentTypes: ActionArgument[];
    get action(): IActionDescription;
    getDebugInfo(): string;
    process(): void;
    protected writeData(): void;
    protected readData(): void;
    private writeArgument;
    private readArgument;
}
