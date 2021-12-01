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
import type { Events, IEventEmitter } from "event/EventEmitter";
import type Player from "game/entity/player/Player";
import type Item from "game/item/Item";
import type DrawnMap from "game/mapping/DrawnMap";
import type Component from "ui/component/Component";
import PrerenderedCanvasDialog from "ui/screen/screens/game/component/PrerenderedCanvasDialog";
export interface IMapDialogEvents extends Events<PrerenderedCanvasDialog> {
    read(map: DrawnMap, item: Item): any;
}
export default class MapDialog extends PrerenderedCanvasDialog {
    readonly event: IEventEmitter<this, IMapDialogEvents>;
    private readonly riddleText;
    private readonly buttonRiddle;
    private readonly buttonCopyMap;
    private unobfuscatedCanvas?;
    private map?;
    private obfuscation?;
    private background?;
    private item?;
    private mapItemId?;
    private theme?;
    constructor();
    protected initializeSettingsPanel(panel: Component): void;
    private onRequestMapCopy;
    private setTheme;
    private rerender;
    getName(): import("../../../../../language/impl/TranslationImpl").default;
    read(map: DrawnMap, item: Item, resetView?: boolean): Promise<void>;
    protected onInventoryItemRemove(_: any, item: Item): void;
    protected onToggleProtected(item: Item): void;
    protected onInventoryItemAdd(_: any, item: Item): void;
    protected onInventoryItemUpdate(_: any, item: Item): void;
    protected onPostMove(player: Player): void;
    protected onLoad(): Promise<void>;
    private updateCopyMapButton;
    private closeIfItemIsGone;
    private damageMap;
    private obfuscationPromise?;
    private scheduledObfuscationPromise?;
    private updateObfuscation;
    private reobfuscate;
    protected onResetView(): void;
}
