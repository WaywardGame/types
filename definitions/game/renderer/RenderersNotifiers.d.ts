import type { CreatureType } from "@wayward/game/game/entity/creature/ICreature";
import type { StatusChangeReason } from "@wayward/game/game/entity/IEntity";
import type Status from "@wayward/game/game/entity/status/Status";
import type { DisplayableItemType } from "@wayward/game/game/item/IItem";
import type { INotificationLocation, NotifierIconType, ItemNotifierType, CreatureNotifierType, MarkerIconType } from "@wayward/game/renderer/notifier/INotifier";
import { StatNotificationType } from "@wayward/game/renderer/notifier/INotifier";
import type Renderers from "@wayward/game/renderer/Renderers";
export declare class RenderersNotifiers {
    private readonly renderers;
    constructor(renderers: Renderers);
    suspend<R, A = unknown>(whileSuspended: (...args: A[]) => R, ...args: A[]): R;
    suspend<R, A = unknown>(suspended: boolean | undefined, whileSuspended: (...args: A[]) => R, ...args: A[]): R;
    addNotifierIcon(location: INotificationLocation, type: NotifierIconType): void;
    addStat(location: INotificationLocation, type: StatNotificationType, value: number): void;
    addStatus(location: INotificationLocation, status: Status, reason: StatusChangeReason): void;
    addItem(location: INotificationLocation, itemNotifierType: ItemNotifierType, type: DisplayableItemType): void;
    addCreature(location: INotificationLocation, creatureNotifierType: CreatureNotifierType, type: CreatureType, aberrant?: boolean): void;
    addMarker(location: INotificationLocation, markerType: MarkerIconType, markerGuid: string): void;
    removeNotification(location: INotificationLocation, guid: string): void;
}
