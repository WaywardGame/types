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
import Button from "@wayward/game/ui/component/Button";
import Component from "@wayward/game/ui/component/Component";
import type { TranslationGenerator } from "@wayward/game/ui/component/IComponent";
import type { DialogId } from "@wayward/game/ui/screen/screens/game/Dialogs";
import Dialog from "@wayward/game/ui/screen/screens/game/component/Dialog";
import type TabDialogPanel from "@wayward/game/ui/screen/screens/game/component/TabDialogPanel";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export type SubpanelInformation = [string | number, TranslationGenerator, ((component: Component) => any)?, ((button: Button) => any)?, Button?];
interface ITabDialogEvents extends Events<Dialog> {
    changeSubpanel(subpanel: SubpanelInformation): any;
}
export default abstract class TabDialog<T extends TabDialogPanel = TabDialogPanel> extends Dialog {
    event: IEventEmitter<this, ITabDialogEvents>;
    protected readonly subpanelLinkWrapper: Component;
    protected readonly panelWrapper: Component;
    protected subpanelInformations: SubpanelInformation[];
    protected activeSubpanel: SubpanelInformation | undefined;
    protected subpanels: T[];
    protected activePanel: T | undefined;
    protected storePanels: boolean;
    constructor(id: DialogId, subId?: string, initializeSubpanels?: boolean);
    protected onLoad(): void;
    /**
     * Implements the abstract method in "TabDialog". Returns an array of subpanels.
     * This will only be called once
     */
    protected abstract getSubpanels(): T[];
    /**
     * Implements the abstract method in "TabDialog". Returns an array of tuples containing information used to set-up the
     * subpanels of this dialog.
     *
     * If the subpanel classes haven't been instantiated yet, it first instantiates them by calling getSubpanels.
     * This includes binding a `WillRemove` event handler to the panel, which will `store` (cache) the panel instead of removing it,
     * and trigger a `SwitchAway` event on the panel when this occurs.
     */
    protected abstract getSubpanelInformation(subpanels: T[]): SubpanelInformation[];
    protected initializeSubpanels(): void;
    protected getDefaultSubpanelInformation(): SubpanelInformation | undefined;
    /**
     * Returns a function that will be executed when the passed subpanel is shown.
     *
     * When executed, the return function will append the panel to show to the passed component (which is the panel wrapper
     * of the `TabDialog`), and trigger a `SwitchTo` event on the panel.
     */
    protected onShowSubpanel(showPanel: T): (component: Component) => void;
    protected updateSubpanelList(): void;
    protected showSubPanel(button: Button): void;
    protected showSubPanel(id: string | number): (link: Button) => void;
    private showDefaultSubpanel;
    private switchSubpanel;
    private setActiveButton;
    private onResize;
}
export {};
