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
import Entity from "entity/Entity";
import { StatusType } from "entity/IEntity";
import { Events, IEventEmitter } from "event/EventEmitter";
import Component from "newui/component/Component";
export interface IStatusEffectsEvents extends Events<Component> {
    update(): any;
}
export default class StatusEffects extends Component {
    readonly event: IEventEmitter<this, IStatusEffectsEvents>;
    private readonly entity;
    private readonly effectIcons;
    constructor(entity: Entity);
    /**
     * Event handler for the status effects of this entity changing
     */
    onStatusChange(_: any, status: StatusType, hasStatus: boolean): void;
}
