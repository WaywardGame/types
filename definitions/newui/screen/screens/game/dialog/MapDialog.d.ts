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
import { IMapRequest } from "game/IGame";
import { IContainer } from "item/IItem";
import Item from "item/Item";
import UiTranslation from "language/dictionary/UiTranslation";
import Translation from "language/Translation";
import { IHookHost } from "mod/IHookHost";
import Dialog from "newui/screen/screens/game/component/Dialog";
import Vector3 from "utilities/math/Vector3";
export default class MapDialog extends Dialog implements IHookHost {
    private readonly canvas;
    private readonly textWrapper;
    private readonly direction;
    private readonly underground;
    private mapCanvas;
    private map;
    private decodePosition;
    private decodeSkill;
    constructor();
    getName(): Translation | UiTranslation.GameDialogMapName;
    decode(mapRequest: IMapRequest): void;
    onDigTreasure(human: Human, treasureTile: Vector3): void;
    onInventoryItemUpdate(player: Player | undefined, item: Item, container: IContainer): void;
    onMoveComplete(player: Player): void;
    private closeIfItemIsGone;
    private getDistance;
    private getDirection;
    private getLevel;
    private onResize;
}
