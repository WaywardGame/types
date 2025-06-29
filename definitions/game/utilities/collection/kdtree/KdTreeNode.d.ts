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
import type { IVector2 } from "@wayward/game/utilities/math/IVector";
export declare class KdTreeNode {
    parent: KdTreeNode | undefined;
    point: IVector2;
    left: KdTreeNode | undefined;
    right: KdTreeNode | undefined;
    constructor(parent: KdTreeNode | undefined, point: IVector2);
    setPoint(point: IVector2): void;
}
