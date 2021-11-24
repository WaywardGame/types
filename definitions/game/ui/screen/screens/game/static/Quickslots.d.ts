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
import type { IBindHandlerApi } from "ui/input/Bind";
import { Quadrant } from "ui/screen/screens/game/component/IQuadrantComponent";
import QuadrantComponent from "ui/screen/screens/game/component/QuadrantComponent";
export default class Quickslots extends QuadrantComponent {
    static preferredQuadrant: Quadrant;
    constructor();
    protected onRemove(): void;
    protected shouldShowContextMenu(api: IBindHandlerApi): boolean;
    get preferredQuadrant(): Quadrant;
}
