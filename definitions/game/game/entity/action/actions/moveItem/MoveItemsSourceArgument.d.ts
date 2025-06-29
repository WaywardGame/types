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
import type Entity from "@wayward/game/game/entity/Entity";
import type Human from "@wayward/game/game/entity/Human";
import type { IActionNotUsable, IActionUsable } from "@wayward/game/game/entity/action/IAction";
import { ActionArgument } from "@wayward/game/game/entity/action/IAction";
import { ActionArgumentCustom } from "@wayward/game/game/entity/action/argument/ActionArgumentCustom";
import type Island from "@wayward/game/game/island/Island";
import type { IContainer } from "@wayward/game/game/item/IItem";
import Item from "@wayward/game/game/item/Item";
import type Translation from "@wayward/game/language/Translation";
export type MoveItemsSourceArgumentResolvable = Item | Item[] | IMoveItemsSourceArgument;
export interface IMoveItemsSourceArgument {
    island?: Island;
    container?: IContainer;
}
export interface IMoveItemsSourceArgumentUsable extends IActionUsable {
    items: Item[];
}
export default class MoveItemsSourceArgument extends ActionArgumentCustom<IMoveItemsSourceArgument> {
    static resolveOne(source?: MoveItemsSourceArgumentResolvable): Item | undefined;
    static resolve(source?: MoveItemsSourceArgumentResolvable): Item[];
    static ANY: [arg1: ActionArgument.Undefined, ActionArgument.ItemNearbyIncludingTradeContainer, ActionArgument.ItemArrayNearbyIncludingTradeContainer, MoveItemsSourceArgument];
    static canUse(executor: Human, item: MoveItemsSourceArgumentResolvable | undefined, canUse: (item: Item) => IActionUsable | IActionNotUsable, actionName?: Translation): IMoveItemsSourceArgumentUsable | IActionNotUsable;
    validate(executor: Entity | undefined, value: unknown): value is IMoveItemsSourceArgument;
    read(): IMoveItemsSourceArgument;
    write(entity: Entity | undefined, value: IMoveItemsSourceArgument): void;
}
