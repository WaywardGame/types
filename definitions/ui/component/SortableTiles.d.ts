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
import { Events, IEventEmitter } from "event/EventEmitter";
import Component from "ui/component/Component";
interface SortableTilesEvents extends Events<Component> {
    sort(): any;
}
export default class SortableTiles<T extends Component> extends Component {
    private readonly variablySized?;
    readonly event: IEventEmitter<this, SortableTilesEvents>;
    constructor(variablySized?: "vertical" | "horizontal" | undefined);
    isSorting(): boolean;
    tiles(): import("@wayward/goodstream/Stream").default<T>;
    addTile(content: T, sortable?: boolean): void;
}
export {};
