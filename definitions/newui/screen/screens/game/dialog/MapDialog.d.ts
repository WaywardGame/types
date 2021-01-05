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
import Human from "entity/Human";
import Player from "entity/player/Player";
import DrawnMap, { ITreasure } from "game/mapping/DrawnMap";
import Item from "item/Item";
import Translation from "language/Translation";
import { IBindHandlerApi } from "newui/input/Bind";
import Dialog from "newui/screen/screens/game/component/Dialog";
export default class MapDialog extends Dialog {
    private readonly canvas;
    private readonly textWrapper;
    private mapCanvas?;
    private unobfuscatedCanvas?;
    private map?;
    private obfuscation?;
    private item?;
    private viewOffset;
    private viewZoom;
    private viewAngle;
    private readonly viewScale;
    private actualViewAngle;
    private readonly actualViewScale;
    private actualViewOffset;
    private actualViewZoom;
    private mouseStartPosition?;
    private viewOffsetStartPosition?;
    private viewVelocity;
    private viewAnimating?;
    private animatingFullReset;
    private mapItemId?;
    constructor();
    getName(): Translation;
    read(map: DrawnMap, item: Item, resetView?: boolean): Promise<void>;
    onDigTreasure(map: DrawnMap, treasure: ITreasure, revealer: Human): void;
    protected onInventoryItemUpdate(_: any, item: Item): void;
    protected onMoveComplete(player: Player): void;
    protected onLoad(): Promise<void>;
    protected onZoom(api: IBindHandlerApi): boolean;
    private closeIfItemIsGone;
    private damageMap;
    private updateObfuscation;
    private onResize;
    private renderMap;
    private updateView;
    private dragStart;
    private drag;
    private dragEnd;
    private getMousePosition;
    private rotateClockwise;
    private rotateCounterClockwise;
    private flipHorizontal;
    private flipVertical;
    private resetView;
}
