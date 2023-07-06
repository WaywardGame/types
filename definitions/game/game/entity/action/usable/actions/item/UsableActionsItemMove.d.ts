/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { UsableActionGenerator } from "game/entity/action/usable/UsableActionRegistrar";
export declare enum UsableActionsItemMoveTarget {
    None = 0,
    Inventory = 1,
    ActiveNonTradingContainer = 2,
    TradeContainer = 3,
    FacingContainer = 4
}
declare const UsableActionsItemMove: UsableActionGenerator<[moveTarget?: UsableActionsItemMoveTarget | undefined]>;
export default UsableActionsItemMove;
