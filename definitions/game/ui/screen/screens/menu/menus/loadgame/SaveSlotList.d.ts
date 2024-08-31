import type { SaveSort, SortDirection } from "@wayward/game/save/ISaveManager";
import Details from "@wayward/game/ui/component/Details";
import type { TranslationGenerator } from "@wayward/game/ui/component/IComponent";
export declare enum SaveSlotListClasses {
    Main = "save-slot-list"
}
export interface ISaveSlotListHost {
    sort: SaveSort;
    sortDirection: SortDirection;
    isMultiplayer: boolean;
}
export default abstract class SaveSlotList extends Details {
    private readonly hostRef;
    protected get host(): ISaveSlotListHost | undefined;
    constructor(host: ISaveSlotListHost);
    abstract getTitle(): TranslationGenerator;
    abstract loadSlots(): Promise<void>;
    abstract sortSlots(sort: SaveSort, direction: SortDirection): void | Promise<void>;
}
