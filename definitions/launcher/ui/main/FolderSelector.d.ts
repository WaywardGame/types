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
import type { ComponentEventManager, ComponentEvents } from "ui/Component";
import Component from "ui/Component";
import FolderButton from "ui/main/FolderButton";
import Section from "ui/Section";
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
export default abstract class FolderSelector extends Section {
    event: ComponentEventManager<this, IFolderSelectorEvents>;
    readonly optionsWrapper: Component<HTMLDivElement>;
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
