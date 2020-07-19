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
import { IDamageInfo } from "entity/creature/ICreature";
import EventEmitter from "event/EventEmitter";
import Component from "newui/component/Component";
import { IBindHandlerApi } from "newui/input/Bind";
import WalkToTileHandler from "newui/screen/screens/game/util/movement/WalkToTileHandler";
export interface IMovementHandlerEvents {
    /**
     * Called every frame where the mouse is not hovering over an item
     * @returns `false` if the client can't move, `undefined` otherwise
     */
    canMove(): false | undefined;
}
export default class MovementHandler extends EventEmitter.Host<IMovementHandlerEvents> {
    private readonly gameScreen;
    readonly walkToTileHandler: WalkToTileHandler;
    private lastMove;
    private readonly intent;
    private preventMouseMovement;
    constructor(gameScreen: Component);
    register(): this;
    deregister(): this;
    protected onMoveStart(): void;
    protected onMoveComplete(): void;
    protected onPlayerDamage(_: any, damageInfo: IDamageInfo): void;
    protected onPlayerDeath(): void;
    protected onFaceDown(api: IBindHandlerApi): boolean;
    protected onFaceDirection(api: IBindHandlerApi): boolean;
    protected onIdle(): boolean;
    protected onMoveToTile(): boolean;
    protected onMove(api: IBindHandlerApi): boolean;
    protected onMoveDirection(api: IBindHandlerApi): boolean;
    protected onReleaseMoveBind(api: IBindHandlerApi): void;
    private setIntent;
    /**
     * Processes moving towards the mouse.
     */
    private processMoveDirection;
    /**
     * If one direction bind is held, the intent is to move in that direction.
     *
     * If two direction binds are held, the intent is to move diagonally, so it
     * switches the intent based on whatever the last movement was.
     *
     * Returns whether either of the previous statements are true.
     */
    private processDirectionBinds;
}
