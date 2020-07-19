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
import Entity from "entity/Entity";
import { ItemType } from "item/IItem";
import Vector2 from "utilities/math/Vector2";
export interface INotifier {
    addItem(entity: Entity, type: ItemType): void;
    addStat(entity: Entity, type: StatNotificationType, value: number): void;
    clear(): void;
    update(timeStamp: number): void;
    setTexture(texture: WebGLTexture, inverseTextureSize: Vector2): void;
    render(timeStamp: number, x: number, y: number, tileScale: number, viewWidth: number, viewHeight: number): boolean;
}
export default INotifier;
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
