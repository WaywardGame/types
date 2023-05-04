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
import FolderButton from "ui/main/FolderButton";
import FolderSelector from "ui/main/FolderSelector";
export default class Mods extends FolderSelector {
    readonly steamButton: FolderButton;
    constructor();
    protected getName(): string;
    protected select(button?: FolderButton): void;
    getSelectedFolderPath(): string;
    getFolders(includeSteam?: boolean): import("ui/main/FolderSelector").IFolder[];
}
