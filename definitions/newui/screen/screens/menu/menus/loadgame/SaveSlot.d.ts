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
import { Events, IEventEmitter } from "event/EventEmitter";
import { GameMode, IGameOptions } from "game/options/IGameOptions";
import InputButton from "newui/component/InputButton";
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
    difficulty: GameMode;
    options: IGameOptions;
    thumbnail?: string;
}
interface ISaveSlotEvents extends Events<InputButton> {
    rename(): any;
    delete(): any;
}
declare class SaveSlot extends InputButton {
    event: IEventEmitter<this, ISaveSlotEvents>;
    slotData: SaveSlotData;
    private deathby;
    constructor(slot: number, isNewSlot?: boolean);
    /**
     * Renames the save. Event handler for when this InputButton leaves edit mode.
     */
    protected rename(newName: string): Promise<void>;
    /**
     * Loads the data for this save slot.
     */
    private load;
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
