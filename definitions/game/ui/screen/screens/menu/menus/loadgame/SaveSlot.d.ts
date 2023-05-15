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
import type { IGameOptions } from "game/options/IGameOptions";
import { GameMode } from "game/options/IGameOptions";
import type { AnyPropertyToSerialize } from "save/serializer/PropertiesToSerialize";
import InputButton from "ui/component/InputButton";
export interface SaveSlotData {
    slot: number;
    score: number;
    modsUnloadable: Record<string, {
        name: string;
        unloadable: boolean;
    }>;
    saveTime: number;
    createdTime: number;
    turns: number;
    seed: string;
    name: string;
    difficulty: GameMode | -1;
    options: IGameOptions;
    thumbnail?: string;
    corrupted?: Map<AnyPropertyToSerialize, Error>;
}
interface ISaveSlotEvents extends Events<InputButton> {
    rename(): any;
    delete(): any;
}
declare class SaveSlot extends InputButton {
    event: IEventEmitter<this, ISaveSlotEvents>;
    slotData: SaveSlotData;
    private deathby;
    private isContinue?;
    readonly editButton: import("../../../../../component/Button").default;
    readonly exportButton: import("../../../../../component/Button").default;
    readonly deleteButton: import("../../../../../component/Button").default;
    constructor(slot: number, isNewSlot?: boolean);
    setContinue(): this;
    /**
     * Renames the save. Event handler for when this InputButton leaves edit mode.
     */
    protected rename(newName: string): Promise<void>;
    /**
     * Loads the data for this save slot.
     */
    load(loadAll?: boolean): Promise<void>;
    private loadFullData;
    /**
     * The tooltip generator for this component.
     */
    private getTooltip;
    /**
     * Deletes the save. Event handler for the delete sub-button.
     */
    private delete;
    /**
     * Exports the save. Event handler for the export sub-button.
     */
    private export;
    /**
     * Exports this save to the Steam Workshop by making a temporary mod.
     */
    private exportToWorkshop;
    /**
     * Logs and interrupts when there's a mod publishing error.
     */
    private onPublishError;
    /**
     * Exports this save to a JSON file.
     */
    private exportToFile;
    static getFileName(name?: string): string;
}
declare module SaveSlot {
    enum Classes {
        Is = "save-slot",
        New = "new-slot"
    }
}
export default SaveSlot;
