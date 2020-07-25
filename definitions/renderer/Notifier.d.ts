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
import INotifier, { StatNotificationType } from "renderer/INotifier";
import Vector2 from "utilities/math/Vector2";
export default class Notifier implements INotifier {
    private readonly gl;
    private readonly capacity;
    private mostRecent;
    private mostRecentLife;
    private count;
    private notificationCount;
    private readonly notifications;
    private readonly spriteBatch;
    private nextUpdate;
    constructor(gl: WebGL2RenderingContext, capacity: number);
    setTexture(texture: WebGLTexture, inverseTextureSize: Vector2): void;
    clear(): void;
    addItem(entity: Entity, type: ItemType): void;
    addStat(entity: Entity, type: StatNotificationType, value: number): void;
    update(timeStamp: number): void;
    render(timeStamp: number, x: number, y: number, tileScale: number, viewWidth: number, viewHeight: number): boolean;
    private addNotification;
    private renderNotification;
}
