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
import { CreatureType } from "game/entity/creature/ICreature";
import { StatusEffectChangeReason } from "game/entity/IEntity";
import StatusEffect from "game/entity/status/StatusEffect";
import { ItemType } from "game/item/IItem";
import INotifier, { CreatureNotifierType, INotifierLocation, ItemNotifierType, NotifierIconType, StatNotificationType } from "renderer/INotifier";
import Vector2 from "utilities/math/Vector2";
export default class Notifier implements INotifier {
    private readonly gl;
    private readonly capacity;
    private mostRecent;
    private mostRecentLife;
    private count;
    private notificationCount;
    private readonly notifications;
    private readonly spriteBatch;
    private nextUpdate;
    private suspended;
    constructor(gl: WebGL2RenderingContext, capacity: number);
    setTexture(texture: WebGLTexture, inverseTextureSize: Vector2): void;
    clear(): void;
    addItem(location: INotifierLocation, itemNotifierType: ItemNotifierType, type: ItemType, _broken?: boolean): void;
    addCreature(location: INotifierLocation, creatureNotifierType: CreatureNotifierType, type: CreatureType, aberrant?: boolean): void;
    addStat(location: INotifierLocation, type: StatNotificationType, value: number): void;
    addStatusEffect(location: INotifierLocation, statusEffect: StatusEffect, reason: StatusEffectChangeReason): void;
    addNotifierIcon(location: INotifierLocation, type: NotifierIconType): void;
    suspend(): void;
    resume(): void;
    update(timeStamp: number): void;
    render(timeStamp: number, x: number, y: number, tileScale: number, viewWidth: number, viewHeight: number): boolean;
    private addNotification;
    private renderNotification;
}
