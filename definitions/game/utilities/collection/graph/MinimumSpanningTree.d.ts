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
import type { Vertex } from "@wayward/game/utilities/collection/graph/Vertex";
import type Edge from "@wayward/game/utilities/math/shapes/Edge";
export interface IMinimumSpanningTreeNode<T> {
    /**
     * Edge
     */
    edge: Edge<Vertex<T>>;
    /**
     * Distance in number of vertices from the starting point in the MST
     */
    numberOfVerticesFromStart: number;
}
/**
 * https://en.wikipedia.org/wiki/Minimum_spanning_tree
 * https://en.wikipedia.org/wiki/Prim%27s_algorithm
 */
export declare class MinimumSpanningTree<T> {
    private readonly priorityQueue;
    private readonly visited;
    private readonly distanceFromStart;
    private readonly tree;
    calculateTree(start: Vertex<T>): Array<IMinimumSpanningTreeNode<T>>;
    private enqueue;
}
