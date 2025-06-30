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
import type { ComponentEventManager, ComponentEvents } from "@wayward/launcher/ui/component/Component";
import Component from "@wayward/launcher/ui/component/Component";
import InputButton from "@wayward/launcher/ui/component/InputButton";
import type { IFolder } from "@wayward/launcher/ui/launcher/FolderSelector";
export declare enum FolderButtonClasses {
    Main = "button-folder",
    Title = "button-folder-title",
    Path = "button-folder-path"
}
export interface IFolderButtonEvents extends ComponentEvents<InputButton> {
    delete: any;
}
export default class FolderButton extends InputButton {
    readonly folder: IFolder;
    event: ComponentEventManager<this, IFolderButtonEvents>;
    readonly path: Component;
    constructor(folder: IFolder);
    protected shouldSelectInputOnClick(): boolean;
}
