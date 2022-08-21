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
import type Island from "game/island/Island";
import type { ItemType } from "game/item/IItem";
import type { CreatureNotifierType, INotificationLocation, ItemNotifierType, NotifierIconType, StatNotificationType } from "renderer/notifier/INotifier";
import type Renderer from "renderer/Renderer";
import type { IRGB } from "utilities/Color";
/**
 * Tracks active Renderer instances for the client
 */
export default class Renderers {
    private readonly renderers;
    readonly notifier: {
        suspend: () => void;
        resume: () => void;
        addNotifierIcon: (location: INotificationLocation, type: NotifierIconType) => void;
        addStat: (location: INotificationLocation, type: StatNotificationType, value: number) => void;
        addStatusEffect: (location: INotificationLocation, statusEffect: StatusEffect, reason: StatusEffectChangeReason) => void;
        addItem: (location: INotificationLocation, itemNotifierType: ItemNotifierType, type: ItemType) => void;
        addCreature: (location: INotificationLocation, creatureNotifierType: CreatureNotifierType, type: CreatureType, aberrant?: boolean) => void;
    };
    readonly particle: {
        create: (island: Island, tileX: number, tileY: number, tileZ: number, particle: IRGB) => void;
        createMultiple: (island: Island, tileX: number, tileY: number, tileZ: number, particle: IRGB, count: number, intensity?: number) => void;
    };
    add(renderer: Renderer): void;
    remove(renderer: Renderer): void;
    computeSpritesInViewport(): void;
    update(timeStamp: number): void;
}
