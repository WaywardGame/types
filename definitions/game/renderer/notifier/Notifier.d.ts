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
import type { CreatureType } from "game/entity/creature/ICreature";
import { StatusEffectChangeReason } from "game/entity/IEntity";
import type StatusEffect from "game/entity/status/StatusEffect";
import type { ItemType } from "game/item/IItem";
import type { INotificationLocation } from "renderer/notifier/INotifier";
import { CreatureNotifierType, ItemNotifierType, NotifierIconType, StatNotificationType } from "renderer/notifier/INotifier";
import type RendererContext from "renderer/context/RendererContext";
import type { IResourceContainer } from "resource/IResourceLoader";
export default class Notifier {
    private readonly context;
    private readonly capacity;
    private mostRecent;
    private mostRecentLife;
    private count;
    private notificationCount;
    private readonly notifications;
    private readonly spriteBatch;
    private nextUpdate;
    private suspended;
    private spriteAtlas;
    constructor(context: RendererContext, capacity: number);
    setResources(resourceContainer: IResourceContainer): void;
    clear(): void;
    addItem(location: INotificationLocation, itemNotifierType: ItemNotifierType, type: ItemType, _broken?: boolean): void;
    addCreature(location: INotificationLocation, creatureNotifierType: CreatureNotifierType, type: CreatureType, aberrant?: boolean): void;
    addStat(location: INotificationLocation, type: StatNotificationType, value: number): void;
    addStatusEffect(location: INotificationLocation, statusEffect: StatusEffect, reason: StatusEffectChangeReason): void;
    addNotifierIcon(location: INotificationLocation, type: NotifierIconType): void;
    suspend(): void;
    resume(): void;
    update(timeStamp: number): void;
    render(timeStamp: number, x: number, y: number, tileScale: number, viewWidth: number, viewHeight: number): boolean;
    private addNotification;
    private renderNotification;
}
