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
import { Quality } from "@wayward/game/game/IObject";
import type Entity from "@wayward/game/game/entity/Entity";
import type { IActionNotUsable, IActionUsable } from "@wayward/game/game/entity/action/IAction";
import { ActionArgumentCustom } from "@wayward/game/game/entity/action/argument/ActionArgumentCustom";
import { ItemType } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import Translation from "@wayward/game/language/Translation";
export interface IMoveItemFilterArgument {
    type?: ItemType;
    moveLimit?: number;
    quality?: ArrayOr<Quality>;
    text?: string;
    /** Excludes items that are both protected themselves, and that are in a protected container */
    excludeProtected?: boolean;
    /** Combined with `excludeProtected` to re-include items that are just in a protected container */
    includeInProtectedContainer?: boolean;
    excludeEquipped?: boolean;
}
export declare class MoveItemFilterArgument<FILTER extends IMoveItemFilterArgument> extends ActionArgumentCustom<FILTER> {
    static canUse(filter: IMoveItemFilterArgument, item: Item, actionName?: Translation): IActionUsable | IActionNotUsable;
    validate(executor: Entity | undefined, value: unknown): value is FILTER;
    read(): FILTER;
    write(executor: Entity | undefined, value: IMoveItemFilterArgument): void;
}
