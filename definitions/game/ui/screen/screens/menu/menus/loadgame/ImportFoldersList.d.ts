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
import type { SortDirection } from "@wayward/game/save/ISaveManager";
import { SaveSort } from "@wayward/game/save/ISaveManager";
import { BlockRow } from "@wayward/game/ui/component/BlockRow";
import Component from "@wayward/game/ui/component/Component";
import type { TranslationGenerator } from "@wayward/game/ui/component/IComponent";
import Input from "@wayward/game/ui/component/Input";
import { Heading } from "@wayward/game/ui/component/Text";
import SaveSlot from "@wayward/game/ui/screen/screens/menu/menus/loadgame/SaveSlot";
import type { ISaveSlotListHost } from "@wayward/game/ui/screen/screens/menu/menus/loadgame/SaveSlotList";
import SaveSlotList from "@wayward/game/ui/screen/screens/menu/menus/loadgame/SaveSlotList";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export interface IImportFoldersListEvents extends Events<SaveSlotList> {
    loadSlots(): any;
    dirty(): any;
}
declare class ImportFoldersList extends SaveSlotList {
    readonly path: string;
    readonly event: IEventEmitter<this, IImportFoldersListEvents>;
    slots?: SaveSlot[];
    constructor(host: ISaveSlotListHost, path: string);
    getTitle(): TranslationGenerator;
    protected onOpen(): Promise<void>;
    loadSlots(): Promise<void>;
    private getSaveSorter;
    sortSlots(sort: SaveSort, direction: SortDirection): void;
    private actuallyLoadSlots;
    private import;
}
declare namespace ImportFoldersList {
    interface IWrapperEvents extends Events<Component> {
        addFolder(list: ImportFoldersList): any;
        removeFolder(list: ImportFoldersList): any;
    }
    class Wrapper extends Component {
        readonly event: IEventEmitter<this, IWrapperEvents>;
        readonly heading: Heading;
        readonly foldersWrapper: Component<HTMLElement>;
        readonly addFolderInput: Input;
        readonly addFolderRow: BlockRow;
        readonly folders: ImportFoldersList[];
        private readonly hostRef;
        get host(): ISaveSlotListHost | undefined;
        constructor(host: ISaveSlotListHost);
        renderImportFolder(path: string): void;
        private onAddFolder;
        protected onRemove(): void;
    }
}
export default ImportFoldersList;
