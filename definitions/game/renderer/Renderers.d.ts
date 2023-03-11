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
import type { StatusEffectChangeReason } from "game/entity/IEntity";
import type StatusEffect from "game/entity/status/StatusEffect";
import type { IslandId } from "game/island/IIsland";
import type Island from "game/island/Island";
import type { DisplayableItemType } from "game/item/IItem";
import type Tile from "game/tile/Tile";
import type { RenderSource, UpdateRenderFlag } from "renderer/IRenderer";
import type { CreatureNotifierType, INotificationLocation, ItemNotifierType, NotifierIconType, StatNotificationType } from "renderer/notifier/INotifier";
import type Renderer from "renderer/Renderer";
import type { IRGB } from "utilities/Color";
import type { IVector4 } from "utilities/math/Vector4";
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
    };
    readonly particle: {
        create: (tile: Tile, particle: IRGB, count?: number, intensity?: number) => void;
    };
    getRenderersForObject(object: IVector4): Renderer[];
    getRenderersForIslandId(islandId: IslandId): Renderer[];
    hasRendererForIsland(island: Island): boolean;
    add(renderer: Renderer): boolean;
    remove(renderer: Renderer): boolean;
    stop(): void;
    reinitialize(): Promise<void>;
    delete(): Promise<void>;
    update(timeStamp: number): void;
    computeSpritesInViewport(origin: IVector4): void;
    updateView(origin: IVector4 | undefined, source: RenderSource, updateFov?: boolean | UpdateRenderFlag.FieldOfView | UpdateRenderFlag.FieldOfViewSkipTransition): void;
    updateRender(origin: IVector4 | undefined, source: RenderSource, flag: UpdateRenderFlag): void;
}
