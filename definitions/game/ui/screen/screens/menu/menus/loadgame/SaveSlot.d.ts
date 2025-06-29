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
import SaveMetadata from "@wayward/game/save/SaveMetadata";
import type Button from "@wayward/game/ui/component/Button";
import InputButton from "@wayward/game/ui/component/InputButton";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
interface ISaveSlotEvents extends Events<InputButton> {
    rename(): any;
    delete(): any;
}
export declare enum SaveSlotClasses {
    Main = "save-slot",
    New = "new-slot",
    Selected = "selected",
    Text = "save-slot-text",
    TextPath = "save-slot-text-path",
    Text_HasPath = "save-slot-text--has-path"
}
declare class SaveSlot extends InputButton {
    event: IEventEmitter<this, ISaveSlotEvents>;
    metadata: SaveMetadata;
    private deathby;
    private isContinue?;
    readonly editButton: Button;
    readonly exportButton: Button;
    readonly deleteButton: Button;
    constructor(slot?: number, isNewSlot?: boolean);
    setContinue(): this;
    /**
     * Renames the save. Event handler for when this InputButton leaves edit mode.
     */
    protected rename(newName: string): Promise<void>;
    setMetadata(data: SaveMetadata): this;
    /**
     * Loads the data for this save slot.
     */
    load(loadAll?: boolean): Promise<void>;
    private refresh;
    private observed;
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
export default SaveSlot;
