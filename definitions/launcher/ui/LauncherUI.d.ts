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
import Button from "ui/component/Button";
import Component from "ui/component/Component";
import Mods from "ui/launcher/Mods";
import Resources from "ui/launcher/Resources";
export declare enum LauncherUIClasses {
    Main = "launcher-app",
    LaunchRow = "launcher-launch-row",
    LaunchOptions = "launcher-launch-options",
    LaunchButton = "launcher-launch-button"
}
export default class LauncherUI extends Component {
    readonly resources: Resources;
    readonly mods: Mods;
    readonly launchRow: Component<HTMLElement>;
    readonly launchOptions: Component;
    readonly launchButton: Button & Component<HTMLElement>;
    constructor();
    private launch;
    private cleanUp;
    private makeLinks;
    private createId;
}
