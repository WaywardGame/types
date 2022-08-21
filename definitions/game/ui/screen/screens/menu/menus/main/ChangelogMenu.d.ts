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
import Menu from "ui/screen/screens/menu/component/Menu";
import type { IVersionInfo } from "utilities/Version";
export default class ChangelogMenu extends Menu {
    private static readonly modLinks;
    private readonly headingVersionName;
    private readonly headingVersionNameSubtitle;
    private readonly labelChangeCount;
    private readonly changesContainer;
    private readonly warningFailedToLoad;
    private lastVersion;
    private defaultVersion?;
    private versions;
    constructor();
    setDefaultVersion(version: Partial<IVersionInfo>): this;
    protected preShow(): Promise<void>;
    protected highlightVisibleTabs(): void;
    private refresh;
    private showVersion;
    private getVersionName;
    private appendChangelog;
    private wrapChangeTextNodes;
    private getChangelogText;
    private sortCards;
    private getChangeText;
}
