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
import type { IKdNearestPoint } from "@wayward/game/utilities/collection/kdtree/KdNearestPoints";
import { KdTreeNode } from "@wayward/game/utilities/collection/kdtree/KdTreeNode";
import type { IVector2 } from "@wayward/game/utilities/math/IVector";
export declare class KdTree {
    private readonly root;
    add(point: IVector2): void;
    remove(point: IVector2): void;
    _remove(point: IVector2, node: KdTreeNode | undefined, cd: number): KdTreeNode | undefined;
    nearestPoints(point: IVector2, maxPoints: number): IKdNearestPoint[];
    private _nearestPoints;
    private findMin;
}
