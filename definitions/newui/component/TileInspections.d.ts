/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { Events, IEventEmitter } from "event/EventEmitter";
import { InspectType } from "game/inspection/IInspection";
import Component from "newui/component/Component";
import Vector3 from "utilities/math/Vector3";
export interface ITileInspectionsEvents extends Events<Component> {
    refreshed(isValid?: boolean): any;
    updateInspectTypeFilter(): any;
}
export default class TileInspections extends Component {
    readonly event: IEventEmitter<this, ITileInspectionsEvents>;
    private readonly paragraphCannotSeeTile;
    private inspectTypeFilter;
    private inspections?;
    private position?;
    constructor();
    setInspectTypeFilter(filter?: (inspectType: InspectType) => boolean): this;
    refreshInspectTypeFilter(): this;
    isPositionValid(): boolean;
    getPosition(): Vector3 | undefined;
    setPosition(position: Vector3): this;
    deregister(): void;
    refresh(): void;
    protected onTick(): void;
    private refreshInspectionsOfType;
    private initializeTooltipSection;
}
