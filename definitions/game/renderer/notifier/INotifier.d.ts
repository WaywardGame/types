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
import type { SfxType } from "@wayward/game/audio/IAudio";
import type { ItemType } from "@wayward/game/game/item/IItem";
import type { Reference, ReferenceType } from "@wayward/game/game/reference/IReferenceManager";
import type { IVector2 } from "@wayward/game/utilities/math/IVector";
import type { IVector4 } from "@wayward/game/utilities/math/Vector4";
import type { IRGB } from "@wayward/utilities/Color";
export interface INotificationLocation extends IVector4 {
    readonly isValid?: boolean;
    getMovementPoint?(timeStamp: number): IVector2;
    getMovementProgress?(timeStamp: number): number;
    /**
     * Used to offset markers for creatures that are large or if they are flying ontop of other things
     */
    getMovementOffsetY?(timeStamp: number): number;
    queueSoundEffect?(soundEffect: SfxType): void;
}
export declare enum StatNotificationType {
    EnemyHealth = 0,
    Stat = 1,
    Stamina = 2,
    Metabolism = 3,
    Health = 4,
    Thirst = 5,
    Zero = 6,
    Miss = 7,
    Immune = 8,
    Regen = 9
}
export declare enum ItemNotifierType {
    Neutral = 0,
    Added = 1,
    Removed = 2,
    Broken = 3,
    Offer = 4,
    Damaged = 5,
    Decaying = 6
}
export declare enum CreatureNotifierType {
    Neutral = 0,
    Added = 1,
    Removed = 2
}
export declare enum NotifierIconType {
    Tame = 0,
    Untame = 1,
    Water = 2,
    ItemWarning = 3,
    DoodadWarning = 4,
    ItemDecay = 5,
    Talk = 6,
    DualWieldEnabled = 7,
    DualWieldDisabled = 8
}
export declare enum MarkerType {
    Tamed = 0,
    AlertedHostile = 1,
    AlertedScared = 2,
    Text = 3,
    Item = 4,
    AlertedHostileHighDanger = 5,
    AlertedHostileVeryHighDanger = 6,
    AlertedHostileExtremeDanger = 7,
    Dynamic = 8
}
export interface IBaseMarkerDescription {
    guid: string;
    size?: number;
    offsetY?: number;
}
/**
 * Specific sprite icons
 */
export interface ISpriteMarkerDescription extends IBaseMarkerDescription {
    type: MarkerType.Tamed | MarkerType.AlertedHostile | MarkerType.AlertedScared;
}
/**
 * Dynamic markers that change based on some callback
 */
export interface IDynamicSpriteMarkerDescription extends IBaseMarkerDescription {
    type: MarkerType.Dynamic;
    dynamicType: "AlertedHostile";
    entityReference: Reference<ReferenceType.Player | ReferenceType.NPC | ReferenceType.Creature>;
}
/**
 * Item icon
 */
export interface IItemMarkerDescription extends IBaseMarkerDescription {
    type: MarkerType.Item;
    itemType: ItemType;
}
/**
 * Generic text.
 * This won't actually work because our text.png sprite only has numbers
 */
export interface ITextMarkerDescription extends IBaseMarkerDescription {
    type: MarkerType.Text;
    text: string;
    textColor: IRGB;
}
/**
 * This value may be saved into Entity._persistentMarker!
 */
export type MarkerDescription = ISpriteMarkerDescription | ITextMarkerDescription | IItemMarkerDescription | IDynamicSpriteMarkerDescription;
export declare const itemDamageNotifierThreshold = 3;
export declare const doodadDamageNotifierThreshold = 5;
