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
import EventEmitter from "@wayward/utilities/event/EventEmitter";
import type { ISaveImportSuccess, SaveImportResult } from "@wayward/game/save/ISaveManager";
import InterruptMenu from "@wayward/game/ui/screen/screens/menu/menus/InterruptMenu";
export interface IImportHandler {
    onImport?(result: ISaveImportSuccess): any;
    onComplete?(results: SaveImportResult[]): any;
}
export interface ISaveDropHandlerEvents {
    import(result: ISaveImportSuccess): any;
    complete(results: SaveImportResult[]): any;
}
export default class SaveDropHandler extends EventEmitter.Host<ISaveDropHandlerEvents> {
    private importing;
    get isImporting(): boolean;
    constructor();
    import(files: File[], handler?: IImportHandler): Promise<void>;
    private getSlotName;
    private readonly entered;
    private onDragEnter;
    protected onShowInterruptMenu(menu: InterruptMenu): void;
    private onDragOut;
    private onDragOver;
    private onDrop;
    private hasFiles;
}
