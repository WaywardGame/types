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
declare namespace AStar {
    type IsEndNodeFunction<T> = ((node: T) => boolean);
    function findPath<T>(start: T, end: T, getConnections: (node: T) => Array<T | undefined>, getDistanceToEnd: (node1: T, node2: T) => number, isNodeBlocked?: (node: T) => boolean, getNodePenalty?: (node: T) => number, maxNodesChecked?: number): T[] | undefined;
    function findPath<T>(start: T, end: T | ((node: T) => boolean), getConnections: (node: T) => Array<T | undefined>, getDistanceToEnd: (node1: T, node2?: T) => number, isNodeBlocked?: (node: T) => boolean, getNodePenalty?: (node: T) => number, maxNodesChecked?: number): T[] | undefined;
}
export default AStar;
