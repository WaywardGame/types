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
import type { CreatureType } from "@wayward/game/game/entity/creature/ICreature";
import { StatusChangeReason } from "@wayward/game/game/entity/IEntity";
import type Status from "@wayward/game/game/entity/status/Status";
import type { DisplayableItemType } from "@wayward/game/game/item/IItem";
import type { IRendererContext } from "@wayward/game/renderer/context/IRendererContext";
import type { INotificationLocation, MarkerDescription } from "@wayward/game/renderer/notifier/INotifier";
import { CreatureNotifierType, ItemNotifierType, NotifierIconType, StatNotificationType } from "@wayward/game/renderer/notifier/INotifier";
import type { IResourceContainer } from "@wayward/game/renderer/resources/IResourceContainer";
export declare class Notifier {
    private readonly context;
    private readonly spriteBatch;
    private spriteAtlas;
    private mostRecentLife;
    private nextUpdate;
    private readonly notifications;
    /**
     * Marker guid -> notification
     */
    private readonly markers;
    private suspended;
    constructor(context: IRendererContext, capacity: number);
    setResources(resourceContainer: IResourceContainer): void;
    clear(): void;
    delete(): void;
    addItem(location: INotificationLocation, itemNotifierType: ItemNotifierType, type: DisplayableItemType, baseType?: DisplayableItemType): void;
    addCreature(location: INotificationLocation, creatureNotifierType: CreatureNotifierType, type: CreatureType, aberrant?: boolean): void;
    addStat(location: INotificationLocation, type: StatNotificationType, value: number): void;
    addStatus(location: INotificationLocation, status: Status, reason: StatusChangeReason): void;
    addNotifierIcon(location: INotificationLocation, type: NotifierIconType): void;
    addMarker(location: INotificationLocation, marker: MarkerDescription): void;
    removeMarker(guid: string): void;
    suspend(): void;
    resume(): void;
    private update;
    render(timeStamp: number, x: number, y: number, tileScale: number, forceMarkerRender: boolean): boolean;
    private addNotification;
    private renderNotification;
}
