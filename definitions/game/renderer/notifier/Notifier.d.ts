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
import type { DisplayableItemType } from "game/item/IItem";
import type { INotificationLocation } from "renderer/notifier/INotifier";
import { CreatureNotifierType, ItemNotifierType, NotifierIconType, StatNotificationType } from "renderer/notifier/INotifier";
import type RendererContext from "renderer/context/RendererContext";
import type { IResourceContainer } from "resource/IResourceLoader";
export default class Notifier {
    private readonly context;
    private readonly capacity;
    private readonly spriteBatch;
    private spriteAtlas;
    private count;
    private mostRecent;
    private mostRecentLife;
    private nextUpdate;
    private notificationCount;
    private notifications;
    private suspended;
    constructor(context: RendererContext, capacity: number);
    setResources(resourceContainer: IResourceContainer): void;
    clear(): void;
    delete(): void;
    addItem(location: INotificationLocation, itemNotifierType: ItemNotifierType, type: DisplayableItemType): void;
    addCreature(location: INotificationLocation, creatureNotifierType: CreatureNotifierType, type: CreatureType, aberrant?: boolean): void;
    addStat(location: INotificationLocation, type: StatNotificationType, value: number): void;
    addStatusEffect(location: INotificationLocation, statusEffect: StatusEffect, reason: StatusEffectChangeReason): void;
    addNotifierIcon(location: INotificationLocation, type: NotifierIconType): void;
    suspend(): void;
    resume(): void;
    update(timeStamp: number): void;
    render(timeStamp: number, x: number, y: number, tileScale: number): boolean;
    private addNotification;
    private renderNotification;
}
