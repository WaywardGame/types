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
import type { Events, IEventEmitter } from "event/EventEmitter";
import type { IModInfo } from "mod/IModInfo";
import { CheckButton } from "ui/component/CheckButton";
interface IModRowEvents extends Events<CheckButton> {
    shouldRefreshMenu(): any;
    deleted(): any;
}
export default class ModRow extends CheckButton {
    readonly index: number;
    readonly info: IModInfo;
    event: IEventEmitter<this, IModRowEvents>;
    private readonly buttonHandler;
    constructor(index: number, info: IModInfo);
    shouldDisableButtonButtonsOnUnchecked(): boolean;
    setEnabled(enabled: boolean, prompts?: boolean, changingAllStates?: boolean): Promise<boolean>;
    protected onToggle(checked: boolean): Promise<void>;
    private checkDependants;
    private checkDependencies;
    private tryEnableDependencies;
    private getDependencyNames;
    private getTooltip;
}
export {};
