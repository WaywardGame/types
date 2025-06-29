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
import type { ISaveImportSuccess, SaveImportResult } from "@wayward/game/save/ISaveManager";
import { SortDirection } from "@wayward/game/save/ISaveManager";
import { SaveSort } from "@wayward/game/save/ISaveManager";
import type SaveManager from "@wayward/game/save/SaveManager";
import type { TranslationGenerator } from "@wayward/game/ui/component/IComponent";
import type { IBindHandlerApi } from "@wayward/game/ui/input/Bind";
import SaveDropHandler from "@wayward/game/ui/SaveDropHandler";
import SaveSlotList from "@wayward/game/ui/screen/screens/menu/menus/loadgame/SaveSlotList";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export interface ISavedGamesListEvents extends Events<SaveSlotList> {
    updateSelected(anySelected: boolean): any;
}
export default class SavedGamesList extends SaveSlotList {
    readonly event: IEventEmitter<this, ISavedGamesListEvents>;
    private readonly slots;
    getTitle(): TranslationGenerator;
    loadSlots(): Promise<void>;
    sortSlots(sort?: SaveSort, direction?: SortDirection): Promise<void>;
    getSelectedSlotsCount(): number;
    private holdingSelectionChangeType?;
    protected onSelect(api: IBindHandlerApi): boolean;
    protected onHoldingSelect(api: IBindHandlerApi): boolean;
    protected onSelectUp(api: IBindHandlerApi): void;
    private toggleSlotSelected;
    private updateSelectedSlots;
    protected onSaveImport(handler: SaveDropHandler, result: ISaveImportSuccess): void;
    protected onSaveImportComplete(handler: SaveDropHandler, results: SaveImportResult[]): Promise<void>;
    protected onSaveObjectToSlot(saveManager: SaveManager, slot: number): Promise<void>;
    private addSlot;
    private deleteSlot;
    unselectSlots(): void;
    deleteSelectedSlots(): Promise<void>;
}
