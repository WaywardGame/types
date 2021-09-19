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
import Entity from "game/entity/Entity";
import { StatusType } from "game/entity/IEntity";
import Component from "ui/component/Component";
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
