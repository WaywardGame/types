/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { SfxType } from "audio/IAudio";
import { CreatureType } from "entity/creature/ICreature";
import { StatusEffectChangeReason } from "entity/IEntity";
import StatusEffect from "entity/status/StatusEffect";
import { ItemType } from "item/IItem";
import { IVector2, IVector3 } from "utilities/math/IVector";
import Vector2 from "utilities/math/Vector2";
export interface INotifier {
    addItem(location: INotifierLocation, itemNotifierType: ItemNotifierType, type: ItemType): void;
    addStat(location: INotifierLocation, type: StatNotificationType, value: number): void;
    addStatusEffect(location: INotifierLocation, statusEffect: StatusEffect, reason: StatusEffectChangeReason): void;
    addCreature(location: INotifierLocation, creatureNotifierType: CreatureNotifierType, type: CreatureType, aberrant?: boolean): void;
    addNotifierIcon(location: INotifierLocation, notifierType: NotifierIconType): void;
    clear(): void;
    update(timeStamp: number): void;
    setTexture(texture: WebGLTexture, inverseTextureSize: Vector2): void;
    render(timeStamp: number, x: number, y: number, tileScale: number, viewWidth: number, viewHeight: number): boolean;
    suspend(suspend: boolean): void;
}
export default INotifier;
export interface INotifierLocation extends IVector3 {
    getMovementPoint?(timeStamp: number): IVector2;
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
    Immune = 8
}
export declare enum ItemNotifierType {
    Neutral = 0,
    Added = 1,
    Removed = 2,
    Broken = 3,
    Offer = 4,
    Damaged = 5
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
    Warning = 3
}
export declare const itemDamageNotifierThreshold = 3;
export declare const doodadDamageNotifierThreshold = 6;
