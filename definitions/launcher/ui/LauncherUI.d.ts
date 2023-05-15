/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import Button from "ui/component/Button";
import Component from "ui/component/Component";
import Mods from "ui/launcher/Mods";
import Resources from "ui/launcher/Resources";
import Saves from "ui/launcher/Saves";
import type Data from "utilities/Data";
export declare enum LauncherUIClasses {
    Main = "launcher-app",
    Content = "launcher-app-content",
    LaunchRow = "launcher-launch-row",
    LaunchOptions = "launcher-launch-options",
    LaunchButton = "launcher-launch-button"
}
export default class LauncherUI extends Component {
    private readonly data;
    readonly content: Component<HTMLDivElement> & Component<HTMLElement>;
    readonly resources: Resources;
    readonly mods: Mods;
    readonly saves: Saves;
    readonly launchRow: Component<HTMLElement>;
    readonly launchOptions: Component;
    readonly launchButton: Button & Component<HTMLElement>;
    constructor(data: Data);
    private launch;
    private cleanUp;
    private makeLinks;
    private createId;
}
