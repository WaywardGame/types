/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { StatusEffectChangeReason } from "@wayward/game/game/entity/IEntity";
import type { CreatureType } from "@wayward/game/game/entity/creature/ICreature";
import type StatusEffect from "@wayward/game/game/entity/status/StatusEffect";
import type { IslandId } from "@wayward/game/game/island/IIsland";
import type Island from "@wayward/game/game/island/Island";
import type { DisplayableItemType } from "@wayward/game/game/item/IItem";
import type { IOverlayInfo } from "@wayward/game/game/tile/ITerrain";
import type Tile from "@wayward/game/game/tile/Tile";
import type { RenderSource, UpdateRenderFlag } from "@wayward/game/renderer/IRenderer";
import type { Renderer } from "@wayward/game/renderer/Renderer";
import type { CreatureNotifierType, INotificationLocation, ItemNotifierType, MarkerIconType, NotifierIconType, StatNotificationType } from "@wayward/game/renderer/notifier/INotifier";
import type { IVector4 } from "@wayward/game/utilities/math/Vector4";
import type { IRGB } from "@wayward/utilities/Color";
/**
 * Tracks active Renderer instances for the client
 */
export default class Renderers {
    readonly renderers: Set<Renderer>;
    readonly notifier: {
        suspend: () => void;
        resume: () => void;
        addNotifierIcon: (location: INotificationLocation, type: NotifierIconType) => void;
        addStat: (location: INotificationLocation, type: StatNotificationType, value: number) => void;
        addStatusEffect: (location: INotificationLocation, statusEffect: StatusEffect, reason: StatusEffectChangeReason) => void;
        addItem: (location: INotificationLocation, itemNotifierType: ItemNotifierType, type: DisplayableItemType) => void;
        addCreature: (location: INotificationLocation, creatureNotifierType: CreatureNotifierType, type: CreatureType, aberrant?: boolean) => void;
        addMarker: (location: INotificationLocation, markerType: MarkerIconType, markerGuid: string) => void;
        removeNotification: (location: INotificationLocation, guid: string) => void;
    };
    readonly particle: {
        create: (tile: Tile, particle: IRGB, count?: number, intensity?: number) => void;
    };
    getRenderersForObject(object: IVector4): Renderer[];
    getRenderersForIslandId(islandId?: IslandId): Renderer[];
    hasRendererForIsland(island: Island): boolean;
    add(renderer: Renderer): boolean;
    remove(renderer: Renderer): boolean;
    stop(): void;
    reinitialize(): Promise<void>;
    delete(): Promise<void>;
    computeSpritesInViewport(origin: IVector4): void;
    addOrUpdateOverlay(tile: Tile, overlay: IOverlayInfo): void;
    removeOverlay(tile: Tile, overlay: IOverlayInfo): void;
    updateView(origin: IVector4 | IslandId | undefined, source: RenderSource, updateFov?: boolean | UpdateRenderFlag.FieldOfView | UpdateRenderFlag.FieldOfViewSkipTransition): void;
    updateRender(origin: IVector4 | IslandId | undefined, source: RenderSource, flag: UpdateRenderFlag): void;
}
