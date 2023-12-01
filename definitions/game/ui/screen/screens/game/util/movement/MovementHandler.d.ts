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
import EventEmitter from "@wayward/utilities/event/EventEmitter";
import type Component from "@wayward/game/ui/component/Component";
import type { IBindHandlerApi } from "@wayward/game/ui/input/Bind";
import WalkToTileHandler from "@wayward/game/ui/screen/screens/game/util/movement/WalkToTileHandler";
export interface IMovementHandlerEvents {
    /**
     * Called every frame where the mouse is not hovering over an item
     * @returns `false` if the client can't move, `undefined` otherwise
     */
    canMove(): false | undefined;
}
export default class MovementHandler extends EventEmitter.Host<IMovementHandlerEvents> {
    readonly walkToTileHandler: WalkToTileHandler;
    private lastMove;
    private readonly intent;
    private preventMouseMovement;
    private readonly surfaceRef;
    get surface(): Component;
    constructor(surface: Component);
    register(): this;
    deregister(): this;
    protected onMoveStart(): void;
    protected onMoveComplete(): void;
    protected onFaceDown(api: IBindHandlerApi): boolean;
    faceTowardsMouse(api?: Pick<IBindHandlerApi, "mouse">): void;
    protected onFaceDirection(api?: Pick<IBindHandlerApi, "mouse" | "input">): boolean;
    protected onIdle(api: IBindHandlerApi): boolean;
    protected onMoveToTile(api: IBindHandlerApi): boolean;
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
