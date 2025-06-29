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
declare global {
    let Module: IWaywardCPP;
}
export interface IWaywardCPP {
    BitGrid: IBitGridConstructor;
    ByteGrid: IByteGridConstructor;
    DijkstraMap: IDijkstraMapConstructor;
    FieldOfView: IFieldOfViewConstructor;
    FlowField: IFlowFieldConstructor;
    KDTree: IKDTreeConstructor;
    Navigation: INavigationConstructor;
    WorldLayer: IWorldLayerConstructor;
}
export type IFlowFieldConstructor = new (x: number, y: number, mapSize: number, size: number, z: number, moveType: number) => IWaywardCPPFlowField;
export type IByteGridConstructor = new (width: number, height: number) => IByteGrid;
export type IBitGridConstructor = new (count: number) => IBitGrid;
export type IDijkstraMapConstructor = new (mapSize: number) => IDijkstraMap;
export type IKDTreeConstructor = new (mapSize: number) => IKDTree;
export type INavigationConstructor = new (mapSize: number, autoConnect: boolean) => INavigation;
export type IWorldLayerConstructor = new (islandX: number, islandY: number, width: number, height: number, level: number) => IWorldLayerCPP;
export type IFieldOfViewConstructor = new () => IFieldOfViewCPP;
export interface IWaywardCPPFlowField {
    delete(): void;
    reset(): void;
    getFlowField(): Uint8Array;
    getPenaltyField(): Uint8Array;
    getFieldValue(x: number, y: number): number | undefined;
    prepareUpdate(): void;
    addPlayer(x: number, y: number): void;
    finalizeUpdate(): void;
}
export interface IByteGrid {
    width: number;
    height: number;
    size: number;
    data: Uint8Array;
    get(x: number, y: number): number;
    set(x: number, y: number, value: number): void;
    rawSet(i: number, value: number): void;
    clear(): void;
}
export interface IBitGrid {
    count: number;
    data: Uint8Array;
    isSet(index: number): boolean;
    set(index: number): void;
    clear(): void;
}
export interface IColorGrid {
    width: number;
    height: number;
    data: Uint8Array;
    getRed(x: number, y: number): number;
    getGreen(x: number, y: number): number;
    getBlue(x: number, y: number): number;
    getAlpha(x: number, y: number): number;
    set(x: number, y: number, red: number, blue: number, green: number, alpha: number): void;
}
export interface IWorldLayerCPP {
    getLightBlockMap(): IByteGrid;
    getLightLevelMap(): IColorGrid;
    getLightBlockBatchGrid(): IBitGrid;
    updateLightBlockValue(x: number, y: number, val: number): void;
    batchUpdateLightBlockValues(): void;
    delete(): void;
}
export interface IDijkstraMap {
    getNode(x: number, y: number): INavigationNode;
    updateNode(x: number, y: number, penalty: number, disabled: boolean): void;
    connectNodes(x1: number, y1: number, x2: number, y2: number, direction: number): void;
    updateOrigin(origin: INavigationNode): void;
    findPath(end: INavigationNode): {
        success: boolean;
        path: INavigationNode[];
        score: number;
    };
    findPath2(result: IDijkstraMapFindPathResult): void;
    delete(): void;
}
export interface IDijkstraMapFindPathResult {
    success: boolean;
    path: INavigationNode[];
    score: number;
    endX: number;
    endY: number;
    moveAdjacentToTarget: boolean;
}
export interface INavigation {
    getNode(x: number, y: number): INavigationNode;
    findPath(start: INavigationNode, end: INavigationNode): {
        path: INavigationNode[];
        scoreG: number;
        scoreH: number;
        scoreF: number;
    } | undefined;
    delete(): void;
}
export interface INavigationNode {
    x: number;
    y: number;
    disabled: boolean;
    penalty: number;
    connectTo(node: INavigationNode, direction: number): void;
    disconnectFrom(direction: number): void;
    getConnection(direction: number): INavigationNode | undefined;
}
export interface IKDTree {
    insertPoint(x: number, y: number): void;
    deletePoint(x: number, y: number): void;
    nearestPoints(x: number, y: number): Array<{
        x: number;
        y: number;
        distance: number;
    }>;
    delete(): void;
}
export interface IFieldOfViewCPP {
    computeLights(worldLayer: IWorldLayerCPP, startX0: number, endX0: number, startY0: number, endY0: number): void;
    bresenham(worldLayer: IWorldLayerCPP, x0: number, y0: number, x1: number, y1: number): boolean;
}
