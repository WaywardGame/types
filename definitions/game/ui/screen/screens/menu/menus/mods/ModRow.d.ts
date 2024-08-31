import type { ModInformation } from "@wayward/game/mod/ModInformation";
import { CheckButton } from "@wayward/game/ui/component/CheckButton";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
interface IModRowEvents extends Events<CheckButton> {
    shouldRefreshMenu(): any;
    deleted(): any;
}
export default class ModRow extends CheckButton {
    readonly mod: ModInformation;
    event: IEventEmitter<this, IModRowEvents>;
    private readonly buttonHandler;
    constructor(mod: ModInformation);
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
