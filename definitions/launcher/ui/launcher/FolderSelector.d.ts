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
import type { ComponentEventManager, ComponentEvents } from "ui/component/Component";
import Component from "ui/component/Component";
import Section from "ui/component/Section";
import FolderButton from "ui/launcher/FolderButton";
export interface IFolderSelectorEvents extends ComponentEvents<Section> {
    addNew: {
        folders: IFolder[];
    };
    saveFolders: {
        folders: Folders;
    };
    loadFolders: {
        folders: Folders;
    };
}
export interface IFolder {
    name?: string;
    path: string;
}
export type Folders = Map<string, string>;
export declare enum FolderSelectorClasses {
    Main = "folder-selector",
    AddNewButton = "folder-selector-add-new-button"
}
declare abstract class FolderSelector extends Section {
    event: ComponentEventManager<this, IFolderSelectorEvents>;
    readonly optionsWrapper: Component;
    constructor();
    getSelectedFolderPath(): string | null;
    getFolders(): IFolder[];
    refresh(): void;
    protected select(button: FolderButton): void;
    protected abstract getName(): string;
    pickNew(...newFolders: IFolder[]): Promise<void>;
    private addingNew;
    addNew(...newFolders: IFolder[]): Promise<void>;
    protected verifyAddingFolders(folders: IFolder[]): Promise<IFolder[]>;
    verifyFolder(folder: IFolder): Promise<boolean>;
    deleteFolder(path: string): boolean;
    save(folders: Folders | IFolder[]): void;
    load(): Map<string, string>;
}
declare namespace FolderSelector {
    abstract class WithDefault extends FolderSelector {
        readonly defaultButton: FolderButton;
        constructor();
        protected abstract getDefaultFolder(): IFolder;
        protected select(button?: FolderButton): void;
        getSelectedFolderPath(): string;
        getFolders(includeDefault?: boolean): IFolder[];
    }
}
export default FolderSelector;
