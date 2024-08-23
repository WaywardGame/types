/*!
 * Copyright 2011-2024 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { IFolder } from "@wayward/launcher/ui/launcher/FolderSelector";
import FolderSelector from "@wayward/launcher/ui/launcher/FolderSelector";
export default class Resources extends FolderSelector.WithDefault {
    protected getName(): string;
    protected getDefaultFolder(): IFolder;
    verifyFolder(folder: IFolder): Promise<boolean>;
    protected verifyAddingFolders(verifyFolders: IFolder[]): Promise<IFolder[]>;
}
