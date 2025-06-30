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
import type Player from "@wayward/game/game/entity/player/Player";
import type Item from "@wayward/game/game/item/Item";
import type DrawnMap from "@wayward/game/game/mapping/DrawnMap";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import type Component from "@wayward/game/ui/component/Component";
import PrerenderedCanvasDialog from "@wayward/game/ui/screen/screens/game/component/PrerenderedCanvasDialog";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export interface IMapDialogEvents extends Events<PrerenderedCanvasDialog> {
    read(map: DrawnMap, item: Item): any;
}
export default class MapDialog extends PrerenderedCanvasDialog {
    event: IEventEmitter<this, IMapDialogEvents>;
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
    getName(): TranslationImpl;
    read(map: DrawnMap, item: Item, resetView?: boolean): Promise<void>;
    protected onInventoryItemRemove(_: any, itemOrItems: Item | Item[]): void;
    protected onToggleProtected(item: Item): void;
    protected onInventoryItemAdd(_: any, items: Item[]): void;
    protected onInventoryItemUpdate(_: any, items: Item[]): void;
    protected onPostMove(player: Player): void;
    protected onLoadedOnIsland(): void;
    protected onLoad(): Promise<void>;
    private updateCopyMapButton;
    /**
     * Close the dialog if the item was removed / moved far away / is for a different island (ReadMap wouldn't be able to open it)
     */
    private closeIfItemIsGone;
    private damageMap;
    private obfuscationPromise?;
    private scheduledObfuscationPromise?;
    private updateObfuscation;
    private reobfuscate;
    protected onResetView(): void;
}
