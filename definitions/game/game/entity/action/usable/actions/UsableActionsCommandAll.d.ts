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
import { UsableActionGenerator } from "@wayward/game/game/entity/action/usable/UsableActionRegistrar";
declare const UsableActionsCommandAll: UsableActionGenerator<[isCommandMenuAll?: true | undefined]>;
export default UsableActionsCommandAll;
export declare const UsableActionsCommandAllMenu: UsableActionGenerator<[]>;
