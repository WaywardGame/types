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
