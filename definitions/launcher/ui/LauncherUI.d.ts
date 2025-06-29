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
import Button from "@wayward/launcher/ui/component/Button";
import Component from "@wayward/launcher/ui/component/Component";
import Mods from "@wayward/launcher/ui/launcher/Mods";
import Resources from "@wayward/launcher/ui/launcher/Resources";
import Saves from "@wayward/launcher/ui/launcher/Saves";
import type Data from "@wayward/launcher/utilities/Data";
export declare enum LauncherUIClasses {
    Main = "launcher-app",
    Content = "launcher-app-content",
    LaunchRow = "launcher-launch-row",
    LaunchOptions = "launcher-launch-options",
    LaunchButton = "launcher-launch-button"
}
export default class LauncherUI extends Component {
    private readonly data;
    readonly content: Component;
    readonly resources: Resources;
    readonly mods: Mods;
    readonly saves: Saves;
    readonly launchRow: Component;
    readonly launchOptions: Component;
    readonly launchButton: Button;
    constructor(data: Data);
    private launch;
    private cleanUp;
    private makeLinks;
    private createId;
    private addStylesheet;
    private getStylesheet;
    private resolvePath;
}
