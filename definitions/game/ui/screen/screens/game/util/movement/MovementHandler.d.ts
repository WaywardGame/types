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
import type { MovementIntent } from "@wayward/game/game/entity/player/IPlayer";
import type { IBindHandlerApi } from "@wayward/game/ui/input/Bind";
import type { IInteractionHandlerEvents } from "@wayward/game/ui/screen/screens/game/util/movement/InteractionHandler";
import InteractionHandler from "@wayward/game/ui/screen/screens/game/util/movement/InteractionHandler";
import type { IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export interface IMovementHandlerEvents extends IInteractionHandlerEvents {
    /**
     * Called every frame where the mouse is not hovering over an item
     * @returns `false` if the client can't move, `undefined` otherwise
     */
    canMove(): false | undefined;
}
export default class MovementHandler extends InteractionHandler {
    event: IEventEmitter<this, IMovementHandlerEvents>;
    private lastMove;
    private readonly intent;
    private preventMouseMovement;
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
    setIntent(intent?: MovementIntent): void;
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
    /**
     * Returns true if the player changed their facing direction.
     */
    private faceDirection;
}
