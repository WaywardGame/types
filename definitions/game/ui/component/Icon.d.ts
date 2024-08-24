/*!
 * Copyright 2011-2024 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { IIcon } from "@wayward/game/game/inspection/InfoProvider";
import type Component from "@wayward/game/ui/component/Component";
declare namespace Icon {
    function apply(component?: Component, icon?: IIcon): void;
}
export default Icon;